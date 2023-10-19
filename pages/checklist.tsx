import React, { useEffect, useState } from 'react';

import Header from '../components/header';

import Styles from '../styles/pages/checklist.module.css';

import untypedBelts from '../public/data/belts.json';
import untypedLinework from '../public/data/linework.json';
import untypedPatterns from '../public/data/patterns.json';
import untypedPrearrangedSparring from '../public/data/prearrangedSparring.json';
import untypedTheory from '../public/data/theory.json';
import untypedPadwork from '../public/data/padwork.json';
import { SectionHeading } from '../components/title';
import { Card, CardRow } from '../components/cards';

import BeltTyingModule from '../components/checklistModules/beltTying';
import LineworkModule from '../components/checklistModules/linework';
import PadworkModule from '../components/checklistModules/padwork';
import PatternsModule from '../components/checklistModules/patterns';
import PrearrangedSparringModule from '../components/checklistModules/prearrangedSparring';
import TheoryModule from '../components/checklistModules/theory';

import { belt, linework, pattern, prearrangedSparring, theory } from '../types';
import { BeltSelect, NoBelt } from '../components/beltUtils';


const ExaminedModules = {
    "beltTying": BeltTyingModule,
    "linework": LineworkModule,
    "padwork": PadworkModule,
    "patterns": PatternsModule,
    "prearrangedSparring": PrearrangedSparringModule,
    "theory": TheoryModule
};


const belts: Record<string, belt> = untypedBelts;
const linework: Record<string, linework[]> = untypedLinework;
const patterns: Record<string, pattern> = untypedPatterns;
const prearrangedSparring: Record<string, prearrangedSparring> = untypedPrearrangedSparring;
const theory: Record<string, theory> = untypedTheory;
const padwork: Record<string, string[]> = untypedPadwork;


const patternDescription = (currentBelt: belt) => {
    const displayNames = currentBelt.requirements.patterns!.map(p => patterns[p].name);
    if (displayNames.length > 0) {
        return `You will be expected to perform ${displayNames.length} pattern${displayNames.length > 1 ? 's' : ''}: ` + displayNames.map((pattern, index) => {
            if (index === displayNames.length - 1 && displayNames.length > 1) {
                return `and ${pattern}.`;
            } else if (displayNames.length === 1) {
                return `${pattern}.`;
            } else {
                return `${pattern}, `;
            }
        }).join("") + ` You will usually be asked to perform your pattern for grade (${displayNames[0]}) twice.`;
    }
    return ""
}

const beltDetails = (currentBelt: belt) => {
    let out = `You will need to have attended at least ${currentBelt.requirements.minimum.lessons} lessons, and have been training for at least ${currentBelt.requirements.minimum.months} months`;
    if (currentBelt.requirements.minimum.squads) {
        out += `. You will also need to have attended at least ${currentBelt.requirements.minimum.squads} squad${currentBelt.requirements.minimum.squads > 1 ? 's' : ''}`;
    }
    if (currentBelt.requirements.minimum.seniorGradeTrainings) {
        out += ` and ${currentBelt.requirements.minimum.seniorGradeTrainings} senior grade training${currentBelt.requirements.minimum.seniorGradeTrainings > 1 ? 's' : ''}`;
    }
    out += ".";
    return out;

}

const gradingCards: Record<string, {
    title: string;
    subtitle?: string;
    _subtitle?: Function;
    button?: {
        text: string;
        link: string;
    };
    image?: string;
    _image?: Function;
    fillMethod?: "showAll" | "fill";
}> = {
    "minimum": {
        title: "Minimum Requirements",
        _subtitle: (currentBelt: belt) => beltDetails(currentBelt),
        image: "images/minimum.png" // TODO
    },
    "patterns": {
        title: "Patterns",
        _subtitle: (currentBelt: belt, _name: string) => patternDescription(currentBelt),
        button: {text: "Check moves", link: "#patterns"},
        image: "patterns/Plus.svg",
        fillMethod: "showAll"
    },
    "linework": {
        title: "Linework",
        _subtitle: (_currentBelt: belt, name: string) => `You could be asked to perform up to ${linework[name].length} different moves for linework. These moves mostly come from your next pattern.`,
        button: {text: "Practice moves", link: "#linework"},
        image: "images/linework.png"  // TODO
    },
    "prearrangedSparring": {
        title: "Prearranged Sparring",
        subtitle: `You will be expected to perform prearranged sparring against another person of the same belt. This helps to improve your focus, distance, and timing.`,
        button: {text: "Check moves", link: "#prearrangedSparring"},
        image: "images/prearrangedSparring.png"  // TODO
    },
    "powerTest": {
        title: "Power Test",
        subtitle: `You will be expected to perform a power test to demonstrate both the proper execution of a technique, and a high amount of power.`,
        image: "images/power.png"  // TODO
    },
    "sparring": {
        title: "Sparring",
        subtitle: `You will be expected to spar against others at a similar belt to you. You are not expected to hurt your opponent, but instead should demonstrate as many different moves as possible.`,
        image: "images/sparring.png"
    },
    "theory": {
        title: "Theory",
        subtitle: `You will be expected to answer theory questions from your card. You will be asked 5 questions from your card.`,
        button: {text: "Revise", link: "#theory"},
        _image: (name: string) => `theory/${theory[name].images[0]}.png`
    },
    "beltTying": {
        title: "Belt Tying",
        subtitle: `You will be expected to demonstrate how to correctly tie your belt. This is the only grading you will be asked to do this, but it is important to know.`,
        button: {text: "Check how", link: "#belt"},
        image: "images/belts.svg"
    },
    "padwork": {
        title: "Padwork",
        subtitle: "You will be asked to demonstrate sequence of moves against a pad.",
        button: {text: "Check moves", link: "#padwork"},
        image: "images/padwork.png"  // TODO
    }
}


export default function Checklist() {
    const [belt, _setBelt] = useState("undefined");
    const [beltChose, setBeltChosen] = useState(false);

    function setBelt(value: number) {
        const belt = Object.keys(belts)[value];
        _setBelt(belt);
        localStorage.setItem("belt", belt);
        setBeltChosen(true);
    }

    useEffect(() => {
        const storedBelt = localStorage.getItem("belt");
        if (storedBelt && storedBelt in belts) {
            setBelt(Object.keys(belts).indexOf(storedBelt));
            setBeltChosen(true);
        }
    }, [belt]);

    const header = <Header
        title="Grading Checklist"
        // subtitle="Check all the requirements for your next grading."
        description="Select your grade below to see what the requirements are for your next belt."
        colour={beltChose ? belts[belt].stripe : "FFFFFF"}
        showHomeButton={"/"}
        loading={!beltChose}
    />;

    if (!beltChose) {
        return <>
            { header }
            <NoBelt title={"What's on this grading?"} backLink={'checklist'} setBelt={setBelt} />
        </>;
    }

    const accent = belts[belt].stripe === "FFFFFF" ? "C4C4C4" : belts[belt].stripe;

    gradingCards.linework.subtitle = gradingCards.linework._subtitle!(belts[belt], belt);
    gradingCards.theory.image = gradingCards.theory._image!(belt);
    gradingCards.minimum.subtitle = gradingCards.minimum._subtitle!(belts[belt]);

    let cardTitles = Object.keys(belts[belt].requirements).filter((x) => x in gradingCards);
    cardTitles.push("linework");
    if (Object.keys(padwork).includes(belt)) cardTitles.push("padwork")
    cardTitles = cardTitles.concat(belts[belt].requirements.extra.filter((x) => x in gradingCards) || []);
    cardTitles.push("theory");

    const modules = cardTitles.filter((x) => Object.keys(ExaminedModules).includes(x)).map((key, index) => {
        // Input data for the module
        let cardData: any = {}
        switch (key) {
            case "linework": { cardData = linework[belt]; break; }
            case "padwork": { cardData = padwork[belt]; break; }
            case "patterns": { cardData = belts[belt].requirements.patterns!.map(p => patterns[p]); break; }
            case "prearrangedSparring": {
                cardData = belts[belt].requirements.prearrangedSparring!;
                cardData.objects = cardData.moves.map((x: string) => prearrangedSparring[x]);
                break;
            }
            case "theory": { cardData = theory[belt]; break; }
        }
        // @ts-expect-error
        const Component = ExaminedModules[key];
        return <div key={index}>
            <SectionHeading
                id={key}
                showLine={true}
            >{gradingCards[key].title}</SectionHeading>
            <Component
                belt={belt}
                beltObject={belts[belt]}
                data={cardData}
            />
        </div>
    });

    return <>
        { header }
        <div className={Styles.container}>
            <SectionHeading id="top" showLine={false}>What&apos;s on this grading?</SectionHeading>
            <div className={Styles.text}>Grading checklist for <BeltSelect currentBelt={belt} setBelt={setBelt} /></div>
            <CardRow>
                {
                    cardTitles.map((key, index) => {
                        const card = gradingCards[key];
                        card.subtitle = card._subtitle ? card._subtitle(belts[belt], belt) : card.subtitle;
                        return <Card
                            key={index}
                            accent={accent}
                            {...card}
                            fitMethod={card.fillMethod}
                        />
                    })
                }
            </CardRow>
        </div>
        { modules }
    </>;
}
