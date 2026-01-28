import LizardSVG from '../../assets/images/icon-lizard.svg?react';
import PaperSVG from '../../assets/images/icon-paper.svg?react';
import RockSVG from '../../assets/images/icon-rock.svg?react';
import ScissorsSVG from '../../assets/images/icon-scissors.svg?react';
import SpockSVG from '../../assets/images/icon-spock.svg?react';
import { MOVES } from '../../constants/moves';
import styles from './GameToken.module.css';

interface GameTokenProps<M extends string> {
    token: M | null;
    onClick?: () => void;
}

const getTokenComponent = <M extends string>(move: M) => {
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

export const GameToken = <M extends string>({ token, onClick }: GameTokenProps<M>) => {
    return (
        <div className={styles.token + " " + styles[token!]} onClick={onClick}>
            <div className={styles.token_outline_top}>
                {getTokenComponent(token!)}
            </div>
        </div>
    )
}

