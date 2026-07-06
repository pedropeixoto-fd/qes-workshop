import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '05-event-handling',
  baseId: '05-event-handling',
  difficulty: 'beginner',
  progressKey: 'beginner:05-event-handling',
  moduleNumber: 5,
  title: 'The Bet Placement Form',
  topic: 'React Event Handling',
  narrative:
    'The bet placement form has been neutralized. All event handlers were gutted — clicks do nothing, input changes are ignored, and the escape key is dead. Restore the handlers so bettors can place their picks.',
  flagString: 'FLAG{EVENTS_7Y3W}',
  estimatedMinutes: 10,
  hints: [
    'React event handlers are functions passed as props: onClick={handleClick}. For buttons: onClick={() => setCount(c => c + 1)}. For inputs: onChange={(e) => setValue(e.target.value)}.',
    'The event object for input changes is typed as React.ChangeEvent<HTMLInputElement>. For keyboard events: React.KeyboardEvent<HTMLInputElement>. Access the key with e.key.',
    'For handleKeyDown: if (e.key === "Escape") { setEscapePressed(true); }. For handleInputChange: setInputValue(e.target.value). For handleButtonClick: setBetCount(c => c + 1).',
  ],
};
