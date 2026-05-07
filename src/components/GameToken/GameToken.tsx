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
            return <RockSVG aria-hidden="true" />;
        case MOVES.paper:
            return <PaperSVG aria-hidden="true" />;
        case MOVES.scissors:
            return <ScissorsSVG aria-hidden="true" />;
        case MOVES.lizard:
            return <LizardSVG aria-hidden="true" />;
        case MOVES.spock:
            return <SpockSVG aria-hidden="true" />;
    }
}

export const GameToken = <M extends string>({ token, onClick }: GameTokenProps<M>) => {
    return (
        <button 
            className={styles.token + " " + styles[token!]} 
            onClick={onClick}
            type="button"
            aria-label={`Select ${token}`}
        >
            <span className={styles.token_outline_top}>
                {getTokenComponent(token!)}
            </span>
        </button>
    )
}

