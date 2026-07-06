/**
 * Challenge 06 — Conditional Rendering
 */

import styles from './Challenge06.module.css';

interface MarketCardProps {
  oddsMultiplier: number;
  isLive: boolean;
  marketId: string;
}

export function MarketCard({ oddsMultiplier, isLive, marketId }: MarketCardProps) {
  return (
    <div className={styles.badge} data-agent={marketId}>
      {/* TODO 1: Show SUSPENDED only when isLive is false. */}
      {true && (
        <p data-testid={`${marketId}-status`} className={styles.inactive}>
          ⚠ SUSPENDED
        </p>
      )}

      {/* TODO 2: Show BOOSTED ODDS for oddsMultiplier >= 3; otherwise STANDARD ODDS. */}
      <p data-testid={`${marketId}-access`} className={styles.classified}>
        BOOSTED ODDS
      </p>

      <p data-testid={`${marketId}-level`} className={styles.level}>
        Multiplier: {oddsMultiplier}x
      </p>
    </div>
  );
}
