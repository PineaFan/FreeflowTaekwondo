import { type BeltKey, belts } from "@/lib/data/belts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { prearrangedSparring, type SparringMove, type SparringKey } from "@/lib/data/prearranged-sparring";
import { Message, MessageAvatar, MessageContent, MessageGroup, MessageHeader } from "@/components/ui/message";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Marker, MarkerContent } from "@/components/ui/marker";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import { parseSparringMove } from "@/lib/moves";

export default function PrearrangedSparring({ beltSlug }: { beltSlug: BeltKey }) {
    const belt = Object.hasOwn(belts, beltSlug) ? belts[beltSlug] : null;
    if (!belt) return null;
    const hasPrearrangedSparring = belt.requirements.prearrangedSparring.length > 0;
    if (!hasPrearrangedSparring) return null;
    const multipleRoutines = belt.requirements.prearrangedSparring.length > 1;

    const classNames =
        ["", "grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-4", "grid-cols-5", "grid-cols-6"][
            belt.requirements.prearrangedSparring.length
        ] || "grid-cols-1";

    return (
        <div className="flex flex-col items-center gap-2 w-full" id="prearranged-sparring">
            <h1 className="m-0 mt-4 text-center">Prearranged Sparring</h1>
            {multipleRoutines && (
                <Tabs className="w-full">
                    <TabsList className={cn("grid w-full", classNames)}>
                        {belt.requirements.prearrangedSparring.map((group) => (
                            <TabsTrigger key={group} value={group} className="px-8">
                                {prearrangedSparring[group].name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {belt.requirements.prearrangedSparring.map((group) => (
                        <TabsContent key={group} value={group}>
                            <SparringRoutine routine={group} />
                        </TabsContent>
                    ))}
                </Tabs>
            )}
            {!multipleRoutines && <SparringRoutine routine={belt.requirements.prearrangedSparring[0]!} />}
        </div>
    );
}

const routineToMoves = (
    routineId: SparringKey
): Array<{
    move: SparringMove;
    person: "attacker" | "defender";
}> => {
    // 1-step: attack[0], defence[0], attack[1], defence[0]
    // 2 step: attack[0], defence[0], attack[1], defence[1], counter
    // 3 step: attack[0], defence[0], attack[1], defence[1], attack[2], defence[2], counter
    const routine = prearrangedSparring[routineId];
    const counterMap =
        "counter" in routine
            ? routine.counter.moves.map((move: SparringMove) => ({
                  move,
                  person: "defender" as const
              }))
            : [];

    if (routine.type === "one-step") {
        return [
            { move: routine.attack.moves[0], person: "attacker" },
            { move: routine.defence.moves[0], person: "defender" },
            { move: routine.attack.moves[1], person: "attacker" },
            ...counterMap
        ];
    } else if (routine.type === "two-step") {
        return [
            { move: routine.attack.moves[0], person: "attacker" },
            { move: routine.defence.moves[0], person: "defender" },
            { move: routine.attack.moves[1], person: "attacker" },
            { move: routine.defence.moves[1], person: "defender" },
            ...counterMap
        ];
    } else {
        return [
            { move: routine.attack.moves[0], person: "attacker" },
            { move: routine.defence.moves[0], person: "defender" },
            { move: routine.attack.moves[1], person: "attacker" },
            { move: routine.defence.moves[1], person: "defender" },
            { move: routine.attack.moves[2], person: "attacker" },
            { move: routine.defence.moves[2], person: "defender" },
            ...counterMap
        ];
    }
};
function SparringRoutine({ routine: routineId }: { routine: SparringKey }) {
    const routine = prearrangedSparring[routineId];
    if (routine.type === "one-step") return "TODO:";
    const moves = routineToMoves(routineId);
    const moveGroups = moves.reduce<Array<{ person: "attacker" | "defender"; moves: SparringMove[] }>>(
        (groups, move) => {
            const lastGroup = groups[groups.length - 1] as
                | { person: "attacker" | "defender"; moves: SparringMove[] }
                | undefined;
            if (lastGroup?.person === move.person) {
                lastGroup.moves.push(move.move);
            } else {
                groups.push({ person: move.person, moves: [move.move] });
            }
            return groups;
        },
        []
    );

    return (
        <div className="flex flex-col gap-2">
            <UserMessage person="defender" withLabel>
                Wait in ready position.
            </UserMessage>
            <UserMessage person="attacker" withLabel>
                <span>
                    <b>Measure:</b> {routine.measure}
                </span>
                <span>{parseSparringMove(routine.start.moves[0])}.</span>
            </UserMessage>
            <Marker variant="separator">
                <MarkerContent className="inline-flex items-center gap-2">Both confirm ready</MarkerContent>
            </Marker>
            {moveGroups.map((group, index) => (
                <UserMessage key={index} person={group.person}>
                    {group.moves.map((move, moveIndex) => (
                        <span key={moveIndex}>{parseSparringMove(move)}.</span>
                    ))}
                </UserMessage>
            ))}
            <Marker variant="separator">
                <MarkerContent className="inline-flex items-center gap-2">Both return to ready position</MarkerContent>
            </Marker>
        </div>
    );
}

function UserMessage({
    children,
    person,
    withLabel
}: {
    children: ReactNode[] | ReactNode;
    person: "attacker" | "defender";
    withLabel?: boolean;
}) {
    const childrenArray = Array.isArray(children) ? children : [children];
    const mappedChildren = childrenArray.map((child, index) => {
        return (
            <Bubble key={index} variant={person === "attacker" ? "secondary" : "default"}>
                <BubbleContent>{child}</BubbleContent>
            </Bubble>
        );
    });
    return (
        <Message align={person === "attacker" ? "start" : "end"}>
            <MessageAvatar>
                <Avatar>
                    <AvatarFallback className={cn(person === "defender" && "bg-blue-500 text-white")}>
                        {person === "attacker" ? "A" : "D"}
                    </AvatarFallback>
                </Avatar>
            </MessageAvatar>
            <MessageContent>
                {withLabel && <MessageHeader>{person === "attacker" ? "Attacker" : "Defender"}</MessageHeader>}
                {childrenArray.length > 1 ? <MessageGroup>{mappedChildren}</MessageGroup> : mappedChildren}
            </MessageContent>
        </Message>
    );
}
