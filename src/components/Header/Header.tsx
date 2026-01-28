import type { RulesType } from '../../rules/types';
import styles from './Header.module.css';

interface HeaderProps {
    score: {
        userScore: number;
        cpuScore: number;
    };
    rulesName: RulesType;
}

const getTitle = (rulesName: RulesType) => (
    rulesName === 'classic' ? (
        <h1 className={styles.title}>
            Rock <br />
            Paper <br />
            Scissors
        </h1>
    ) : (
        <h1 className={styles.title}>
            Rock <br />
            Paper <br />
            Scissors <br />
            Lizard <br />
            Spock
        </h1>
    )
);

export const Header = ({ score, rulesName }: HeaderProps) => {
    return (
        <header className={styles.header}>
            {getTitle(rulesName)}
            <div className={styles.score}>
                <p className={styles.score__title}>User score</p>
                <p className={styles.score__value}>{score?.userScore}</p>
            </div>
            <div className={styles.score}>
                <p className={styles.score__title}>cpu score</p>
                <p className={styles.score__value}>{score?.cpuScore}</p>
            </div>
        </header>
    )
}
