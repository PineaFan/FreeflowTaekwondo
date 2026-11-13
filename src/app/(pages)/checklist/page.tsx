import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { belts } from "@/lib/data/belts";
import { Tabs } from "@/components/ui/tabs";

// Full class names so Tailwind can detect them
const BG: Record<string, string> = {
    white: "bg-white",
    black: "bg-neutral-900",
    purple: "bg-purple-500",
    orange: "bg-amber-500",
    yellow: "bg-yellow-500",
    green: "bg-green-600",
    blue: "bg-blue-600",
    red: "bg-red-500"
};

const isBlackBelt = (belt: string) => belt.startsWith("black") && !belt.includes("stripe");

const beltList = Object.entries(belts).map(([slug, belt]) => ({
    slug,
    label: belt.name,
    base: BG[belt.colour],
    degree: isBlackBelt(slug) ? belt.kup : null,
    stripe: belt.stripe !== belt.colour ? BG[belt.stripe] : undefined
}));

function BeltPreview({ base, stripe, degree }: { base: string; stripe?: string; degree?: string | null }) {
    return (
        <div
            aria-hidden
            className={`relative h-7 w-full overflow-hidden rounded-sm shadow-sm ring-1 ring-inset ring-foreground/15 ${base}`}
        >
            {stripe && <div className={`absolute inset-x-0 top-1/3 h-1/3 ${stripe}`} />}
            <div className="absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-black/5" />
            {degree && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-lg font-bold italic text-yellow-300 drop-shadow-sm">
                        {degree}
                    </span>
                </div>
            )}
        </div>
    );
}

function BeltList() {
    return (
        <Tabs>
            
        </Tabs>
    );
}

async function ChecklistContent() {
    const belt = (await cookies()).get("checklistBelt")?.value;
    if (belt && Object.hasOwn(belts, belt)) redirect(`/checklist/${belt}`);
    return <BeltList />;
}

export default function ChecklistPage() {
    return (
        <div className="flex w-full flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="text-2xl font-bold">Select your belt</h1>
                <p className="text-sm mt-0 text-muted-foreground">Choose a belt to view its checklist.</p>
            </div>
            <Suspense fallback={<BeltList />}>
                <ChecklistContent />
            </Suspense>
        </div>
    );
}
