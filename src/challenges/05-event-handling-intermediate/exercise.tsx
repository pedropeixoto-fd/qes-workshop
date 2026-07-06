/**
 * Challenge 05 — Intermediate React Event Handling
 */

import { useState } from 'react';
import styles from '../IntermediateChallenge.module.css';

export function TicketDesk() {
  const [selection, setSelection] = useState('');
  const [market, setMarket] = useState('spread');
  const [tickets, setTickets] = useState<string[]>([]);

  // TODO 1: Type the submit event, prevent default, and add a ticket when selection is not blank.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  // TODO 2: Type the input change event and update selection.
  function handleSelectionChange(_e: React.ChangeEvent<HTMLInputElement>) {}

  // TODO 3: Type the select change event and update market.
  function handleMarketChange(_e: React.ChangeEvent<HTMLSelectElement>) {}

  // TODO 4: Type the keyboard event and clear selection + market on Escape.
  function handleKeyDown(_e: React.KeyboardEvent<HTMLInputElement>) {}

  return (
    <div className={styles.panel}>
      <form data-testid="ticket-form" className={styles.form} onSubmit={handleSubmit}>
        <label>
          Selection
          <input
            data-testid="ticket-selection"
            value={selection}
            onChange={handleSelectionChange}
            onKeyDown={handleKeyDown}
            placeholder="Patriots -3"
          />
        </label>
        <label>
          Market
          <select data-testid="ticket-market" value={market} onChange={handleMarketChange}>
            <option value="spread">Spread</option>
            <option value="moneyline">Moneyline</option>
            <option value="total">Total</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul className={styles.list} data-testid="ticket-list">
        {tickets.map(ticket => <li className={styles.listItem} key={ticket}>{ticket}</li>)}
      </ul>
    </div>
  );
}
