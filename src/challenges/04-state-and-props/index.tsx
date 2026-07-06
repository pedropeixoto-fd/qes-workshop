import { useState } from 'react';
import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import styles from './Challenge04.module.css';
import { OddsCounter } from './exercise';

function VerifyChallenge04({ onResult }: { onResult: (checks: ChallengeCheck[]) => void }) {
  const [verified, setVerified] = useState(false);

  function runChecks() {
    const container = document.getElementById('ch04-sandbox');
    if (!container) return;

    const labelEl = container.querySelector('[data-testid="label"]');
    const countEl = container.querySelector('[data-testid="count"]');
    const incBtn = container.querySelector('[data-testid="increment"]') as HTMLButtonElement | null;
    const decBtn = container.querySelector('[data-testid="decrement"]') as HTMLButtonElement | null;

    const initialCount = parseInt(countEl?.textContent ?? 'NaN', 10);

    // Click increment twice
    incBtn?.click();
    incBtn?.click();
    const afterInc = parseInt(countEl?.textContent ?? 'NaN', 10);

    // Click decrement once
    decBtn?.click();
    const afterDec = parseInt(countEl?.textContent ?? 'NaN', 10);

    const checks: ChallengeCheck[] = [
      {
        label: 'Label shows "Bets Placed"',
        pass: labelEl?.textContent?.includes('Bets Placed') ?? false,
      },
      {
        label: 'Counter initializes at 5',
        pass: initialCount === 5,
      },
      {
        label: 'Place Bet button increases count by 1 each click',
        pass: afterInc === initialCount + 2,
      },
      {
        label: 'Cancel Bet button decreases count by 1',
        pass: afterDec === afterInc - 1,
      },
    ];

    onResult(checks);
    setVerified(true);
  }

  return (
    <button
      className="verify-btn"
      onClick={runChecks}
    >
      {verified ? 'Re-verify Challenge' : 'Verify Challenge'}
    </button>
  );
}

export function Challenge04() {
  const [checks, setChecks] = useState<ChallengeCheck[]>([
    { label: 'Label shows "Bets Placed"', pass: false },
    { label: 'Counter initializes at 5', pass: false },
    { label: 'Place Bet button increases count by 1 each click', pass: false },
    { label: 'Cancel Bet button decreases count by 1', pass: false },
  ]);

  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/04-state-and-props/exercise.tsx</code> in your editor.</p>
        <p>Fix the <code>OddsCounter</code> component, then interact with it below and click <strong>Verify Challenge</strong>.</p>
      </div>

      <div id="ch04-sandbox" className={styles.sandbox}>
        <OddsCounter initialCount={5} label="Bets Placed" />
      </div>

      <VerifyChallenge04 onResult={setChecks} />
    </ChallengeShell>
  );
}
