import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import styles from '../IntermediateChallenge.module.css';
import { originalSlip, repairLeg } from './exercise';

const repaired = repairLeg(originalSlip, 'leg-2', 2.8, 'trader-7');
const originalSecondLeg = originalSlip.legs[1];
const repairedSecondLeg = repaired.legs[1];

const checks: ChallengeCheck[] = [
  { label: 'repairLeg returns a new slip object', pass: repaired !== originalSlip },
  { label: 'Original slip audit is not mutated', pass: originalSlip.audit.lastUpdatedBy === 'system' },
  { label: 'repairLeg returns a new legs array', pass: repaired.legs !== originalSlip.legs },
  { label: 'Only leg-2 odds are updated to 2.8', pass: repairedSecondLeg?.odds === 2.8 && repaired.legs[0]?.odds === 1.9 },
  { label: 'Original leg-2 odds remain 2.4', pass: originalSecondLeg?.odds === 2.4 },
  { label: 'Updated leg metadata is copied and reviewed', pass: repairedSecondLeg?.metadata !== originalSecondLeg?.metadata && repairedSecondLeg?.metadata.reviewed === true },
];

export function Challenge08Intermediate() {
  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/08-mutation-and-copy-intermediate/exercise.tsx</code>.</p>
        <p>Rewrite <code>repairLeg</code> with immutable object and array updates at every changed level.</p>
      </div>
      <div className={styles.grid}>
        {repaired.legs.map(leg => (
          <div className={styles.card} key={leg.id}>
            <p className={styles.label}>{leg.selection}</p>
            <p className={styles.value}>{leg.odds.toFixed(2)}</p>
            <p className={leg.metadata.reviewed ? styles.success : styles.muted}>
              {leg.metadata.reviewed ? 'Reviewed' : 'Pending review'}
            </p>
          </div>
        ))}
      </div>
    </ChallengeShell>
  );
}
