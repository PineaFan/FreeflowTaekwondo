import { type PatternKey } from "./patterns";
import { type SparringKey } from "./prearranged-sparring";

export type BeltColour = "white" | "yellow" | "green" | "blue" | "red" | "black" | "orange" | "purple";

export type Belt = {
    name: string;
    colour: BeltColour;
    stripe: BeltColour | null;
    /** Represents a Kup for senior belts, or Degree for black belts */
    level: number | null;
    group: "junior" | "senior" | "black";
    next: string | null;
    requirements: Requirements;
};
type PowerTestBoards = "pad" | "white" | "black" | "red";
type PowerTest = null | {
    boards: Partial<Record<PowerTestBoards, number>>;
    notes: string;
}

type Requirements = {
    patterns: PatternKey[];
    minimum: {
        lessons: number;
        months: number;
        squads: number;
        seniorGradeTrainings: number;
    },
    prearrangedSparring: SparringKey[];
    sparring: boolean;
    beltTying: boolean;
    powerTest: PowerTest;
};

const generateMinimumRequirements = (lessons: number, months: number, squads: number, seniorGradeTrainings: number) => ({
    lessons,
    months,
    squads,
    seniorGradeTrainings
});

export const belts = {
    "white-junior": {
        name: "White Belt",
        colour: "white",
        stripe: null,
        level: null,
        group: "junior",
        next: "purple-junior",
        requirements: {
            patterns: [],
            minimum: generateMinimumRequirements(12, 3, 0, 0),
            prearrangedSparring: [],
            sparring: false,
            beltTying: false,
            powerTest: null
        }
    },
    "purple-junior": {
        name: "Purple Stripe",
        colour: "white",
        stripe: "purple",
        level: null,
        group: "junior",
        next: "orange-junior",
        requirements: {
            patterns: ["4-directional-punch-1", "4-directional-punch-2"],
            minimum: generateMinimumRequirements(12, 3, 0, 0),
            prearrangedSparring: [],
            sparring: false,
            beltTying: false,
            powerTest: null
        }
    },
    "orange-junior": {
        name: "Orange Stripe",
        colour: "white",
        stripe: "orange",
        level: null,
        group: "junior",
        next: "yellow-stripe",
        requirements: {
            patterns: ["4-directional-block"],
            minimum: generateMinimumRequirements(12, 3, 0, 0),
            prearrangedSparring: [],
            sparring: false,
            beltTying: false,
            powerTest: null
        }
    },
    "white-senior": {
        name: "White Belt",
        colour: "white",
        stripe: null,
        level: 10,
        group: "senior",
        next: "yellow-stripe",
        requirements: {
            patterns: ["4-directional-punch-1", "4-directional-punch-2", "4-directional-block"],
            minimum: generateMinimumRequirements(12, 3, 0, 0),
            prearrangedSparring: [],
            sparring: false,
            beltTying: false,
            powerTest: null
        }
    },
    "yellow-stripe": {
        name: "Yellow Stripe",
        colour: "white",
        stripe: "yellow",
        level: 9,
        group: "senior",
        next: "yellow-belt",
        requirements: {
            patterns: ["chon-ji"],
            minimum: generateMinimumRequirements(20, 3, 0, 0),
            prearrangedSparring: [],
            sparring: false,
            beltTying: false,
            powerTest: null
        }
    },
    "yellow-belt": {
        name: "Yellow Belt",
        colour: "yellow",
        stripe: null,
        level: 8,
        group: "senior",
        next: "green-stripe",
        requirements: {
            patterns: ["dan-gun", "chon-ji"],
            minimum: generateMinimumRequirements(20, 3, 0, 0),
            prearrangedSparring: ["3-step-1", "3-step-2"],
            sparring: false,
            beltTying: false,
            powerTest: null
        }
    },
    "green-stripe": {
        name: "Green Stripe",
        colour: "yellow",
        stripe: "green",
        level: 7,
        group: "senior",
        next: "green-belt",
        requirements: {
            patterns: ["do-san", "dan-gun", "chon-ji"],
            minimum: generateMinimumRequirements(20, 3, 0, 0),
            prearrangedSparring: ["3-step-3", "3-step-4"],
            sparring: true,
            beltTying: true,
            powerTest: null
        }
    },
    "green-belt": {
        name: "Green Belt",
        colour: "green",
        stripe: null,
        level: 6,
        group: "senior",
        next: "blue-stripe",
        requirements: {
            patterns: ["won-hyo", "dan-gun", "do-san"],
            minimum: generateMinimumRequirements(20, 3, 1, 0),
            prearrangedSparring: ["3-step-5", "3-step-6"],
            sparring: true,
            beltTying: false,
            powerTest: null
        }
    },
    "blue-stripe": {
        name: "Blue Stripe",
        colour: "green",
        stripe: "blue",
        level: 5,
        group: "senior",
        next: "blue-belt",
        requirements: {
            patterns: ["yul-gok", "won-hyo", "dan-gun"],
            minimum: generateMinimumRequirements(20, 3, 1, 0),
            prearrangedSparring: ["2-step-1", "2-step-2"],
            sparring: true,
            beltTying: false,
            powerTest: null
        }
    },
    "blue-belt": {
        name: "Blue Belt",
        colour: "blue",
        stripe: null,
        level: 4,
        group: "senior",
        next: "red-stripe",
        requirements: {
            patterns: ["joong-gun", "yul-gok", "won-hyo"],
            minimum: generateMinimumRequirements(40, 6, 1, 0),
            prearrangedSparring: ["2-step-3", "2-step-4"],
            sparring: true,
            beltTying: false,
            powerTest: { boards: { pad: 2 }, notes: "One hand and one foot technique." }
        }
    },
    "red-stripe": {
        name: "Red Stripe",
        colour: "blue",
        stripe: "red",
        level: 3,
        group: "senior",
        next: "red-belt",
        requirements: {
            patterns: ["toi-gye", "joong-gun", "yul-gok"],
            minimum: generateMinimumRequirements(40, 6, 1, 0),
            prearrangedSparring: ["1-step-standard"],
            sparring: true,
            beltTying: false,
            powerTest: { boards: { pad: 2 }, notes: "One hand and one foot technique." }
        }
    },
    "red-belt": {
        name: "Red Belt",
        colour: "red",
        stripe: null,
        level: 2,
        group: "senior",
        next: "black-stripe",
        requirements: {
            patterns: ["hwa-rang", "toi-gye", "joong-gun"],
            minimum: generateMinimumRequirements(40, 6, 1, 1),
            prearrangedSparring: ["1-step-traditional"],
            sparring: true,
            beltTying: false,
            powerTest: { boards: { pad: 2 }, notes: "One hand and one foot technique." }
        }
    },
    "black-stripe": {
        name: "Black Stripe",
        colour: "red",
        stripe: "black",
        level: 1,
        group: "senior",
        next: "black-1",
        requirements: {
            patterns: ["choong-moo", "hwa-rang", "toi-gye"],
            minimum: generateMinimumRequirements(60, 9, 2, 2),
            prearrangedSparring: ["1-step-freestyle"],
            sparring: true,
            beltTying: false,
            powerTest: { boards: { white: 2 }, notes: "Any two techniques" }
        }
    },
    "black-1": {
        name: "Black Belt 1st Degree",
        colour: "black",
        stripe: null,
        level: 1,
        group: "black",
        requirements: {
            patterns: ["kwang-gae", "po-eun", "ge-baek"],
            minimum: generateMinimumRequirements(0, 0, 0, 0), // TODO: Confirm with stacey
            prearrangedSparring: ["1-step-hook"],
            sparring: false,
            beltTying: false,
            powerTest: { boards: { white: 3 }, notes: "" } // TODO: Confirm with stacey
        },
        next: null
    },
    "black-2": {
        name: "Black Belt 2nd Degree",
        colour: "black",
        stripe: null,
        level: 2,
        group: "black",
        next: "black-3",
        requirements: {
            // patterns: ["eui-am", "choong-jang", "juche"],
            patterns: [],
            minimum: generateMinimumRequirements(0, 0, 0, 0), // TODO: Confirm with stacey
            prearrangedSparring: ["1-step-hook"],
            sparring: false,
            beltTying: false,
            powerTest: null // TODO: Confirm with stacey
        }
    },
    "black-3": {
        name: "Black Belt 3rd Degree",
        colour: "black",
        stripe: null,
        level: 3,
        group: "black",
        next: "black-4",
        requirements: {
            // patterns: ["sam-il", "yoo-sin", "choi-jong"],
            patterns: [],
            minimum: generateMinimumRequirements(0, 0, 0, 0), // TODO: Confirm with stacey
            prearrangedSparring: ["1-step-hook"],
            sparring: false,
            beltTying: false,
            powerTest: null // TODO: Confirm with stacey
        }
    },
    "black-4": {
        name: "Black Belt 4th Degree",
        colour: "black",
        stripe: null,
        level: 4,
        group: "black",
        next: "black-5",
        requirements: {
            // patterns: ["yong-gae", "ul-jin", "moon-moo"],
            patterns: [],
            minimum: generateMinimumRequirements(0, 0, 0, 0), // TODO: Confirm with stacey
            prearrangedSparring: ["1-step-hook"],
            sparring: false,
            beltTying: false,
            powerTest: null // TODO: Confirm with stacey
        }
    },
    "black-5": {
        name: "Black Belt 5th Degree",
        colour: "black",
        stripe: null,
        level: 5,
        group: "black",
        next: "black-6",
        requirements: {
            // patterns: ["so-san", "se-jong"],
            patterns: [],
            minimum: generateMinimumRequirements(0, 0, 0, 0), // TODO: Confirm with stacey
            prearrangedSparring: ["1-step-hook"],
            sparring: false,
            beltTying: false,
            powerTest: null // TODO: Confirm with stacey
        }
    },
    "black-6": {
        name: "Black Belt 6th Degree",
        colour: "black",
        stripe: null,
        level: 6,
        group: "black",
        next: "black-7",
        requirements: {
            // patterns: ["tong-il"],
            patterns: [],
            minimum: generateMinimumRequirements(0, 0, 0, 0), // TODO: Confirm with stacey
            prearrangedSparring: ["1-step-hook"],
            sparring: false,
            beltTying: false,
            powerTest: null // TODO: Confirm with stacey
        }
    },
    "black-7": {
        name: "Black Belt 7th Degree",
        colour: "black",
        stripe: null,
        level: 7,
        group: "black",
        next: "black-8",
        requirements: {
            patterns: [],
            minimum: generateMinimumRequirements(0, 0, 0, 0), // TODO: Confirm with stacey
            prearrangedSparring: ["1-step-hook"],
            sparring: false,
            beltTying: false,
            powerTest: null // TODO: Confirm with stacey
        }
    },
    "black-8": {
        name: "Black Belt 8th Degree",
        colour: "black",
        stripe: null,
        level: 8,
        group: "black",
        requirements: {
            patterns: [],
            minimum: generateMinimumRequirements(0, 0, 0, 0), // TODO: Confirm with stacey
            prearrangedSparring: ["1-step-hook"],
            sparring: false,
            beltTying: false,
            powerTest: null // TODO: Confirm with stacey
        },
        next: "black-9"
    },
    "black-9": {
        name: "Black Belt 9th Degree",
        colour: "black",
        stripe: null,
        level: 9,
        group: "black",
        next: null,
        requirements: {
            patterns: [],
            minimum: generateMinimumRequirements(0, 0, 0, 0), // TODO: Confirm with stacey
            prearrangedSparring: ["1-step-hook"],
            sparring: false,
            beltTying: false,
            powerTest: null // TODO: Confirm with stacey
        }
    }
} as const satisfies Record<string, Belt>;

export type BeltKey = keyof typeof belts;
