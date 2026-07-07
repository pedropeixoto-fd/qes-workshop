import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '07-rerenders',
  baseId: '07-rerenders',
  difficulty: 'intermediate',
  progressKey: 'intermediate:07-rerenders',
  moduleNumber: 4,
  title: 'The Stable Odds Board',
  topic: 'React Re-renders',
  narrative:
    'The live odds board still wastes renders because derived rows and callbacks are recreated on every tick. Stabilize the board with memoization tools.',
  flagString: 'FLAG{STABLE_BOARD_INT}',
  estimatedMinutes: 20,
  hints: [
    'Wrap the row component in React.memo so unchanged props can skip re-rendering.',
    'useMemo should keep the derived market rows stable while source markets are unchanged.',
    'useCallback should keep the row action handler stable between parent timer ticks.',
  ],
};
