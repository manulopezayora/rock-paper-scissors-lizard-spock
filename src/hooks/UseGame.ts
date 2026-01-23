import { useState } from "react";
import type { Move, RoundOption, Rules, Winner } from "../rules/types";

export const useGame = (rules: Rules) => {
    const [bestOf, setBestOf] = useState<RoundOption>(1);
    const [userScore, setUserScore] = useState(0);
    const [cpuScore, setCpuScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [lastUserMove, setLastUserMove] = useState<Move | null>(null);
    const [lastCpuMove, setLastCpuMove] = useState<Move | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [roundWinner, setRoundWinner] = useState<Winner | null>(null);

    const maxWins = Math.ceil(bestOf / 2);

    const startGame = (): void => setGameStarted(true);

    const resetGame = (): void => {
        setUserScore(0);
        setCpuScore(0);
        setLastUserMove(null);
        setLastCpuMove(null);
        setRoundWinner(null);
        setGameStarted(false);
        setShowResult(false);
    }

    const randomMove = (): Move => rules.moves[Math.floor(Math.random() * rules.moves.length)];

    const play = (playerMove: Move): void => {
        if (!gameStarted) return;

        setLastUserMove(playerMove);

        const cpuMove = randomMove();
        setLastCpuMove(cpuMove);

        const winner = rules.whoWins(playerMove, cpuMove);
        setRoundWinner(winner);

        if (winner === 'player') {
            setUserScore((prev) => prev + 1);
            // setUserScore((prev) => Math.min(prev + 1, maxWins));
        } else if (winner === 'cpu') {
            setCpuScore((prev) => prev + 1);
            // setCpuScore((prev) => Math.min(prev + 1, maxWins));
        }

        setShowResult(true);
    }

    const isFinished = userScore === maxWins || cpuScore === maxWins;
    const gameWinner = isFinished ? (userScore === maxWins ? 'player' : 'cpu') : null;

    return {
        bestOf,
        setBestOf,
        userScore,
        cpuScore,
        gameStarted,
        startGame,
        resetGame,
        play,
        lastUserMove,
        lastCpuMove,
        isFinished,
        showResult,
        setShowResult,
        roundWinner,
        gameWinner,
    }
}
