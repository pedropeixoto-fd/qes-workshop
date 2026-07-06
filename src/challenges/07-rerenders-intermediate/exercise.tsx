/**
 * Challenge 07 — Intermediate React Re-renders
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from '../IntermediateChallenge.module.css';

interface Market {
  id: string;
  label: string;
  odds: number;
}

interface MarketRowProps {
  market: Market;
  onSelect: (id: string) => void;
}

function MarketRow({ market, onSelect }: MarketRowProps) {
  const renders = useRef(0);
  renders.current += 1;

  return (
    <button className={styles.card} data-testid={`${market.id}-row`} onClick={() => onSelect(market.id)}>
      <span className={styles.label}>{market.label}</span>
      <span className={styles.value}>{market.odds.toFixed(2)}</span>
      <span className={styles.muted} data-testid={`${market.id}-renders`}>Renders: {renders.current}</span>
    </button>
  );
}

// TODO 1: Wrap MarketRow in React.memo.
const MemoMarketRow = MarketRow;

const sourceMarkets: Market[] = [
  { id: 'nba', label: 'NBA Finals', odds: 2.1 },
  { id: 'nfl', label: 'Super Bowl', odds: 3.4 },
];

export function StableOddsBoard() {
  const [tick, setTick] = useState(0);
  const [selected, setSelected] = useState('none');

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // TODO 2: Keep this derived rows array stable with useMemo.
  const rows = sourceMarkets.map(market => ({ ...market, label: `${market.label} Live` }));

  // TODO 3: Keep this callback stable with useCallback.
  const handleSelect = (id: string) => setSelected(id);

  return (
    <div className={styles.panel}>
      <p className={styles.muted}>Parent timer tick: {tick}</p>
      <p className={styles.muted}>Selected: {selected}</p>
      <div className={styles.grid}>
        {rows.map(market => <MemoMarketRow key={market.id} market={market} onSelect={handleSelect} />)}
      </div>
    </div>
  );
}
