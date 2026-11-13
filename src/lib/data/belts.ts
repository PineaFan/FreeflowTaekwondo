export const belts = {
    "white-junior": {
        name: "White (Junior)",
        colour: "white",
        stripe: "white",
        kup: "10th",
        requirements: {
            extra: [],
            minimum: {
                lessons: 12,
                months: 3,
                squads: 0,
                seniorGradeTrainings: 0
            }
        }
    },
    "purple-junior": {
        name: "Purple Stripe (Junior)",
        colour: "white",
        stripe: "purple",
        kup: "10th",
        requirements: {
            patterns: ["4dp-1", "4dp-2"],
            extra: [],
            minimum: {
                lessons: 12,
                months: 3,
                squads: 0,
                seniorGradeTrainings: 0
            }
        }
    },
    "orange-junior": {
        name: "Orange Stripe (Junior)",
        colour: "white",
        stripe: "orange",
        kup: "10th",
        requirements: {
            patterns: ["4db"],
            extra: [],
            minimum: {
                lessons: 12,
                months: 3,
                squads: 0,
                seniorGradeTrainings: 0
            }
        }
    },
    "white-senior": {
        name: "White",
        colour: "white",
        stripe: "white",
        kup: "10th",
        requirements: {
            patterns: ["4dp-1", "4dp-2", "4db"],
            extra: [],
            minimum: {
                lessons: 12,
                months: 3,
                squads: 0,
                seniorGradeTrainings: 0
            }
        }
    },
    "yellow-stripe": {
        name: "Yellow Stripe",
        colour: "white",
        stripe: "yellow",
        kup: "9th",
        requirements: {
            patterns: ["chonJi"],
            extra: [],
            minimum: {
                lessons: 20,
                months: 3,
                squads: 0,
                seniorGradeTrainings: 0
            }
        }
    },
    yellow: {
        name: "Yellow",
        colour: "yellow",
        stripe: "yellow",
        kup: "8th",
        requirements: {
            patterns: ["danGun", "chonJi"],
            prearrangedSparring: {
                name: "3 Step 1 & 2",
                moves: ["3 step 1", "3 step 2"]
            },
            extra: [],
            minimum: {
                lessons: 20,
                months: 3,
                squads: 0,
                seniorGradeTrainings: 0
            }
        }
    },
    "green-stripe": {
        name: "Green Stripe",
        colour: "yellow",
        stripe: "green",
        kup: "7th",
        requirements: {
            patterns: ["doSan", "danGun", "chonJi"],
            prearrangedSparring: {
                name: "3 Step 3 & 4",
                moves: ["3 step 3", "3 step 4"]
            },
            extra: [],
            minimum: {
                lessons: 20,
                months: 3,
                squads: 0,
                seniorGradeTrainings: 0
            }
        }
    },
    green: {
        name: "Green",
        colour: "green",
        stripe: "green",
        kup: "6th",
        requirements: {
            patterns: ["wonHyo", "doSan", "danGun"],
            prearrangedSparring: {
                name: "3 Step 5 & 6",
                moves: ["3 step 5", "3 step 6"]
            },
            extra: ["sparring", "beltTying"],
            minimum: {
                lessons: 20,
                months: 3,
                squads: 1,
                seniorGradeTrainings: 0
            }
        }
    },
    "blue-stripe": {
        name: "Blue Stripe",
        colour: "green",
        stripe: "blue",
        kup: "5th",
        requirements: {
            patterns: ["yulGok", "wonHyo", "doSan"],
            prearrangedSparring: {
                name: "2 Step 1 & 2",
                moves: ["2 step 1", "2 step 2"]
            },
            extra: ["sparring"],
            minimum: {
                lessons: 20,
                months: 3,
                squads: 1,
                seniorGradeTrainings: 0
            }
        }
    },
    blue: {
        name: "Blue",
        colour: "blue",
        stripe: "blue",
        kup: "4th",
        requirements: {
            patterns: ["joongGun", "yulGok", "wonHyo"],
            prearrangedSparring: {
                name: "2 Step 3 & 4",
                moves: ["2 step 3", "2 step 4"]
            },
            extra: ["sparring", "powerTest"],
            minimum: {
                lessons: 40,
                months: 6,
                squads: 1,
                seniorGradeTrainings: 0
            }
        }
    },
    "red-stripe": {
        name: "Red Stripe",
        colour: "blue",
        stripe: "red",
        kup: "3rd",
        requirements: {
            patterns: ["toiGye", "joongGun", "yulGok"],
            prearrangedSparring: {
                name: "1 Step standard attacks and defence",
                moves: ["1 step standard"]
            },
            extra: ["sparring", "powerTest"],
            minimum: {
                lessons: 40,
                months: 6,
                squads: 1,
                seniorGradeTrainings: 0
            }
        }
    },
    red: {
        name: "Red",
        colour: "red",
        stripe: "red",
        kup: "2nd",
        requirements: {
            patterns: ["hwaRang", "toiGye", "joongGun"],
            prearrangedSparring: {
                name: "1 Step standard attacks and traditional defences",
                moves: ["1 step traditional"]
            },
            extra: ["sparring", "powerTest"],
            minimum: {
                lessons: 40,
                months: 6,
                squads: 1,
                seniorGradeTrainings: 1
            }
        }
    },
    "black-stripe": {
        name: "Black Stripe",
        colour: "red",
        stripe: "black",
        kup: "1st",
        requirements: {
            patterns: ["choongMoo", "hwaRang", "toiGye"],
            prearrangedSparring: {
                name: "1 Step traditional attacks and traditional defences",
                moves: ["1 step freestyle"]
            },
            extra: ["sparring", "powerTest"],
            minimum: {
                lessons: 60,
                months: 9,
                squads: 2,
                seniorGradeTrainings: 2
            }
        }
    },
    "black-1": {
        name: "Black Belt 1st Degree",
        colour: "black",
        stripe: "black",
        kup: "I",
        requirements: {
            patterns: ["geBaek", "choongMoo", "kwangGae"],
            prearrangedSparring: {
                name: "1 Step freestyle attacks and traditional defences",
                moves: ["1 step freestyle"]
            }
        }
    }
};
