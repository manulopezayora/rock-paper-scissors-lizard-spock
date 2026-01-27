import { GAME_STEPS } from '../../constants/gameSteps';
import type { useGame } from '../../hooks/UseGame';
import type { Rules } from '../../rules/types';
import { GameResult } from '../GameResult/GameResult';
import { GameToken } from '../GameToken/GameToken';
import { SelectMove } from '../SelectMove/SelectMove';
import styles from './Game.module.css';

type GameState<M extends string> = ReturnType<typeof useGame<M>>

interface GameProps<M extends string> {
    game: GameState<M>;
    rules: Rules<M>;
}

export const Game = <M extends string> ({ game, rules }: GameProps<M>) => {
    const { play, lastUserMove, lastCpuMove, setShowResult, roundWinner, gameWinner, resetGame, gameStep, setGameStep } = game;

    const nextRound = () => {
        setShowResult(false);
        setGameStep(GAME_STEPS.SELECT_MOVE);
    }

    return (
        <div className={styles.game}>
            {gameStep === GAME_STEPS.SELECT_MOVE && (
                <SelectMove rulesType={rules.name} moves={rules.moves} play={play} />
            )}
            {gameStep === GAME_STEPS.IN_RESULT && (
                <>
                    <section className={styles.table + " " + styles.tableVS}>
                        <GameToken token={lastUserMove!} />
                        <GameToken token={lastCpuMove!} />
                    </section>
                    <div className={styles.round_info}>
                        <span>You picked</span>
                        <span>cpu picked</span>
                    </div>
                    <div className="result-info">
                        <h2 className="result">{roundWinner === 'player' ? 'Yeah! You won!' : roundWinner === 'cpu' ? 'Oops, You lose' : 'It\'s a tie!'}</h2>
                        <button onClick={nextRound} className="btn">Next</button>
                    </div>
                </>
            )}
            {gameStep === GAME_STEPS.GAME_OVER && (
                <GameResult gameWinner={gameWinner!} resetGame={resetGame} />
            )}
        </div>
    )
}


