import { BeltsImage } from "@/app/(index)/info";
import { BeltButton } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { belts, type BeltColour, type BeltKey } from "@/lib/data/belts";
import { linework } from "@/lib/data/linework";
import { padwork } from "@/lib/data/padwork";
import { patterns } from "@/lib/data/patterns";
import { prearrangedSparring } from "@/lib/data/prearranged-sparring";
import { theory } from "@/lib/data/theory";
import _ from "lodash";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { isValidElement, type ReactNode } from "react";

export function Requirements({ beltSlug }: { beltSlug: BeltKey }) {
    const belt = Object.hasOwn(belts, beltSlug) ? belts[beltSlug] : null;
    if (!belt) return null;
    const colour = belt.stripe || belt.colour;
    const hasPatterns = belt.requirements.patterns.length > 0;
    const hasPrearrangedSparring = belt.requirements.prearrangedSparring.length > 0;
    const prearrangedSparringSteps = belt.requirements.prearrangedSparring[0]?.[0]?.[0] || null;
    const hasSparring = belt.requirements.sparring;
    const theoryForBelt = Object.hasOwn(theory, beltSlug) ? theory[beltSlug as keyof typeof theory] : undefined;
    const lineworkForBelt = Object.hasOwn(linework, beltSlug) ? linework[beltSlug as keyof typeof linework] : undefined;
    const padworkForBelt = Object.hasOwn(padwork, beltSlug) ? padwork[beltSlug as keyof typeof padwork] : undefined;
    const powerTest = belt.requirements.powerTest;
    const { squads, seniorGradeTrainings: SGTs } = belt.requirements.minimum;

    return (
        <div className="w-full max-w-400 mx-auto">
            <div className="flex flex-row flex-wrap-balance gap-4 justify-center">
                <RequirementCard
                    title="Minimum Requirements"
                    description="You need to meet the following requirements in order to grade:"
                    image={<BeltsImage />}
                    belt={colour}
                >
                    <DottedRow label="Time on Belt">{belt.requirements.minimum.months} months</DottedRow>
                    <DottedRow label="Lessons">{belt.requirements.minimum.lessons} lessons</DottedRow>
                    {squads ? <DottedRow label="Squads">{plural(squads, "squad")}</DottedRow> : null}
                    {SGTs ? <DottedRow label="Senior Grades">{plural(SGTs, "SGT")}</DottedRow> : null}
                    <DottedRow label="Suit">Full white dobok</DottedRow>
                    {hasSparring && <DottedRow label="Sparring">Full sparring kit</DottedRow>}
                    <DottedRow label="Belt">{belt.name} belt</DottedRow>
                </RequirementCard>
                {hasPatterns && (
                    <RequirementCard
                        title="Patterns"
                        description={`You will be expected to perform ${plural(belt.requirements.patterns.length, "pattern")}:`}
                        image="/images/cards/patterns.jpg"
                        footer={[{ text: "Check Moves", link: "#patterns" }]}
                        belt={colour}
                    >
                        <ul className="list-disc list-inside p-0 m-0">
                            {belt.requirements.patterns.map((pattern) => (
                                <li key={pattern}>{patterns[pattern].name}</li>
                            ))}
                        </ul>
                        {belt.requirements.patterns.length > 1 && belt.group !== "black" && (
                            <p className="text-sm text-muted-foreground mt-2">
                                You will likely be asked to perform your pattern for grade,{" "}
                                {patterns[belt.requirements.patterns[0]!].name}, twice.
                            </p>
                        )}
                    </RequirementCard>
                )}
                {hasPrearrangedSparring && (
                    <RequirementCard
                        title="Prearranged Sparring"
                        description={`You will be expected to perform ${plural(
                            belt.requirements.prearrangedSparring.length,
                            "prearranged sparring routine"
                        )}:`}
                        image={`/images/cards/prearranged-sparring-${prearrangedSparringSteps}.jpg`}
                        footer={[{ text: "Check Moves", link: "#prearranged-sparring" }]}
                        belt={colour}
                    >
                        <ul className="list-disc list-inside p-0 m-0">
                            {belt.requirements.prearrangedSparring.map((sparring) => (
                                <li key={sparring}>{prearrangedSparring[sparring].name}</li>
                            ))}
                        </ul>
                    </RequirementCard>
                )}
                {theoryForBelt && (
                    <RequirementCard
                        title="Theory"
                        description="You'll be asked 5 questions from your theory card. Try to learn the card early rather than leaving it until the last minute!"
                        image={`/images/theory-cards/${theoryForBelt.images[0]}.png`}
                        footer={[
                            { text: "Flashcards", link: `/checklist/${beltSlug}/flashcards` },
                            { text: "Revise", link: "#theory" }
                        ]}
                        belt={colour}
                    />
                )}
                {lineworkForBelt && (
                    <RequirementCard
                        title="Linework"
                        description={`You could be asked to perform up to ${plural(lineworkForBelt.length, "different technique")}. These mainly come from your next pattern.`}
                        image="/images/cards/linework.jpg"
                        footer={[{ text: "Practice Moves", link: "#linework" }]}
                        belt={colour}
                    />
                )}
                {padworkForBelt && (
                    <RequirementCard
                        title="Padwork"
                        description={`You will be asked to perform a set of ${plural(padworkForBelt.length, "technique")} against a pad.`}
                        image="/images/cards/padwork.jpg"
                        footer={[{ text: "Check Moves", link: "#padwork" }]}
                        belt={colour}
                    />
                )}
                {hasSparring && (
                    <RequirementCard
                        title="Sparring"
                        description="You will be expected to spar with a few partners. This is a chance to show off your skills and techniques in a controlled environment."
                        image="/images/cards/sparring.jpg"
                        belt={colour}
                    />
                )}
                {powerTest && (
                    <RequirementCard
                        title="Power Test"
                        description="You will be asked to perform a power test. This is a chance to show off your power and technique."
                        image="/images/cards/power-test.png"
                        belt={colour}
                    >
                        {Object.keys(powerTest.boards).length === 1 && Object.hasOwn(powerTest.boards, "pad") ? (
                            `You'll perform a power test against a pad - ${powerTest.notes}`
                        ) : (
                            <div className="space-y-2">
                                <p>You'll be asked to perform a power test against the following targets:</p>
                                {Object.entries(powerTest.boards).map(([target, count]) => (
                                    <DottedRow
                                        key={target}
                                        label={`${_.startCase(target)} ${count > 1 ? "boards" : "board"}`}
                                    >
                                        {count}
                                    </DottedRow>
                                ))}
                                <p className="text-sm text-muted-foreground mt-2">
                                    If you're under 18, you will demonstrate techniques against a pad instead.
                                </p>
                            </div>
                        )}
                    </RequirementCard>
                )}
            </div>
        </div>
    );
}

const plural = (count: number, singular: string) => `${count} ${singular}${count === 1 ? "" : "s"}`;

function DottedRow({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="flex flex-row items-center gap-2">
            <span className="text-muted-foreground">{label}</span>
            <div className="grow border-b-2 border-dotted border-muted" />
            <span>{children}</span>
        </div>
    );
}

function RequirementCard({
    title,
    description,
    image,
    children,
    footer,
    belt
}: {
    title: string;
    description: string;
    image: string | ReactNode;
    children?: ReactNode;
    footer?: { text: string; link: string }[];
    belt: BeltColour;
}) {
    return (
        <Card className="pt-0 max-w-80 w-full">
            <div className="relative aspect-video md:aspect-square w-full overflow-hidden [&>img]:h-full [&>img]:w-full [&>img]:object-cover *:h-full *:w-full">
                {isValidElement(image) ? (
                    image
                ) : (
                    <Image
                        src={image as string}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover"
                        loading="eager"
                    />
                )}
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="mb-auto">{children}</CardContent>
            {footer && (
                <CardFooter className="justify-end p-2">
                    {footer.map((footerItem, index) => (
                        <Link href={footerItem.link} key={index}>
                            <BeltButton size="lg" belt={belt}>
                                {footerItem.text}{" "}
                                {footerItem.link.startsWith("#") ? <ChevronRightIcon /> : <ExternalLinkIcon />}
                            </BeltButton>
                        </Link>
                    ))}
                </CardFooter>
            )}
        </Card>
    );
}
