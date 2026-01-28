import styles from './GameResult.module.css';

interface GameResultProps {
    gameWinner: 'player' | 'cpu';
    resetGame: () => void;
}

export const GameResult = ({ gameWinner, resetGame }: GameResultProps) => {
    return (
        <div className={styles.final_msg}>
            <h2>{gameWinner === 'player' ? 'Congratulations!' : 'Better luck next time!'}</h2>
            <h3>{gameWinner === 'player' ? 'you won the game' : 'you lost the game'}</h3>
            <button onClick={resetGame} className="btn">Play Again?</button>
        </div>
    )
}
