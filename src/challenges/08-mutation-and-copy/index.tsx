import { ChallengeShell } from '../../components/ChallengeShell';
import { meta } from './meta';
import type { ChallengeCheck } from '../../types';
import { addMarket, deepCloneBetSlip, updateBetSlip, type BetSlip } from './exercise';

function runChecks(): ChallengeCheck[] {
  return [
    {
      label: 'updateBetSlip does NOT mutate the original bet slip',
      pass: ((): boolean => {
        const orig: BetSlip = { id: 'slip-x', odds: 1, markets: ['NBA'] };
        updateBetSlip(orig, 5);
        return orig.odds === 1;
      })(),
    },
    {
      label: 'updateBetSlip returns a NEW object with the updated odds',
      pass: ((): boolean => {
        const orig: BetSlip = { id: 'slip-x', odds: 1, markets: ['NBA'] };
        const result = updateBetSlip(orig, 5);
        return result !== orig && result.odds === 5;
      })(),
    },
    {
      label: "addMarket does NOT mutate the original bet slip's markets array",
      pass: ((): boolean => {
        const orig: BetSlip = { id: 'slip-y', odds: 2, markets: ['NBA'] };
        const origLen = orig.markets.length;
        addMarket(orig, 'EPL');
        return orig.markets.length === origLen;
      })(),
    },
    {
      label: 'addMarket returns a NEW markets array containing the added market',
      pass: ((): boolean => {
        const orig: BetSlip = { id: 'slip-y', odds: 2, markets: ['NBA'] };
        const result = addMarket(orig, 'EPL');
        return result.markets !== orig.markets && result.markets.includes('EPL') && result.markets.includes('NBA');
      })(),
    },
    {
      label: "deepCloneBetSlip produces an independent markets array (clone mutation doesn't affect source)",
      pass: ((): boolean => {
        const source: BetSlip = { id: 'slip-z', odds: 3, markets: ['NBA', 'NFL'] };
        const clone = deepCloneBetSlip(source);
        clone.markets.push('INJECTED');
        return source.markets.length === 2;
      })(),
    },
  ];
}

const checks: ChallengeCheck[] = runChecks();

export function Challenge08() {
  return (
    <ChallengeShell meta={meta} checks={checks}>
      <div className="challenge-instructions">
        <p>Open <code>src/challenges/08-mutation-and-copy/exercise.tsx</code> in your editor.</p>
        <p>Fix the three functions so they never mutate their inputs, then <strong>save</strong>. The checks update automatically.</p>
      </div>
    </ChallengeShell>
  );
}
