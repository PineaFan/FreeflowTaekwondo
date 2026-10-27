// app/schedule.ics/route.ts
import type { NextRequest } from "next/server";
import { buildIcs, type Filter } from "@/lib/ics";
import { classTypes, sessions, venues } from "@/lib/classes";

const valid = {
    session: new Set(sessions.map((s) => s.id)),
    class: new Set(classTypes.map((c) => c.id)),
    venue: new Set(venues.map((v) => v.id))
};

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const filter: Filter = {};

    for (const key of ["session", "class", "venue"] as const) {
        const raw = params.getAll(key).flatMap((v) => v.split(","));
        if (!raw.length) continue;
        // Dedupe and sort so ?class=a,b and ?class=b,a share one cache entry
        const ids = [...new Set(raw.filter((id) => valid[key].has(id)))].sort();
        if (!ids.length) return new Response(`Unknown ${key}`, { status: 400 });
        filter[key] = ids;
    }

    return new Response(await buildIcs(filter), {
        headers: {
            "Content-Type": "text/calendar; charset=utf-8",
            "Content-Disposition": 'inline; filename="classes.ics"',
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
        }
    });
}
