import { NextApiRequest, NextApiResponse } from "next";
import classes from "../../public/data/classes.json";

const typedClasses: {
    day: string;
    location_name: string;
    building_name: string;
    postcode: string;
    geo: string;
    classes: {
        UUID: string;
        name: string;
        start: string;
        end: string;
    }[];
}[] = (classes as any);

function formatDate(time: string) {
    const d = new Date();
    return `${d.getFullYear()}${(d.getMonth() + 1).toString().padStart(2, "0")}${d.getDate().toString().padStart(2, "0")}T${time.replace(":", "")}00`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'text/calendar');
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

    let output = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://freeflowtaekwondo.com
DTSTART:${formatDate(lesson.start)}
DTEND:${formatDate(lesson.end)}
SUMMARY:Taekwondo Lesson
DESCRIPTION:${lesson.name}
LOCATION:${day.geo.replaceAll("+", " ")}
RRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=${day.day}
END:VEVENT
END:VCALENDAR`;
    res.send(output);
}
