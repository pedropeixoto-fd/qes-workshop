import { useState } from 'react';
import styles from './HintBox.module.css';

interface Props {
  hints: [string, string, string];
}

export function HintBox({ hints }: Props) {
  const [revealed, setRevealed] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Intel Support</span>
        {revealed < 3 && (
          <button
            className={styles.revealBtn}
            onClick={() => setRevealed(r => Math.min(r + 1, 3))}
          >
            Request Hint {revealed + 1}/3
          </button>
        )}
      </div>
      {revealed === 0 && (
        <p className={styles.placeholder}>Stuck? Request a hint from HQ.</p>
      )}
      {revealed > 0 && (
        <ol className={styles.list}>
          {hints.slice(0, revealed).map((hint, i) => (
            <li key={i} className={styles.hint}>
              <span className={styles.hintLabel}>Hint {i + 1}</span>
              <span>{hint}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
