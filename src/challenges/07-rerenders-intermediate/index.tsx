import { useState } from 'react';
import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import { StableOddsBoard } from './exercise';

function VerifyChallenge07Intermediate({ onResult }: { onResult: (checks: ChallengeCheck[]) => void }) {
  const [waiting, setWaiting] = useState(false);

  function runChecks() {
    setWaiting(true);
    setTimeout(() => {
      const nbaRenders = parseInt(document.querySelector('[data-testid="nba-renders"]')?.textContent?.match(/\d+/)?.[0] ?? '0', 10);
      const nflRenders = parseInt(document.querySelector('[data-testid="nfl-renders"]')?.textContent?.match(/\d+/)?.[0] ?? '0', 10);

      onResult([
        { label: 'NBA row remains at 1 render while parent timer ticks', pass: nbaRenders === 1 },
        { label: 'NFL row remains at 1 render while parent timer ticks', pass: nflRenders === 1 },
      ]);
      setWaiting(false);
    }, 3500);
  }

  return <button className="verify-btn" disabled={waiting} onClick={runChecks}>{waiting ? 'Watching renders...' : 'Verify Challenge (waits 3.5s)'}</button>;
}

export function Challenge07Intermediate() {
  const [checks, setChecks] = useState<ChallengeCheck[]>([
    { label: 'NBA row remains at 1 render while parent timer ticks', pass: false },
    { label: 'NFL row remains at 1 render while parent timer ticks', pass: false },
  ]);

  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/07-rerenders-intermediate/exercise.tsx</code>.</p>
        <p>Use <code>React.memo</code>, <code>useMemo</code>, and <code>useCallback</code> so rows skip parent timer renders.</p>
      </div>
      <StableOddsBoard />
      <VerifyChallenge07Intermediate onResult={setChecks} />
    </ChallengeShell>
  );
}
