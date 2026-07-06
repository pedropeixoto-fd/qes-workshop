import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { ChallengeFlag } from '../types';

const STORAGE_KEY = 'fd_earned_picks';
const START_KEY = 'fd_session_start';

interface FlagContextValue {
  collectedFlags: ChallengeFlag[];
  collectFlag: (id: string, flagString: string) => void;
  hasFlag: (id: string) => boolean;
  getFlagsForDifficulty: (difficulty: 'beginner' | 'intermediate') => ChallengeFlag[];
  resetAll: () => void;
  missionStartTime: number | null;
}

const FlagContext = createContext<FlagContextValue | null>(null);

function normalizeFlags(flags: ChallengeFlag[]) {
  return flags.map(flag => ({
    ...flag,
    id: flag.id.includes(':') ? flag.id : `beginner:${flag.id}`,
  }));
}

export function FlagProvider({ children }: { children: ReactNode }) {
  const [collectedFlags, setCollectedFlags] = useState<ChallengeFlag[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? normalizeFlags(JSON.parse(stored)) : [];
    } catch {
      return [];
    }
  });

  const [missionStartTime, setMissionStartTime] = useState<number | null>(() => {
    const stored = localStorage.getItem(START_KEY);
    return stored ? parseInt(stored, 10) : null;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collectedFlags));
  }, [collectedFlags]);

  function collectFlag(id: string, flagString: string) {
    if (collectedFlags.some(f => f.id === id)) return;
    if (!missionStartTime) {
      const now = Date.now();
      setMissionStartTime(now);
      localStorage.setItem(START_KEY, String(now));
    }
    setCollectedFlags(prev => [...prev, { id, flagString, collectedAt: Date.now() }]);
  }

  function hasFlag(id: string) {
    return collectedFlags.some(f => f.id === id);
  }

  function getFlagsForDifficulty(difficulty: 'beginner' | 'intermediate') {
    return collectedFlags.filter(f => f.id.startsWith(`${difficulty}:`));
  }

  function resetAll() {
    setCollectedFlags([]);
    setMissionStartTime(null);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(START_KEY);
  }

  return (
    <FlagContext.Provider value={{ collectedFlags, collectFlag, hasFlag, getFlagsForDifficulty, resetAll, missionStartTime }}>
      {children}
    </FlagContext.Provider>
  );
}

export function useFlags() {
  const ctx = useContext(FlagContext);
  if (!ctx) throw new Error('useFlags must be used within FlagProvider');
  return ctx;
}
