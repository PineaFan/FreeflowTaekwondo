import { NextApiRequest, NextApiResponse } from "next";
// @ts-expect-error
import { createIcsFileBuilder } from "ical-toolkit";
import { lesson } from "../../types";
import untypedClasses from "../../public/data/classes.json";


const typedClasses: lesson[] = untypedClasses;

function formatDate(time: string, day_of_week: string) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // Create a date object at the next occurrence of the day of the week
    const date = new Date();
    date.setDate(date.getDate() + (7 + days.indexOf(day_of_week) - date.getDay()) % 7);
    // Parse the time
    const timeParts = time.split(":");
    date.setHours(parseInt(timeParts[0]));
    date.setMinutes(parseInt(timeParts[1]));
    date.setSeconds(0);
    return date;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id;
    // For each day, find the class with the matching id
    // Both the day and class details are needed
    let day: any = null;
    let lesson: any = null;
    for (let i = 0; i < typedClasses.length; i++) {
        const d = typedClasses[i];
        for (let j = 0; j < d.classes.length; j++) {
            const l = d.classes[j];
            if (l.UUID === id) {
                day = d;
                lesson = l;
                break;
            }
        }
        if (day && lesson) break;
    }
    if (!day || !lesson) {
        res.status(404).send("Not found");
        return;
    }
    res.setHeader('Content-Type', 'text/calendar');

    const builder = createIcsFileBuilder();
    builder.calname = "Freeflow Taekwondo";
    builder.timezone = "Europe/London";
    builder.tzid = "Europe/London";
    builder.method = "REQUEST";
    console.log(lesson.start, formatDate(lesson.start, day.day))
    builder.events.push({
        start: formatDate(lesson.start, day.day),
        end: formatDate(lesson.end, day.day),
        summary: lesson.name,
        description: lesson.name,
        location: day.geo.replaceAll("+", " "),
        repeating: {
            freq: "WEEKLY",
            interval: 1
        }
    });

    const output = builder.toString();

    res.status(200).send(output);
}
