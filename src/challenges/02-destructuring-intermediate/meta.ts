import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '02-destructuring',
  baseId: '02-destructuring',
  difficulty: 'intermediate',
  progressKey: 'intermediate:02-destructuring',
  moduleNumber: 2,
  title: 'The Risk Profile Extractor',
  topic: 'Destructuring',
  narrative:
    'Risk analysts need clean access to nested profile data. Replace noisy lookups with nested destructuring, renamed fields, array rest syntax, and defaults.',
  flagString: 'FLAG{PROFILE_DESTRUCT_INT}',
  estimatedMinutes: 14,
  hints: [
    'Nested destructuring can reach into objects: const { risk: { score } } = profile.',
    'Rename while destructuring with originalName: newName, and collect the rest of an array with ...remaining.',
    'Use a default value for limits.daily when it is missing: daily = 1000.',
  ],
};
