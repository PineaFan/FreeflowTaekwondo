import type { MoveMethod, Side, StanceId, TechniqueId } from "@/lib/data/patterns/generic";

export type SparringType = "three-step" | "two-step" | "one-step";

export type SparringMove = {
    technique: TechniqueId;
    stance?: StanceId;
    stanceSide?: Side; // the side named in the stance (see Move in generic.ts)
    side?: Side; // the hand/foot performing the technique
    reverse?: boolean; // default false (obverse)
    moveMethod?: MoveMethod;
    footwork?: string; // how the feet move into the move, e.g. "Right leg back"
    note?: string; // qualifiers that don't fit elsewhere, e.g. "to the inside"
};

// `description` is the original wording (always shown); `moves` is the structured version.
// Open-ended routines (e.g. 1 step freestyle) have a description and no moves.
export type SparringPhase = { description: string; moves: SparringMove[] };

export type SparringRoutine = {
    name: string;
    type: SparringType;
    measure?: string; // starting distance / foot placement
    start?: SparringPhase; // the attacker's ready position
    attack: SparringPhase;
    defence: SparringPhase; // block(s) by the defender
    counter?: SparringPhase; // the defender's counter-attack(s)
};

const stepBackWalkingLowBlock: SparringPhase = {
    description: "Step back into a Walking Stance Low Block",
    moves: [{ technique: "lowBlock", stance: "walking", footwork: "stepping backwards", stanceSide: "left" }]
};
const stepBackLGuard: SparringPhase = {
    description: "Step back into an L-stance Guarding Block",
    moves: [{ technique: "middleGuardingBlock", stance: "l", footwork: "Step back", stanceSide: "right" }]
};
const stepBackGuard: SparringMove = { technique: "middleGuardingBlock", stance: "l", footwork: "Stepping back" };

export const prearrangedSparring = {
    "3-step-1": {
        name: "3 Step #1",
        type: "three-step",
        measure: "Right foot outside opponent's left foot, overlapping half way.",
        start: stepBackWalkingLowBlock,
        attack: {
            description: "Walking stance, middle section punch",
            moves: [
                { technique: "middlePunch", stance: "walking", stanceSide: "right" },
                { technique: "middlePunch", stance: "walking", stanceSide: "left" },
                { technique: "middlePunch", stance: "walking", stanceSide: "right" }
            ]
        },
        defence: {
            description: "Right leg back, Walking stance, inner forearm block to the inside",
            moves: [
                {
                    technique: "middleBlock",
                    stance: "walking",
                    stanceSide: "left",
                    footwork: "Right leg back",
                    note: "Inner forearm, to the inside"
                },
                {
                    technique: "middleBlock",
                    stance: "walking",
                    stanceSide: "right",
                    footwork: "Left leg back",
                    note: "Inner forearm, to the inside"
                },
                {
                    technique: "middleBlock",
                    stance: "walking",
                    stanceSide: "left",
                    footwork: "Right leg back",
                    note: "Inner forearm, to the inside"
                }
            ]
        },
        counter: {
            description: "Left Walking stance, middle reverse punch",
            moves: [{ technique: "middlePunch", stance: "walking", stanceSide: "left", side: "right", reverse: true }]
        }
    },
    "3-step-2": {
        name: "3 Step #2",
        type: "three-step",
        measure: "Right foot outside opponent's left foot, heels overlapping.",
        start: stepBackWalkingLowBlock,
        attack: {
            description: "Walking stance, high section punch",
            moves: [
                { technique: "highPunch", stance: "walking", stanceSide: "right" },
                { technique: "highPunch", stance: "walking", stanceSide: "left" },
                { technique: "highPunch", stance: "walking", stanceSide: "right" }
            ]
        },
        defence: {
            description: "Right leg back, Walking stance, front rising block",
            moves: [
                {
                    technique: "risingBlock",
                    stance: "walking",
                    stanceSide: "left",
                    footwork: "Right leg back",
                    note: "Front rising block"
                },
                {
                    technique: "risingBlock",
                    stance: "walking",
                    stanceSide: "right",
                    footwork: "Left leg back",
                    note: "Front rising block"
                },
                {
                    technique: "risingBlock",
                    stance: "walking",
                    stanceSide: "left",
                    footwork: "Right leg back",
                    note: "Front rising block"
                }
            ]
        },
        counter: {
            description: "Left Walking stance, high reverse open fist strike",
            moves: [
                { technique: "highOpenFistStrike", stance: "walking", stanceSide: "left", side: "right", reverse: true }
            ]
        }
    },
    "3-step-3": {
        name: "3 Step #3",
        type: "three-step",
        measure: "Right foot between opponent's feet, overlapping half way.",
        start: stepBackWalkingLowBlock,
        attack: {
            description: "L-stance, middle section reverse punch",
            moves: [
                { technique: "middlePunch", stance: "l", reverse: true },
                { technique: "middlePunch", stance: "l", reverse: true },
                { technique: "middlePunch", stance: "l", reverse: true }
            ]
        },
        defence: {
            description: "Left leg back, L-stance, twin forearm block to the outside",
            moves: [
                {
                    technique: "twinForearmBlock",
                    stance: "l",
                    stanceSide: "left",
                    footwork: "Left leg back",
                    note: "To the outside"
                },
                {
                    technique: "twinForearmBlock",
                    stance: "l",
                    stanceSide: "right",
                    footwork: "Right leg back",
                    note: "To the outside"
                },
                {
                    technique: "twinForearmBlock",
                    stance: "l",
                    stanceSide: "left",
                    footwork: "Left leg back",
                    note: "To the outside"
                }
            ]
        },
        counter: {
            description: "Left L-stance, middle reverse punch to the ribs",
            moves: [
                {
                    technique: "middlePunch",
                    stance: "l",
                    stanceSide: "left",
                    side: "left",
                    reverse: true,
                    note: "To the ribs"
                }
            ]
        }
    },
    "3-step-4": {
        name: "3 Step #4",
        type: "three-step",
        measure: "Right foot inside opponent's feet, close to the opponent's left foot.",
        start: stepBackWalkingLowBlock,
        attack: {
            description: "L-stance, middle knifehand strike",
            moves: [
                { technique: "middleKnifehandStrike", stance: "l", stanceSide: "left" },
                { technique: "middleKnifehandStrike", stance: "l", stanceSide: "right" },
                { technique: "middleKnifehandStrike", stance: "l", stanceSide: "left" }
            ]
        },
        defence: {
            description: "Right leg back, L-stance, middle inward outer forearm block",
            moves: [
                {
                    technique: "middleInwardOuterForearmBlock",
                    stance: "l",
                    stanceSide: "right",
                    footwork: "Right leg back"
                },
                {
                    technique: "middleInwardOuterForearmBlock",
                    stance: "l",
                    stanceSide: "left",
                    footwork: "Left leg back"
                },
                {
                    technique: "middleInwardOuterForearmBlock",
                    stance: "l",
                    stanceSide: "right",
                    footwork: "Right leg back"
                }
            ]
        },
        counter: {
            description: "Front leg, middle side front snap kick, stepping back into guarding block",
            moves: [{ technique: "middleSideFrontSnapKick", footwork: "Front leg" }, stepBackGuard]
        }
    },
    "3-step-5": {
        name: "3 Step #5",
        type: "three-step",
        measure: "Right foot outside opponent's left foot, heels overlapping.",
        start: stepBackWalkingLowBlock,
        attack: {
            description: "Walking stance, high section punch",
            moves: [
                { technique: "highPunch", stance: "walking", stanceSide: "right" },
                { technique: "highPunch", stance: "walking", stanceSide: "left" },
                { technique: "highPunch", stance: "walking", stanceSide: "right" }
            ]
        },
        defence: {
            description: "Right leg back, Walking stance, inner forearm block to the inside",
            moves: [
                {
                    technique: "highInnerBlock",
                    stance: "walking",
                    stanceSide: "left",
                    footwork: "Right leg back"
                },
                {
                    technique: "highInnerBlock",
                    stance: "walking",
                    stanceSide: "right",
                    footwork: "Left leg back"
                },
                {
                    technique: "highInnerBlock",
                    stance: "walking",
                    stanceSide: "left",
                    footwork: "Right leg back"
                }
            ]
        },
        counter: {
            description: "Left Walking stance middle reverse punch, stepping back into a Guarding Block",
            moves: [{ technique: "middlePunch", stance: "walking", stanceSide: "left", side: "right", reverse: true }]
        }
    },
    "3-step-6": {
        name: "3 Step #6",
        type: "three-step",
        measure: "Right foot outside opponent's left foot, heel to toe.",
        start: stepBackWalkingLowBlock,
        attack: {
            description: "L-stance, middle section reverse punch",
            moves: [
                { technique: "middlePunch", stance: "l", reverse: true },
                { technique: "middlePunch", stance: "l", reverse: true },
                { technique: "middlePunch", stance: "l", reverse: true }
            ]
        },
        defence: {
            description: "Right leg back, L-stance, middle knifehand guarding block to the inside",
            moves: [
                {
                    technique: "knifehandGuardingBlock",
                    stance: "l",
                    stanceSide: "right",
                    footwork: "Right leg back",
                    note: "To the inside"
                },
                {
                    technique: "knifehandGuardingBlock",
                    stance: "l",
                    stanceSide: "left",
                    footwork: "Left leg back",
                    note: "To the inside"
                },
                {
                    technique: "knifehandGuardingBlock",
                    stance: "l",
                    stanceSide: "right",
                    footwork: "Right leg back",
                    note: "To the inside"
                }
            ]
        },
        counter: {
            description: "Front leg middle side kick stepping back into guarding block",
            moves: [{ technique: "middleSidePiercingKick", footwork: "Front leg" }, stepBackGuard]
        }
    },
    "2-step-1": {
        name: "2 Step #1",
        type: "two-step",
        start: stepBackLGuard,
        measure: "None, choose the correct distance for the attack.",
        attack: {
            description: "Step into Right Walking stance, high obverse punch, left low front snap kick",
            moves: [
                { technique: "highPunch", stance: "walking", stanceSide: "right", side: "right", footwork: "Step in" },
                { technique: "lowFrontSnapKick", side: "left", stanceSide: "left", footwork: "Step in" }
            ]
        },
        defence: {
            description:
                "Left leg back, Walking stance, rising block, right leg back walking stance x-fist pressing block",
            moves: [
                { technique: "risingBlock", stance: "walking", stanceSide: "right", footwork: "Left leg back" },
                { technique: "xFistPressingBlock", stance: "walking", stanceSide: "left", footwork: "Right leg back" }
            ]
        },
        counter: {
            description: "Left Walking stance high twin vertical punch",
            moves: [{ technique: "twinVerticalPunch", stance: "walking", stanceSide: "left" }]
        }
    },
    "2-step-2": {
        name: "2 Step #2",
        type: "two-step",
        start: stepBackLGuard,
        measure: "None, choose the correct distance for the attack.",
        attack: {
            description: "Right Fixed stance, right middle side punch, left middle turning kick",
            moves: [
                { technique: "middleSidePunch", stance: "fixed", stanceSide: "right", side: "right" },
                { technique: "middleTurningKick", stanceSide: "left", footwork: "Step in" }
            ]
        },
        defence: {
            description: "Right leg back, L-stance, upward palm block, left leg back L-stance, middle waist block",
            moves: [
                { technique: "upwardPalmBlock", stance: "l", stanceSide: "right", footwork: "Right leg back" },
                { technique: "middleWaistBlock", stance: "l", stanceSide: "left", footwork: "Left leg back" }
            ]
        },
        counter: {
            description: "Sliding forward, right L-stance, right side elbow strike",
            moves: [
                {
                    technique: "sideElbowStrike",
                    stance: "l",
                    stanceSide: "right",
                    side: "right",
                    moveMethod: "slide",
                    footwork: "Sliding forward"
                }
            ]
        }
    },
    "2-step-3": {
        name: "2 Step #3",
        type: "two-step",
        start: stepBackLGuard,
        measure: "None, choose the correct distance for the attack.",
        attack: {
            description: "Right low front snap kick, left walking stance high twin vertical punch",
            moves: [
                { technique: "lowFrontSnapKick", stanceSide: "right", footwork: "Step in" },
                { technique: "twinVerticalPunch", stance: "walking", stanceSide: "left" }
            ]
        },
        defence: {
            description:
                "Right leg back, Walking stance, x-fist pressing block, left leg back walking stance wedging block",
            moves: [
                { technique: "xFistPressingBlock", stance: "walking", stanceSide: "left", footwork: "Right leg back" },
                {
                    technique: "highWedgingBlock",
                    stance: "walking",
                    stanceSide: "right",
                    footwork: "Left leg back",
                    note: "Level not stated in the source"
                }
            ]
        },
        counter: {
            description: "Left upward knee strike",
            moves: [{ technique: "upwardKneeKick", stanceSide: "left" }]
        }
    },
    "2-step-4": {
        name: "2 Step #4",
        type: "two-step",
        start: stepBackLGuard,
        measure: "None, choose the correct distance for the attack.",
        attack: {
            description: "Right walking stance, right high flat fingertip thrust, left middle side kick",
            moves: [
                { technique: "highThrust", stance: "walking", stanceSide: "right", side: "right" },
                { technique: "middleSidePiercingKick", stanceSide: "left" }
            ]
        },
        defence: {
            description:
                "Right leg back, Walking stance, left knifehand rising block, left leg back L-stance, right inward palm block",
            moves: [
                {
                    technique: "knifehandRisingBlock",
                    stance: "walking",
                    stanceSide: "left",
                    side: "left",
                    footwork: "Right leg back"
                },
                {
                    technique: "inwardPalmBlock",
                    stance: "l",
                    stanceSide: "left",
                    side: "right",
                    footwork: "Left leg back"
                }
            ]
        },
        counter: {
            description:
                "Any leg, depending on distance, front snap kick to coccyx, same leg forward walking stance twin upset punch to kidneys",
            moves: [
                { technique: "lowFrontSnapKick", footwork: "Any leg, depending on distance", note: "To the coccyx" },
                { technique: "twinUpsetPunch", stance: "walking", footwork: "Same leg forward", note: "To the kidneys" }
            ]
        }
    },
    "1-step-standard": {
        name: "1 Step - 3 step attacks and defences",
        type: "one-step",
        measure: "None, choose the correct distance for the attack.",
        attack: { description: "All 1-6 attacks from 3 step sparring", moves: [] },
        defence: { description: "All 1-6 defences and counters from 3 step sparring", moves: [] }
    },
    "1-step-traditional": {
        name: "1 Step - 3 step attacks, traditional defences",
        type: "one-step",
        measure: "None, choose the correct distance for the attack.",
        attack: { description: "All 1-6 attacks from 3 step sparring", moves: [] },
        defence: {
            description:
                "Any traditional Taekwondo defence and counter. You cannot use the standard 3 step techniques for a given attack",
            moves: []
        }
    },
    "1-step-freestyle": {
        name: "1 Step - Walking stance punch, freestyle defence",
        type: "one-step",
        measure: "None, choose the correct distance for the attack.",
        attack: {
            description: "Walking stance, middle section punch",
            moves: [
                {
                    technique: "middlePunch",
                    stance: "walking",
                    stanceSide: "right",
                    side: "right"
                },
                {
                    technique: "middlePunch",
                    stance: "walking",
                    stanceSide: "left",
                    side: "left"
                }
            ]
        },
        defence: { description: "Any Taekwondo defence and counter", moves: [] }
    },
    "1-step-hook": {
        name: "1 Step - Walking stance hook punch, freestyle defence",
        type: "one-step",
        measure: "None, choose the correct distance for the attack.",
        attack: {
            description: "Walking stance, middle section hook punch",
            moves: [
                {
                    technique: "hookPunch",
                    stance: "walking",
                    stanceSide: "left",
                    side: "right"
                },
                {
                    technique: "hookPunch",
                    stance: "walking",
                    stanceSide: "right",
                    side: "left"
                }
            ]
        },
        defence: { description: "Any Taekwondo defence and counter", moves: [] }
    }
} satisfies Record<string, SparringRoutine>;

export type SparringKey = keyof typeof prearrangedSparring;
