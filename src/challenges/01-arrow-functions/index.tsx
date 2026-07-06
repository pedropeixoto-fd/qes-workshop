import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import { double, square } from './exercise';

const checks: ChallengeCheck[] = [
  {
    label: 'double(5) returns 10',
    pass: double(5) === 10,
  },
  {
    label: 'double is an arrow function (uses => syntax)',
    pass: double.toString().includes('=>'),
  },
  {
    label: 'square(4) returns 16',
    pass: square(4) === 16,
  },
  {
    label: 'square(2) returns 4',
    pass: square(2) === 4,
  },
  {
    label: 'square is an arrow function (uses => syntax)',
    pass: square.toString().includes('=>'),
  },
];

export function Challenge01() {
  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/01-arrow-functions/exercise.tsx</code> in your editor.</p>
        <p>Complete the two TODOs, then <strong>save the file</strong>. The checks on the right update automatically.</p>
      </div>
    </ChallengeShell>
  );
}
