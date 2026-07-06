import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '01-arrow-functions',
  baseId: '01-arrow-functions',
  difficulty: 'intermediate',
  progressKey: 'intermediate:01-arrow-functions',
  moduleNumber: 1,
  title: 'The Odds Pipeline',
  topic: 'Arrow Functions',
  narrative:
    'The odds engine needs a full transformation pipeline. Restore the arrow callbacks that boost, filter, and summarize live markets before they reach the trading desk.',
  flagString: 'FLAG{ODDS_PIPELINE_INT}',
  estimatedMinutes: 14,
  hints: [
    'Use arrow callbacks inside array methods: markets.map(market => ...), markets.filter(market => ...), markets.reduce((total, market) => ..., 0).',
    'Return new market objects from map with object spread: ({ ...market, odds: market.odds * boost }).',
    'The pipeline should boost all odds by 10%, keep markets at 2.0 or higher, and total the remaining odds.',
  ],
};
