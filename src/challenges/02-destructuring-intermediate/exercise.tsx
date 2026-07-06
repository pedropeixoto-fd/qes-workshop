/**
 * Challenge 02 — Intermediate Destructuring
 */

export const riskProfile = {
  user: {
    handle: 'SharpBettor99',
    tier: 4,
    risk: { score: 87, band: 'watch' },
  },
  markets: ['NBA', 'NFL', 'UCL'],
  limits: {
    weekly: 5000,
  },
};

// TODO 1: Use nested destructuring to read handle, score, and band.
export const handle = riskProfile.user.handle;
export const riskScore = riskProfile.user.risk.score;
export const riskBand = riskProfile.user.risk.band;

// TODO 2: Use array destructuring with rest to get firstMarket and remainingMarkets.
export const firstMarket = riskProfile.markets[0];
export const remainingMarkets = riskProfile.markets.slice(1);

// TODO 3: Use destructuring rename and a default daily limit of 1000.
export const profileTier = riskProfile.user.tier;
export const dailyLimit: number = 0;
