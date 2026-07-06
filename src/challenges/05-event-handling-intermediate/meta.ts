import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '05-event-handling',
  baseId: '05-event-handling',
  difficulty: 'intermediate',
  progressKey: 'intermediate:05-event-handling',
  moduleNumber: 5,
  title: 'The Ticket Submission Desk',
  topic: 'React Event Handling',
  narrative:
    'The bet ticket desk has lost submit, input, select, keyboard, and clear behavior. Restore typed handlers so tickets can be submitted cleanly.',
  flagString: 'FLAG{TICKET_EVENTS_INT}',
  estimatedMinutes: 16,
  hints: [
    'Form submit handlers use React.FormEvent<HTMLFormElement> and should call e.preventDefault().',
    'Input and select changes use React.ChangeEvent<HTMLInputElement> or React.ChangeEvent<HTMLSelectElement>.',
    'Handle Escape in onKeyDown by clearing the current selection and market values.',
  ],
};
