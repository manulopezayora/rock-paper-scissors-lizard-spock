import { GameToken } from '../GameToken/GameToken';
import styles from './RoundInfo.module.css';

interface RoundInfoProps<M extends string> {
    lastUserMove: M | null;
    lastCpuMove: M | null;
    roundWinner: 'player' | 'cpu' | 'draw' | null;
    nextRound: () => void;
}

export const RoundInfo = <M extends string> ({ lastUserMove, lastCpuMove, roundWinner, nextRound }: RoundInfoProps<M>) => {
    return (
        <>
            <section className={styles.table} aria-label="Round results">
                <GameToken token={lastUserMove} interactive={false} />
                <GameToken token={lastCpuMove} interactive={false} />
            </section>
            <div className={styles.round_info}>
                <span>You picked</span>
                <span>cpu picked</span>
            </div>
            <div className={styles.result_info} role="status" aria-live="polite">
                <h2 className={styles.result}>{roundWinner === 'player' ? 'Yeah! You won!' : roundWinner === 'cpu' ? 'Oops, You lose' : 'It\'s a tie!'}</h2>
                <button onClick={nextRound} className="btn" type="button">Next</button>
            </div>
        </>
    )
}
