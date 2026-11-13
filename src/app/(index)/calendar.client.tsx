"use client";
import { useMemo, useRef, useState } from "react";
import { CalendarPlusIcon, CopyCheckIcon, CopyIcon, CopyXIcon, MapPinnedIcon, PlusIcon } from "lucide-react";
import _ from "lodash";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { sessions, venues, classTypes } from "@/lib/data/classes";
import { Localise } from "@/components/localise";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { cn } from "cn";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

export function CustomCalendarDialog() {
    const venueMap = _.keyBy(venues, "id");
    const classTypeMap = _.keyBy(classTypes, "id");
    const [preferredApp, setPreferredApp] = useState<"google" | "apple">(() => {
        if (typeof window === "undefined") return "google";
        // Detect a mac or iOS device and default to Apple Calendar, otherwise default to Google Calendar
        const isAppleDevice = /Macintosh|Mac OS X|iPod|iPhone|iPad/.test(navigator.userAgent);
        return isAppleDevice ? "apple" : "google";
    });

    const [selectedSessions, setSelectedSessions] = useState<Set<number>>(new Set());
    const rows = useMemo(() => sessions.map((session, index) => ({ session, index })), []);

    const toggleSession = (index: number) => {
        setSelectedSessions((current) => {
            const next = new Set(current);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    const calendarLink = useMemo(() => {
        const selectedIds = [...selectedSessions].map((index) => sessions[index].id);
        if (!selectedIds.length) return null;
        const params = new URLSearchParams();
        params.set("session", selectedIds.join(","));
        params.set("app", preferredApp);
        const hostname = typeof window !== "undefined" ? window.location.hostname : "freeflowtaekwondo.com";
        const link = new URL(`/calendar.ics?${params.toString()}`, `protocol://${hostname}`);
        return link.toString().replace("protocol://", "");
    }, [selectedSessions, preferredApp]);
    const calendarLinkHTTPS = `https://${calendarLink || ""}`;
    const calendarLinkWebcal = `webcal://${calendarLink || ""}`;

    return (
        <Dialog>
            <DialogTrigger
                render={
                    <Button size="lg">
                        <CalendarPlusIcon /> Create calendar
                    </Button>
                }
            />
            <DialogContent className="w-[calc(100vw-2rem)] min-w-0 sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="flex flex-row items-center gap-2">
                        <CalendarPlusIcon size={20} /> Create calendar
                    </DialogTitle>
                    <DialogDescription>Create a calendar with your preferred classes and sessions.</DialogDescription>
                </DialogHeader>
                <div className="w-full min-w-0 overflow-x-auto rounded-md border">
                    <Table className="min-w-max">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="min-w-8" />
                                <TableHead>Day of week</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Times</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {rows.map(({ session, index }) => (
                                <TableRow
                                    key={index}
                                    data-state={selectedSessions.has(index) ? "selected" : undefined}
                                    onClick={() => toggleSession(index)}
                                    className="cursor-pointer hover:bg-muted"
                                >
                                    <TableCell>
                                        <Checkbox
                                            aria-label={`Select session ${index + 1}`}
                                            checked={selectedSessions.has(index)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(
                                            new Date(Date.UTC(1970, 0, 4 + session.day))
                                        )}
                                    </TableCell>
                                    <TableCell>{venueMap[session.venueId].area}</TableCell>
                                    <TableCell>{classTypeMap[session.classTypeId].name}</TableCell>
                                    <TableCell>
                                        <span>
                                            <Localise time={session.start} /> - <Localise time={session.end} />
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                    {selectedSessions.size} of {sessions.length} sessions selected.
                </p>

                <div className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-medium flex flex-row items-center gap-2">
                            <MapPinnedIcon size={16} /> Maps app
                        </p>
                        <p className="text-sm text-muted-foreground">Select which app map links should open in.</p>
                    </div>
                    <Select
                        onValueChange={(v) => setPreferredApp(v!)}
                        value={preferredApp}
                        items={[
                            { value: "google", label: "Google Maps" },
                            { value: "apple", label: "Apple Maps" }
                        ]}
                    >
                        <SelectTrigger className="w-full sm:w-48" aria-label="Select a calendar app">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="google">
                                <Image
                                    src="images/google.svg"
                                    height={16}
                                    width={16}
                                    alt=""
                                    className="size-5 aspect-square object-contain"
                                />
                                Google Maps
                            </SelectItem>
                            <SelectItem value="apple">
                                <Image
                                    src="images/apple.svg"
                                    height={16}
                                    width={16}
                                    alt=""
                                    className="size-5 aspect-square object-contain"
                                />
                                Apple Maps
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                    <p>Subscribe to the calendar below for a dynamic calendar:</p>
                    <CopyCalendarLinkButton link={calendarLinkWebcal} disabled={!calendarLink} />
                    <p>Open your calendar app, add a subscription calendar, and paste the link.</p>

                    <p>Or download a static calendar file below:</p>
                    <Button
                        className="w-full"
                        variant="secondary"
                        size="lg"
                        disabled={!calendarLink}
                        onClick={() => calendarLink && window.open(calendarLinkHTTPS, "_blank")}
                    >
                        <PlusIcon /> Add to Calendar App
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

function CopyCalendarLinkButton({ link, disabled }: { link: string; disabled: boolean }) {
    const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">("idle");
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <InputGroup
            className={cn(
                "transition-colors duration-200 ring-0!",
                copyStatus === "success" && "border-green-500!",
                copyStatus === "error" && "border-red-500!"
            )}
        >
            <InputGroupInput
                readOnly
                value={link}
                onMouseDown={(e) => {
                    e.preventDefault();
                    e.currentTarget.select();
                }}
                ref={inputRef}
            />
            <InputGroupAddon align="inline-end">
                <InputGroupButton
                    disabled={disabled}
                    variant="secondary"
                    onClick={() => {
                        if (disabled) return;
                        inputRef.current?.select();
                        navigator.clipboard
                            .writeText(link)
                            .then(() => setCopyStatus("success"))
                            .catch(() => setCopyStatus("error"))
                            .finally(() => {
                                setTimeout(() => setCopyStatus("idle"), 2000);
                            });
                    }}
                >
                    {copyStatus === "success" ? (
                        <CopyCheckIcon size={16} />
                    ) : copyStatus === "error" ? (
                        <CopyXIcon size={16} />
                    ) : (
                        <CopyIcon size={16} />
                    )}
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    );
}
