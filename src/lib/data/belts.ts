export type Belt = {
    name: string;
    colour: string;
    stripe: string | null;
    /** Represents a Kup for senior belts, or Degree for black belts */
    level: number | null;
    group: "junior" | "senior" | "black";
    next: string | null;
};

export const belts = {
    "white-junior": {
        name: "White Belt",
        colour: "white",
        stripe: null,
        level: null,
        group: "junior",
        next: "purple-junior"
    },
    "purple-junior": {
        name: "Purple Stripe",
        colour: "white",
        stripe: "purple",
        level: null,
        group: "junior",
        next: "orange-junior"
    },
    "orange-junior": {
        name: "Orange Stripe",
        colour: "white",
        stripe: "orange",
        level: null,
        group: "junior",
        next: "yellow-stripe"
    },
    "white-senior": {
        name: "White Belt",
        colour: "white",
        stripe: null,
        level: 10,
        group: "senior",
        next: "yellow-stripe"
    },
    "yellow-stripe": {
        name: "Yellow Stripe",
        colour: "white",
        stripe: "yellow",
        level: 9,
        group: "senior",
        next: "yellow-belt"
    },
    "yellow-belt": {
        name: "Yellow Belt",
        colour: "yellow",
        stripe: null,
        level: 8,
        group: "senior",
        next: "green-stripe"
    },
    "green-stripe": {
        name: "Green Stripe",
        colour: "yellow",
        stripe: "green",
        level: 7,
        group: "senior",
        next: "green-belt"
    },
    "green-belt": {
        name: "Green Belt",
        colour: "green",
        stripe: null,
        level: 6,
        group: "senior",
        next: "blue-stripe"
    },
    "blue-stripe": {
        name: "Blue Stripe",
        colour: "green",
        stripe: "blue",
        level: 5,
        group: "senior",
        next: "blue-belt"
    },
    "blue-belt": {
        name: "Blue Belt",
        colour: "blue",
        stripe: null,
        level: 4,
        group: "senior",
        next: "red-stripe"
    },
    "red-stripe": {
        name: "Red Stripe",
        colour: "blue",
        stripe: "red",
        level: 3,
        group: "senior",
        next: "red-belt"
    },
    "red-belt": {
        name: "Red Belt",
        colour: "red",
        stripe: null,
        level: 2,
        group: "senior",
        next: "black-stripe"
    },
    "black-stripe": {
        name: "Black Stripe",
        colour: "red",
        stripe: "black",
        level: 1,
        group: "senior",
        next: "black-1"
    },
    "black-1": {
        name: "Black Belt 1st Degree",
        colour: "black",
        stripe: null,
        level: 1,
        group: "black",
        next: null
    }
    // "black-2": {
    //     name: "Black Belt 2nd Degree",
    //     colour: "black",
    //     stripe: null,
    //     level: 2,
    //     group: "black",
    //     next: "black-3"
    // },
    // "black-3": {
    //     name: "Black Belt 3rd Degree",
    //     colour: "black",
    //     stripe: null,
    //     level: 3,
    //     group: "black",
    //     next: "black-4"
    // },
    // "black-4": {
    //     name: "Black Belt 4th Degree",
    //     colour: "black",
    //     stripe: null,
    //     level: 4,
    //     group: "black",
    //     next: "black-5"
    // },
    // "black-5": {
    //     name: "Black Belt 5th Degree",
    //     colour: "black",
    //     stripe: null,
    //     level: 5,
    //     group: "black",
    //     next: "black-6"
    // },
    // "black-6": {
    //     name: "Black Belt 6th Degree",
    //     colour: "black",
    //     stripe: null,
    //     level: 6,
    //     group: "black",
    //     next: "black-7"
    // },
    // "black-7": {
    //     name: "Black Belt 7th Degree",
    //     colour: "black",
    //     stripe: null,
    //     level: 7,
    //     group: "black",
    //     next: "black-8"
    // },
    // "black-8": {
    //     name: "Black Belt 8th Degree",
    //     colour: "black",
    //     stripe: null,
    //     level: 8,
    //     group: "black",
    //     next: "black-9"
    // },
    // "black-9": {
    //     name: "Black Belt 9th Degree",
    //     colour: "black",
    //     stripe: null,
    //     level: 9,
    //     group: "black",
    //     next: null
    // }
} as const satisfies Record<string, Belt>;
