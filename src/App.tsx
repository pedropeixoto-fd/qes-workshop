import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FlagProvider } from './context/FlagContext';
import { DifficultyProvider, useDifficulty } from './context/DifficultyContext';
import { Layout } from './components/Layout';
import { BriefingScreen } from './screens/BriefingScreen';
import { HQScreen } from './screens/HQScreen';
import { VictoryScreen } from './screens/VictoryScreen';
import { Challenge01 } from './challenges/01-arrow-functions';
import { Challenge02 } from './challenges/02-destructuring';
import { Challenge03 } from './challenges/03-typescript-basics';
import { Challenge04 } from './challenges/04-state-and-props';
import { Challenge05 } from './challenges/05-event-handling';
import { Challenge06 } from './challenges/06-conditional-rendering';
import { Challenge07 } from './challenges/07-rerenders';
import { Challenge08 } from './challenges/08-mutation-and-copy';
import { Challenge09 } from './challenges/09-lifting-state';
import { Challenge01Intermediate } from './challenges/01-arrow-functions-intermediate';
import { Challenge02Intermediate } from './challenges/02-destructuring-intermediate';
import { Challenge03Intermediate } from './challenges/03-typescript-basics-intermediate';
import { Challenge07Intermediate } from './challenges/07-rerenders-intermediate';
import { Challenge08Intermediate } from './challenges/08-mutation-and-copy-intermediate';

const challengeRoutes = {
  beginner: {
    '01-arrow-functions': <Challenge01 />,
    '02-destructuring': <Challenge02 />,
    '03-typescript-basics': <Challenge03 />,
    '04-state-and-props': <Challenge04 />,
    '05-event-handling': <Challenge05 />,
    '06-conditional-rendering': <Challenge06 />,
    '07-rerenders': <Challenge07 />,
    '08-mutation-and-copy': <Challenge08 />,
    '09-lifting-state': <Challenge09 />,
  },
  intermediate: {
    '01-arrow-functions': <Challenge01Intermediate />,
    '02-destructuring': <Challenge02Intermediate />,
    '03-typescript-basics': <Challenge03Intermediate />,
    '07-rerenders': <Challenge07Intermediate />,
    '08-mutation-and-copy': <Challenge08Intermediate />,
  },
};

function LegacyChallengeRedirect({ id }: { id: string }) {
  const { difficulty } = useDifficulty();
  return <Navigate to={`/challenge/${difficulty}/${id}`} replace />;
}

export function App() {
  return (
    <BrowserRouter>
      <DifficultyProvider>
        <FlagProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<BriefingScreen />} />
              <Route path="/hq" element={<HQScreen />} />
              <Route path="/victory" element={<VictoryScreen />} />
              {Object.entries(challengeRoutes).flatMap(([difficulty, routes]) =>
                Object.entries(routes).map(([id, element]) => (
                  <Route key={`${difficulty}:${id}`} path={`/challenge/${difficulty}/${id}`} element={element} />
                ))
              )}
              {Object.keys(challengeRoutes.beginner).map(id => (
                <Route key={`legacy:${id}`} path={`/challenge/${id}`} element={<LegacyChallengeRedirect id={id} />} />
              ))}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </FlagProvider>
      </DifficultyProvider>
    </BrowserRouter>
  );
}
