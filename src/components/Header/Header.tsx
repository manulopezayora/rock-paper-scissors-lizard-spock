import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                Rock <br />
                Paper <br />
                Scissors
            </h1>
            <div className={styles.score}>
                <p className={styles.score__title}>User score</p>
                <p id="user-score-value" className={styles.score__value}></p>
            </div>
            <div className={styles.score}>
                <p className={styles.score__title}>cpu score</p>
                <p id="cpu-score-value" className={styles.score__value}></p>
            </div>
        </header>
    )
}
