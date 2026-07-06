/**
 * Challenge 09 — Lifting State Up
 */

import { useState } from 'react';
import styles from './Challenge09.module.css';

function PickForm({ onSubmit }: { onSubmit: (pick: string) => void }) {
  const [pick, setPick] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO 1: Submit the trimmed pick value, then clear the input.
  }

  return (
    <form data-testid="pick-form" className={styles.form} onSubmit={handleSubmit}>
      <input
        data-testid="pick-input"
        className={styles.input}
        value={pick}
        onChange={() => {}}
        placeholder="Patriots -3"
      />
      <button className={styles.submitBtn} type="submit">Submit</button>
    </form>
  );
}

function PickList({ picks }: { picks: string[] }) {
  // TODO 2: Render one list item for each pick.
  return (
    <ul data-testid="pick-list" className={styles.list}>
      <li className={styles.emptyMsg}>No picks yet.</li>
    </ul>
  );
}

export function PickTracker() {
  // TODO 3: Own the picks state here and pass it to PickForm/PickList.
  return (
    <div className={styles.tracker}>
      <PickForm onSubmit={() => {}} />
      <PickList picks={[]} />
    </div>
  );
}
