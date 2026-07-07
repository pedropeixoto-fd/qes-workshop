import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import styles from '../IntermediateChallenge.module.css';
import {
  dailyLimit,
  firstMarket,
  handle,
  profileTier,
  remainingMarkets,
  riskBand,
  riskScore,
} from './exercise';

const checks: ChallengeCheck[] = [
  { label: 'handle is SharpBettor99 from nested destructuring', pass: handle === 'SharpBettor99' },
  { label: 'riskScore is 87 from nested destructuring', pass: riskScore === 87 },
  { label: 'riskBand is watch from nested destructuring', pass: riskBand === 'watch' },
  { label: 'firstMarket is NBA and remainingMarkets has NFL/UCL', pass: firstMarket === 'NBA' && remainingMarkets.join(',') === 'NFL,UCL' },
  { label: 'profileTier is renamed from user.tier', pass: profileTier === 4 },
];

export function Challenge02Intermediate() {
  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/02-destructuring-intermediate/exercise.tsx</code>.</p>
        <p>Replace the verbose reads with nested destructuring, array rest syntax, rename syntax, and a default value.</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}><p className={styles.label}>Handle</p><p className={styles.value}>{handle}</p></div>
        <div className={styles.card}><p className={styles.label}>Risk</p><p className={styles.value}>{riskScore} / {riskBand}</p></div>
        <div className={styles.card}><p className={styles.label}>Markets</p><p className={styles.value}>{firstMarket} + {remainingMarkets.length}</p></div>
      </div>
    </ChallengeShell>
  );
}
