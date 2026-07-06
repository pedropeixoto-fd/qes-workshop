import { useState } from 'react';
import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import styles from './Challenge09.module.css';
import { PickTracker } from './exercise';

function VerifyChallenge09({ onResult }: { onResult: (checks: ChallengeCheck[]) => void }) {
    const [verified, setVerified] = useState(false);

    function runChecks() {
        const sandbox = document.getElementById('ch09-sandbox');
        if (!sandbox) return;

        const input = sandbox.querySelector('[data-testid="pick-input"]') as HTMLInputElement | null;
        const form = sandbox.querySelector('[data-testid="pick-form"]') as HTMLFormElement | null;
        const list = sandbox.querySelector('[data-testid="pick-list"]');

        function getItems() {
            return Array.from(list?.querySelectorAll('li') ?? []).map(li => li.textContent ?? '');
        }

        // Empty submit should not add items
        if (input) input.value = '';
        form?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        const afterEmptySubmit = getItems().filter(t => t.trim() !== '' && t !== 'No picks yet.');

        // Submit first pick
        if (input) {
            const nativeSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
            nativeSetter?.call(input, 'Patriots -3');
            input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        form?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        const afterFirst = getItems().filter(t => t.trim() !== '' && t !== 'No picks yet.');

        // Input should be cleared
        const inputClearedAfterSubmit = (input?.value ?? '') === '';

        // Submit second pick
        if (input) {
            const nativeSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
            nativeSetter?.call(input, 'Over 48.5');
            input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        form?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        const afterSecond = getItems().filter(t => t.trim() !== '' && t !== 'No picks yet.');

        const checks: ChallengeCheck[] = [
            {
                label: 'Submitting an empty input adds nothing to the list',
                pass: afterEmptySubmit.length === 0,
            },
            {
                label: 'Submitting "Patriots -3" adds it to the list',
                pass: afterFirst.some(t => t.includes('Patriots -3')),
            },
            {
                label: 'Input clears after a successful submit',
                pass: inputClearedAfterSubmit,
            },
            {
                label: 'Submitting a second pick keeps both picks in the list',
                pass: afterSecond.length === 2,
            },
        ];

        onResult(checks);
        setVerified(true);
    }

    return (
        <button className="verify-btn" onClick={runChecks}>
            {verified ? 'Re-verify Challenge' : 'Verify Challenge'}
        </button>
    );
}

export function Challenge09() {
    const [checks, setChecks] = useState<ChallengeCheck[]>([
        { label: 'Submitting an empty input adds nothing to the list', pass: false },
        { label: 'Submitting "Patriots -3" adds it to the list', pass: false },
        { label: 'Input clears after a successful submit', pass: false },
        { label: 'Submitting a second pick keeps both picks in the list', pass: false },
    ]);

    return (
        <ChallengeShell meta={meta} checks={checks}>
            <div className="challenge-instructions">
                <p>Open <code>src/challenges/09-lifting-state/exercise.tsx</code> in your editor.</p>
                <p>
                    Implement <code>PickForm</code>, <code>PickList</code>, and <code>PickTracker</code> so the
                    form and list stay in sync. Then click <strong>Verify Challenge</strong>.
                </p>
            </div>

            <div id="ch09-sandbox" className={styles.sandbox}>
                <PickTracker />
            </div>

            <VerifyChallenge09 onResult={setChecks} />
        </ChallengeShell>
    );
}
