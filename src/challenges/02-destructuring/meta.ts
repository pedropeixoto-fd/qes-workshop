import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '02-destructuring',
  baseId: '02-destructuring',
  difficulty: 'beginner',
  progressKey: 'beginner:02-destructuring',
  moduleNumber: 2,
  title: 'The Bettor Profiles',
  topic: 'Destructuring',
  narrative:
    'Bettor profile data extraction is flagged as inefficient. Every field is accessed with verbose dot-notation — rewrite the extractions using proper destructuring syntax to restore clean data access.',
  flagString: 'FLAG{DESTRUCT_9R7M}',
  estimatedMinutes: 10,
  hints: [
    'Object destructuring syntax: const { property } = object. Array destructuring: const [first, second] = array.',
    'You can rename while destructuring: const { originalName: newName } = object.',
    'For the third task: const { tier: userTier } = bettorProfile. For the array: const [firstMarket] = bettorProfile.markets.',
  ],
};
