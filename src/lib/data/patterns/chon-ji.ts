import type { Pattern } from "./generic";

export const chonJi: Pattern = {
    slug: "chon-ji",
    name: "Chon-Ji",
    about: [
        "Chon-Ji literally means heaven and earth. In the orient it is interpreted as the creation of the world or the beginning of human history, therefore it is the initial pattern played by the beginner.",
        "The pattern consists of two similar parts, one to represent heaven and the other to represent the earth."
    ],
    type: "pattern",
    video: "https://videos.freeflowtaekwondo.com/chon-ji.mp4",
    diagram: "cross",
    start: { facing: "N", stance: "parallelReady" },
    moves: [
        {
            technique: "lowBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "W",
            facing: "W",
            frame: 29
        }, // 1
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "W",
            facing: "W",
            frame: 85
        }, // 2
        {
            technique: "lowBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "E",
            facing: "E",
            frame: 144
        }, // 3
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "E",
            facing: "E",
            frame: 195
        }, // 4
        {
            technique: "lowBlock",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "N",
            facing: "N",
            frame: 254
        }, // 5
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "N",
            facing: "N",
            frame: 305
        }, // 6
        {
            technique: "lowBlock",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "S",
            facing: "S",
            frame: 364
        }, // 7
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "S",
            facing: "S",
            frame: 415
        }, // 8
        {
            technique: "middleBlock",
            stance: "l",
            stanceSide: "right",
            side: "left",
            moveTo: "E",
            facing: "E",
            frame: 474
        }, // 9
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "E",
            facing: "E",
            frame: 525
        }, // 10
        {
            technique: "middleBlock",
            stance: "l",
            stanceSide: "left",
            side: "right",
            moveTo: "W",
            facing: "W",
            frame: 584
        }, // 11
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "W",
            facing: "W",
            frame: 635
        }, // 12
        {
            technique: "middleBlock",
            stance: "l",
            stanceSide: "right",
            side: "left",
            moveTo: "S",
            facing: "S",
            frame: 694
        }, // 13
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "S",
            facing: "S",
            frame: 745
        }, // 14
        {
            technique: "middleBlock",
            stance: "l",
            stanceSide: "left",
            side: "right",
            moveTo: "N",
            facing: "N",
            frame: 804
        }, // 15
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "N",
            facing: "N",
            frame: 855
        }, // 16
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "N",
            facing: "N",
            frame: 906
        }, // 17
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "left",
            side: "left",
            moveTo: "S",
            facing: "N",
            frame: 957
        }, // 18
        {
            technique: "middlePunch",
            stance: "walking",
            stanceSide: "right",
            side: "right",
            moveTo: "S",
            facing: "N",
            frame: 1008
        } // 19
    ],
    end: "Bring the right foot back to a ready posture"
};
