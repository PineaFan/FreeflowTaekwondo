import type { Pattern } from "./generic";

export const doSan: Pattern = {
    slug: "do-san",
    name: "Do-San",
    about: [
        "Do-San is the pseudonym of the patriot Ahn Chang-Ho (1876-1938) who devoted his entire life to furthering the education of Korea and its independence movement."
    ],
    type: "pattern",
    video: "https://videos.freeflowtaekwondo.com/do-san.mp4",
    diagram: "s",
    start: { facing: "N", stance: "parallelReady" },
    moves: [
        { technique: "highInnerBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "W", facing: "W" }, // 1
        { technique: "middlePunch", stance: "walking", stanceSide: "left", side: "right", reverse: true, facing: "W" }, // 2
        { technique: "highInnerBlock", stance: "walking", stanceSide: "right", side: "right", moveTo: "E", facing: "E" }, // 3
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "left", reverse: true, facing: "E" }, // 4
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "N", facing: "N" }, // 5
        { technique: "middleThrust", stance: "walking", stanceSide: "right", side: "right", moveTo: "N", facing: "N" }, // 6
        {
            technique: "highSideStrike",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "N",
            facing: "N",
            note: "Twist the right knifehand together with the body counter clockwise until its palm faces downward"
        }, // 7
        {
            technique: "highSideStrike",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "N",
            facing: "N"
        }, // 8
        { technique: "highInnerBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "W", facing: "W" }, // 9
        { technique: "middlePunch", stance: "walking", stanceSide: "left", side: "right", reverse: true, facing: "W" }, // 10
        { technique: "highInnerBlock", stance: "walking", stanceSide: "right", side: "right", moveTo: "E", facing: "E" }, // 11
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "left", reverse: true, facing: "E" }, // 12
        { technique: "highWedgingBlock", stance: "walking", stanceSide: "left", moveTo: "SW", facing: "SW" }, // 13
        { technique: "middleFrontSnapKick", stance: "walking", stanceSide: "left", side: "right", facing: "SW" }, // 14
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "SW",
            facing: "SW",
            motion: "fast"
        }, // 15
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            facing: "SW",
            motion: "fast"
        }, // 16
        { technique: "highWedgingBlock", stance: "walking", stanceSide: "right", moveTo: "SE", facing: "SE" }, // 17
        { technique: "middleFrontSnapKick", stance: "walking", stanceSide: "right", side: "left", facing: "SE" }, // 18
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "SE",
            facing: "SE",
            motion: "fast"
        }, // 19
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            facing: "SE",
            motion: "fast"
        }, // 20
        { technique: "risingBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "S", facing: "S" }, // 21
        { technique: "risingBlock", stance: "walking", stanceSide: "right", side: "right", moveTo: "S", facing: "S" }, // 22
        { technique: "middleSideStrike", stance: "sitting", side: "left", moveTo: "W", facing: "N" }, // 23
        { technique: "middleSideStrike", stance: "sitting", side: "right", moveTo: "E", facing: "N" } // 24
    ],
    end: "Bring the right foot back to a ready posture"
};
