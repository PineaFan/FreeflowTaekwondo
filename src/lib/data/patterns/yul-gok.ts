import type { Pattern } from "./generic";

export const yulGok: Pattern = {
    slug: "yul-gok",
    name: "Yul-Gok",
    about: [
        "Yul-Gok is the pseudonym of a great philosopher and scholar Yi I (1536-1584) nicknamed the Confucius of Korea.",
        "The 38 movements of this pattern refer to his birthplace on 38° latitude and the diagram represents a scholar."
    ],
    type: "pattern",
    video: "https://videos.freeflowtaekwondo.com/yul-gok.mp4",
    diagram: "scholar",
    start: { facing: "N", stance: "parallelReady" },
    moves: [
        {
            stance: "sitting",
            side: "left",
            moveTo: "W",
            facing: "N",
            note: "Extend the left fist forward (N) horizontally"
        }, // 1
        { technique: "middlePunch", stance: "sitting", side: "right", facing: "N", motion: "fast" }, // 2
        { technique: "middlePunch", stance: "sitting", side: "left", facing: "N", motion: "fast" }, // 3
        {
            stance: "sitting",
            side: "right",
            moveTo: "E",
            facing: "N",
            note: "Extend the right fist forward (N) horizontally"
        }, // 4
        { technique: "middlePunch", stance: "sitting", side: "left", facing: "N", motion: "fast" }, // 5
        { technique: "middlePunch", stance: "sitting", side: "right", facing: "N", motion: "fast" }, // 6
        {
            technique: "middleInnerBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "NE",
            facing: "NE"
        }, // 7
        { technique: "lowFrontSnapKick", stance: "walking", stanceSide: "right", side: "left", facing: "NE" }, // 8
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "NE",
            facing: "NE",
            motion: "fast"
        }, // 9
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            facing: "NE",
            motion: "fast"
        }, // 10
        {
            technique: "middleInnerBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "NW",
            facing: "NW"
        }, // 11
        { technique: "lowFrontSnapKick", stance: "walking", stanceSide: "left", side: "right", facing: "NW" }, // 12
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "NW",
            facing: "NW",
            motion: "fast"
        }, // 13
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            facing: "NW",
            motion: "fast"
        }, // 14
        {
            technique: "middleHookingBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveMethod: "pivot",
            facing: "N"
        }, // 15
        {
            technique: "middleHookingBlock",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            facing: "N",
            motion: "connecting"
        }, // 16
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            facing: "N",
            motion: "connecting"
        }, // 17
        {
            technique: "middleHookingBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "N",
            facing: "N"
        }, // 18
        {
            technique: "middleHookingBlock",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            facing: "N",
            motion: "connecting"
        }, // 19
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            facing: "N",
            motion: "connecting"
        }, // 20
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "N", facing: "N" }, // 21
        { stance: "bending", stanceSide: "right", facing: "N" }, // 22
        { technique: "middleSidePiercingKick", stance: "bending", stanceSide: "right", side: "left", facing: "N" }, // 23
        {
            technique: "frontElbowStrike",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "N",
            facing: "N",
            note: "Strike the left palm with the right front elbow"
        }, // 24
        { stance: "bending", stanceSide: "left", facing: "S" }, // 25
        { technique: "middleSidePiercingKick", stance: "bending", stanceSide: "left", side: "right", facing: "S" }, // 26
        {
            technique: "frontElbowStrike",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "S",
            facing: "S",
            note: "Strike the right palm with the left front elbow"
        }, // 27
        { technique: "twinKnifehandBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 28
        { technique: "middleThrust", stance: "walking", stanceSide: "right", side: "right", moveTo: "W", facing: "W" }, // 29
        { technique: "twinKnifehandBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "E" }, // 30
        { technique: "middleThrust", stance: "walking", stanceSide: "left", side: "left", moveTo: "E", facing: "E" }, // 31
        { technique: "highInnerBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "S", facing: "S" }, // 32
        { technique: "middlePunch", stance: "walking", stanceSide: "left", side: "right", reverse: true, facing: "S" }, // 33
        { technique: "highInnerBlock", stance: "walking", stanceSide: "right", side: "right", moveTo: "S", facing: "S" }, // 34
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "left", reverse: true, facing: "S" }, // 35
        {
            technique: "highSideStrike",
            stance: "x",
            stanceSide: "left",
            side: "left",
            moveTo: "S",
            moveMethod: "jump",
            facing: "W"
        }, // 36
        {
            technique: "highDoubleForearmBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "E",
            facing: "E"
        }, // 37
        {
            technique: "highDoubleForearmBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "W",
            facing: "W"
        } // 38
    ],
    end: "Bring the left foot back to a ready posture"
};
