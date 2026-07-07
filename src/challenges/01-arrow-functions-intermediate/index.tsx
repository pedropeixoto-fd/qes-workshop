import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import styles from '../IntermediateChallenge.module.css';
import { boostMarkets, getTradableMarkets, markets, totalOdds } from './exercise';

const boosted = boostMarkets(markets);
const tradable = getTradableMarkets(boosted);
const total = totalOdds(tradable);

const checks: ChallengeCheck[] = [
  { label: 'boostMarkets returns a new array', pass: boosted !== markets },
  { label: 'NBA Finals odds are boosted to 1.76', pass: boosted[0]?.odds.toFixed(2) === "1.76" },
  { label: 'Tradable markets filter out odds below 2.0', pass: tradable.length === 2 },
  { label: 'Filtered markets keep Champions League and Super Bowl', pass: tradable.map(m => m.id).join(',') === 'ucl-final,super-bowl' },
  { label: 'totalOdds returns 5.83 for the tradable boosted markets', pass: Math.abs(total - 5.83) < 0.001 },
];

export function Challenge01Intermediate() {
  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/01-arrow-functions-intermediate/exercise.tsx</code>.</p>
        <p>Use arrow callbacks with <code>map</code>, <code>filter</code>, and <code>reduce</code> to repair the odds pipeline.</p>
      </div>
      <div className={styles.panel}>
        <div className={styles.grid}>
          {tradable.map(market => (
            <div className={styles.card} key={market.id}>
              <p className={styles.label}>{market.label}</p>
              <p className={styles.value}>{market.odds.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <p className={styles.value}>Tradable total: {total.toFixed(2)}</p>
      </div>
    </ChallengeShell>
  );
}
