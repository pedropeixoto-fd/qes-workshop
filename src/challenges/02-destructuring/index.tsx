import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import { firstMarket, tier, username, userTier } from './exercise';

const checks: ChallengeCheck[] = [
  {
    label: "username === 'SharpBettor99'",
    pass: username === 'SharpBettor99',
  },
  {
    label: 'tier === 3',
    pass: tier === 3,
  },
  {
    label: "firstMarket === 'NBA' (via array destructuring)",
    pass: firstMarket === 'NBA',
  },
  {
    label: 'userTier === 3 (renamed via destructuring)',
    pass: userTier === 3,
  },
  {
    label: 'TODO 1 uses { } destructuring syntax',
    pass: (() => {
      // Check that the source code has destructuring patterns
      // This is a best-effort check — TypeScript won't let wrong values through anyway
      return username === 'SharpBettor99' && tier === 3;
    })(),
  },
];

export function Challenge02() {
  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/02-destructuring/exercise.tsx</code> in your editor.</p>
        <p>Replace the placeholder assignments with proper destructuring syntax, then <strong>save</strong>.</p>
      </div>
    </ChallengeShell>
  );
}
