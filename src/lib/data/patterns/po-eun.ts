import type { Pattern } from "./generic";

export const poEun: Pattern = {
    slug: "po-eun",
    name: "Po-Eun",
    about: [
        "Po-Eun is the pseudonym of a loyal subject Chong Mong-Chu (1400) who was a famous poet and whose poem 'I would not serve a second master though I might be crucified a hundred times' is known to every Korean.",
        "He was also a pioneer in the field of physics.",
        "The diagram represents his unerring loyalty to the king and country towards the end of the Koryo Dynasty."
    ],
    type: "pattern",
    video: null,
    diagram: "horizontal",
    start: { facing: "N", stance: "parallelHeavenReady" },
    moves: [
        { technique: "middleForearmGuardingBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 1
        {
            stance: "oneLeg",
            stanceSide: "left",
            facing: "N",
            note: "Pull the right foot to the left knee joint, lifting both fists while turning the face to the east"
        }, // 2
        {
            technique: "pressingKick",
            stance: "oneLeg",
            stanceSide: "left",
            side: "right",
            facing: "N",
            note: "Kick aimed E"
        }, // 3
        { technique: "middleSideStrike", stance: "sitting", side: "right", moveTo: "E", facing: "N" }, // 4
        { technique: "anglePunch", stance: "sitting", side: "left", facing: "N" }, // 5
        {
            technique: "foreFistPressingBlock",
            also: "sideFrontBlock",
            stance: "sitting",
            side: "left",
            facing: "N",
            motion: "continuous",
            note: "Side front block with the right inner forearm"
        }, // 6
        {
            technique: "foreFistPressingBlock",
            also: "sideFrontBlock",
            stance: "sitting",
            side: "right",
            facing: "N",
            motion: "continuous",
            note: "Side front block with the left inner forearm"
        }, // 7
        { technique: "middleWedgingBlock", stance: "sitting", facing: "N", motion: "continuous" }, // 8
        {
            technique: "backElbowThrust",
            stance: "sitting",
            side: "right",
            facing: "N",
            motion: "continuous",
            note: "Thrust aimed S, supporting the right fore fist with the left palm; face stays as in move 8"
        }, // 9
        {
            technique: "middlePunch",
            stance: "sitting",
            side: "right",
            facing: "N",
            motion: "continuous",
            note: "Slip the left palm up to the right elbow joint"
        }, // 10
        {
            technique: "backElbowThrust",
            stance: "sitting",
            side: "left",
            facing: "N",
            motion: "continuous",
            note: "Thrust aimed S, supporting the left fore fist with the right palm; face stays as in move 10"
        }, // 11
        {
            technique: "horizontalPunch",
            stance: "sitting",
            side: "right",
            facing: "N",
            motion: "continuous",
            note: "Punch aimed E"
        }, // 12
        {
            technique: "lowFrontBlock",
            stance: "x",
            stanceSide: "right",
            side: "right",
            moveTo: "E",
            facing: "N",
            note: "Cross the left foot over the right foot; bring the left finger belly onto the right under forearm"
        }, // 13
        { technique: "uShapeGrasp", stance: "l", stanceSide: "left", moveTo: "E", facing: "E" }, // 14
        {
            technique: "horizontalTwinElbowThrust",
            stance: "closed",
            facing: "N",
            motion: "slow",
            note: "Turn the face to the west"
        }, // 15
        {
            technique: "sideBackStrike",
            stance: "sitting",
            side: "right",
            moveTo: "W",
            facing: "N",
            note: "Strike aimed S; extend the left arm to the side downward"
        }, // 16
        {
            technique: "lowFrontBlock",
            stance: "x",
            stanceSide: "left",
            side: "left",
            moveTo: "W",
            facing: "N",
            note: "Cross the right foot over the left foot; bring the right finger belly to the left side fist"
        }, // 17
        { technique: "lowReverseKnifehandGuardingBlock", stance: "sitting", moveTo: "W", facing: "N" }, // 18
        { technique: "middleForearmGuardingBlock", stance: "l", stanceSide: "left", moveMethod: "pivot", facing: "E" }, // 19
        {
            stance: "oneLeg",
            stanceSide: "right",
            facing: "N",
            note: "Pull the left foot to the right knee joint, lifting both fists while turning the face to the west"
        }, // 20
        {
            technique: "pressingKick",
            stance: "oneLeg",
            stanceSide: "right",
            side: "left",
            facing: "N",
            note: "Kick aimed W"
        }, // 21
        { technique: "middleSideStrike", stance: "sitting", side: "left", moveTo: "W", facing: "N" }, // 22
        { technique: "anglePunch", stance: "sitting", side: "right", facing: "N" }, // 23
        {
            technique: "foreFistPressingBlock",
            also: "sideFrontBlock",
            stance: "sitting",
            side: "right",
            facing: "N",
            motion: "continuous",
            note: "Side front block with the left inner forearm"
        }, // 24
        {
            technique: "foreFistPressingBlock",
            also: "sideFrontBlock",
            stance: "sitting",
            side: "left",
            facing: "N",
            motion: "continuous",
            note: "Side front block with the right inner forearm"
        }, // 25
        { technique: "middleWedgingBlock", stance: "sitting", facing: "N", motion: "continuous" }, // 26
        {
            technique: "backElbowThrust",
            stance: "sitting",
            side: "left",
            facing: "N",
            motion: "continuous",
            note: "Thrust aimed S, supporting the left fore fist with the right palm; face stays as in move 26"
        }, // 27
        {
            technique: "middlePunch",
            stance: "sitting",
            side: "left",
            facing: "N",
            motion: "continuous",
            note: "Slip the right palm up to the left elbow joint"
        }, // 28
        {
            technique: "backElbowThrust",
            stance: "sitting",
            side: "right",
            facing: "N",
            motion: "continuous",
            note: "Thrust aimed S, supporting the right fore fist with the left palm; face stays as in move 28"
        }, // 29
        {
            technique: "horizontalPunch",
            stance: "sitting",
            side: "left",
            facing: "N",
            motion: "continuous",
            note: "Punch aimed W"
        }, // 30
        {
            technique: "lowFrontBlock",
            stance: "x",
            stanceSide: "left",
            side: "left",
            moveTo: "W",
            facing: "N",
            note: "Cross the right foot over the left foot; bring the right finger belly onto the left under forearm"
        }, // 31
        { technique: "uShapeGrasp", stance: "l", stanceSide: "right", moveTo: "W", facing: "W" }, // 32
        {
            technique: "horizontalTwinElbowThrust",
            stance: "closed",
            facing: "N",
            motion: "slow",
            note: "Turn the face to the east"
        }, // 33
        {
            technique: "sideBackStrike",
            stance: "sitting",
            side: "left",
            moveTo: "E",
            facing: "N",
            note: "Strike aimed S; extend the right arm to the side downward"
        }, // 34
        {
            technique: "lowFrontBlock",
            stance: "x",
            stanceSide: "right",
            side: "right",
            moveTo: "E",
            facing: "N",
            note: "Cross the left foot over the right foot; bring the left finger belly to the right side fist"
        }, // 35
        { technique: "lowReverseKnifehandGuardingBlock", stance: "sitting", moveTo: "E", facing: "N" } // 36
    ],
    end: "Bring the left foot back to a ready posture"
};
