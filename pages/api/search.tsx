import { NextApiRequest, NextApiResponse } from "next";
import untypedTheory from "../../public/data/theory.json";
import untypedBelts from "../../public/data/belts.json";
import untypedPatterns from "../../public/data/patterns.json";
import untypedClasses from "../../public/data/classes.json";
import { Searcher } from "fast-fuzzy";

import { theory, belt, pattern, lesson } from "../../types";

const theoryContent: Record<string, theory> = untypedTheory;
const belts: Record<string, belt> = untypedBelts;
const patterns: Record<string, pattern> = untypedPatterns;
const classes: lesson[] = untypedClasses;


// Create a dictionary of all english words to their korean translations. Ignore duplicates.
const allTranslateObjects = Object.keys(theoryContent).map(key =>
    theoryContent[key].questions.concat(theoryContent[key].extra || [])
).flat().filter(
    question => question.responseType === "translate"
);

const allTranslateQuestions: Record<string, string> = {};
allTranslateObjects.forEach(question => {
    const prompt = question.prompt;
    const answer = question.answer;
    if (prompt && answer && typeof answer === "string") {
        allTranslateQuestions[prompt] = answer;
    }
});
const reverseTranslateQuestions: Record<string, string> = {};
Object.keys(allTranslateQuestions).forEach(key => {
    reverseTranslateQuestions[allTranslateQuestions[key]] = key;
});

const firstBelt: Record<string, string> = {};
Object.keys(belts).forEach(belt => {
    const beltObject = belts[belt];
    if (beltObject.requirements.patterns && beltObject.requirements.patterns.length > 0) {
        firstBelt[belt] = beltObject.requirements.patterns[0];
    }
});

const translateSearcher = new Searcher(Object.keys(allTranslateQuestions));
const reverseTranslateSearcher = new Searcher(Object.values(allTranslateQuestions));
const patternSearcher = new Searcher(Object.keys(patterns));
const classSearcher = new Searcher(classes.map(lesson => lesson.day + lesson.location_name + lesson.building_name));


const unURLEncode = (str: string) => {
    return str.replaceAll("%20", " ").replaceAll("%2C", ",").replaceAll("-", " ").toLowerCase();
}

export function searchTranslate(search: string): { prompt: string, answer: string }[] {
    search = unURLEncode(search);
    const results = translateSearcher.search(search);
    const reverseResults = reverseTranslateSearcher.search(search);

    return results.map(result => {
        return { prompt: result, answer: allTranslateQuestions[result], }
    }).concat(reverseResults.map(result => {
        return { prompt: reverseTranslateQuestions[result], answer: result, }
    }));
};

export function searchPatterns(search: string): { id: string, name: string, description: string }[] {
    search = unURLEncode(search);
    const results = patternSearcher.search(search);

    return results.map(result => {
        return {
            id: result,
            name: patterns[result].name,
            description: Object.values(firstBelt).includes(result) ? `${belts[Object.keys(firstBelt).find(key => firstBelt[key] === result) || ""].displayName} pattern` : "Pattern",
        }
    });
};

export function searchClass(search: string): lesson[] {
    search = unURLEncode(search);
    const results = classSearcher.search(search);
    return classes.filter(lesson => results.includes(lesson.day + lesson.location_name + lesson.building_name));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const search = req.query.q as string || "";
    const translate = searchTranslate(search);
    const pattern = searchPatterns(search)[0];
    const lesson = searchClass(search);
    res.status(200).send({
        translations: translate,
        classes: lesson,
        pattern
    });
}
