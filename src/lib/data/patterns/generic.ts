export type Side = "left" | "right";
export type Heading = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
export const HEADING_DEG: Record<Heading, number> = {
    N: 0,
    NE: 45,
    E: 90,
    SE: 135,
    S: 180,
    SW: 225,
    W: 270,
    NW: 315
};
export type Motion = "normal" | "continuous" | "connecting" | "consecutive" | "fast" | "slow";
export type MoveMethod = "step" | "pivot" | "slide" | "jump";

export const diagrams = {
    cross: {
        points: {
            centre: { x: 0, y: 0 },
            A: { x: 1, y: 0 },
            B: { x: -1, y: 0 },
            C: { x: 0, y: -1 },
            D: { x: 0, y: 1 }
        },
        lines: [
            ["A", "B"],
            ["C", "D"]
        ],
        start: "centre",
        headings: { E: "A", W: "B", S: "C", N: "D" }
    },
    // "I": a bar along the bottom (B-C-A), a bar along the top (E-D-F) and a vertical (C-D).
    i: {
        points: {
            A: { x: 1, y: -0.65 },
            B: { x: -1, y: -0.65 },
            C: { x: 0, y: -0.65 },
            D: { x: 0, y: 0.65 },
            E: { x: -1, y: 0.65 },
            F: { x: 1, y: 0.65 }
        },
        lines: [
            ["B", "A"],
            ["E", "F"],
            ["C", "D"]
        ],
        start: "C"
    },
    // "S": as the SVG is drawn: top bar only D-F, bottom bar only B-C. A and E are labelled in the SVG but have no line.
    s: {
        points: {
            A: { x: 1, y: -0.65 },
            B: { x: -1, y: -0.65 },
            C: { x: 0, y: -0.65 },
            D: { x: 0, y: 0.65 },
            E: { x: -1, y: 0.65 },
            F: { x: 1, y: 0.65 }
        },
        lines: [
            ["B", "C"],
            ["C", "D"],
            ["D", "F"]
        ],
        start: "C"
    },
    // "Scholar": bottom bar (B-C-A), middle bar (E-F) and a vertical (C-D).
    scholar: {
        points: {
            A: { x: 0.75, y: -0.65 },
            B: { x: -0.75, y: -0.65 },
            C: { x: 0, y: -0.65 },
            D: { x: 0, y: 0.65 },
            E: { x: -1, y: 0 },
            F: { x: 1, y: 0 }
        },
        lines: [
            ["B", "A"],
            ["E", "F"],
            ["C", "D"]
        ],
        start: "C"
    },
    // "Horizontal": a single bar. C and D are direction labels (below / above the centre), not points on the bar.
    horizontal: {
        points: {
            centre: { x: 0, y: 0 },
            A: { x: 0.75, y: 0 },
            B: { x: -0.75, y: 0 },
            C: { x: 0, y: -0.55 },
            D: { x: 0, y: 0.55 }
        },
        lines: [["B", "A"]],
        start: "centre"
    },
    vertical: {
        points: {
            centre: { x: 0, y: 0 },
            C: { x: 0, y: 0.75 },
            D: { x: 0, y: -0.75 },
            A: { x: -0.5, y: 0 },
            B: { x: 0.5, y: 0 }
        },
        lines: [["C", "D"]],
        start: "centre"
    }
} as const;

export type DiagramId = keyof typeof diagrams;
export type Point = { [D in DiagramId]: keyof (typeof diagrams)[D]["points"] }[DiagramId];

export const stances = {
    walking: { en: "Walking Stance", ko: "Gunnun Sogi" },
    sitting: { en: "Sitting Stance", ko: "Annun Sogi" },
    l: { en: "L-Stance", ko: "Niunja Sogi" },
    fixed: { en: "Fixed Stance", ko: "Gojung Sogi" },
    low: { en: "Low Stance", ko: "Nachuo Sogi" },
    x: { en: "X Stance", ko: "Kyocha Sogi" },
    rear: { en: "Rear Foot Stance", ko: "Dwit Bal Sogi" },
    vertical: { en: "Vertical Stance", ko: "Soo Jik Sogi" },
    bending: { en: "Bending Ready Stance", ko: "Guburyo Junbi Sogi" },
    closed: { en: "Closed Stance", ko: "PLACEHOLDER" }, // TODO:
    oneLeg: { en: "One Leg Stance", ko: "PLACEHOLDER" }, // TODO:

    attention: { en: "Attention Stance", ko: "Charyot Sogi" },

    parallelReady: { en: "Parallel Ready Stance", ko: "Narani Junbi Sogi" },
    closeReadyA: { en: "Close Ready Stance A", ko: "Moa Junbi Sogi A" },
    closeReadyB: { en: "Close Ready Stance B", ko: "Moa Junbi Sogi B" },
    closeReadyC: { en: "Close Ready Stance C", ko: "Moa Junbi Sogi C" },
    parallelHeavenReady: { en: "Parallel Ready Stance with Heaven Hands", ko: "Narani Junbi Sogi with Heaven Hands" }
} as const;
export type StanceId = keyof typeof stances;

export const techniques = {
    middlePunch: {
        kind: "punch",
        tool: "forefist",
        level: "middle",
        en: "middle punch",
        ko: "Kaunde Jirugi",
        image: null
    },
    lowBlock: { kind: "block", tool: "forearm", level: "low", en: "low block", ko: "Najunde Makgi", image: null },
    middleBlock: {
        kind: "block",
        tool: "outer forearm",
        level: "middle",
        en: "middle block",
        ko: "Kaunde Makgi",
        image: null
    },
    lowKnifehandBlock: {
        kind: "block",
        tool: "knifehand",
        level: "low",
        en: "low knifehand block",
        ko: "PLACEHOLDER",
        image: null
    },
    middleInnerBlock: {
        kind: "block",
        tool: "inner forearm",
        level: "middle",
        en: "middle inner-forearm block",
        ko: "PLACEHOLDER",
        image: null
    },
    highInnerBlock: {
        kind: "block",
        tool: "inner forearm",
        level: "high",
        en: "high inner-forearm block",
        ko: "PLACEHOLDER",
        image: null
    },
    middleGuardingBlock: {
        kind: "block",
        tool: "knifehand",
        level: "middle",
        en: "Guarding Block",
        ko: "PLACEHOLDER",
        image: null
    },
    middleForearmGuardingBlock: {
        kind: "block",
        tool: "forearm",
        level: "middle",
        en: "Guarding Block (Forearm)",
        ko: "PLACEHOLDER",
        image: null
    },
    lowGuardingBlock: {
        kind: "block",
        tool: "knifehand",
        level: "low",
        en: "Low Guarding Block",
        ko: "PLACEHOLDER",
        image: null
    },
    knifehandGuardingBlock: {
        kind: "block",
        tool: "knifehand",
        level: "middle",
        en: "Knifehand Guarding Block",
        ko: "PLACEHOLDER",
        image: null
    },
    lowReverseKnifehandGuardingBlock: {
        kind: "block",
        tool: "reverse knifehand",
        level: "low",
        en: "Low Guarding Block (Reverse Knifehand)",
        ko: "PLACEHOLDER",
        image: null
    },
    twinForearmBlock: {
        kind: "block",
        tool: "twin forearm",
        level: "middle",
        en: "Twin Forearm Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    twinKnifehandBlock: {
        kind: "block",
        tool: "twin knifehand",
        level: "middle",
        en: "Twin Knifehand Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    risingBlock: { kind: "block", tool: "forearm", level: "high", en: "Rising Block", ko: "PLACEHOLDER", image: null }, // level/tool inferred (not in source text)
    highWedgingBlock: {
        kind: "block",
        tool: "outer forearm",
        level: "high",
        en: "High Wedging Block",
        ko: "PLACEHOLDER",
        image: null
    },
    middleWedgingBlock: {
        kind: "block",
        tool: "inner forearm",
        level: "middle",
        en: "Middle Wedging Block",
        ko: "PLACEHOLDER",
        image: null
    },
    circularBlock: {
        kind: "block",
        tool: "inner forearm",
        level: "middle",
        en: "Circular Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    middleReverseKnifehandBlock: {
        kind: "block",
        tool: "reverse knifehand",
        level: "middle",
        en: "Middle Block (Reverse Knifehand)",
        ko: "PLACEHOLDER",
        image: null
    },
    upwardPalmBlock: {
        kind: "block",
        tool: "palm",
        level: "high",
        en: "Palm Upward Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    upwardTwinPalmBlock: {
        kind: "block",
        tool: "twin palm",
        level: "high",
        en: "Upward Block (Twin Palm)",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    xFistRisingBlock: {
        kind: "block",
        tool: "x-fist",
        level: "high",
        en: "X-Fist Rising Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    xFistPressingBlock: {
        kind: "block",
        tool: "x-fist",
        level: "low",
        en: "X-Fist Pressing Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    highDoubleForearmBlock: {
        kind: "block",
        tool: "double forearm",
        level: "high",
        en: "High Double Forearm Block",
        ko: "PLACEHOLDER",
        image: null
    },
    middleDoubleForearmBlock: {
        kind: "block",
        tool: "double forearm",
        level: "middle",
        en: "Middle Double Forearm Block",
        ko: "PLACEHOLDER",
        image: null
    },
    highHookingBlock: {
        kind: "block",
        tool: "palm",
        level: "high",
        en: "High Hooking Block",
        ko: "PLACEHOLDER",
        image: null
    },
    middleHookingBlock: {
        kind: "block",
        tool: "palm",
        level: "middle",
        en: "Middle Hooking Block",
        ko: "PLACEHOLDER",
        image: null
    },
    palmPressingBlock: {
        kind: "block",
        tool: "palm",
        level: "low",
        en: "Pressing Block (Palm)",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    foreFistPressingBlock: {
        kind: "block",
        tool: "fore fist",
        level: "low",
        en: "Pressing Block (Fore Fist)",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    sideFrontBlock: {
        kind: "block",
        tool: "inner forearm",
        level: "middle",
        en: "Side Front Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    middlePushingBlock: {
        kind: "block",
        tool: "palm",
        level: "middle",
        en: "Middle Pushing Block",
        ko: "PLACEHOLDER",
        image: null
    },
    lowPushingBlock: {
        kind: "block",
        tool: "double forearm",
        level: "low",
        en: "Low Pushing Block",
        ko: "PLACEHOLDER",
        image: null
    },
    wShapeBlock: {
        kind: "block",
        tool: "outer forearm",
        level: "high",
        en: "W-Shape Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    uShapeBlock: {
        kind: "block",
        tool: "both forearms",
        level: "middle",
        en: "U-Shape Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    checkingBlock: {
        kind: "block",
        tool: "x-knifehand",
        level: "middle",
        en: "Checking Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    middleFrontBlock: {
        kind: "block",
        tool: "forearm",
        level: "middle",
        en: "Middle Front Block",
        ko: "PLACEHOLDER",
        image: null
    },
    lowFrontBlock: {
        kind: "block",
        tool: "outer forearm",
        level: "low",
        en: "Low Front Block",
        ko: "PLACEHOLDER",
        image: null
    },
    lowFrontKnifehandBlock: {
        kind: "block",
        tool: "knifehand",
        level: "low",
        en: "Low Front Block (Knifehand)",
        ko: "PLACEHOLDER",
        image: null
    },
    highPunch: { kind: "punch", tool: "forefist", level: "high", en: "High Punch", ko: "PLACEHOLDER", image: null },
    twinVerticalPunch: {
        kind: "punch",
        tool: "twin fist",
        level: "high",
        en: "Twin Vertical Punch",
        ko: "PLACEHOLDER",
        image: null
    },
    upsetPunch: { kind: "punch", tool: "forefist", level: "middle", en: "Upset Punch", ko: "PLACEHOLDER", image: null }, // level/tool inferred (not in source text)
    twinUpsetPunch: {
        kind: "punch",
        tool: "twin fist",
        level: "middle",
        en: "Twin Upset Punch",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    anglePunch: { kind: "punch", tool: "forefist", level: "middle", en: "Angle Punch", ko: "PLACEHOLDER", image: null }, // level/tool inferred (not in source text)
    upwardPunch: {
        kind: "punch",
        tool: "forefist",
        level: "middle",
        en: "Upward Punch",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    horizontalPunch: {
        kind: "punch",
        tool: "forefist",
        level: "middle",
        en: "Horizontal Punch",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    middleOutwardStrike: {
        kind: "strike",
        tool: "knifehand",
        level: "middle",
        en: "Middle Outward Strike",
        ko: "PLACEHOLDER",
        image: null
    },
    middleSideStrike: {
        kind: "strike",
        tool: "knifehand",
        level: "middle",
        en: "Middle Side Strike",
        ko: "PLACEHOLDER",
        image: null
    },
    highSideStrike: {
        kind: "strike",
        tool: "back fist",
        level: "high",
        en: "High Side Strike",
        ko: "PLACEHOLDER",
        image: null
    },
    highInwardStrike: {
        kind: "strike",
        tool: "knifehand",
        level: "high",
        en: "High Inward Strike",
        ko: "PLACEHOLDER",
        image: null
    },
    highFrontStrike: {
        kind: "strike",
        tool: "knifehand",
        level: "high",
        en: "High Front Strike",
        ko: "PLACEHOLDER",
        image: null
    },
    highFrontReverseKnifehandStrike: {
        kind: "strike",
        tool: "reverse knifehand",
        level: "high",
        en: "High Front Strike (Reverse Knifehand)",
        ko: "PLACEHOLDER",
        image: null
    },
    upperElbowStrike: {
        kind: "strike",
        tool: "elbow",
        level: "high",
        en: "Upper Elbow Strike",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    frontElbowStrike: {
        kind: "strike",
        tool: "elbow",
        level: "middle",
        en: "Front Elbow Strike",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    downwardKnifehandStrike: {
        kind: "strike",
        tool: "knifehand",
        level: "middle",
        en: "Downward Strike (Knifehand)",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    downwardSideFistStrike: {
        kind: "strike",
        tool: "side fist",
        level: "middle",
        en: "Downward Strike (Side Fist)",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    sideBackStrike: {
        kind: "strike",
        tool: "back fist",
        level: "middle",
        en: "Side Back Strike",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    middleThrust: {
        kind: "thrust",
        tool: "straight fingertip",
        level: "middle",
        en: "Middle Thrust",
        ko: "PLACEHOLDER",
        image: null
    },
    lowThrust: {
        kind: "thrust",
        tool: "upset fingertip",
        level: "low",
        en: "Low Thrust",
        ko: "PLACEHOLDER",
        image: null
    },
    highThrust: {
        kind: "thrust",
        tool: "flat fingertip",
        level: "high",
        en: "Flat Fingertip Thrust",
        ko: "PLACEHOLDER",
        image: null
    },
    twinSideElbowThrust: {
        kind: "thrust",
        tool: "twin elbow",
        level: "middle",
        en: "Twin Side Elbow Thrust",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    sideElbowThrust: {
        kind: "thrust",
        tool: "side elbow",
        level: "middle",
        en: "Side Elbow Thrust",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    backElbowThrust: {
        kind: "thrust",
        tool: "back elbow",
        level: "middle",
        en: "Back Elbow Thrust",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    horizontalTwinElbowThrust: {
        kind: "thrust",
        tool: "twin elbow",
        level: "middle",
        en: "Horizontal Twin Elbow Thrust",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    middleFrontSnapKick: {
        kind: "kick",
        tool: "ball of foot",
        level: "middle",
        en: "Middle Front Snap Kick",
        ko: "PLACEHOLDER",
        image: null
    },
    lowFrontSnapKick: {
        kind: "kick",
        tool: "ball of foot",
        level: "low",
        en: "Low Front Snap Kick",
        ko: "PLACEHOLDER",
        image: null
    },
    lowSideFrontSnapKick: {
        kind: "kick",
        tool: "ball of foot",
        level: "low",
        en: "Low Side Front Snap Kick",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    middleSidePiercingKick: {
        kind: "kick",
        tool: "footsword",
        level: "middle",
        en: "Middle Side Piercing Kick",
        ko: "PLACEHOLDER",
        image: null
    },
    highTurningKick: {
        kind: "kick",
        tool: "ball of foot",
        level: "high",
        en: "High Turning Kick",
        ko: "PLACEHOLDER",
        image: null
    },
    middleTurningKick: {
        kind: "kick",
        tool: "ball of foot",
        level: "middle",
        en: "Middle Turning Kick",
        ko: "PLACEHOLDER",
        image: null
    },
    middleBackPiercingKick: {
        kind: "kick",
        tool: "footsword",
        level: "middle",
        en: "Middle Back Piercing Kick",
        ko: "PLACEHOLDER",
        image: null
    },
    flyingSidePiercingKick: {
        kind: "kick",
        tool: "footsword",
        level: "middle",
        en: "Flying Side Piercing Kick",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    upwardKneeKick: {
        kind: "kick",
        tool: "knee",
        level: "middle",
        en: "Upward Knee Kick",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    pressingKick: {
        kind: "kick",
        tool: "footsword",
        level: "middle",
        en: "Pressing Kick",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    uShapeGrasp: {
        kind: "grasp",
        tool: "both hands",
        level: "middle",
        en: "U-Shape Grasp",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    lowTwistingKick: {
        kind: "kick",
        tool: "ball of foot",
        level: "low",
        en: "Low Twisting Kick",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    highDoubleArcHandBlock: {
        kind: "block",
        tool: "double arc-hand",
        level: "high",
        en: "High Double Arc-Hand Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    scoopingBlock: {
        kind: "block",
        tool: "palm",
        level: "middle",
        en: "Scooping Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    nineShapeBlock: {
        kind: "block",
        tool: "both forearms",
        level: "middle",
        en: "9-Shape Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    frontStrikeBackFist: {
        kind: "strike",
        tool: "back fist",
        level: "middle",
        en: "Front Strike (Back Fist)",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred (not in source text)
    middleKnucklePunch: {
        kind: "punch",
        tool: "middle knuckle fist",
        level: "middle",
        en: "Middle Punch (Middle Knuckle Fist)",
        ko: "PLACEHOLDER",
        image: null
    },
    highOpenFistStrike: {
        kind: "strike",
        tool: "open fist",
        level: "high",
        en: "High Open Fist Strike",
        ko: "PLACEHOLDER",
        image: null
    }, // level/tool inferred
    middleKnifehandStrike: {
        kind: "strike",
        tool: "knifehand",
        level: "middle",
        en: "Middle Knifehand Strike",
        ko: "PLACEHOLDER",
        image: null
    },
    middleInwardOuterForearmBlock: {
        kind: "block",
        tool: "outer forearm",
        level: "middle",
        en: "Middle Inward Block (Outer Forearm)",
        ko: "PLACEHOLDER",
        image: null
    },
    middleSideFrontSnapKick: {
        kind: "kick",
        tool: "ball of foot",
        level: "middle",
        en: "Middle Side Front Snap Kick",
        ko: "PLACEHOLDER",
        image: null
    }, // tool inferred
    middleSidePunch: {
        kind: "punch",
        tool: "forefist",
        level: "middle",
        en: "Middle Side Punch",
        ko: "PLACEHOLDER",
        image: null
    },
    middleWaistBlock: {
        kind: "block",
        tool: "outer forearm",
        level: "middle",
        en: "Middle Waist Block",
        ko: "PLACEHOLDER",
        image: null
    }, // tool inferred
    sideElbowStrike: {
        kind: "strike",
        tool: "side elbow",
        level: "middle",
        en: "Side Elbow Strike",
        ko: "PLACEHOLDER",
        image: null
    }, // level inferred
    knifehandRisingBlock: {
        kind: "block",
        tool: "knifehand",
        level: "high",
        en: "Knifehand Rising Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level inferred
    inwardPalmBlock: {
        kind: "block",
        tool: "palm",
        level: "middle",
        en: "Palm Inward Block",
        ko: "PLACEHOLDER",
        image: null
    }, // level inferred
    hookPunch: {
        kind: "punch",
        tool: "forefist",
        level: "high",
        en: "Hooking Punch",
        ko: "PLACEHOLDER",
        image: null
    }
} as const satisfies Record<
    string,
    {
        kind: "block" | "punch" | "strike" | "kick" | "thrust" | "grasp";
        tool: string;
        level: "high" | "middle" | "low";
        en: string;
        ko?: string;
        image: string | null;
    }
>;
export type TechniqueId = keyof typeof techniques;

export type Move = {
    technique?: TechniqueId; // omit for a pure stance change / preparation (see note)
    also?: TechniqueId; // a second technique performed in the same move (simultaneous or immediately after)
    stance: StanceId;
    stanceSide?: Side; // the side named in the stance: "left walking stance" -> left, "right L-stance" -> right
    side?: Side; // the hand/foot performing the technique; omitted for two-handed techniques
    reverse?: boolean; // default false (obverse). true = performing hand is on the opposite side to the front foot
    moveTo?: Heading; // direction of travel; omit if you stay in place
    moveMethod?: MoveMethod; // how you travel to the destination; default "step"
    facing: Heading;

    // optional extras
    motion?: Motion; // default "normal"
    note?: string;
    frame?: number; // video frame
};

export type Pattern = {
    slug: string;
    name: string;
    alternativeName?: string;
    about: string[];
    type: "pattern" | "drill";
    video: string | null;
    diagram: DiagramId;
    start: { facing: Heading; stance: StanceId };
    moves: Move[];
    end?: string;
};

const FPS = 30;
export const moveId = (p: Pattern, i: number) => `${p.slug}.${i + 1}`;
export const moveTime = (m: Move) => (m.frame === undefined ? null : m.frame / FPS);
