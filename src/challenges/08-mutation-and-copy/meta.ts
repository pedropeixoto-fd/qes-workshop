import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '08-mutation-and-copy',
  baseId: '08-mutation-and-copy',
  difficulty: 'beginner',
  progressKey: 'beginner:08-mutation-and-copy',
  moduleNumber: 8,
  title: 'The Bet Slip Protocol',
  topic: 'Mutation & Shallow/Deep Copy',
  narrative:
    'Bet slips are getting corrupted. Someone is directly mutating shared records — changes to one slip bleed into another. Implement immutable updates and proper deep cloning so no bet slip can ever be silently tampered with.',
  flagString: 'FLAG{IMMUTABLE_D33P}',
  estimatedMinutes: 15,
  hints: [
    'To avoid mutating an object, create a new one using the spread operator: return { ...bet, odds: newOdds }. This copies all existing fields and overrides the ones you specify.',
    'Arrays inside a spread copy are still shared. To copy the array too, spread it as well: return { ...bet, markets: [...bet.markets, market] }.',
    'For a full deep clone, use structuredClone(bet) — it recursively copies all nested objects and arrays. Alternatively, JSON.parse(JSON.stringify(bet)) works for plain data.',
  ],
};
