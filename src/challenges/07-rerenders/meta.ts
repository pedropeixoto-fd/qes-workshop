import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '07-rerenders',
  baseId: '07-rerenders',
  difficulty: 'beginner',
  progressKey: 'beginner:07-rerenders',
  moduleNumber: 7,
  title: 'The Live Odds Optimiser',
  topic: 'React Re-renders',
  narrative:
    'The live odds board is burning compute cycles. Every market feed re-renders when the parent timer ticks — even markets whose odds never changed. Optimise with React.memo to reduce redundant renders.',
  flagString: 'FLAG{RERENDER_0P9X}',
  estimatedMinutes: 15,
  hints: [
    'React.memo is a higher-order component that prevents re-renders when props haven\'t changed. Wrap a component: const MemoizedFoo = React.memo(Foo). The wrapped component only re-renders when its props actually change.',
    'The fix is a one-liner: change `export const OptimizedOddsFeed = OddsFeed` to `export const OptimizedOddsFeed = React.memo(OddsFeed)`.',
    'Full solution: import React from "react"; ... export const OptimizedOddsFeed = React.memo(OddsFeed); — The render counter stays at 1 because the market\'s props never change, so memo skips the re-render.',
  ],
};
