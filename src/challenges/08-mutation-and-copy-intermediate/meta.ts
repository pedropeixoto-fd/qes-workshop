import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '08-mutation-and-copy',
  baseId: '08-mutation-and-copy',
  difficulty: 'intermediate',
  progressKey: 'intermediate:08-mutation-and-copy',
  moduleNumber: 8,
  title: 'The Parlay Repair Protocol',
  topic: 'Mutation & Shallow/Deep Copy',
  narrative:
    'A parlay leg needs to be repaired without mutating the original slip, nested leg arrays, or metadata. Update deeply enough that audit records stay trustworthy.',
  flagString: 'FLAG{PARLAY_IMMUTABLE_INT}',
  estimatedMinutes: 18,
  hints: [
    'Use object spread at every object level that changes.',
    'Use array.map to replace only the matching leg while preserving the other legs.',
    'The original slip, original legs array, changed leg, and metadata object should all stay independent.',
  ],
};
