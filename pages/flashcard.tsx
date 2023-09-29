import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import untypedBelts from "../public/data/belts.json";
import untypedTheory from "../public/data/theory.json";
import { belt, theory } from "../types";

const belts: Record<string, belt> = untypedBelts;
const theory: Record<string, theory> = untypedTheory;


export default function Flashcards() {
    const [belt, _setBelt] = useState("white-senior");

    function setBelt(value: number) {
        const belt = Object.keys(belts)[value];
        _setBelt(belt);
        localStorage.setItem("belt", belt);
    }

    useEffect(() => {
        const storedBelt = localStorage.getItem("belt");
        if (storedBelt && storedBelt in belts) {
            setBelt(Object.keys(belts).indexOf(storedBelt));
        }
    }, []);

    const ignoredTypes = ["DNA", "opinion"]
    const questions = theory[belt].questions.filter((x) => !ignoredTypes.includes(x.responseType));
    const extra = theory[belt].extra ? theory[belt].extra!.filter((x) => !ignoredTypes.includes(x.responseType)) : [];

    return <></>
}
