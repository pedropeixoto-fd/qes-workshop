import type { ChallengeCheck } from '../types';
import styles from './CheckList.module.css';

interface Props {
  checks: ChallengeCheck[];
}

export function CheckList({ checks }: Props) {
  const passed = checks.filter(c => c.pass).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Verification Protocol</span>
        <span className={styles.counter}>
          <span className={passed === checks.length ? styles.allPass : styles.partial}>
            {passed}
          </span>
          /{checks.length} checks passing
        </span>
      </div>
      <ul className={styles.list}>
        {checks.map((check, i) => (
          <li key={i} className={`${styles.item} ${check.pass ? styles.pass : styles.fail}`}>
            <span className={styles.icon}>{check.pass ? '✓' : '✗'}</span>
            <span className={styles.label}>{check.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
