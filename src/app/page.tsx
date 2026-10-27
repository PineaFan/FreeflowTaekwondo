import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { BabyIcon, MailIcon, PhoneIcon, SquareArrowOutUpRight } from "lucide-react";
import { Message, MessageAvatar, MessageContent, MessageHeader } from "@/components/ui/message";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bubble, BubbleContent, BubbleReactions } from "@/components/ui/bubble";
import _ from "lodash";
import { classTypes, mapsQuery, sessions, venues } from "@/lib/classes";
import { Localise } from "@/components/localise";

export default function Home() {
    return (
        <main className="flex flex-col gap-2 items-center">
            <HeroSection />
            [Search bar here]
            <AboutSection />
            <StudentOfTheYearSection />
            <ClassesSection />
            <LittlePumasSection />
        <NewToTaekwondoSection />
        <ContactSection />
        </main>
    );
}

function HeroSection() {
    return (
        <div className="flex items-center justify-center w-screen bg-muted p-4">
            <div className="flex flex-col gap-0 items-center">
                <h1 className="m-0">Freeflow Taekwondo</h1>
                <h2 className="m-0 text-muted-foreground">Stone, Cheadle and Chell Taekwondo classes</h2>
                <Separator className="grow bg-accent h-1! rounded m-2" />
                <p className="text-muted-foreground m-0">
                    A safe, family-friendly place for all ages to learn the Korean art of Self Defence.
                </p>
            </div>
        </div>
    );
}

function SectionHeading({ id, children }: { id: string; children: string }) {
    return (
        <h1 className="text-4xl font-light" id={id}>
            {children}
        </h1>
    );
}

function AboutSection() {
    return (
        <>
            <SectionHeading id="about">About</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                {cards.map((card) => (
                    <Card key={card.title} className="w-full max-w-72 h-full flex flex-col">
                        <Image
                            src={card.image}
                            alt={card.title}
                            width={400}
                            height={300}
                            className="w-full aspect-square object-cover"
                            loading="eager"
                        />
                        <CardHeader>
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                            <Link href={card.link}>
                                <Button size="lg">
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

function StudentOfTheYearSection() {
    return (
        <>
            <div className="w-fit mt-8">
                <Message>
                    <MessageAvatar>
                        <Avatar>
                            <AvatarImage src="/icon.png" alt="Stacey" />
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
            <div className="flex flex-row flex-wrap-balance gap-4">
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
type Grade = "white" | "yellow" | "green" | "blue" | "red" | "black";
function GradeIndicator({ min, max }: { min: Grade; max: Grade }) {
    const grades: Grade[] = ["white", "yellow", "green", "blue", "red", "black"];
    const minIndex = grades.indexOf(min);
    const maxIndex = grades.indexOf(max);

    return (
        <>
            {grades.slice(minIndex, maxIndex + 1).map((grade) => (
                <span
                    key={grade}
                    className={`size-3 rounded-full border ${
                        grade === "white"
                            ? "bg-white border-black/50"
                            : grade === "yellow"
                              ? "bg-yellow-400"
                              : grade === "green"
                                ? "bg-green-500"
                                : grade === "blue"
                                  ? "bg-blue-500"
                                  : grade === "red"
                                    ? "bg-red-500"
                                    : "bg-black border-white/50"
                    }`}
                    aria-label={`${grade.charAt(0).toUpperCase() + grade.slice(1)} belt`}
                />
            ))}
        </>
    );
}

function ClassGradeIndicator({ classTypeId }: { classTypeId: string }) {
    const classType = classTypes.find((classType) => classType.id === classTypeId);
    if (!classType) return null;

    if (classType.name.toLowerCase().includes("junior")) return <GradeIndicator min="white" max="red" />;
    if (classType.name.toLowerCase().includes("senior")) return <GradeIndicator min="red" max="black" />;
    // if (classType.name.toLowerCase().includes("all grades")) return <GradeIndicator min="white" max="black" />;
    if (classType.name.toLowerCase().includes("little pumas")) return <BabyIcon size={14} />;
    return null;
}

function ClassesSection() {
    const sessionsByDay = _.groupBy(sessions, "day");
    const days = Object.entries(sessionsByDay).map(([day, daySessions]) => {
        const venueId = daySessions[0].venueId;
        const venue = venues.find((v) => v.id === venueId);
        return { day: Number(day), sessions: daySessions, venue };
    });

    return (
        <>
            <SectionHeading id="classes">Classes</SectionHeading>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
                {days.map(({ day, sessions: daySessions, venue }) => (
                    <Card key={day} className="h-full">
                        <CardHeader>
                            <CardTitle className="text-3xl font-light">
                                {["", "Monday", "Tuesday", "Wednesday", "Thursday"][day]}
                                {venue && (
                                    <span className="ml-2 text-base font-normal text-muted-foreground">
                                        ({venue.area})
                                    </span>
                                )}
                            </CardTitle>
                            {venue && (
                                <CardDescription>
                                    <Link
                                        href={`https://maps.apple.com/?address=${mapsQuery(venue)}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                                    >
                                        {venue.name} ({venue.postcode})
                                        <SquareArrowOutUpRight size={14} />
                                    </Link>
                                </CardDescription>
                            )}
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {daySessions.map((session) => {
                                const classType = classTypes.find((classType) => classType.id === session.classTypeId);

                                return (
                                    <div
                                        key={session.id}
                                        className="flex items-baseline justify-between gap-4 border-t pt-2"
                                    >
                                        <span className="flex flex-row items-center gap-1">
                                            {classType?.name}
                                            {classType?.ageMin && classType.ageMax
                                                ? ` (Ages ${classType.ageMin}-${classType.ageMax})`
                                                : classType?.note
                                                  ? ` (${classType.note})`
                                                  : null}
                                        </span>
                                        <span className="flex shrink-0 items-center gap-2 text-muted-foreground">
                                            <ClassGradeIndicator classTypeId={session.classTypeId} />
                                            <span>
                                                <Localise time={session.start} /> - <Localise time={session.end} />
                                            </span>
                                        </span>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                ))}
            </div>
            [Dialog will go here to customise a calendar]
        </>
    );
}

function LittlePumasSection() {
    return (
        <section className="w-full max-w-5xl space-y-4 text-center mt-8">
            <SectionHeading id="little-pumas">Little PUMAs</SectionHeading>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-stretch">
                {[1, 2, 3].map((imageNumber) => (
                    <Card key={imageNumber} className="h-full overflow-hidden p-0">
                        <Image
                            src={`/images/LP/${imageNumber}.jpg`}
                            alt={`Little PUMAs ${imageNumber}`}
                            width={400}
                            height={600}
                            className="h-full w-full object-cover"
                        />
                    </Card>
                ))}
            </div>

            <Card>
                <CardContent className="space-y-3">
                    Little PUMAs is a specially designed program for children aged 4-7. It is a fun, exciting and safe
                    way to introduce your child to the world of martial arts.
                    <br />
                    Classes aim to help young children develop co-ordination, discipline, focus and concentration,
                    balance, and teamwork.
                </CardContent>
            </Card>
        </section>
    );
}

function NewToTaekwondoSection() {
    return (
        <section className="w-full max-w-5xl space-y-4 text-center mt-8">
            <SectionHeading id="new-to-taekwondo">New to Taekwondo?</SectionHeading>
            <Card>
                <CardContent>
                    Get your first 2 lessons free with no commitments - Just let Stacey know before you come!
                </CardContent>
            </Card>
        </section>
    );
}

function ContactSection() {
  return (
      <section className="w-full max-w-5xl space-y-4 text-center mt-8">
          <SectionHeading id="contact">Contact</SectionHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-stretch">
              <Card className="flex h-full flex-col">
                  <CardHeader>
                      <CardTitle className="flex flex-row items-center justify-center gap-2">
                          <MailIcon size={20} />
                          Email
                      </CardTitle>
                      <CardDescription>Stacey can be emailed at weatherers@aol.com</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                      <Link href="mailto:weatherers@aol.com">
                          <Button size="lg">Email</Button>
                      </Link>
                  </CardContent>
              </Card>
              <Card className="flex h-full flex-col">
                  <CardHeader>
                      <CardTitle className="flex flex-row items-center justify-center gap-2">
                          <PhoneIcon size={20} />
                          Phone
                      </CardTitle>
                      <CardDescription>To contact Stacey by phone, call 07966706791</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                      <Link href="tel:07966706791">
                          <Button size="lg">Call</Button>
                      </Link>
                  </CardContent>
              </Card>
              <Card className="flex h-full flex-col">
                  <CardHeader>
                      <CardTitle className="flex flex-row items-center justify-center gap-2">
                          {/* <FacebookIcon /> */}
                          Facebook
                      </CardTitle>
                      <CardDescription>Join the Facebook group for updates and messages</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                      <Link href="https://facebook.com/tkdclasses/" target="_blank" rel="noreferrer">
                          <Button size="lg">Visit</Button>
                      </Link>
                  </CardContent>
              </Card>
          </div>
      </section>
  );
}

const cards = [
    {
        title: "Weekly Lessons",
        description: "4 lessons held every week in 3 different locations.",
        image: "/images/cards/sparring.jpg",
        buttonText: "Class Times",
        link: "#classes"
    },
    {
        title: "Events and Competitions",
        description: "Details on when camps, squads, gradings and seminars are being held this year.",
        image: "/images/cards/competition.png",
        buttonText: "Events",
        link: "https://www.puma-uk.com/calendar"
    },
    {
        title: "Grading Checklist",
        description: "Check up on theory, patterns and other requirements for your next grading.",
        image: "/images/cards/belts.svg",
        buttonText: "Open Checklist",
        link: "/checklist"
    },
    {
        title: "Trained Instructor",
        description:
            "Stacey Weatherer (6th Degree Black Belt) is fully DBS checked, fully insured and first aid trained.",
        image: "/images/cards/stacey.png",
        buttonText: "Contact",
        link: "#contact"
    }
];
