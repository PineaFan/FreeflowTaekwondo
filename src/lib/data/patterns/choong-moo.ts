import type { Pattern } from "./generic";

export const choongMoo: Pattern = {
    slug: "choong-moo",
    name: "Choong-Moo",
    about: [
        "Choong-Moo was the name given to the great admiral Yi Sun Sin of the Yi dynasty.",
        "He was reputed to have invented the first armoured battleship (Kobukson) which was the precursor of the present day submarine, in 1592 CE.",
        "The reason why this pattern ends in a left hand attack is to symbolise his regrettable death having no chance to show his unrestrained potentiality checked by the forced reservation of his loyalty to the king."
    ],
    type: "pattern",
    video: "https://videos.freeflowtaekwondo.com/choong-moo.mp4",
    diagram: "i",
    start: { facing: "N", stance: "parallelReady" },
    moves: [
        { technique: "twinKnifehandBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 1
        {
            technique: "highFrontStrike",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "W",
            facing: "W",
            note: "Bring the left back hand in front of the forehead"
        }, // 2
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "E" }, // 3
        { technique: "highThrust", stance: "walking", stanceSide: "left", side: "left", moveTo: "E", facing: "E" }, // 4
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "N", facing: "N" }, // 5
        { stance: "bending", stanceSide: "left", facing: "S" }, // 6
        { technique: "middleSidePiercingKick", stance: "bending", stanceSide: "left", side: "right", facing: "S" }, // 7
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "S", facing: "N" }, // 8
        {
            technique: "flyingSidePiercingKick",
            also: "middleGuardingBlock",
            stance: "l",
            stanceSide: "left",
            side: "right",
            moveTo: "N",
            moveMethod: "jump",
            facing: "N",
            note: "Land forming a left L-stance with a middle guarding block"
        }, // 9
        { technique: "lowBlock", stance: "l", stanceSide: "right", side: "left", moveTo: "W", facing: "W" }, // 10
        {
            stance: "walking",
            stanceSide: "left",
            moveTo: "W",
            moveMethod: "slide",
            facing: "W",
            note: "Extend both hands upward as if to grab the opponent's head"
        }, // 11
        {
            technique: "upwardKneeKick",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            facing: "W",
            note: "Pull both hands downward"
        }, // 12
        {
            technique: "highFrontReverseKnifehandStrike",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "E",
            facing: "E",
            note: "Bring the left back hand under the right elbow joint"
        }, // 13
        {
            technique: "highTurningKick",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            facing: "E",
            motion: "fast",
            note: "Kick aimed NE, then lower the right foot to the left foot"
        }, // 14
        {
            technique: "middleBackPiercingKick",
            stance: "closed",
            side: "left",
            facing: "W",
            motion: "fast",
            note: "Kick aimed E; the body turns away from the target"
        }, // 15
        { technique: "middleForearmGuardingBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "W" }, // 16
        {
            technique: "middleTurningKick",
            stance: "l",
            stanceSide: "left",
            side: "left",
            facing: "W",
            note: "Kick aimed NW"
        }, // 17
        { technique: "uShapeBlock", stance: "fixed", stanceSide: "right", moveTo: "S", facing: "S" }, // 18
        {
            technique: "middleGuardingBlock",
            stance: "l",
            stanceSide: "left",
            moveMethod: "jump",
            facing: "S",
            note: "Jump and spin counter clockwise, landing on the same spot"
        }, // 19
        {
            technique: "lowThrust",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "S",
            facing: "S"
        }, // 20
        {
            technique: "sideBackStrike",
            also: "lowBlock",
            stance: "l",
            stanceSide: "right",
            side: "right",
            reverse: true,
            moveTo: "N",
            moveMethod: "slide",
            facing: "S",
            note: "Side back strike aimed N with the right back fist; low block aimed S with the left forearm"
        }, // 21
        { technique: "middleThrust", stance: "walking", stanceSide: "right", side: "right", moveTo: "S", facing: "S" }, // 22
        {
            technique: "highDoubleForearmBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "W",
            facing: "W"
        }, // 23
        {
            technique: "middleFrontBlock",
            also: "highSideStrike",
            stance: "sitting",
            side: "right",
            moveTo: "W",
            facing: "S",
            note: "Middle front block aimed S, then high side strike aimed W with the right back fist"
        }, // 24
        {
            technique: "middleSidePiercingKick",
            stance: "sitting",
            side: "right",
            facing: "S",
            note: "Turning counter clockwise; kick aimed E, then lower the foot"
        }, // 25
        {
            technique: "middleSidePiercingKick",
            stance: "sitting",
            side: "left",
            facing: "S",
            note: "Turning clockwise; kick aimed E"
        }, // 26
        {
            technique: "checkingBlock",
            stance: "l",
            stanceSide: "left",
            moveTo: "E",
            moveMethod: "pivot",
            facing: "W",
            note: "Lower the left foot to the east first"
        }, // 27
        { technique: "upwardTwinPalmBlock", stance: "walking", stanceSide: "left", moveTo: "W", facing: "W" }, // 28
        { technique: "risingBlock", stance: "walking", stanceSide: "right", side: "right", moveTo: "E", facing: "E" }, // 29
        { technique: "middlePunch", stance: "walking", stanceSide: "right", side: "left", reverse: true, facing: "E" } // 30
    ],
    end: "Bring the left foot back to a ready posture"
};
