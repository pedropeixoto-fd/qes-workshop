import { useState } from 'react';
import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import styles from './Challenge06.module.css';
import { MarketCard } from './exercise';

function VerifyChallenge06({ onResult }: { onResult: (checks: ChallengeCheck[]) => void }) {
  function runChecks() {
    // market-a: oddsMultiplier=5, isLive=true → no SUSPENDED, BOOSTED ODDS
    const aStatus = document.querySelector('[data-testid="market-a-status"]');
    const aAccess = document.querySelector('[data-testid="market-a-access"]')?.textContent ?? '';

    // market-b: oddsMultiplier=1, isLive=true → no SUSPENDED, STANDARD ODDS
    const bStatus = document.querySelector('[data-testid="market-b-status"]');
    const bAccess = document.querySelector('[data-testid="market-b-access"]')?.textContent ?? '';

    // market-c: oddsMultiplier=5, isLive=false → SUSPENDED, BOOSTED ODDS
    const cStatus = document.querySelector('[data-testid="market-c-status"]');
    const cAccess = document.querySelector('[data-testid="market-c-access"]')?.textContent ?? '';

    const checks: ChallengeCheck[] = [
      {
        label: 'Live market (isLive=true) does NOT show SUSPENDED',
        pass: aStatus === null,
      },
      {
        label: 'Suspended market (isLive=false) SHOWS SUSPENDED',
        pass: cStatus !== null,
      },
      {
        label: 'High multiplier (x5) shows BOOSTED ODDS',
        pass: aAccess.includes('BOOSTED') && cAccess.includes('BOOSTED'),
      },
      {
        label: 'Low multiplier (x1) shows STANDARD ODDS',
        pass: bAccess.includes('STANDARD'),
      },
    ];

    onResult(checks);
  }

  return (
    <button className="verify-btn" onClick={runChecks}>
      Verify Challenge
    </button>
  );
}

export function Challenge06() {
  const [checks, setChecks] = useState<ChallengeCheck[]>([
    { label: 'Live market (isLive=true) does NOT show SUSPENDED', pass: false },
    { label: 'Suspended market (isLive=false) SHOWS SUSPENDED', pass: false },
    { label: 'High multiplier (x5) shows BOOSTED ODDS', pass: false },
    { label: 'Low multiplier (x1) shows STANDARD ODDS', pass: false },
  ]);

  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/06-conditional-rendering/exercise.tsx</code> in your editor.</p>
        <p>Fix the two conditional rendering bugs in <code>MarketCard</code>, then click <strong>Verify Challenge</strong>.</p>
        <p>Preview of three markets with different props (the cards below update live):</p>
      </div>

      <div className={styles.badgeGrid}>
        <div className={styles.agentCase}>
          <p className={styles.caseLabel}>Chiefs vs Eagles — x5 odds, Live</p>
          <MarketCard marketId="market-a" oddsMultiplier={5} isLive={true} />
        </div>
        <div className={styles.agentCase}>
          <p className={styles.caseLabel}>Lakers vs Celtics — x1 odds, Live</p>
          <MarketCard marketId="market-b" oddsMultiplier={1} isLive={true} />
        </div>
        <div className={styles.agentCase}>
          <p className={styles.caseLabel}>Man City vs Liverpool — x5 odds, Suspended</p>
          <MarketCard marketId="market-c" oddsMultiplier={5} isLive={false} />
        </div>
      </div>

      <VerifyChallenge06 onResult={setChecks} />
    </ChallengeShell>
  );
}
