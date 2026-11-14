import type { SparringMove } from "./data/prearranged-sparring";
import { stances, techniques } from "./data/patterns/generic";
import article from "indefinite";
import _ from "lodash";

export const parseSparringMove = (move: SparringMove): string => {
    const footwork = move.footwork ? `${move.footwork},` : null;
    const text = [];
    if (footwork) text.push(footwork);
    text.push("perform");
    const stance = move.stance ? stances[move.stance] : null;
    const technique = techniques[move.technique];
    const moveName = `${move.stanceSide || ""}${stance ? stance.en : ""}${technique.en}`.trim();
    text.push(article(moveName, { articleOnly: true }).toLowerCase());
    if (move.stanceSide) text.push(move.stanceSide);
    if (stance) text.push(stance.en);
    if (move.reverse) text.push("reverse");
    text.push(technique.en);

    return _.upperFirst(text.filter(Boolean).join(" "));
};
