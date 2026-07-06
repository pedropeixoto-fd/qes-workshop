import { useFlags } from '../context/FlagContext';
import { useDifficulty } from '../context/DifficultyContext';
import { getChallengesForDifficulty } from '../challenges';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './VictoryScreen.module.css';

export function VictoryScreen() {
  const { collectedFlags, missionStartTime } = useFlags();
  const { difficulty } = useDifficulty();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const selectedChallenges = getChallengesForDifficulty(difficulty);
  const selectedFlags = collectedFlags.filter(flag => flag.id.startsWith(`${difficulty}:`));
  const otherDifficulty = difficulty === 'beginner' ? 'intermediate' : 'beginner';
  const otherCount = collectedFlags.filter(flag => flag.id.startsWith(`${otherDifficulty}:`)).length;

  const elapsed = missionStartTime
    ? Math.floor((Date.now() - missionStartTime) / 1000 / 60)
    : null;

  const shareText = [
    '🏆 Operation: Back in Play — COMPLETE',
    `Difficulty: ${difficulty}`,
    `Time: ${elapsed != null ? `${elapsed} minutes` : 'unknown'}`,
    '',
    ...selectedFlags.map(f => `✓ ${f.flagString}`),
    '',
    'FanDuel Betting Platform: ONLINE',
  ].join('\n');

  function handleCopy() {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.classification}>ALL SYSTEMS LIVE</div>
        <h1 className={styles.title}>Platform Restored</h1>
        <p className={styles.subtitle}>
          {selectedFlags.length}/{selectedChallenges.length} {difficulty} challenges complete. The FanDuel betting platform is back online.
        </p>
        {otherCount > 0 && (
          <p className={styles.subtitle}>
            You also have {otherCount} {otherDifficulty} {otherCount === 1 ? 'pick' : 'picks'} earned.
          </p>
        )}

        {elapsed != null && (
          <div className={styles.time}>
            Mission completed in <strong>{elapsed} minutes</strong>
          </div>
        )}

        <div className={styles.flagList}>
          <h2 className={styles.flagsTitle}>Earned Picks</h2>
          {selectedFlags.map(f => (
            <div key={f.id} className={styles.flagItem}>
              <span className={styles.check}>✓</span>
              <span className={styles.flagCode}>{f.flagString}</span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.copyBtn} onClick={handleCopy}>
            {copied ? 'Copied!' : 'Share Results'}
          </button>
          <button className={styles.hqBtn} onClick={() => navigate('/hq')}>
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
