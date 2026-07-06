/**
 * Challenge 08 — Mutation & Shallow/Deep Copy
 */

export interface BetSlip {
  id: string;
  odds: number;
  markets: string[];
}

// TODO 1: Return a new bet slip with updated odds.
export function updateBetSlip(bet: BetSlip, odds: number): BetSlip {
  bet.odds = odds;
  return bet;
}

// TODO 2: Return a new bet slip with the market added to a new array.
export function addMarket(bet: BetSlip, market: string): BetSlip {
  bet.markets.push(market);
  return bet;
}

// TODO 3: Return a deep copy whose markets array is independent.
export function deepCloneBetSlip(bet: BetSlip): BetSlip {
  return { ...bet };
}
