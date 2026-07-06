/**
 * Challenge 09 — Intermediate Lifting State Up
 */

import { useState } from 'react';
import styles from '../IntermediateChallenge.module.css';

interface Pick {
  id: number;
  text: string;
}

function PickForm({ onAddPick }: { onAddPick: (text: string) => void }) {
  const [text, setText] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO 1: Call onAddPick with trimmed text, then clear the field.
  }

  return (
    <form data-testid="pick-form" className={styles.row} onSubmit={handleSubmit}>
      <input
        data-testid="pick-input"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Celtics +4.5"
      />
      <button type="submit">Add Pick</button>
    </form>
  );
}

function PickList({ picks, onRemovePick }: { picks: Pick[]; onRemovePick: (id: number) => void }) {
  return (
    <ul className={styles.list} data-testid="pick-list">
      {picks.length === 0 && <li className={styles.muted}>No picks yet.</li>}
      {picks.map(pick => (
        <li className={styles.listItem} key={pick.id}>
          <span>{pick.text}</span>
          <button data-testid={`remove-${pick.id}`} onClick={() => onRemovePick(pick.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export function PickBoard() {
  // TODO 2: Lift picks state into this parent.
  const picks: Pick[] = [];

  function addPick(_text: string) {
    // TODO 3: Add a new pick with a stable id.
  }

  function removePick(_id: number) {
    // TODO 4: Remove the matching pick by id.
  }

  return (
    <div className={styles.panel}>
      <PickForm onAddPick={addPick} />
      <PickList picks={picks} onRemovePick={removePick} />
    </div>
  );
}
