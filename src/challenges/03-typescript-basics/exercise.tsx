/**
 * Challenge 03 — TypeScript Basics
 */

// TODO 1: Define the BetSlip interface.

// TODO 2: Add type annotations to this function.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function summarizeBetSlip(bet: any): any {
  return `[${(bet.odds as string).toUpperCase()}] ${bet.selection as string}`;
}

// TODO 3: Add a BetSlip type annotation to testBet.
export const testBet = {
  id: '1',
  selection: 42,
  isSettled: 'yes',
  odds: 'invalid',
};
