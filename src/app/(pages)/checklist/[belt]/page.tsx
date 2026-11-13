import { BeltBackground } from "@/components/belt-preview";
import { Separator } from "@/components/ui/separator";
import { belts } from "@/lib/data/belts";
import { cn } from "cn";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function GradingChecklist({ params }: { params: Promise<{ belt: string }> }) {
    return (
        <Suspense>
            <GradingChecklistContent params={params} />
        </Suspense>
    );
}

const stringToBelt = (beltSlug: string | null) => {
    if (beltSlug === null || !Object.hasOwn(belts, beltSlug)) return null;
    return belts[beltSlug as keyof typeof belts];
};

async function GradingChecklistContent({ params }: { params: Promise<{ belt: string }> }) {
    const beltSlug = (await params).belt;
    console.log("beltSlug", beltSlug);
    const belt = stringToBelt(beltSlug);
    if (!belt) return redirect("/checklist");
    const nextBelt = stringToBelt(belt.next);

    return (
        <div>
            <div className="flex items-center justify-center w-screen bg-muted p-4 pt-0">
                <div className="flex flex-col gap-0 items-center text-balance text-center">
                    <h1 className="mb-0 mt-2">{belt.name} Grading Checklist</h1>
                    <Separator className={cn("grow bg-accent h-1! rounded m-2", BeltBackground[belt.stripe || belt.colour])} />
                    <p className="text-muted-foreground m-0 leading-tight">
                        Here's what you can expect on your grading to achieve your {nextBelt?.name || "next belt"}.
                    </p>
                </div>
            </div>
            <div className="w-full max-w-5xl mx-auto">{belt.name} Grading Checklist</div>
        </div>
    );
}
