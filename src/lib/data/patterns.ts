import { fourDirectionalPunch1 } from "./patterns/4-directional-punch-1";
import { fourDirectionalPunch2 } from "./patterns/4-directional-punch-2";
import { fourDirectionalBlock } from "./patterns/4-directional-block";
import { chonJi } from "./patterns/chon-ji";
import { danGun } from "./patterns/dan-gun";
import { doSan } from "./patterns/do-san";
import { wonHyo } from "./patterns/won-hyo";
import { yulGok } from "./patterns/yul-gok";
import { joongGun } from "./patterns/joong-gun";
import { toiGye } from "./patterns/toi-gye";
import { hwaRang } from "./patterns/hwa-rang";
import { choongMoo } from "./patterns/choong-moo";
import { geBaek } from "./patterns/ge-beck";
import { kwangGae } from "./patterns/kwang-gae";
import { poEun } from "./patterns/po-eun";

export { techniques } from "./patterns/generic";

export const patterns = {
    "4-directional-punch-1": fourDirectionalPunch1,
    "4-directional-punch-2": fourDirectionalPunch2,
    "4-directional-block": fourDirectionalBlock,
    "chon-ji": chonJi,
    "dan-gun": danGun,
    "do-san": doSan,
    "won-hyo": wonHyo,
    "yul-gok": yulGok,
    "joong-gun": joongGun,
    "toi-gye": toiGye,
    "hwa-rang": hwaRang,
    "choong-moo": choongMoo,
    "ge-baek": geBaek,
    "kwang-gae": kwangGae,
    "po-eun": poEun
};

export type PatternKey = keyof typeof patterns;
