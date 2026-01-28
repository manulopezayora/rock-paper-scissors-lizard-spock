import type { RulesType } from '../../rules/types';
import { GameToken } from '../GameToken/GameToken';
import styles from './SelectMove.module.css';

interface SelectMoveProps<M extends string> {
    rulesType: RulesType;
    moves: M[];
    play: (move: M) => void;
}

export const SelectMove = <M extends string>({ rulesType, moves, play }: SelectMoveProps<M>) => {
    return (
        <section className={styles.select_move}>
            <span className={styles.title}>Chose your move</span>
            <section className={styles.table + ' ' + styles[rulesType]}>
                {moves.map(move => {
                    return (
                        <div key={move} className={styles.token}>
                            <GameToken token={move} onClick={() => play(move)} />
                        </div>
                    )
                })}
            </section>
        </section>
    )
}
