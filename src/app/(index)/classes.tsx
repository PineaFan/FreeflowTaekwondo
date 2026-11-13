import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BabyIcon, BuildingIcon, DoorOpenIcon, ExternalLinkIcon, SquareParkingIcon, XIcon } from "lucide-react";
import _ from "lodash";
import { classTypes, sessions, venues } from "@/lib/data/classes";
import { Localise } from "@/components/localise";
import { SectionHeading } from "./sections";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import GoogleSatelliteMap, { DirectionsButton } from "./parking";
import { CustomCalendarDialog } from "./calendar.client";

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

export function ClassesSection() {
    const sessionsByDay = _.groupBy(sessions, "day");
    const days = Object.entries(sessionsByDay).map(([day, daySessions]) => {
        const venueId = daySessions[0].venueId;
        const venue = venues.find((v) => v.id === venueId);
        return { day: Number(day), sessions: daySessions, venue };
    });

    return (
        <>
            <SectionHeading id="classes">Classes</SectionHeading>
            <div className="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                {days.map(({ day, sessions: daySessions, venue }) => (
                    <Card key={day} className="h-full w-full">
                        <CardHeader>
                            <CardTitle className="text-3xl font-light flex">
                                {["", "Monday", "Tuesday", "Wednesday", "Thursday"][day]}
                                {venue && (
                                    <span className="ml-2 text-base font-normal text-muted-foreground mt-auto">
                                        ({venue.area})
                                    </span>
                                )}
                            </CardTitle>
                            {venue && (
                                <CardAction>
                                    <Dialog>
                                        <DialogTrigger
                                            render={
                                                <Button variant="secondary" size="lg">
                                                    <SquareParkingIcon size={14} />
                                                    Parking
                                                </Button>
                                            }
                                        />
                                        <DialogContent
                                            className="w-[min(1000px, 100vw)] overflow-hidden p-0"
                                            showCloseButton={false}
                                        >
                                            <div className="relative h-full w-full">
                                                <GoogleSatelliteMap
                                                    places={[
                                                        {
                                                            id: "venue",
                                                            name: "Venue",
                                                            lat: venue.coordinates.lat,
                                                            lng: venue.coordinates.lng,
                                                            icon: <BuildingIcon size={16} />
                                                        },
                                                        {
                                                            id: "entrance",
                                                            name: "Entrance",
                                                            lat: venue.entranceCoordinates.lat,
                                                            lng: venue.entranceCoordinates.lng,
                                                            icon: <DoorOpenIcon size={16} />
                                                        },
                                                        {
                                                            id: "parking",
                                                            name: "Parking",
                                                            lat: venue.parkingCoordinates.lat,
                                                            lng: venue.parkingCoordinates.lng,
                                                            icon: <SquareParkingIcon size={16} />
                                                        }
                                                    ]}
                                                />
                                                <div className="absolute top-4 right-4 z-10 flex flex-row items-center gap-2">
                                                    <DirectionsButton
                                                        place={{
                                                            ...venue.coordinates,
                                                            address: `${venue.name}, ${venue.postcode}`,
                                                            name: venue.name,
                                                            id: venue.name
                                                        }}
                                                        variant="button"
                                                    />
                                                    <DialogClose
                                                        render={
                                                            <Button variant="secondary" size="icon-lg">
                                                                <XIcon />
                                                            </Button>
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CardAction>
                            )}
                            {venue && (
                                <CardDescription>
                                    <DirectionsButton
                                        place={{ ...venue.coordinates, name: venue.name, id: venue.name }}
                                        variant="text"
                                    >
                                        <span className="text-blue-600 hover:underline">
                                            {venue.name} ({venue.postcode})
                                            <ExternalLinkIcon
                                                aria-hidden="true"
                                                size={14}
                                                className="ml-1 inline-block"
                                            />
                                        </span>
                                    </DirectionsButton>
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
            <div className="mt-4 text-center text-sm text-muted-foreground">
                <CustomCalendarDialog />
            </div>
        </>
    );
}

export function LittlePumasSection() {
    return (
        <section className="w-full space-y-4 text-center mt-8">
            <SectionHeading id="little-pumas">Little PUMAs</SectionHeading>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-stretch mx-auto">
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

            {/* <Card>
                <CardContent className="space-y-3"> */}
            <p className="space-y-3 text-left lg:text-center">
                Little PUMAs is a specially designed program for children aged 4-7. It is a fun, exciting and safe way
                to introduce your child to the world of martial arts.
                <br />
                Classes aim to help young children develop co-ordination, discipline, focus and concentration, balance,
                and teamwork.
            </p>
            {/* </CardContent>
            </Card> */}
        </section>
    );
}

export function NewToTaekwondoSection() {
    return (
        <section className="w-full space-y-4 text-center mt-8">
            <SectionHeading id="new-to-taekwondo">New to Taekwondo?</SectionHeading>
            <p className="text-left lg:text-center">
                If you are new to Taekwondo, we welcome you to come along and try your first 2 lessons for free with no
                commitments. Just let Stacey know before you come!
            </p>
        </section>
    );
}
