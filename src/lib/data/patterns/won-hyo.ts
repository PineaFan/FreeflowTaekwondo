import type { Pattern } from "./generic";

export const wonHyo: Pattern = {
    slug: "won-hyo",
    name: "Won-Hyo",
    about: ["Won-Hyo was the noted monk who introduced Buddhism to the Silla Dynasty in the year of 686 CE."],
    type: "pattern",
    video: "https://videos.freeflowtaekwondo.com/won-hyo.mp4",
    diagram: "i",
    start: { facing: "N", stance: "closeReadyA" },
    moves: [
        { technique: "twinForearmBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 1
        {
            technique: "highInwardStrike",
            stance: "l",
            stanceSide: "right",
            side: "right",
            reverse: true,
            facing: "W",
            note: "Bring the left side fist in front of the right shoulder"
        }, // 2
        {
            technique: "middlePunch",
            stance: "fixed",
            stanceSide: "left",
            side: "left",
            moveTo: "W",
            moveMethod: "slide",
            facing: "W"
        }, // 3
        { technique: "twinForearmBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "E" }, // 4
        {
            technique: "highInwardStrike",
            stance: "l",
            stanceSide: "left",
            side: "left",
            reverse: true,
            facing: "E",
            note: "Bring the right side fist in front of the left shoulder"
        }, // 5
        {
            technique: "middlePunch",
            stance: "fixed",
            stanceSide: "right",
            side: "right",
            moveTo: "E",
            moveMethod: "slide",
            facing: "E"
        }, // 6
        { stance: "bending", stanceSide: "right", facing: "N" }, // 7
        { technique: "middleSidePiercingKick", stance: "bending", stanceSide: "right", side: "left", facing: "N" }, // 8
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "N", facing: "N" }, // 9
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "left", moveTo: "N", facing: "N" }, // 10
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "N", facing: "N" }, // 11
        { technique: "middleThrust", stance: "walking", stanceSide: "right", side: "right", moveTo: "N", facing: "N" }, // 12
        { technique: "twinForearmBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 13
        {
            technique: "highInwardStrike",
            stance: "l",
            stanceSide: "right",
            side: "right",
            reverse: true,
            facing: "W",
            note: "Bring the left side fist in front of the right shoulder"
        }, // 14
        {
            technique: "middlePunch",
            stance: "fixed",
            stanceSide: "left",
            side: "left",
            moveTo: "W",
            moveMethod: "slide",
            facing: "W"
        }, // 15
        { technique: "twinForearmBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "E" }, // 16
        {
            technique: "highInwardStrike",
            stance: "l",
            stanceSide: "left",
            side: "left",
            reverse: true,
            facing: "E",
            note: "Bring the right side fist in front of the left shoulder"
        }, // 17
        {
            technique: "middlePunch",
            stance: "fixed",
            stanceSide: "right",
            side: "right",
            moveTo: "E",
            moveMethod: "slide",
            facing: "E"
        }, // 18
        {
            technique: "circularBlock",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "S",
            facing: "S",
            note: "Block aimed SE"
        }, // 19
        { technique: "lowFrontSnapKick", stance: "walking", stanceSide: "left", side: "right", facing: "S" }, // 20
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "S",
            facing: "S"
        }, // 21
        {
            technique: "circularBlock",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            facing: "S",
            note: "Block aimed SW"
        }, // 22
        { technique: "lowFrontSnapKick", stance: "walking", stanceSide: "right", side: "left", facing: "S" }, // 23
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "S",
            facing: "S"
        }, // 24
        { stance: "bending", stanceSide: "left", facing: "S" }, // 25
        { technique: "middleSidePiercingKick", stance: "bending", stanceSide: "left", side: "right", facing: "S" }, // 26
        { technique: "middleForearmGuardingBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 27
        { technique: "middleForearmGuardingBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "E" } // 28
    ],
    end: "Bring the right foot back to a ready posture"
};
