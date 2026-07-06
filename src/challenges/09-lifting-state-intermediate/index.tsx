import { useState } from 'react';
import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import { PickBoard } from './exercise';

function VerifyChallenge09Intermediate({ onResult }: { onResult: (checks: ChallengeCheck[]) => void }) {
  function setInputValue(input: HTMLInputElement, value: string) {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
    setter?.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function runChecks() {
    const input = document.querySelector('[data-testid="pick-input"]') as HTMLInputElement | null;
    const form = document.querySelector('[data-testid="pick-form"]') as HTMLFormElement | null;
    const list = document.querySelector('[data-testid="pick-list"]');

    if (input) setInputValue(input, 'Celtics +4.5');
    form?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    if (input) setInputValue(input, 'Over 48.5');
    form?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    const afterAdds = list?.textContent ?? '';
    const inputCleared = input?.value === '';
    const firstRemove = document.querySelector('button[data-testid^="remove-"]') as HTMLButtonElement | null;
    firstRemove?.click();
    const afterRemove = list?.textContent ?? '';

    onResult([
      { label: 'Submitting adds the first pick to parent-owned state', pass: afterAdds.includes('Celtics +4.5') },
      { label: 'Submitting a second pick keeps both picks', pass: afterAdds.includes('Celtics +4.5') && afterAdds.includes('Over 48.5') },
      { label: 'Input clears after successful submit', pass: inputCleared },
      { label: 'Remove button deletes only the selected pick', pass: !afterRemove.includes('Celtics +4.5') && afterRemove.includes('Over 48.5') },
    ]);
  }

  return <button className="verify-btn" onClick={runChecks}>Verify Challenge</button>;
}

export function Challenge09Intermediate() {
  const [checks, setChecks] = useState<ChallengeCheck[]>([
    { label: 'Submitting adds the first pick to parent-owned state', pass: false },
    { label: 'Submitting a second pick keeps both picks', pass: false },
    { label: 'Input clears after successful submit', pass: false },
    { label: 'Remove button deletes only the selected pick', pass: false },
  ]);

  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/09-lifting-state-intermediate/exercise.tsx</code>.</p>
        <p>Lift pick state into <code>PickBoard</code>, pass callbacks down, and support row removal.</p>
      </div>
      <PickBoard />
      <VerifyChallenge09Intermediate onResult={setChecks} />
    </ChallengeShell>
  );
}
