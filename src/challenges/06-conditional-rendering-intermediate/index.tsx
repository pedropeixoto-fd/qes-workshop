import { useState } from 'react';
import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import styles from '../IntermediateChallenge.module.css';
import { MarketCard } from './exercise';

function VerifyChallenge06Intermediate({ onResult }: { onResult: (checks: ChallengeCheck[]) => void }) {
  function runChecks() {
    const liveState = document.querySelector('[data-testid="live-state"]')?.textContent ?? '';
    const suspendedState = document.querySelector('[data-testid="suspended-state"]')?.textContent ?? '';
    const lockedState = document.querySelector('[data-testid="locked-state"]')?.textContent ?? '';
    const waitingOdds = document.querySelector('[data-testid="waiting-odds"]')?.textContent ?? '';
    const standardOdds = document.querySelector('[data-testid="standard-odds"]')?.textContent ?? '';
    const boostedOdds = document.querySelector('[data-testid="boosted-odds"]')?.textContent ?? '';

    onResult([
      { label: 'Live market shows LIVE state', pass: liveState === 'LIVE' },
      { label: 'Suspended market shows SUSPENDED state', pass: suspendedState === 'SUSPENDED' },
      { label: 'Locked market shows LOCKED state before any other state', pass: lockedState === 'LOCKED' },
      { label: 'Missing odds show WAITING FOR ODDS', pass: waitingOdds === 'WAITING FOR ODDS' },
      { label: 'Low multiplier shows STANDARD ODDS', pass: standardOdds === 'STANDARD ODDS' },
      { label: 'High multiplier shows BOOSTED ODDS', pass: boostedOdds === 'BOOSTED ODDS' },
    ]);
  }

  return <button className="verify-btn" onClick={runChecks}>Verify Challenge</button>;
}

export function Challenge06Intermediate() {
  const [checks, setChecks] = useState<ChallengeCheck[]>([
    { label: 'Live market shows LIVE state', pass: false },
    { label: 'Suspended market shows SUSPENDED state', pass: false },
    { label: 'Locked market shows LOCKED state before any other state', pass: false },
    { label: 'Missing odds show WAITING FOR ODDS', pass: false },
    { label: 'Low multiplier shows STANDARD ODDS', pass: false },
    { label: 'High multiplier shows BOOSTED ODDS', pass: false },
  ]);

  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/06-conditional-rendering-intermediate/exercise.tsx</code>.</p>
        <p>Fix <code>MarketCard</code> so it handles exclusive status labels and odds fallback labels.</p>
      </div>
      <div className={styles.grid}>
        <MarketCard id="live" label="NBA Finals" isLive={true} isLocked={false} oddsMultiplier={2.5} />
        <MarketCard id="suspended" label="UCL Final" isLive={false} isLocked={false} oddsMultiplier={3.5} />
        <MarketCard id="locked" label="Super Bowl" isLive={true} isLocked={true} oddsMultiplier={4} />
        <MarketCard id="waiting" label="Formula 1" isLive={true} isLocked={false} />
        <MarketCard id="standard" label="NHL Playoffs" isLive={true} isLocked={false} oddsMultiplier={1.8} />
        <MarketCard id="boosted" label="MLB Rivalry" isLive={true} isLocked={false} oddsMultiplier={5} />
      </div>
      <VerifyChallenge06Intermediate onResult={setChecks} />
    </ChallengeShell>
  );
}
