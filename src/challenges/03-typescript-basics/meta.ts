import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '03-typescript-basics',
  baseId: '03-typescript-basics',
  difficulty: 'beginner',
  progressKey: 'beginner:03-typescript-basics',
  moduleNumber: 3,
  title: 'The Bet Slip Types',
  topic: 'TypeScript Basics',
  narrative:
    'The sportsbook\'s type system has been wiped — interfaces deleted, annotations stripped. Without proper types, invalid bet data slips through undetected and corrupts the platform. Restore the type contracts.',
  flagString: 'FLAG{TS_TYPES_ZQ5P}',
  estimatedMinutes: 12,
  hints: [
    'An interface defines the shape of an object: interface Foo { name: string; age: number; }. A union type uses |: type Status = "active" | "inactive".',
    'Function parameter types go after the param name: function fn(x: number). Return types go after the parentheses: function fn(x: number): string.',
    'For the BetSlip interface you need: id (number), selection (string), isSettled (boolean), odds with union type "favourite" | "even" | "underdog". Then annotate summarizeBetSlip as (bet: BetSlip): string.',
  ],
};
