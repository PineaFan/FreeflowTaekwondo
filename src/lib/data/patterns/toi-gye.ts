import type { Pattern } from "./generic";

export const toiGye: Pattern = {
    slug: "toi-gye",
    name: "Toi-Gye",
    about: [
        "Toi-Gye is the pen name of the noted scholar Yi Hwang (16th century), an authority on neo-Confucianism.",
        "The 37 movements of the pattern refer to his birthplace on 37° latitude, the diagram represents scholar."
    ],
    type: "pattern",
    video: "https://videos.freeflowtaekwondo.com/toi-gye.mp4",
    diagram: "scholar",
    start: { facing: "N", stance: "closeReadyB" },
    moves: [
        { technique: "middleBlock", stance: "l", stanceSide: "right", side: "left", moveTo: "W", facing: "W" }, // 1
        {
            technique: "lowThrust",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "W",
            moveMethod: "slide",
            facing: "W"
        }, // 2
        {
            technique: "sideBackStrike",
            stance: "closed",
            side: "right",
            facing: "N",
            motion: "slow",
            note: "Strike aimed S; extend the left arm to the side downward"
        }, // 3
        { technique: "middleBlock", stance: "l", stanceSide: "left", side: "right", moveTo: "E", facing: "E" }, // 4
        {
            technique: "lowThrust",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "E",
            moveMethod: "slide",
            facing: "E"
        }, // 5
        {
            technique: "sideBackStrike",
            stance: "closed",
            side: "left",
            facing: "N",
            motion: "slow",
            note: "Strike aimed S; extend the right arm to the side downward"
        }, // 6
        {
            technique: "xFistPressingBlock",
            stance: "walking",
            stanceSide: "left",
            moveTo: "N",
            facing: "N",
            motion: "continuous"
        }, // 7
        { technique: "twinVerticalPunch", stance: "walking", stanceSide: "left", facing: "N", motion: "continuous" }, // 8
        { technique: "middleFrontSnapKick", stance: "walking", stanceSide: "left", side: "right", facing: "N" }, // 9
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "N", facing: "N" }, // 10
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "left", reverse: true, facing: "N" }, // 11
        { technique: "twinSideElbowThrust", stance: "closed", facing: "E", motion: "slow" }, // 12
        {
            technique: "wShapeBlock",
            stance: "sitting",
            side: "right",
            moveTo: "E",
            facing: "S",
            note: "Stamping motion"
        }, // 13
        {
            technique: "wShapeBlock",
            stance: "sitting",
            side: "left",
            moveTo: "E",
            facing: "N",
            note: "Stamping motion"
        }, // 14
        {
            technique: "wShapeBlock",
            stance: "sitting",
            side: "left",
            moveTo: "W",
            facing: "S",
            note: "Stamping motion"
        }, // 15
        {
            technique: "wShapeBlock",
            stance: "sitting",
            side: "right",
            moveTo: "W",
            facing: "N",
            note: "Stamping motion"
        }, // 16
        {
            technique: "wShapeBlock",
            stance: "sitting",
            side: "left",
            moveTo: "W",
            facing: "S",
            note: "Stamping motion"
        }, // 17
        {
            technique: "wShapeBlock",
            stance: "sitting",
            side: "left",
            moveTo: "E",
            facing: "N",
            note: "Stamping motion"
        }, // 18
        { technique: "lowPushingBlock", stance: "l", stanceSide: "right", side: "left", moveTo: "N", facing: "N" }, // 19
        {
            stance: "walking",
            stanceSide: "left",
            moveTo: "N",
            moveMethod: "slide",
            facing: "N",
            note: "Extend both hands upward as if to grab the opponent's head"
        }, // 20
        {
            technique: "upwardKneeKick",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            facing: "N",
            note: "Pull both hands downward"
        }, // 21
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "S", facing: "S" }, // 22
        { technique: "lowSideFrontSnapKick", stance: "l", stanceSide: "right", side: "left", facing: "S" }, // 23
        { technique: "highThrust", stance: "walking", stanceSide: "left", side: "left", moveTo: "S", facing: "S" }, // 24
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "left", moveTo: "S", facing: "S" }, // 25
        { technique: "lowSideFrontSnapKick", stance: "l", stanceSide: "left", side: "right", facing: "S" }, // 26
        { technique: "highThrust", stance: "walking", stanceSide: "right", side: "right", moveTo: "S", facing: "S" }, // 27
        {
            technique: "sideBackStrike",
            also: "lowBlock",
            stance: "l",
            stanceSide: "right",
            side: "right",
            reverse: true,
            moveTo: "N",
            facing: "S",
            note: "Side back strike aimed N; low block aimed S with the left forearm"
        }, // 28
        {
            technique: "xFistPressingBlock",
            stance: "x",
            stanceSide: "right",
            moveTo: "S",
            moveMethod: "jump",
            facing: "E"
        }, // 29
        {
            technique: "highDoubleForearmBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "S",
            facing: "S"
        }, // 30
        { technique: "lowGuardingBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 31
        {
            technique: "circularBlock",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "W",
            moveMethod: "slide",
            facing: "W",
            note: "Block aimed NW"
        }, // 32
        { technique: "lowGuardingBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "E" }, // 33
        {
            technique: "circularBlock",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "E",
            moveMethod: "slide",
            facing: "E",
            note: "Block aimed NE"
        }, // 34
        {
            technique: "circularBlock",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "SW",
            facing: "SW",
            note: "Block aimed SW"
        }, // 35
        {
            technique: "circularBlock",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "E",
            facing: "E",
            note: "Block aimed NE"
        }, // 36
        {
            technique: "middlePunch",
            stance: "sitting",
            side: "right",
            facing: "N",
            note: "The right foot moves along the line AB (east-west line)"
        } // 37
    ],
    end: "Bring the right foot back to a ready posture"
};
