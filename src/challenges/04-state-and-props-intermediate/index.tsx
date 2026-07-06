import { useState } from 'react';
import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import { OddsDesk } from './exercise';

function VerifyChallenge04Intermediate({ onResult }: { onResult: (checks: ChallengeCheck[]) => void }) {
  function runChecks() {
    const valueEl = document.querySelector('[data-testid="odds-value"]');
    const up = document.querySelector('[data-testid="odds-up"]') as HTMLButtonElement | null;
    const down = document.querySelector('[data-testid="odds-down"]') as HTMLButtonElement | null;

    const initial = parseFloat(valueEl?.textContent ?? 'NaN');
    up?.click();
    up?.click();
    const afterUp = parseFloat(valueEl?.textContent ?? 'NaN');
    for (let i = 0; i < 10; i += 1) down?.click();
    const afterFloor = parseFloat(valueEl?.textContent ?? 'NaN');

    onResult([
      { label: 'Stepper displays parent-owned initial odds of 2.00', pass: initial === 2 },
      { label: 'Up button increases odds by the 0.25 step', pass: afterUp === 2.5 },
      { label: 'Down button clamps odds at the 1.50 minimum', pass: afterFloor === 1.5 },
    ]);
  }

  return <button className="verify-btn" onClick={runChecks}>Verify Challenge</button>;
}

export function Challenge04Intermediate() {
  const [checks, setChecks] = useState<ChallengeCheck[]>([
    { label: 'Stepper displays parent-owned initial odds of 2.00', pass: false },
    { label: 'Up button increases odds by the 0.25 step', pass: false },
    { label: 'Down button clamps odds at the 1.50 minimum', pass: false },
  ]);

  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/04-state-and-props-intermediate/exercise.tsx</code>.</p>
        <p>Make the stepper controlled by parent state and clamp changes between min and max.</p>
      </div>
      <OddsDesk />
      <VerifyChallenge04Intermediate onResult={setChecks} />
    </ChallengeShell>
  );
}
