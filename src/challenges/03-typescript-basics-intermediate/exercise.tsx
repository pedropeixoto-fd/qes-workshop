/**
 * Challenge 03 — Intermediate TypeScript Basics
 */

// TODO 1: Replace this broad type with a discriminated union.
export type BetState = {
  status: string;
  id: number;
  selection: string;
  stake: number;
  payout?: number;
  reason?: string;
};

// TODO 2: Switch on bet.status and format all three states.
// example return value: 'PENDING #101 Lakers ML - stake $25'
export function formatBetState(bet: BetState): string {
  switch (bet.status) {
    case 'pending':
    case 'settled':
    case 'voided':
    default:
      return `Unknown bet status: ${bet.status}`;
  }
}

export const pending: BetState = { status: 'pending', id: 101, selection: 'Lakers ML', stake: 25 };
export const settled: BetState = { status: 'settled', id: 102, selection: 'Arsenal -1', stake: 10, payout: 28 };
export const voided: BetState = { status: 'voided', id: 103, selection: 'Yankees O8.5', stake: 15, reason: 'rain delay' };
