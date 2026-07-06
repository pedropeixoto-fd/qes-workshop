/**
 * Challenge 01 — Intermediate Arrow Functions
 */

export interface Market {
  id: string;
  label: string;
  odds: number;
}

export const markets: Market[] = [
  { id: 'nba-finals', label: 'NBA Finals', odds: 1.6 },
  { id: 'ucl-final', label: 'Champions League', odds: 2.2 },
  { id: 'super-bowl', label: 'Super Bowl', odds: 3.1 },
];

// TODO 1: Use an arrow callback with map to boost each market's odds by 10%.
export const boostMarkets = (source: Market[]): Market[] => source;

// TODO 2: Use an arrow callback with filter to keep markets with odds >= 2.
export const getTradableMarkets = (source: Market[]): Market[] => source;

// TODO 3: Use an arrow callback with reduce to total all odds.
export const totalOdds = (source: Market[]): number => source.length;
