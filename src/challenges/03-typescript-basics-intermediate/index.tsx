import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import styles from '../IntermediateChallenge.module.css';
import { formatBetState, pending, settled, voided } from './exercise';

const checks: ChallengeCheck[] = [
  { label: 'Pending bet formats with stake', pass: formatBetState(pending) === 'PENDING #101 Lakers ML - stake $25' },
  { label: 'Settled bet formats with payout', pass: formatBetState(settled) === 'SETTLED #102 Arsenal -1 - paid $28' },
  { label: 'Voided bet formats with reason', pass: formatBetState(voided) === 'VOIDED #103 Yankees O8.5 - rain delay' },
  { label: 'Formatter handles every current bet status', pass: [pending, settled, voided].every(bet => formatBetState(bet).startsWith(bet.status.toUpperCase())) },
];

export function Challenge03Intermediate() {
  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/03-typescript-basics-intermediate/exercise.tsx</code>.</p>
        <p>Create a discriminated union for bet states and update <code>formatBetState</code> to handle every status.</p>
      </div>
      <div className={styles.panel}>
        {[pending, settled, voided].map(bet => (
          <p className={styles.value} key={bet.id}>{formatBetState(bet)}</p>
        ))}
      </div>
    </ChallengeShell>
  );
}
