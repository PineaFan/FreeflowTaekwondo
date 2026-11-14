import type { Pattern } from "./generic";

export const fourDirectionalBlock: Pattern = {
    slug: "4-directional-block",
    name: "4 Directional Block",
    alternativeName: "Saju Makgi",
    about: [
        "The white belt student will learn some fundamental moves initially. Saju Makgi is the four directional block.",
        "Saju Makgi is not a pattern but it does introduce the beginning student to a sequence of moves that will prepare them for their first pattern.",
        "Practice this fundamental exercise counter-clockwise and clockwise, turning alternately."
    ],
    type: "drill",
    video: null,
    diagram: "cross",
    start: { facing: "N", stance: "parallelReady" },
    moves: [
        {
            technique: "lowKnifehandBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "S",
            facing: "N"
        }, // 1
        {
            technique: "middleInnerBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "N",
            facing: "N"
        }, // 2
        {
            technique: "lowKnifehandBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "E",
            facing: "W"
        }, // 3
        {
            technique: "middleInnerBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "W",
            facing: "W"
        }, // 4
        {
            technique: "lowKnifehandBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "N",
            facing: "S"
        }, // 5
        {
            technique: "middleInnerBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "S",
            facing: "S"
        }, // 6
        {
            technique: "lowKnifehandBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "W",
            facing: "E"
        }, // 7
        {
            technique: "middleInnerBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "E",
            facing: "E"
        } // 8
    ],
    end: "Bring the right foot back to a ready posture"
};
