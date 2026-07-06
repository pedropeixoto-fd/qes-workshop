import { ReactNode, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useFlags } from '../context/FlagContext';
import styles from './Layout.module.css';

const TOTAL = 8;

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const { collectedFlags } = useFlags();
  const navigate = useNavigate();
  const location = useLocation();
  const count = collectedFlags.length;

  useEffect(() => {
    if (count === TOTAL && location.pathname !== '/victory') {
      navigate('/victory');
    }
  }, [count, navigate, location.pathname]);

  return (
    <div className={styles.root}>
      <nav className={styles.nav}>
        <Link to="/hq" className={styles.logo}>
          <img src="/logo-shield-white.png" alt="FanDuel" className={styles.logoImg} />
          <span className={styles.logoSub}>QES Workshop</span>
        </Link>
        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${(count / TOTAL) * 100}%` }}
            />
          </div>
          <span className={styles.progressLabel}>{count}/{TOTAL} picks</span>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
