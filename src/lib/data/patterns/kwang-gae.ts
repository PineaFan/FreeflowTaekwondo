import type { Pattern } from "./generic";

export const kwangGae: Pattern = {
    slug: "kwang-gae",
    name: "Kwang-Gae",
    about: [
        "Kwang-Gae is named after the famous Kwang-Gae-Toh-Wang, the 19th king of the Koguryo Dynasty, who regained all the lost territories including the greater part of Manchuria.",
        "The diagram represents the expansion and recovery of lost territory.",
        "The 39 movements refer to the first two figures of 391 CE, the year he came to the throne."
    ],
    type: "pattern",
    video: "https://videos.freeflowtaekwondo.com/kwang-gae.mp4",
    diagram: "scholar",
    start: { facing: "N", stance: "parallelHeavenReady" },
    moves: [
        { stance: "closeReadyB", facing: "N", note: "Bring both hands in a circular motion" }, // 1
        {
            technique: "upsetPunch",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "N",
            facing: "N",
            motion: "slow"
        }, // 2
        {
            technique: "upsetPunch",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "N",
            facing: "N",
            motion: "slow"
        }, // 3
        {
            technique: "highHookingBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "N",
            facing: "N",
            note: "Double stepping motion"
        }, // 4
        {
            technique: "lowGuardingBlock",
            stance: "l",
            stanceSide: "right",
            moveTo: "S",
            moveMethod: "slide",
            facing: "N"
        }, // 5
        {
            technique: "highHookingBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "N",
            facing: "N",
            note: "Double stepping motion"
        }, // 6
        {
            technique: "lowGuardingBlock",
            stance: "l",
            stanceSide: "left",
            moveTo: "S",
            moveMethod: "slide",
            facing: "N"
        }, // 7
        { technique: "knifehandGuardingBlock", stance: "rear", stanceSide: "right", moveTo: "N", facing: "N" }, // 8
        { technique: "knifehandGuardingBlock", stance: "rear", stanceSide: "left", moveTo: "N", facing: "N" }, // 9
        {
            technique: "upwardPalmBlock",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveMethod: "pivot",
            facing: "S",
            motion: "slow"
        }, // 10
        {
            technique: "upwardPalmBlock",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "S",
            facing: "S",
            motion: "slow"
        }, // 11
        {
            technique: "lowFrontKnifehandBlock",
            stance: "closed",
            side: "right",
            facing: "S",
            note: "Circular motion, hitting the left palm"
        }, // 12
        {
            technique: "pressingKick",
            stance: "closed",
            side: "left",
            facing: "S",
            motion: "consecutive",
            note: "Kick aimed W"
        }, // 13
        {
            technique: "middleSidePiercingKick",
            stance: "closed",
            side: "left",
            facing: "S",
            motion: "consecutive",
            note: "Kick aimed W"
        }, // 14
        {
            technique: "highInwardStrike",
            stance: "l",
            stanceSide: "right",
            side: "right",
            reverse: true,
            moveTo: "W",
            facing: "W",
            note: "Bring the left side fist in front of the right shoulder"
        }, // 15
        {
            technique: "downwardSideFistStrike",
            stance: "closed",
            side: "left",
            facing: "S",
            note: "Strike aimed W; pull the left foot to the right foot"
        }, // 16
        {
            technique: "pressingKick",
            stance: "closed",
            side: "right",
            facing: "S",
            motion: "consecutive",
            note: "Kick aimed E"
        }, // 17
        {
            technique: "middleSidePiercingKick",
            stance: "closed",
            side: "right",
            facing: "S",
            motion: "consecutive",
            note: "Kick aimed E"
        }, // 18
        {
            technique: "highInwardStrike",
            stance: "l",
            stanceSide: "left",
            side: "left",
            reverse: true,
            moveTo: "E",
            facing: "E",
            note: "Bring the right side fist in front of the left shoulder"
        }, // 19
        {
            technique: "downwardSideFistStrike",
            stance: "closed",
            side: "right",
            facing: "S",
            note: "Strike aimed E; pull the right foot to the left foot"
        }, // 20
        {
            technique: "palmPressingBlock",
            stance: "low",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "S",
            facing: "S",
            motion: "slow"
        }, // 21
        {
            technique: "palmPressingBlock",
            stance: "low",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "S",
            facing: "S",
            motion: "slow"
        }, // 22
        {
            technique: "highSideStrike",
            stance: "sitting",
            side: "right",
            moveTo: "N",
            facing: "E",
            note: "Stamping motion"
        }, // 23
        {
            technique: "middleDoubleForearmBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveMethod: "pivot",
            facing: "N"
        }, // 24
        {
            technique: "lowBlock",
            stance: "walking",
            stanceSide: "right",
            side: "left",
            reverse: true,
            moveTo: "S",
            moveMethod: "slide",
            facing: "N",
            note: "Shift back, keeping the right hand as in move 24"
        }, // 25
        {
            technique: "highThrust",
            stance: "low",
            stanceSide: "right",
            side: "right",
            moveTo: "N",
            moveMethod: "slide",
            facing: "N",
            motion: "slow"
        }, // 26
        {
            technique: "highSideStrike",
            stance: "sitting",
            side: "left",
            facing: "E",
            note: "Stamping motion; the left foot moves on line CD"
        }, // 27
        {
            technique: "middleDoubleForearmBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveMethod: "pivot",
            facing: "S"
        }, // 28
        {
            technique: "lowBlock",
            stance: "walking",
            stanceSide: "left",
            side: "right",
            reverse: true,
            moveTo: "N",
            moveMethod: "slide",
            facing: "S",
            note: "Shift forward, keeping the left hand as in move 28"
        }, // 29
        {
            technique: "highThrust",
            stance: "low",
            stanceSide: "left",
            side: "left",
            moveTo: "S",
            moveMethod: "slide",
            facing: "S",
            motion: "slow"
        }, // 30
        {
            technique: "twinVerticalPunch",
            stance: "walking",
            stanceSide: "right",
            moveTo: "S",
            facing: "S",
            note: "Stamping motion"
        }, // 31
        {
            technique: "twinUpsetPunch",
            stance: "walking",
            stanceSide: "left",
            moveTo: "E",
            facing: "E",
            note: "Stamping motion"
        }, // 32
        { technique: "middleFrontSnapKick", stance: "walking", stanceSide: "left", side: "right", facing: "E" }, // 33
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "left", moveTo: "E", facing: "W" }, // 34
        { technique: "highPunch", stance: "walking", stanceSide: "left", side: "left", moveTo: "W", facing: "W" }, // 35
        {
            technique: "twinUpsetPunch",
            stance: "walking",
            stanceSide: "right",
            moveTo: "W",
            facing: "W",
            note: "Stamping motion"
        }, // 36
        { technique: "middleFrontSnapKick", stance: "walking", stanceSide: "right", side: "left", facing: "W" }, // 37
        { technique: "middleGuardingBlock", stance: "l", stanceSide: "right", moveTo: "W", facing: "E" }, // 38
        { technique: "highPunch", stance: "walking", stanceSide: "right", side: "right", moveTo: "E", facing: "E" } // 39
    ],
    end: "Bring the left foot back to a ready posture"
};
