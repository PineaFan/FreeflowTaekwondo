import { type Belt } from "@/lib/data/belts";
import _ from "lodash";
import { toRoman } from "@/lib/utils";

export const BeltBackground: Record<string, string> = {
    white: "bg-white",
    black: "bg-neutral-900",
    purple: "bg-purple-500",
    orange: "bg-amber-500",
    yellow: "bg-yellow-500",
    green: "bg-green-600",
    blue: "bg-blue-600",
    red: "bg-red-500"
};

export function BeltPreview({ colour, stripe, level, group }: Belt) {
    return (
        <div
            aria-hidden
            className={`relative h-full w-full rounded-sm border border-muted-foreground/20 ${BeltBackground[colour]}`}
        >
            {stripe && <div className={`absolute inset-x-0 top-1/3 h-1/3 ${BeltBackground[stripe]} drop-shadow-sm`} />}
            {level && group === "black" && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-lg font-bold italic text-yellow-300 drop-shadow-sm">
                        {toRoman(level)}
                    </span>
                </div>
            )}
        </div>
    );
}
