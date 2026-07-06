import { useEffect, useState } from 'react';
import styles from './FlagReveal.module.css';

interface Props {
  flagString: string;
  moduleNumber: number;
}

export function FlagReveal({ flagString, moduleNumber }: Props) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  function handleCopy() {
    navigator.clipboard.writeText(flagString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
      <div className={styles.header}>
        <span className={styles.badge}>MODULE {String(moduleNumber).padStart(2, '0')} — UNLOCKED</span>
      </div>
      <div className={styles.flagBox}>
        <span className={styles.flagString}>{flagString}</span>
        <button className={styles.copyBtn} onClick={handleCopy}>
          {copied ? 'COPIED' : 'COPY'}
        </button>
      </div>
      <p className={styles.instructions}>
        Copy this pick and record it in the Dashboard to track your progress.
      </p>
    </div>
  );
}
