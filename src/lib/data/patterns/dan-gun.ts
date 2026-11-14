import type { Pattern } from "./generic";

export const danGun: Pattern = {
    slug: "dan-gun",
    name: "Dan-Gun",
    about: ["Dan-Gun is named after the holy Dan-Gun, the legendary founder of Korea in the year 2333 BCE."],
    type: "pattern",
    video: "https://videos.freeflowtaekwondo.com/dan-gun.mp4",
    diagram: "i",
    start: { facing: "N", stance: "parallelReady" },
    moves: [
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 1
        { technique: "highPunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "W", facing: "W" }, // 2
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "E" }, // 3
        { technique: "highPunch", stance: "walking", stanceSide: "left", side: "left", moveTo: "E", facing: "E" }, // 4
        { technique: "lowBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "N", facing: "N" }, // 5
        { technique: "highPunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "N", facing: "N" }, // 6
        { technique: "highPunch", stance: "walking", stanceSide: "left", side: "left", moveTo: "N", facing: "N" }, // 7
        { technique: "highPunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "N", facing: "N" }, // 8
        { technique: "twinForearmBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 9
        { technique: "highPunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "W", facing: "W" }, // 10
        { technique: "twinForearmBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "E" }, // 11
        { technique: "highPunch", stance: "walking", stanceSide: "left", side: "left", moveTo: "E", facing: "E" }, // 12
        {
            technique: "lowBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "S",
            facing: "S",
            motion: "continuous"
        }, // 13
        {
            technique: "risingBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            facing: "S",
            motion: "continuous"
        }, // 14
        { technique: "risingBlock", stance: "walking", stanceSide: "right", side: "right", moveTo: "S", facing: "S" }, // 15
        { technique: "risingBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "S", facing: "S" }, // 16
        { technique: "risingBlock", stance: "walking", stanceSide: "right", side: "right", moveTo: "S", facing: "S" }, // 17
        { technique: "middleOutwardStrike", stance: "l", stanceSide: "right", side: "left", moveTo: "W", facing: "W" }, // 18
        { technique: "highPunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "W", facing: "W" }, // 19
        { technique: "middleOutwardStrike", stance: "l", stanceSide: "left", side: "right", moveTo: "E", facing: "E" }, // 20
        { technique: "highPunch", stance: "walking", stanceSide: "left", side: "left", moveTo: "E", facing: "E" } // 21
    ],
    end: "Bring the left foot back to a ready posture"
};
