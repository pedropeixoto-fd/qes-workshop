export interface ChallengeCheck {
  label: string;
  pass: boolean;
}

export interface ChallengeFlag {
  id: string;
  flagString: string;
  collectedAt: number;
}

export type ChallengeDifficulty = 'beginner' | 'intermediate';

export interface ChallengeMeta {
  id: string;
  baseId: string;
  difficulty: ChallengeDifficulty;
  progressKey: string;
  moduleNumber: number;
  title: string;
  topic: string;
  narrative: string;
  flagString: string;
  estimatedMinutes: number;
  hints: [string, string, string];
}
