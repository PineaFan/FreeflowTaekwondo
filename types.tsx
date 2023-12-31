export interface belt {
    name: string;
    displayName: string;
    colour: string;
    stripe: string;
    requirements: {
        patterns?: string[];
        prearrangedSparring?: {
            name: string;
            moves: string[];
        };
        extra: string[];
        minimum: {
            lessons: number;
            months: number;
            squads: number;
            seniorGradeTrainings: number;
        }
    };
};
export interface pattern {
    name: string;
    about: string[];
    video?: string;
    ready: string;
    diagram: string;
    facing: string;
    moves: string[];
    end: string;
};
export interface linework {
    direction: string;
    english: string;
    korean: string;
};
export interface prearrangedSparring {
    name: string;
    measure?: string;
    start?: string;
    attack: string;
    defence: string;
    counter?: string;
};
export interface theory {
    name: string;
    images: string[];
    kup: string;
    questions: {
        prompt: string;
        answer?: string | string[];
        responseType: string;  // "exact" | "translate" | "GPT" | "typo" | "opinion" | "list" | "DNA";
    }[];
    extra?: {
        prompt: string;
        answer?: string | string[];
        responseType: string;  // "exact" | "translate" | "GPT" | "typo" | "opinion" | "list" | "DNA";
    }[];
};
export interface lesson {
    day: string;
    location_name: string;
    building_name: string;
    postcode: string;
    geo: string;
    classes: {
        UUID: string;
        name: string;
        start: string;
        end: string;
    }[];
};
