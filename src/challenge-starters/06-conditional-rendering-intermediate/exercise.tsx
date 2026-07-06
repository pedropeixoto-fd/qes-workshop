/**
 * Challenge 06 — Intermediate Conditional Rendering
 */

import styles from '../IntermediateChallenge.module.css';

interface MarketCardProps {
  id: string;
  label: string;
  isLive: boolean;
  isLocked: boolean;
  oddsMultiplier?: number;
}

export function MarketCard({ id, label, isLive, isLocked, oddsMultiplier }: MarketCardProps) {
  // TODO: Render one primary state and the correct odds label.
  return (
    <div className={styles.card}>
      <p className={styles.label}>{label}</p>
      <p data-testid={`${id}-state`} className={styles.value}>LIVE</p>
      <p data-testid={`${id}-odds`} className={styles.value}>BOOSTED ODDS</p>
    </div>
  );
}
