import { useState, useEffect, useRef } from 'react';
import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import styles from './Challenge07.module.css';
import { OptimizedOddsFeed } from './exercise';

interface OddsFeedProps {
  marketId: string;
  label: string;
}

// The unoptimized version — for comparison, do not change this
function OddsFeedUnoptimized({ marketId, label }: OddsFeedProps) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className={styles.feed}>
      <p className={styles.feedLabel}>{label}</p>
      <p className={styles.renderCount} data-testid={`${marketId}-renders`}>
        Renders: {renderCount.current}
      </p>
    </div>
  );
}

function LiveOddsBoard() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.grid}>
      <div className={styles.timerBar}>
        <span>Parent timer: tick {tick}</span>
        <span className={styles.timerNote}>(re-renders parent every second)</span>
      </div>
      <div className={styles.cameras}>
        <div className={styles.cameraGroup}>
          <p className={styles.groupLabel}>Without React.memo</p>
          <OddsFeedUnoptimized marketId="mkt-bad" label="Market A — Unoptimized" />
        </div>
        <div className={styles.cameraGroup}>
          <p className={styles.groupLabel}>With React.memo (your task)</p>
          <OptimizedOddsFeed marketId="mkt-good" label="Market B — Optimized" />
        </div>
      </div>
    </div>
  );
}

function VerifyChallenge07({ onResult }: { onResult: (checks: ChallengeCheck[]) => void }) {
  const [waiting, setWaiting] = useState(false);

  function startVerification() {
    setWaiting(true);
    // Wait 4 seconds, then read render counts
    setTimeout(() => {
      const badEl = document.querySelector('[data-testid="mkt-bad-renders"]');
      const goodEl = document.querySelector('[data-testid="mkt-good-renders"]');

      const badCount = parseInt(badEl?.textContent?.match(/\d+/)?.[0] ?? '0', 10);
      const goodCount = parseInt(goodEl?.textContent?.match(/\d+/)?.[0] ?? '0', 10);

      const checks: ChallengeCheck[] = [
        {
          label: 'Unoptimized market re-renders on every tick (renders > 3)',
          pass: badCount >= 3,
        },
        {
          label: 'Optimized market stays at 1 render (React.memo is working)',
          pass: goodCount === 1,
        },
        {
          label: 'Optimized renders < unoptimized renders',
          pass: goodCount < badCount,
        },
      ];

      onResult(checks);
      setWaiting(false);
    }, 4000);
  }

  return (
    <button className="verify-btn" onClick={startVerification} disabled={waiting}>
      {waiting ? 'Watching for 4 seconds...' : 'Verify Challenge (waits 4s)'}
    </button>
  );
}

export function Challenge07() {
  const [checks, setChecks] = useState<ChallengeCheck[]>([
    { label: 'Unoptimized market re-renders on every tick (renders > 3)', pass: false },
    { label: 'Optimized market stays at 1 render (React.memo is working)', pass: false },
    { label: 'Optimized renders < unoptimized renders', pass: false },
  ]);

  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/07-rerenders/exercise.tsx</code> in your editor.</p>
        <p>
          Change the last export to use <code>React.memo</code>, save, then watch the render
          counters. When ready, click <strong>Verify Challenge</strong> and wait 4 seconds.
        </p>
      </div>
      <LiveOddsBoard />
      <VerifyChallenge07 onResult={setChecks} />
    </ChallengeShell>
  );
}
