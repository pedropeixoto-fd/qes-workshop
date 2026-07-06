import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '04-state-and-props',
  baseId: '04-state-and-props',
  difficulty: 'intermediate',
  progressKey: 'intermediate:04-state-and-props',
  moduleNumber: 4,
  title: 'The Odds Stepper',
  topic: 'React State & Props',
  narrative:
    'Trading needs a controlled odds stepper with boundaries. Wire props, local interactions, and parent-owned state so odds adjustments stay valid.',
  flagString: 'FLAG{CONTROLLED_STEPPER_INT}',
  estimatedMinutes: 18,
  hints: [
    'A controlled component receives value and onChange from its parent.',
    'Clamp updates with Math.min(max, Math.max(min, nextValue)) before calling onChange.',
    'The parent should own the odds state and pass value, min, max, step, and onChange to the stepper.',
  ],
};
