import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '04-state-and-props',
  baseId: '04-state-and-props',
  difficulty: 'beginner',
  progressKey: 'beginner:04-state-and-props',
  moduleNumber: 4,
  title: 'The Live Odds Counter',
  topic: 'React State & Props',
  narrative:
    'The bet tracker component is broken. Props are untyped, state is missing, and the buttons do nothing. Restore the counter so bettors can track live market movements.',
  flagString: 'FLAG{STATE_PROPS_1K6J}',
  estimatedMinutes: 12,
  hints: [
    'Props are the inputs to a React component. Define them with an interface: interface MyProps { value: number }. State is internal data managed with useState: const [count, setCount] = useState(0).',
    'useState takes an initial value. To use a prop as the initial value: const [count, setCount] = useState(props.initialCount). The onClick handler should call setCount with the new value.',
    'Full solution shape: interface OddsCounterProps { initialCount: number; label: string; } — then useState(initialCount) for state, onClick={() => setCount(c => c + 1)} for increment.',
  ],
};
