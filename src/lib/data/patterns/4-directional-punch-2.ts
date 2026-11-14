import type { Pattern } from "./generic";

export const fourDirectionalPunch2: Pattern = {
    slug: "4-directional-punch-2",
    name: "4 Directional Punch #2",
    alternativeName: "Saju Jirugi",
    about: [
        "The white belt student will learn some fundamental moves initially. Saju Jirugi is the four directional punch.",
        "Saju Jirugi is not a pattern but it does introduce the beginning student to a sequence of moves that will prepare them for their first pattern.",
        "Practice this fundamental exercise counter-clockwise and clockwise, turning alternately."
    ],
    type: "drill",
    video: null,
    diagram: "cross",
    start: { facing: "N", stance: "parallelReady" },
    moves: [
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "N", facing: "N" }, // 1
        { technique: "middleBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "E", facing: "W" }, // 2
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "W", facing: "W" }, // 3
        { technique: "middleBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "N", facing: "S" }, // 4
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "S", facing: "S" }, // 5
        { technique: "middleBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "W", facing: "E" }, // 6
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "E", facing: "E" } // 7
    ],
    end: "Bring the right foot back to a ready posture"
};
