import { useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useFlags } from '../context/FlagContext';
import { CheckList } from './CheckList';
import { FlagReveal } from './FlagReveal';
import { HintBox } from './HintBox';
import type { ChallengeCheck, ChallengeMeta } from '../types';
import styles from './ChallengeShell.module.css';

interface Props {
  meta: ChallengeMeta;
  checks: ChallengeCheck[];
  children: ReactNode;
}

const WORKSPACE_ROOT = '/Users/pedro.peixoto/projects/qes-presentation/qes-workshop';

function getChallengeSourcePath(meta: ChallengeMeta) {
  const folder = meta.difficulty === 'intermediate'
    ? `${meta.baseId}-intermediate`
    : meta.baseId;

  return `${WORKSPACE_ROOT}/src/challenges/${folder}/exercise.tsx`;
}

export function ChallengeShell({ meta, checks, children }: Props) {
  const { collectFlag, hasFlag } = useFlags();
  const allPass = checks.length > 0 && checks.every(c => c.pass);
  const alreadyCollected = hasFlag(meta.progressKey);
  const sourcePath = getChallengeSourcePath(meta);
  const cursorHref = `cursor://file${sourcePath}`;
  const vscodeHref = `vscode://file${sourcePath}`;

  useEffect(() => {
    if (allPass && !alreadyCollected) {
      collectFlag(meta.progressKey, meta.flagString);
    }
  }, [allPass, alreadyCollected, meta.progressKey, meta.flagString, collectFlag]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.breadcrumb}>
          <Link to="/hq" className={styles.backLink}>← Sportsbook Dashboard</Link>
        </div>
        <div className={styles.moduleInfo}>
          <span className={styles.moduleTag}>MODULE {String(meta.moduleNumber).padStart(2, '0')}</span>
          <span className={styles.difficultyTag}>{meta.difficulty.toUpperCase()}</span>
          <span className={styles.topicTag}>{meta.topic}</span>
          <span className={styles.timeTag}>~{meta.estimatedMinutes} min</span>
        </div>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{meta.title}</h1>
          <div className={styles.editorActions}>
            <a className={styles.editorButton} href={cursorHref} title="Open challenge file in Cursor">
              <svg className={styles.editorIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4l14 7-6 2-2 6L4 4z" />
              </svg>
              <span>Cursor</span>
            </a>
            <a className={styles.fallbackEditorButton} href={vscodeHref} title="Open challenge file in VS Code">
              <svg className={styles.editorIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 8l-4 4 4 4" />
                <path d="M16 8l4 4-4 4" />
                <path d="M14 5l-4 14" />
              </svg>
              <span>VS Code</span>
            </a>
          </div>
        </div>
        <p className={styles.narrative}>{meta.narrative}</p>
      </div>

      <div className={styles.body}>
        <div className={styles.mainCol}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your Challenge</h2>
            <div className={styles.challengeArea}>
              {children}
            </div>
          </section>

          {(allPass || alreadyCollected) && (
            <FlagReveal
              flagString={meta.flagString}
              moduleNumber={meta.moduleNumber}
            />
          )}
        </div>

        <div className={styles.sideCol}>
          <CheckList checks={checks} />
          <HintBox hints={meta.hints} />
        </div>
      </div>
    </div>
  );
}
