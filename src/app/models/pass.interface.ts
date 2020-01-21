import { AttackOutcome } from "./attack-outcome.enum";

interface Pass {
    id: string;
    rotation: number;
    player: string; // probably just use name, does not need to be robust right now
    rating: number; // 0, 1, 2, 3
    attackOutcome: AttackOutcome;
    matchNumber: number; // arbitrary int, probably will use 1-based index from the first match of the year
};