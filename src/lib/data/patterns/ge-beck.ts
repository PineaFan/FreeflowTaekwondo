import type { Pattern } from "./generic";

export const geBaek: Pattern = {
    slug: "ge-baek",
    name: "Ge-Baek",
    about: [
        "Ge-Baek is named after Ge-Baek, a great general in the Baek Je Dynasty (660 AD).",
        "The diagram represents his severe and strict military discipline."
    ],
    type: "pattern",
    video: null,
    diagram: "vertical",
    start: { facing: "S", stance: "parallelReady" },
    moves: [
        { technique: "checkingBlock", stance: "l", stanceSide: "right", moveTo: "N", facing: "S" }, // 1
        { technique: "lowTwistingKick", stance: "l", stanceSide: "right", side: "right", facing: "S" }, // 2
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "S",
            facing: "S",
            motion: "fast"
        }, // 3
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            facing: "S",
            motion: "fast"
        }, // 4
        {
            technique: "risingBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "N",
            facing: "S",
            motion: "continuous"
        }, // 5
        {
            technique: "lowBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            facing: "S",
            motion: "continuous"
        }, // 6
        {
            technique: "highDoubleArcHandBlock",
            stance: "walking",
            stanceSide: "left",
            facing: "S",
            note: "Block aimed SW, looking through the hands"
        }, // 7
        { stance: "bending", stanceSide: "right", facing: "S" }, // 8
        {
            technique: "scoopingBlock",
            stance: "sitting",
            side: "left",
            moveTo: "SW",
            facing: "NW",
            motion: "connecting"
        }, // 9
        { technique: "middlePunch", stance: "sitting", side: "right", facing: "NW", motion: "connecting" }, // 10
        { technique: "frontStrikeBackFist", stance: "sitting", side: "left", facing: "NW" }, // 11
        {
            technique: "middleGuardingBlock",
            stance: "l",
            stanceSide: "right",
            moveTo: "N",
            facing: "N",
            note: "The right foot first moves on line AB"
        }, // 12
        { technique: "lowSideFrontSnapKick", stance: "l", stanceSide: "right", side: "left", facing: "N" }, // 13
        { technique: "highThrust", stance: "low", stanceSide: "left", side: "left", moveTo: "N", facing: "N" }, // 14
        { technique: "highThrust", stance: "low", stanceSide: "left", side: "right", reverse: true, facing: "N" }, // 15
        {
            technique: "middleSidePiercingKick",
            stance: "low",
            stanceSide: "left",
            side: "right",
            facing: "N",
            note: "Pull both hands in the opposite direction"
        }, // 16
        { technique: "middleForearmGuardingBlock", stance: "l", stanceSide: "right", moveTo: "N", facing: "S" }, // 17
        { technique: "middleForearmGuardingBlock", stance: "l", stanceSide: "right", moveTo: "S", facing: "N" }, // 18
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "S", facing: "S" }, // 19
        {
            technique: "nineShapeBlock",
            stance: "sitting",
            side: "right",
            facing: "W",
            note: "The left foot moves on line CD"
        }, // 20
        {
            technique: "lowKnifehandBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "S",
            facing: "N"
        }, // 21
        {
            technique: "middleTurningKick",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            facing: "N",
            motion: "fast",
            note: "Kick aimed NE, then lower the foot"
        }, // 22
        {
            technique: "flyingSidePiercingKick",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            moveTo: "N",
            moveMethod: "jump",
            facing: "N",
            motion: "fast"
        }, // 23
        { technique: "twinVerticalPunch", stance: "walking", stanceSide: "right", moveTo: "N", facing: "N" }, // 24
        {
            technique: "highDoubleArcHandBlock",
            stance: "walking",
            stanceSide: "right",
            facing: "N",
            note: "Block aimed NW, looking through the hands"
        }, // 25
        { technique: "upsetPunch", stance: "walking", stanceSide: "right", side: "left", reverse: true, facing: "N" }, // 26
        {
            technique: "frontElbowStrike",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            facing: "S",
            note: "Strike the left palm with the right front elbow; the right foot moves on line CD"
        }, // 27
        {
            technique: "highDoubleForearmBlock",
            stance: "x",
            stanceSide: "right",
            side: "right",
            moveTo: "S",
            moveMethod: "jump",
            facing: "SE"
        }, // 28
        {
            technique: "scoopingBlock",
            stance: "sitting",
            side: "right",
            moveTo: "NE",
            facing: "SE",
            motion: "connecting"
        }, // 29
        { technique: "middlePunch", stance: "sitting", side: "left", facing: "SE", motion: "connecting" }, // 30
        { technique: "frontStrikeBackFist", stance: "sitting", side: "right", facing: "SE" }, // 31
        {
            technique: "highFrontReverseKnifehandStrike",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "N",
            facing: "N"
        }, // 32
        {
            technique: "middleTurningKick",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            moveTo: "W",
            facing: "N",
            note: "The left foot moves about half a shoulder width"
        }, // 33
        {
            technique: "twinVerticalPunch",
            stance: "walking",
            stanceSide: "left",
            moveTo: "N",
            moveMethod: "pivot",
            facing: "S",
            note: "Lower the right foot to C, then turn counter clockwise pivoting with the right foot"
        }, // 34
        {
            technique: "middleKnucklePunch",
            stance: "l",
            stanceSide: "right",
            side: "right",
            reverse: true,
            moveTo: "S",
            moveMethod: "slide",
            facing: "S",
            note: "Bring the left side fist in front of the right shoulder; pull the left foot"
        }, // 35
        { technique: "nineShapeBlock", stance: "sitting", side: "left", moveTo: "S", facing: "E" }, // 36
        {
            technique: "lowReverseKnifehandGuardingBlock",
            stance: "sitting",
            facing: "E",
            motion: "continuous",
            note: "Block aimed N"
        }, // 37
        { technique: "lowGuardingBlock", stance: "sitting", facing: "E", motion: "continuous", note: "Block aimed S" }, // 38
        { technique: "wShapeBlock", stance: "sitting", moveTo: "S", facing: "W", note: "Stamping motion" }, // 39
        { technique: "wShapeBlock", stance: "sitting", moveTo: "N", facing: "E", note: "Stamping motion" }, // 40
        { technique: "risingBlock", stance: "walking", stanceSide: "right", side: "right", moveTo: "N", facing: "N" }, // 41
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "left", reverse: true, facing: "N" }, // 42
        {
            technique: "risingBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            facing: "S",
            note: "The right foot moves on line CD"
        }, // 43
        { technique: "middlePunch", stance: "walking", stanceSide: "left", side: "right", reverse: true, facing: "S" } // 44
    ],
    end: "Bring the right foot back to a ready posture"
};
