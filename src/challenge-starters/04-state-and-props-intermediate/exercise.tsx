/**
 * Challenge 04 — Intermediate React State & Props
 */

import styles from '../IntermediateChallenge.module.css';

interface OddsStepperProps {
  value: number;
  min: number;
  max: number;
  step: number;
  label: string;
  onChange: (value: number) => void;
}

function OddsStepper(props: OddsStepperProps) {
  // TODO 1: Use props.value as the displayed value.
  // TODO 2: Call props.onChange with clamped values from the buttons.
  return (
    <div className={styles.card}>
      <p className={styles.label}>{props.label}</p>
      <p className={styles.value} data-testid="odds-value">0.00</p>
      <div className={styles.row}>
        <button data-testid="odds-down" onClick={() => {}}>Down</button>
        <button data-testid="odds-up" onClick={() => {}}>Up</button>
      </div>
    </div>
  );
}

export function OddsDesk() {
  // TODO 3: Own the odds state in this parent and pass it to OddsStepper.
  return (
    <OddsStepper
      label="Boosted odds"
      value={2}
      min={1.5}
      max={3}
      step={0.25}
      onChange={() => {}}
    />
  );
}
