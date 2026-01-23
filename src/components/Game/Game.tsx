import { Fragment } from 'react/jsx-runtime';
import PaperSVG from '../../assets/images/icon-paper.svg?react';
import RockSVG from '../../assets/images/icon-rock.svg?react';
import ScissorsSVG from '../../assets/images/icon-scissors.svg?react';
import { MOVES, type Rules } from '../../rules/types';
import styles from './Game.module.css';

interface GameProps {
    game: ReturnType<typeof import('../../hooks/UseGame').useGame>;
    rules: Rules;
}

export const Game = ({ game, rules }: GameProps) => {
    const { play, lastUserMove, lastCpuMove, isFinished, showResult, setShowResult, roundWinner, gameWinner, resetGame } = game;

    const tokenComponent = (move: string) => {
        switch (move) {
            case MOVES.rock:
                return <RockSVG />;
            case MOVES.paper:
                return <PaperSVG />;
            case MOVES.scissors:
                return <ScissorsSVG />;
        }
    }

    const nextRound = () => {
        setShowResult(false);
    }

    return (
        <div className={styles.game}>
            {
                isFinished ? (
                    <>
                        <div className="final-msg">
                            <h2>{gameWinner === 'player' ? 'Congratulations!' : 'Better luck next time!'}</h2>
                            <h3>{gameWinner === 'player' ? 'you won the game' : 'you lost the game'}</h3>
                            <button onClick={resetGame} className="btn">Play Again?</button>
                        </div>
                    </>
                ) : showResult ? (
                    <>
                        <section className={styles.table + " " + styles.tableVS}>
                            <div className={styles.token + " " + styles[lastUserMove!]}>
                                <div className={styles.token_outline_top}>
                                    {tokenComponent(lastUserMove!)}
                                </div>
                            </div>
                            <div className={styles.token + " " + styles[lastCpuMove!]}>
                                <div className={styles.token_outline_top}>
                                    {tokenComponent(lastCpuMove!)}
                                </div>
                            </div>
                        </section>
                        <div className={styles.round_info}>
                            <span>You picked</span>
                            <span>cpu picked</span>
                        </div>
                        <div className="result-info">
                            <h2 className="result">{roundWinner === 'player' ? 'You won!' : roundWinner === 'cpu' ? 'CPU won!' : 'It\'s a tie!'}</h2>
                            <button onClick={nextRound} className="btn">Next Round</button>
                        </div>
                    </>
                ) : (
                    <>
                        <span className={styles.countdown}>Chose your move</span>
                        <section className={styles.table}>
                            {rules.moves.map(move => {
                                return (
                                    <Fragment key={move}>
                                        <div className={styles.token + " " + styles[move]} onClick={() => play(move)}>
                                            <div className={styles.token_outline_top}>
                                                {tokenComponent(move)}
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </section>
                    </>
                )
            }
        </div>
    )
}


