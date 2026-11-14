import type { Pattern } from "./generic";

export const joongGun: Pattern = {
    slug: "joong-gun",
    name: "Joong-Gun",
    about: [
        "Joong-Gun is named after the patriot Ahn Joong-Gun who assassinated Hiro-Bumi Ito, the first Japanese governor general of Korea, known as the man who played a leading role in the Korea-Japan merger.",
        "The 32 movements of this pattern refer to Mr Ahn's age when he was executed in Lui-Shung prison in 1910."
    ],
    type: "pattern",
    video: "https://videos.freeflowtaekwondo.com/joong-gun.mp4",
    diagram: "i",
    start: { facing: "N", stance: "closeReadyB" },
    moves: [
        {
            technique: "middleReverseKnifehandBlock",
            stance: "l",
            stanceSide: "right",
            side: "left",
            moveTo: "W",
            facing: "W"
        }, // 1
        { technique: "lowSideFrontSnapKick", stance: "l", stanceSide: "right", side: "left", facing: "W" }, // 2
        { technique: "upwardPalmBlock", stance: "rear", stanceSide: "left", side: "right", moveTo: "W", facing: "W" }, // 3
        {
            technique: "middleReverseKnifehandBlock",
            stance: "l",
            stanceSide: "left",
            side: "right",
            moveTo: "E",
            facing: "E"
        }, // 4
        { technique: "lowSideFrontSnapKick", stance: "l", stanceSide: "left", side: "right", facing: "E" }, // 5
        { technique: "upwardPalmBlock", stance: "rear", stanceSide: "right", side: "left", moveTo: "E", facing: "E" }, // 6
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "N", facing: "N" }, // 7
        {
            technique: "upperElbowStrike",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "N",
            moveMethod: "slide",
            facing: "N"
        }, // 8
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "left", moveTo: "N", facing: "N" }, // 9
        {
            technique: "upperElbowStrike",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "N",
            moveMethod: "slide",
            facing: "N"
        }, // 10
        { technique: "twinVerticalPunch", stance: "walking", stanceSide: "left", moveTo: "N", facing: "N" }, // 11
        { technique: "twinUpsetPunch", stance: "walking", stanceSide: "right", moveTo: "N", facing: "N" }, // 12
        { technique: "xFistRisingBlock", stance: "walking", stanceSide: "left", moveTo: "S", facing: "S" }, // 13
        { technique: "highSideStrike", stance: "l", stanceSide: "right", side: "left", moveTo: "W", facing: "W" }, // 14
        {
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "W",
            moveMethod: "slide",
            facing: "W",
            motion: "fast",
            note: "Twist the left fist counter clockwise until the back fist faces downward"
        }, // 15
        {
            technique: "highPunch",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            facing: "W",
            motion: "fast"
        }, // 16
        { technique: "highSideStrike", stance: "l", stanceSide: "left", side: "right", moveTo: "E", facing: "E" }, // 17
        {
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "E",
            moveMethod: "slide",
            facing: "E",
            motion: "fast",
            note: "Twist the right fist clockwise until the back fist faces downward"
        }, // 18
        {
            technique: "highPunch",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            facing: "E",
            motion: "fast"
        }, // 19
        {
            technique: "highDoubleForearmBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "S",
            facing: "S"
        }, // 20
        {
            technique: "middlePunch",
            stance: "l",
            stanceSide: "right",
            side: "left",
            moveTo: "N",
            moveMethod: "slide",
            facing: "S"
        }, // 21
        { technique: "middleSidePiercingKick", stance: "l", stanceSide: "right", side: "right", facing: "S" }, // 22
        {
            technique: "highDoubleForearmBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "S",
            facing: "S"
        }, // 23
        {
            technique: "middlePunch",
            stance: "l",
            stanceSide: "left",
            side: "right",
            moveTo: "N",
            moveMethod: "slide",
            facing: "S"
        }, // 24
        { technique: "middleSidePiercingKick", stance: "l", stanceSide: "left", side: "left", facing: "S" }, // 25
        { technique: "middleForearmGuardingBlock", stance: "l", stanceSide: "right", moveTo: "S", facing: "S" }, // 26
        {
            technique: "palmPressingBlock",
            stance: "low",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "S",
            moveMethod: "slide",
            facing: "S",
            motion: "slow"
        }, // 27
        { technique: "middleForearmGuardingBlock", stance: "l", stanceSide: "left", moveTo: "S", facing: "S" }, // 28
        {
            technique: "palmPressingBlock",
            stance: "low",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "S",
            moveMethod: "slide",
            facing: "S",
            motion: "slow"
        }, // 29
        { technique: "anglePunch", stance: "closed", side: "right", facing: "E", motion: "slow" }, // 30
        { technique: "uShapeBlock", stance: "fixed", stanceSide: "right", moveTo: "E", facing: "E" }, // 31
        { technique: "uShapeBlock", stance: "fixed", stanceSide: "left", moveTo: "W", facing: "W" } // 32
    ],
    end: "Bring the left foot back to a ready posture"
};
