import { getAll } from "@vercel/global-config";
import { cacheLife } from "next/cache";
import { classTypes, mapsQuery, sessions, venues } from "@/lib/classes";

const TZ = "Europe/London";
const DOMAIN = "freeflowtaekwondo.com";
const LOOKBACK_DAYS = 365
const CRLF = "\r\n";

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

const esc = (s: string) => s.replace(/[\\;,]/g, "\\$&").replace(/\n/g, "\\n");
const fold = (line: string) => line.match(/.{1,73}/gu)!.join(CRLF + " ");
const local = (date: string, time: string) => `${date.replaceAll("-", "")}T${time.replace(":", "")}00`;

type Config = { skippedLessons?: string[]; lessonDatesUpTo?: string };
export type Filter = { session?: string[]; class?: string[]; venue?: string[] };

export async function buildIcs(filter: Filter = {}): Promise<string> {
    "use cache";
    cacheLife("hours");

    const cfg = await getAll<Config>(["skippedLessons", "lessonDatesUpTo"]);
    const skipped = new Set(cfg.skippedLessons ?? []);

    const selected = sessions.filter(
        (s) =>
            (!filter.session || filter.session.includes(s.id)) &&
            (!filter.class || filter.class.includes(s.classTypeId)) &&
            (!filter.venue || filter.venue.includes(s.venueId))
    );
    const byDay = Object.groupBy(selected, (s) => s.day);

    // Today's date in London, as YYYY-MM-DD
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date());
    const dtstamp = `${today.replaceAll("-", "")}T000000Z`; // stable all day

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

            for (const s of byDay[d.getUTCDay()] ?? []) {
                const v = venueById.get(s.venueId)!;
                const ct = classTypeById.get(s.classTypeId)!;
                const extra = "note" in ct ? ct.note : "ageMin" in ct ? `Ages ${ct.ageMin}-${ct.ageMax}` : "";
                const map = `https://www.google.com/maps/search/?api=1&query=${mapsQuery(v)}`;

                lines.push(
                    "BEGIN:VEVENT",
                    `UID:${s.id}-${date}@${DOMAIN}`,
                    `DTSTAMP:${dtstamp}`,
                    `DTSTART;TZID=${TZ}:${local(date, s.start)}`,
                    `DTEND;TZID=${TZ}:${local(date, s.end)}`,
                    `SUMMARY:${esc(`${ct.name} (${v.area})`)}`,
                    `LOCATION:${esc(`${v.name}, ${v.address}, ${v.postcode}`)}`,
                    `DESCRIPTION:${esc([extra, map].filter(Boolean).join("\n"))}`,
                    `URL:${map}`,
                    "END:VEVENT"
                );
            }
        }
    }

    lines.push("END:VCALENDAR");
    return lines.map(fold).join(CRLF) + CRLF;
}
