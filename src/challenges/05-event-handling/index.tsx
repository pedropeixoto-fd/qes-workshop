import { useState } from 'react';
import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import { BetForm } from './exercise';

function VerifyChallenge05({ onResult }: { onResult: (checks: ChallengeCheck[]) => void }) {
  function runChecks() {
    const btn = document.querySelector('[data-testid="intercept-btn"]') as HTMLButtonElement | null;
    const clickCountEl = document.querySelector('[data-testid="click-count"]');
    const inputEl = document.querySelector('[data-testid="monitor-input"]') as HTMLInputElement | null;
    const inputValueEl = document.querySelector('[data-testid="input-value"]');
    const escapeEl = document.querySelector('[data-testid="escape-status"]');

    btn?.click();
    btn?.click();
    btn?.click();

    const clickCount = parseInt(clickCountEl?.textContent?.match(/\d+/)?.[0] ?? '0', 10);

    if (inputEl) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(inputEl, 'PARLAY');
      inputEl.dispatchEvent(new Event('input', { bubbles: true }));
      inputEl.dispatchEvent(new Event('change', { bubbles: true }));
    }

    const inputValue = inputValueEl?.textContent ?? '';

    if (inputEl) {
      inputEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    }

    const escapeText = escapeEl?.textContent ?? '';

    const checks: ChallengeCheck[] = [
      {
        label: 'Button click increases count (clicked 3×, expects 3)',
        pass: clickCount >= 3,
      },
      {
        label: 'Input change updates displayed selection',
        pass: inputValue.includes('PARLAY'),
      },
      {
        label: 'Escape key clears the selection',
        pass: escapeText.includes('Selection cleared'),
      },
    ];

    onResult(checks);
  }

  return (
    <button className="verify-btn" onClick={runChecks}>
      Verify Challenge
    </button>
  );
}

export function Challenge05() {
  const [checks, setChecks] = useState<ChallengeCheck[]>([
    { label: 'Button click increases count (clicked 3×, expects 3)', pass: false },
    { label: 'Input change updates displayed selection', pass: false },
    { label: 'Escape key clears the selection', pass: false },
  ]);

  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/05-event-handling/exercise.tsx</code> in your editor.</p>
        <p>Implement the three event handlers, then click <strong>Verify Challenge</strong> below.</p>
      </div>
      <BetForm />
      <VerifyChallenge05 onResult={setChecks} />
    </ChallengeShell>
  );
}
