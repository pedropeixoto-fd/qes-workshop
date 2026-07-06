import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFlags } from '../context/FlagContext';
import { useDifficulty } from '../context/DifficultyContext';
import { getChallengesForDifficulty } from '../challenges';
import type { ChallengeDifficulty } from '../types';
import styles from './HQScreen.module.css';

const REDACTED = 'PICK{████████████}';

export function HQScreen() {
  const { collectedFlags, hasFlag, resetAll } = useFlags();
  const { difficulty, setDifficulty } = useDifficulty();
  const [isResetting, setIsResetting] = useState(false);
  const [resetError, setResetError] = useState<string | null>(null);
  const challenges = getChallengesForDifficulty(difficulty);
  const count = challenges.filter(meta => hasFlag(meta.progressKey)).length;
  const total = challenges.length;

  async function handleResetProgress() {
    if (!confirm('Reset all progress and restore every exercise file? This cannot be undone.')) return;

    setIsResetting(true);
    setResetError(null);

    try {
      const response = await fetch('/__workshop/reset-exercises', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Exercise files could not be restored. Make sure the app is running with npm run dev or npm run preview.');
      }
      resetAll();
    } catch (error) {
      setResetError(error instanceof Error ? error.message : 'Exercise files could not be restored.');
    } finally {
      setIsResetting(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>Sportsbook Dashboard</h1>
          <p className={styles.subtitle}>FanDuel Engineering — Platform Recovery</p>
          <div className={styles.difficultyToggle} aria-label="Challenge difficulty">
            {(['beginner', 'intermediate'] as ChallengeDifficulty[]).map(option => (
              <button
                key={option}
                className={`${styles.difficultyBtn} ${difficulty === option ? styles.difficultyActive : ''}`}
                onClick={() => setDifficulty(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.statBox}>
            <span className={styles.statNum}>{count}</span>
            <span className={styles.statLabel}>Picks Earned</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNum}>{total - count}</span>
            <span className={styles.statLabel}>Remaining</span>
          </div>
        </div>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${(count / total) * 100}%` }}
        />
        <span className={styles.progressText}>{count}/{total} {difficulty} challenges completed</span>
      </div>

      <div className={styles.moduleGrid}>
        {challenges.map(meta => {
          const solved = hasFlag(meta.progressKey);
          const flag = solved
            ? collectedFlags.find(f => f.id === meta.progressKey)!.flagString
            : REDACTED;

          return (
            <Link
              key={meta.progressKey}
              to={`/challenge/${difficulty}/${meta.id}`}
              className={`${styles.moduleCard} ${solved ? styles.solved : styles.locked}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.moduleNum}>
                  CHALLENGE {String(meta.moduleNumber).padStart(2, '0')}
                </span>
                <span className={`${styles.statusBadge} ${solved ? styles.statusSolved : styles.statusLocked}`}>
                  {solved ? 'LIVE' : 'OFFLINE'}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{meta.title}</h3>
              <p className={styles.cardTopic}>{meta.topic}</p>
              <div className={styles.flagDisplay}>
                <span className={`${styles.flagCode} ${!solved ? styles.flagRedacted : ''}`}>
                  {flag}
                </span>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.timeEst}>~{meta.estimatedMinutes} min</span>
                <span className={styles.openLink}>{solved ? 'Review →' : 'Open Challenge →'}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className={styles.footer}>
        {resetError && <span className={styles.resetError}>{resetError}</span>}
        <button className={styles.resetBtn} onClick={handleResetProgress} disabled={isResetting}>
          {isResetting ? 'Resetting...' : 'Reset Progress'}
        </button>
      </div>
    </div>
  );
}
