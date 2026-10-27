"use client"

import { useEffect, useState } from "react";

export function Localise({ time, date }: { time?: string; date?: string }) {
    const [text, setText] = useState("");

    useEffect(() => {
        const value = new Date(`${date ?? "1970-01-01"}T${time ?? "00:00"}`);
        const local = new Intl.DateTimeFormat(undefined, {
            ...(date
                ? { year: "numeric", month: "numeric", day: "numeric" }
                : {}),
            hour: "numeric",
            minute: "2-digit"
        }).format(value);
        setText(local);
    }, [date, time]);

    return (
        <span>
            {text}
        </span>
    );
}
