import { meta as meta01 } from './01-arrow-functions/meta';
import { meta as meta02 } from './02-destructuring/meta';
import { meta as meta03 } from './03-typescript-basics/meta';
import { meta as meta04 } from './04-state-and-props/meta';
import { meta as meta05 } from './05-event-handling/meta';
import { meta as meta06 } from './06-conditional-rendering/meta';
import { meta as meta07 } from './07-rerenders/meta';
import { meta as meta08 } from './08-mutation-and-copy/meta';
import { meta as meta09 } from './09-lifting-state/meta';
import { meta as meta01Intermediate } from './01-arrow-functions-intermediate/meta';
import { meta as meta02Intermediate } from './02-destructuring-intermediate/meta';
import { meta as meta03Intermediate } from './03-typescript-basics-intermediate/meta';
import { meta as meta04Intermediate } from './04-state-and-props-intermediate/meta';
import { meta as meta05Intermediate } from './05-event-handling-intermediate/meta';
import { meta as meta06Intermediate } from './06-conditional-rendering-intermediate/meta';
import { meta as meta07Intermediate } from './07-rerenders-intermediate/meta';
import { meta as meta08Intermediate } from './08-mutation-and-copy-intermediate/meta';
import { meta as meta09Intermediate } from './09-lifting-state-intermediate/meta';
import type { ChallengeDifficulty } from '../types';

export const CHALLENGE_SETS = {
  beginner: [meta01, meta02, meta03, meta04, meta05, meta06, meta07, meta08, meta09],
  intermediate: [
    meta01Intermediate,
    meta02Intermediate,
    meta03Intermediate,
    meta04Intermediate,
    meta05Intermediate,
    meta06Intermediate,
    meta07Intermediate,
    meta08Intermediate,
    meta09Intermediate,
  ],
} satisfies Record<ChallengeDifficulty, typeof meta01[]>;

export const CHALLENGES = CHALLENGE_SETS.beginner;

export function getChallengesForDifficulty(difficulty: ChallengeDifficulty) {
  return CHALLENGE_SETS[difficulty];
}
