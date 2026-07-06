import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '03-typescript-basics',
  baseId: '03-typescript-basics',
  difficulty: 'intermediate',
  progressKey: 'intermediate:03-typescript-basics',
  moduleNumber: 3,
  title: 'The Bet State Contract',
  topic: 'TypeScript Basics',
  narrative:
    'Bet lifecycle data is mixing incompatible fields. Restore a discriminated union so pending, settled, and voided bets can each be formatted safely.',
  flagString: 'FLAG{BET_STATE_UNION_INT}',
  estimatedMinutes: 16,
  hints: [
    'A discriminated union uses one shared literal field, such as status: "pending" | "settled" | "voided".',
    'Each union member can have different required fields. Settled bets need a payout; voided bets need a reason.',
    'In formatBetState, switch on bet.status and return a different string for every case.',
  ],
};
