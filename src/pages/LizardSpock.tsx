import { Game } from '../components/Game/Game';
import { Header } from '../components/Header/Header';
import { RoundSelector } from '../components/RoundSelector/RoundSelector';
import { RulesModal } from '../components/RulesModal/RulesModal';
import { useGame } from '../hooks/UseGame';
import { lizardSpockRules } from '../rules/lizardSpock';

export const LizardSpock = () => {
  const game = useGame(lizardSpockRules);

      return (
          <>
              <Header score={{ userScore: game.userScore, cpuScore: game.cpuScore }} rulesName={lizardSpockRules.name} />

              {!game.gameStarted && (
                  <section className="rounds_selector">
                      <h2>Select Rounds to play</h2>
                      <RoundSelector bestOf={game.bestOf} setBestOf={game.setBestOf} />
                      <button className="btn rounds_selector__btn" onClick={game.startGame}>Play!</button>
                  </section>
              )}

              {game.gameStarted && <Game game={game} rules={lizardSpockRules} />}

              <RulesModal rules={lizardSpockRules} />

          </>
      )
}
