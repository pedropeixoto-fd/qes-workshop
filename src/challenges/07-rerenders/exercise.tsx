/**
 * Challenge 07 — React Re-renders
 */

import React, { useRef } from 'react';
import styles from './Challenge07.module.css';

interface OddsFeedProps {
  marketId: string;
  label: string;
}

function OddsFeed({ marketId, label }: OddsFeedProps) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className={`${styles.feed} ${styles.optimized}`}>
      <p className={styles.feedLabel}>{label}</p>
      <p className={styles.renderCount} data-testid={`${marketId}-renders`}>
        Renders: {renderCount.current}
      </p>
    </div>
  );
}

// TODO: Replace this export with React.memo(OddsFeed).
export const OptimizedOddsFeed = OddsFeed;
