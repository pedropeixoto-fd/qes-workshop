import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '09-lifting-state',
  baseId: '09-lifting-state',
  difficulty: 'beginner',
  progressKey: 'beginner:09-lifting-state',
  moduleNumber: 9,
  title: 'The Pick Tracker',
  topic: 'Lifting State Up',
  narrative:
    'The sportsbook needs a live pick tracker. Analysts type in a prop pick and hit Submit — it should appear instantly in the list below. Two sibling components need to share the same data, so the state must live in their parent.',
  flagString: 'FLAG{L1FT_TH3_ST4T3}',
  estimatedMinutes: 15,
  hints: [
    'State that is shared between siblings must be "lifted" into their parent. Define useState<string[]> in the parent and pass the setter down as a callback prop.',
    'Give PickForm an `onSubmit: (value: string) => void` prop. Inside the form, call it with the current input value when the button is clicked (or the form is submitted).',
    'After calling onSubmit, reset the controlled input back to an empty string so the field clears. Also track the input value with its own useState so React controls it.',
  ],
};
