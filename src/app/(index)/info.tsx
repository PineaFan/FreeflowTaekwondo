import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { ListTodoIcon, SquareArrowOutUpRight } from "lucide-react";
import { Message, MessageAvatar, MessageContent, MessageHeader } from "@/components/ui/message";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bubble, BubbleContent, BubbleReactions } from "@/components/ui/bubble";
import _ from "lodash";
import { isValidElement } from "react";
import { SectionHeading } from "./sections";

export function BeltsImage() {
    const belts = ["bg-white", "bg-yellow-300", "bg-green-500", "bg-indigo-500", "bg-red-400", "bg-zinc-800"];

    return (
        <div
            className="relative aspect-square w-full overflow-hidden rounded-t-md bg-muted"
            aria-label="Taekwondo belts"
        >
            <div className="absolute inset-[-20%] flex flex-col items-center justify-center rotate-[-15deg] gap-2">
                {belts.map((color, index) => (
                    <div
                        key={`${color}-${index}`}
                        className={`h-8 w-full shrink-0 ${color} shadow shadow-muted-foreground/20`}
                    />
                ))}
            </div>
        </div>
    );
}

const cards = [
    {
        title: "Weekly Lessons",
        description: "4 lessons held every week in 3 different locations.",
        image: "/images/cards/sparring.jpg",
        buttonText: "Class Times",
        buttonIcon: null,
        link: "#classes"
    },
    {
        title: "Events and Competitions",
        description: "Details on when gradings, seminars, squads, competitions and camps are being held this year.",
        image: "/images/cards/competition.png",
        buttonText: "Events",
        buttonIcon: null,
        link: "https://www.puma-uk.com/calendar"
    },
    {
        title: "Grading Checklist",
        description: "Check up on theory, patterns and other requirements for your next grading.",
        image: <BeltsImage />,
        buttonText: "Open Checklist",
        buttonIcon: <ListTodoIcon size={16} />,
        link: "/checklist"
    },
    {
        title: "Trained Instructor",
        description:
            "Stacey Weatherer (6th Degree Black Belt) is fully DBS checked, fully insured and first aid trained.",
        image: "/images/cards/stacey.png",
        buttonText: "Contact",
        buttonIcon: null,
        link: "#contact"
    }
];

export function HeroSection() {
    return (
        <div className="flex items-center justify-center w-screen bg-muted p-4 pt-0">
            <div className="flex flex-col gap-0 items-center text-balance text-center">
                <Image
                    src="/icon.svg"
                    alt="Freeflow Taekwondo logo"
                    width={100}
                    height={100}
                    className="w-24 h-24"
                    loading="eager"
                />
                <h1 className="mb-0 mt-2">Freeflow Taekwondo</h1>
                <h2 className="m-0 text-muted-foreground">Stone, Cheadle and Chell Taekwondo classes</h2>
                <Separator className="grow bg-accent h-1! rounded m-2" />
                <p className="text-muted-foreground m-0 leading-tight">
                    A safe, family-friendly place for all ages to learn the Korean art of Self Defence.
                </p>
            </div>
        </div>
    );
}

export function AboutSection() {
    return (
        <>
            <SectionHeading id="about">About</SectionHeading>
            <div className="mx-auto max-w-6xl grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cards.map((card) => (
                    <Card key={card.title} className="flex h-full flex-col pt-0">
                        <div className="relative aspect-square w-full overflow-hidden [&>img]:h-full [&>img]:w-full [&>img]:object-cover *:h-full *:w-full">
                            {isValidElement(card.image) ? (
                                card.image
                            ) : (
                                <Image
                                    src={card.image as string}
                                    alt={card.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            )}
                        </div>
                        <CardHeader>
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto flex justify-end">
                            <Link href={card.link}>
                                <Button size="lg">
                                    {card.buttonIcon}
                                    {card.buttonText}
                                    {card.link.startsWith("http") && <SquareArrowOutUpRight size={12} />}
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}

export function StudentOfTheYearSection() {
    return (
        <>
            <div className="mx-auto mt-8 flex w-full justify-center">
                <Message align="end">
                    <MessageAvatar>
                        <Avatar>
                            <AvatarImage src="/icon.svg" alt="Stacey" />
                            <AvatarFallback>SW</AvatarFallback>
                        </Avatar>
                    </MessageAvatar>
                    <MessageContent>
                        <MessageHeader>Stacey Weatherer</MessageHeader>
                        <Bubble variant="tinted">
                            <BubbleContent>
                                Huge congratulations to these students winning Student of the Year for 2025. Keep up the
                                hard work all of you!
                            </BubbleContent>
                            <BubbleReactions align="end" role="img" aria-label="Reactions: thumbs up, surprised">
                                <span>❤️</span>
                                <span>🎉</span>
                            </BubbleReactions>
                        </Bubble>
                    </MessageContent>
                </Message>
            </div>
            <div className="flex flex-row flex-wrap-balance justify-center gap-x-4 gap-y-0">
                {[1, 2, 3, 4].map((imageNumber) => (
                    <Image
                        key={imageNumber}
                        src={`/images/SOTY/${imageNumber}.jpg`}
                        alt={`Student of the Year ${imageNumber}`}
                        width={400}
                        height={300}
                        className="w-full max-w-72 object-cover"
                    />
                ))}
            </div>
        </>
    );
}
