import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import { summarizeBetSlip, testBet } from './exercise';

const checks: ChallengeCheck[] = [
  {
    label: 'testBet.id is a number',
    pass: typeof testBet.id === 'number',
  },
  {
    label: 'testBet.selection is a string',
    pass: typeof testBet.selection === 'string',
  },
  {
    label: 'testBet.isSettled is a boolean',
    pass: typeof testBet.isSettled === 'boolean',
  },
  {
    label: "testBet.odds is 'favourite' | 'even' | 'underdog'",
    pass: ['favourite', 'even', 'underdog'].includes(testBet.odds),
  },
  {
    label: "summarizeBetSlip(testBet) === '[UNDERDOG] NBA Finals Game 7'",
    pass: summarizeBetSlip(testBet) === '[UNDERDOG] NBA Finals Game 7',
  },
  {
    label: "summarizeBetSlip handles 'favourite' odds correctly",
    pass: summarizeBetSlip({ ...testBet, odds: 'favourite' }) === '[FAVOURITE] NBA Finals Game 7',
  },
];

export function Challenge03() {
  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/03-typescript-basics/exercise.tsx</code> in your editor.</p>
        <p>Add the missing interface and type annotations, then <strong>save</strong>.</p>
      </div>
    </ChallengeShell>
  );
}
