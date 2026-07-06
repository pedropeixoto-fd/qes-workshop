/**
 * Challenge 08 — Intermediate Mutation & Copy
 */

export interface ParlayLeg {
  id: string;
  selection: string;
  odds: number;
  metadata: {
    source: string;
    reviewed: boolean;
  };
}

export interface ParlaySlip {
  id: string;
  legs: ParlayLeg[];
  audit: {
    lastUpdatedBy: string;
  };
}

export const originalSlip: ParlaySlip = {
  id: 'slip-884',
  legs: [
    { id: 'leg-1', selection: 'Lakers ML', odds: 1.9, metadata: { source: 'feed-a', reviewed: false } },
    { id: 'leg-2', selection: 'Arsenal -1', odds: 2.4, metadata: { source: 'feed-b', reviewed: false } },
  ],
  audit: { lastUpdatedBy: 'system' },
};

// TODO: Return a new slip with only the matching leg updated.
export function repairLeg(slip: ParlaySlip, legId: string, odds: number, reviewer: string): ParlaySlip {
  const leg = slip.legs.find(item => item.id === legId);
  if (leg) {
    leg.odds = odds;
    leg.metadata.reviewed = true;
  }
  slip.audit.lastUpdatedBy = reviewer;
  return slip;
}
