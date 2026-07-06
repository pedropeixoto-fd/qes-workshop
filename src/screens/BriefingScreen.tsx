import { useNavigate } from 'react-router-dom';
import styles from './BriefingScreen.module.css';

export function BriefingScreen() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <img src="/logo-vertical-white.png" alt="FanDuel" className={styles.brandLogo} />
        <div className={styles.classification}>INCIDENT REPORT // ENGINEERING EYES ONLY</div>
        <h1 className={styles.title}>Operation: Back in Play</h1>
        <div className={styles.divider} />

        <div className={styles.briefing}>
          <p className={styles.lead}>
            Engineer, we have a production incident.
          </p>
          <p>
            A botched deployment has broken FanDuel's React-based betting platform.
            Nine critical components are down — syntax errors, missing logic,
            and corrupted type definitions are blocking live betting for thousands of users.
          </p>
          <p>
            Each broken challenge is locked behind a <strong>winning pick</strong>.
            Fix the code. Unlock the pick. Restore the platform.
          </p>
          <p>
            Your mission covers nine domains of knowledge, with a dashboard toggle for Beginner and Intermediate drills:
          </p>
          <ul className={styles.topicList}>
            <li><span className={styles.moduleNum}>01</span> Arrow Functions</li>
            <li><span className={styles.moduleNum}>02</span> Destructuring</li>
            <li><span className={styles.moduleNum}>03</span> TypeScript Basics</li>
            <li><span className={styles.moduleNum}>04</span> React State & Props</li>
            <li><span className={styles.moduleNum}>05</span> Event Handling</li>
            <li><span className={styles.moduleNum}>06</span> Conditional Rendering</li>
            <li><span className={styles.moduleNum}>07</span> React Re-renders</li>
            <li><span className={styles.moduleNum}>08</span> Mutation & Immutability</li>
            <li><span className={styles.moduleNum}>09</span> Lifting State Up</li>
          </ul>
          <p className={styles.mechanic}>
            <strong>How it works:</strong> Open a challenge exercise file in your editor, fill in the TODOs,
            and save. The app will verify your solution in real time.
            When all checks pass, your winning pick is revealed.
          </p>
        </div>

        <button className={styles.startBtn} onClick={() => navigate('/hq')}>
          Start the Fix →
        </button>
        <p className={styles.goodLuck}>Good luck, engineer. The bettors are counting on you.</p>
      </div>
    </div>
  );
}
