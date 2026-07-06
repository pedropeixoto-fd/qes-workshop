import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { ChallengeDifficulty } from '../types';

const STORAGE_KEY = 'fd_challenge_difficulty';

interface DifficultyContextValue {
  difficulty: ChallengeDifficulty;
  setDifficulty: (difficulty: ChallengeDifficulty) => void;
}

const DifficultyContext = createContext<DifficultyContextValue | null>(null);

function readStoredDifficulty(): ChallengeDifficulty {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'intermediate' ? 'intermediate' : 'beginner';
}

export function DifficultyProvider({ children }: { children: ReactNode }) {
  const [difficulty, setDifficulty] = useState<ChallengeDifficulty>(readStoredDifficulty);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, difficulty);
  }, [difficulty]);

  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
}

export function useDifficulty() {
  const ctx = useContext(DifficultyContext);
  if (!ctx) throw new Error('useDifficulty must be used within DifficultyProvider');
  return ctx;
}
