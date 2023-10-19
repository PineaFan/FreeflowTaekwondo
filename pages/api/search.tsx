import { NextApiRequest, NextApiResponse } from "next";
import untypedTheory from "../../public/data/theory.json";
import untypedBelts from "../../public/data/belts.json";
import untypedPatterns from "../../public/data/patterns.json";
import { Searcher } from "fast-fuzzy";

import { theory, belt, pattern } from "../../types";

const theoryContent: Record<string, theory> = untypedTheory;
const belts: Record<string, belt> = untypedBelts;
const patterns: Record<string, pattern> = untypedPatterns;


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

const firstBelt: Record<string, string> = {};
Object.keys(belts).forEach(belt => {
    const beltObject = belts[belt];
    if (beltObject.requirements.patterns && beltObject.requirements.patterns.length > 0) {
        firstBelt[belt] = beltObject.requirements.patterns[0];
    }
});

const translateSearcher = new Searcher(Object.keys(allTranslateQuestions).concat(Object.values(allTranslateQuestions)));

const patternSearcher = new Searcher(Object.keys(patterns));

const unURLEncode = (str: string) => {
    return str.replaceAll("%20", " ").replaceAll("%2C", ",").replaceAll("-", " ").toLowerCase();
}

export function searchTranslate(search: string): { prompt: string, answer: string }[] {
    search = unURLEncode(search);
    const results = translateSearcher.search(search);
    return results.map(result => {
        return {
            prompt: result,
            answer: allTranslateQuestions[result],
        }
    });
};

export function searchPattern(search: string): { id: string, name: string, description: string } | {} {
    search = unURLEncode(search);
    const results = patternSearcher.search(search);
    if (results.length === 0) {
        return {};
    }

    return {
        id: results[0],
        name: patterns[results[0]].name,
        description: Object.keys(firstBelt).includes(results[0]) ? `${belts[Object.keys(firstBelt).find(key => firstBelt[key] === results[0]) || ""].displayName} pattern` : "Pattern",
    }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const search = req.query.q as string || "";
    const translate = searchTranslate(search);
    const pattern = searchPattern(search);
    res.status(200).send({
        translations: translate,
        pattern
    });
}
