import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '06-conditional-rendering',
  baseId: '06-conditional-rendering',
  difficulty: 'beginner',
  progressKey: 'beginner:06-conditional-rendering',
  moduleNumber: 6,
  title: 'The Bet Status Display',
  topic: 'Conditional Rendering',
  narrative:
    'The market status card always shows SUSPENDED and always shows BOOSTED ODDS, regardless of the actual data. Live markets appear offline, and every bet looks boosted. Fix the conditional rendering bugs.',
  flagString: 'FLAG{COND_RENDER_2M8N}',
  estimatedMinutes: 10,
  hints: [
    'Conditional rendering in React uses boolean expressions: {condition && <JSX />} renders JSX only when condition is true. For if/else: {condition ? <A /> : <B />}.',
    'The status paragraph should only appear when isLive is FALSE. The odds paragraph needs two cases: oddsMultiplier >= 3 shows BOOSTED ODDS, otherwise STANDARD ODDS.',
    'Use: {!isLive && <p>SUSPENDED</p>} for the status. Use a ternary for odds: {oddsMultiplier >= 3 ? <p>BOOSTED ODDS</p> : <p>STANDARD ODDS</p>}.',
  ],
};
