import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '01-arrow-functions',
  baseId: '01-arrow-functions',
  difficulty: 'beginner',
  progressKey: 'beginner:01-arrow-functions',
  moduleNumber: 1,
  title: 'The Odds Calculator',
  topic: 'Arrow Functions',
  narrative:
    'The odds calculation engine is down. A buggy deployment replaced all arrow functions with old-style declarations — and deleted one entirely. Restore the calculator functions to get live odds working again.',
  flagString: 'FLAG{ODDS_CALC_4X2K}',
  estimatedMinutes: 8,
  hints: [
    'Arrow functions use the => syntax instead of the function keyword.',
    'An arrow function looks like: const myFn = (param) => { return value; }. For single expressions you can skip the braces and return: const myFn = (param) => value.',
    'Convert double: const double = (n: number): number => n * 2. Then write square from scratch: const square = (n: number): number => n * n.',
  ],
};
