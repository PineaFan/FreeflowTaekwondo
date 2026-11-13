import { getAll } from "@vercel/global-config";
import { cacheLife } from "next/cache";
import { classTypes, mapsQuery, sessions, venues } from "@/lib/data/classes";

const TZ = "Europe/London";
const DOMAIN = "freeflowtaekwondo.com";
const LOOKBACK_DAYS = 365;
const CRLF = "\r\n";
const EMIT_GEO: boolean = true; // set false if Google's importer rejects the feed

const VTIMEZONE = [
    "BEGIN:VTIMEZONE",
    `TZID:${TZ}`,
    "BEGIN:DAYLIGHT",
    "TZOFFSETFROM:+0000",
    "TZOFFSETTO:+0100",
    "TZNAME:BST",
    "DTSTART:19700329T010000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
    "END:DAYLIGHT",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:+0100",
    "TZOFFSETTO:+0000",
    "TZNAME:GMT",
    "DTSTART:19701025T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
    "END:STANDARD",
    "END:VTIMEZONE"
];

const venueById = new Map(venues.map((v) => [v.id, v]));
const classTypeById = new Map(classTypes.map((c) => [c.id, c]));

const esc = (s: string) => s.replace(/[\\;,]/g, "\\$&").replace(/\r?\n/g, "\\n");
const local = (date: string, time: string) => `${date.replaceAll("-", "")}T${time.replace(":", "")}00`;

const qp = (s: string) => `"${s.replace(/["\r\n]/g, " ")}"`;

const fold = (line: string): string => {
    if (Buffer.byteLength(line) <= 75) return line;
    let out = "";
    let bytes = 0;
    for (const ch of line) {
        const cp = ch.codePointAt(0)!;
        const n = cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
        if (bytes + n > 75) {
            out += CRLF + " ";
            bytes = 1;
        }
        out += ch;
        bytes += n;
    }
    return out;
};

type Config = { skippedLessons?: string[]; lessonDatesUpTo?: string };
export type Filter = { session?: string[]; class?: string[]; venue?: string[] };

export async function buildIcs(filter: Filter = {}, app: "apple" | "google" = "google"): Promise<string> {
    "use cache";
    cacheLife("hours");

    const cfg = await getAll<Config>(["skippedLessons", "lessonDatesUpTo"]);
    const skipped = new Set(cfg.skippedLessons ?? []);

    // Precompute everything that doesn't depend on the date, once per session
    const prepared = sessions
        .filter(
            (s) =>
                (!filter.session || filter.session.includes(s.id)) &&
                (!filter.class || filter.class.includes(s.classTypeId)) &&
                (!filter.venue || filter.venue.includes(s.venueId))
    )
        .map((s) => {
            const v = venueById.get(s.venueId)!;
            const ct = classTypeById.get(s.classTypeId)!;
            const { lat, lng } = v.coordinates;
            const fullAddress = `${v.name}, ${v.address}, ${v.postcode}`;
            const extra = "note" in ct ? ct.note : "ageMin" in ct ? `Ages ${ct.ageMin}-${ct.ageMax}` : "";
            const map =
                app === "apple"
                    ? `https://maps.apple.com/place?coordinate=${lat},${lng}&name=${encodeURIComponent(v.name)}`
                    : `https://www.google.com/maps/search/?api=1&query=${mapsQuery(v)}`;

            const note = [`${ct.name} class at ${v.name} (${v.area})\n${fullAddress}\n${map}`,
            `\nTo customise your calendar, visit https://${DOMAIN}/#classes`
            ];

            return {
                s,
                uidPrefix: `UID:${s.id}-`,
                head: `SUMMARY:${esc(`${ct.name} (${v.area})`)}`,
                tail: [
                    `LOCATION:${esc(fullAddress)}`,
                    ...(EMIT_GEO ? [`GEO:${lat};${lng}`] : []), // iCalendar GEO uses a semicolon
                    `X-APPLE-STRUCTURED-LOCATION;VALUE=URI;X-ADDRESS=${qp(fullAddress)};X-TITLE=${qp(v.name)}:geo:${lat},${lng}`, // geo: URI uses a comma
                    `DESCRIPTION:${esc([extra, ...note].filter(Boolean).join("\n"))}`,
                    `URL:${map}`,
                    "END:VEVENT"
                ]
            };
        });
    const byDay = Object.groupBy(prepared, (p) => p.s.day);

    // Today's date in London, as YYYY-MM-DD
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date());
    const dtstamp = `DTSTAMP:${today.replaceAll("-", "")}T000000Z`; // stable all day

    const lines: string[] = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//PUMAs//Class Schedule//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "X-WR-CALNAME:PUMAs Classes",
        `X-WR-TIMEZONE:${TZ}`,
        "REFRESH-INTERVAL;VALUE=DURATION:PT1H",
        "X-PUBLISHED-TTL:PT1H",
        ...VTIMEZONE
    ];

    if (cfg.lessonDatesUpTo) {
        const d = new Date(`${today}T00:00:00Z`);
        d.setUTCDate(d.getUTCDate() - LOOKBACK_DAYS);
        const end = new Date(`${cfg.lessonDatesUpTo}T00:00:00Z`);

        // Pure calendar-date iteration in UTC, so there are no DST issues
        for (; d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
            const date = d.toISOString().slice(0, 10);
            if (skipped.has(date)) continue;

            for (const p of byDay[d.getUTCDay()] ?? []) {
                lines.push(
                    "BEGIN:VEVENT",
                    `${p.uidPrefix}${date}@${DOMAIN}`,
                    dtstamp,
                    `DTSTART;TZID=${TZ}:${local(date, p.s.start)}`,
                    `DTEND;TZID=${TZ}:${local(date, p.s.end)}`,
                    p.head,
                    ...p.tail
                );
            }
        }
    }

    lines.push("END:VCALENDAR");
    return lines.map(fold).join(CRLF) + CRLF;
}
