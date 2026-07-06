import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '06-conditional-rendering',
  baseId: '06-conditional-rendering',
  difficulty: 'intermediate',
  progressKey: 'intermediate:06-conditional-rendering',
  moduleNumber: 6,
  title: 'The Market State Card',
  topic: 'Conditional Rendering',
  narrative:
    'The market card must describe live, suspended, locked, boosted, standard, and missing data states without showing contradictory labels.',
  flagString: 'FLAG{MARKET_STATES_INT}',
  estimatedMinutes: 15,
  hints: [
    'Render the highest-priority state first: locked, then suspended, then live.',
    'Use && for optional badges and ternaries for exclusive labels.',
    'When oddsMultiplier is missing, show WAITING FOR ODDS instead of boosted or standard labels.',
  ],
};
