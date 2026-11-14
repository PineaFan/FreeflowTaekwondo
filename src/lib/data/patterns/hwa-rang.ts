import type { Pattern } from "./generic";

export const hwaRang: Pattern = {
    slug: "hwa-rang",
    name: "Hwa-Rang",
    about: [
        "Hwa-Rang is named after the Hwa-Rang youth group, which originated in the Silla Dynasty around 600 CE.",
        "The 29 movements refer to the 29th Infantry Division, where Taekwondo developed into maturity."
    ],
    type: "pattern",
    video: "https://videos.freeflowtaekwondo.com/hwa-rang.mp4",
    diagram: "i",
    start: { facing: "N", stance: "closeReadyC" },
    moves: [
        { technique: "middlePushingBlock", stance: "sitting", side: "left", moveTo: "W", facing: "N" }, // 1
        { technique: "middlePunch", stance: "sitting", side: "right", facing: "N" }, // 2
        { technique: "middlePunch", stance: "sitting", side: "left", facing: "N" }, // 3
        { technique: "twinForearmBlock", stance: "l", stanceSide: "left", moveMethod: "pivot", facing: "E" }, // 4
        {
            technique: "upwardPunch",
            stance: "l",
            stanceSide: "left",
            side: "left",
            reverse: true,
            facing: "E",
            note: "Pull the right side fist in front of the left shoulder"
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
        {
            technique: "downwardKnifehandStrike",
            stance: "vertical",
            stanceSide: "left",
            side: "right",
            moveTo: "W",
            moveMethod: "slide",
            facing: "E",
            note: "Pull the right foot back"
        }, // 7
        { technique: "middlePunch", stance: "walking", stanceSide: "left", side: "left", moveTo: "E", facing: "E" }, // 8
        { technique: "lowBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "N", facing: "N" }, // 9
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "N", facing: "N" }, // 10
        {
            stance: "closed",
            moveTo: "S",
            moveMethod: "slide",
            facing: "N",
            note: "Pull the left foot toward the right foot while bringing the left palm to the right fore fist, bending the right elbow about 45 degrees outward"
        }, // 11
        {
            technique: "middleSidePiercingKick",
            also: "middleOutwardStrike",
            stance: "l",
            stanceSide: "left",
            side: "right",
            moveTo: "N",
            facing: "N",
            note: "Pull both hands in the opposite direction during the kick, then lower the foot with a middle outward strike with the right knifehand"
        }, // 12
        { technique: "middlePunch", stance: "walking", stanceSide: "left", side: "left", moveTo: "N", facing: "N" }, // 13
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "N", facing: "N" }, // 14
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 15
        { technique: "middleThrust", stance: "walking", stanceSide: "right", side: "right", moveTo: "W", facing: "W" }, // 16
        {
            technique: "middleGuardingBlock",
            stance: "l",
            stanceSide: "right",
            facing: "E",
            note: "The right foot moves on line EF"
        }, // 17
        {
            technique: "highTurningKick",
            stance: "l",
            stanceSide: "right",
            side: "right",
            facing: "E",
            motion: "fast",
            note: "Kick aimed NE, then lower the foot"
        }, // 18
        {
            technique: "highTurningKick",
            also: "middleGuardingBlock",
            stance: "l",
            stanceSide: "right",
            side: "left",
            moveTo: "E",
            facing: "E",
            motion: "fast",
            note: "Kick aimed SE, then lower the foot with a middle guarding block"
        }, // 19
        { technique: "lowBlock", stance: "walking", stanceSide: "left", side: "left", moveTo: "S", facing: "S" }, // 20
        {
            technique: "middlePunch",
            stance: "l",
            stanceSide: "right",
            side: "right",
            reverse: true,
            moveTo: "N",
            moveMethod: "slide",
            facing: "S"
        }, // 21
        {
            technique: "middlePunch",
            stance: "l",
            stanceSide: "left",
            side: "left",
            reverse: true,
            moveTo: "S",
            facing: "S"
        }, // 22
        {
            technique: "middlePunch",
            stance: "l",
            stanceSide: "right",
            side: "right",
            reverse: true,
            moveTo: "S",
            facing: "S"
        }, // 23
        {
            technique: "xFistPressingBlock",
            stance: "walking",
            stanceSide: "left",
            moveTo: "S",
            moveMethod: "slide",
            facing: "S"
        }, // 24
        {
            technique: "sideElbowThrust",
            stance: "l",
            stanceSide: "right",
            side: "right",
            reverse: true,
            moveTo: "S",
            moveMethod: "slide",
            facing: "N"
        }, // 25
        {
            technique: "sideFrontBlock",
            stance: "closed",
            side: "right",
            facing: "W",
            note: "Extend the left forearm to the side downward"
        }, // 26
        {
            technique: "sideFrontBlock",
            stance: "closed",
            side: "left",
            facing: "W",
            note: "Extend the right forearm to the side downward"
        }, // 27
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 28
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "E" } // 29
    ],
    end: "Bring the right foot back to a ready posture"
};
