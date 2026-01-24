import { Fragment } from 'react/jsx-runtime';
import LizardSVG from '../../assets/images/icon-lizard.svg?react';
import PaperSVG from '../../assets/images/icon-paper.svg?react';
import RockSVG from '../../assets/images/icon-rock.svg?react';
import ScissorsSVG from '../../assets/images/icon-scissors.svg?react';
import SpockSVG from '../../assets/images/icon-spock.svg?react';
import { GAME_STEPS } from '../../constants/gameSteps';
import { MOVES } from '../../constants/moves';
import type { useGame } from '../../hooks/UseGame';
import type { Rules } from '../../rules/types';
import styles from './Game.module.css';

type GameState<M extends string> = ReturnType<typeof useGame<M>>

interface GameProps<M extends string> {
    game: GameState<M>;
    rules: Rules<M>;
}

export const Game = <M extends string> ({ game, rules }: GameProps<M>) => {
    const { play, lastUserMove, lastCpuMove, setShowResult, roundWinner, gameWinner, resetGame, gameStep, setGameStep } = game;

    const getTokenComponent = <M extends string> (move: M) => {
        switch (move) {
            case MOVES.rock:
                return <RockSVG />;
            case MOVES.paper:
                return <PaperSVG />;
            case MOVES.scissors:
                return <ScissorsSVG />;
            case MOVES.lizard:
                return <LizardSVG />;
            case MOVES.spock:
                return <SpockSVG />;
        }
    }

    const nextRound = () => {
        setShowResult(false);
        setGameStep(GAME_STEPS.SELECT_MOVE);
    }

    return (
        <div className={styles.game}>
            {gameStep === GAME_STEPS.SELECT_MOVE && (
                <>
                    <span className={styles.countdown}>Chose your move</span>
                    <section className={styles.table}>
                        {rules.moves.map(move => {
                            return (
                                <Fragment key={move}>
                                    <div className={styles.token + " " + styles[move]} onClick={() => play(move)}>
                                        <div className={styles.token_outline_top}>
                                            {getTokenComponent(move)}
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </section>
                </>
            )}
            {gameStep === GAME_STEPS.IN_RESULT && (
                <>
                    <section className={styles.table + " " + styles.tableVS}>
                        <div className={styles.token + " " + styles[lastUserMove!]}>
                            <div className={styles.token_outline_top}>
                                {getTokenComponent(lastUserMove!)}
                            </div>
                        </div>
                        <div className={styles.token + " " + styles[lastCpuMove!]}>
                            <div className={styles.token_outline_top}>
                                {getTokenComponent(lastCpuMove!)}
                            </div>
                        </div>
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
                <>
                    <div className="final-msg">
                        <h2>{gameWinner === 'player' ? 'Congratulations!' : 'Better luck next time!'}</h2>
                        <h3>{gameWinner === 'player' ? 'you won the game' : 'you lost the game'}</h3>
                        <button onClick={resetGame} className="btn">Play Again?</button>
                    </div>
                </>
            )}
        </div>
    )
}


