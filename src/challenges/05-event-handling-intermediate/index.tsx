import { useState } from 'react';
import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import { TicketDesk } from './exercise';

function VerifyChallenge05Intermediate({ onResult }: { onResult: (checks: ChallengeCheck[]) => void }) {
  function setInputValue(input: HTMLInputElement, value: string) {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
    setter?.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function runChecks() {
    const form = document.querySelector('[data-testid="ticket-form"]') as HTMLFormElement | null;
    const input = document.querySelector('[data-testid="ticket-selection"]') as HTMLInputElement | null;
    const select = document.querySelector('[data-testid="ticket-market"]') as HTMLSelectElement | null;
    const list = document.querySelector('[data-testid="ticket-list"]');

    if (input) setInputValue(input, 'Patriots -3');
    if (select) {
      select.value = 'moneyline';
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
    form?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    const firstTicket = list?.textContent ?? '';
    const clearedAfterSubmit = input?.value === '';

    if (input) {
      setInputValue(input, 'Over 48.5');
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    }

    onResult([
      { label: 'Submit prevents page reload and adds formatted ticket', pass: firstTicket.includes('moneyline: Patriots -3') },
      { label: 'Successful submit clears the selection input', pass: clearedAfterSubmit },
      { label: 'Escape clears the active selection input', pass: input?.value === '' },
    ]);
  }

  return <button className="verify-btn" onClick={runChecks}>Verify Challenge</button>;
}

export function Challenge05Intermediate() {
  const [checks, setChecks] = useState<ChallengeCheck[]>([
    { label: 'Submit prevents page reload and adds formatted ticket', pass: false },
    { label: 'Successful submit clears the selection input', pass: false },
    { label: 'Escape clears the active selection input', pass: false },
  ]);

  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/05-event-handling-intermediate/exercise.tsx</code>.</p>
        <p>Restore the typed submit, change, select, and keyboard handlers.</p>
      </div>
      <TicketDesk />
      <VerifyChallenge05Intermediate onResult={setChecks} />
    </ChallengeShell>
  );
}
