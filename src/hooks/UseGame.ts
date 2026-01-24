import { useState } from "react";
import { GAME_STEPS } from '../constants/gameSteps';
import type { RoundOption, Rules, Winner } from "../rules/types";

export const useGame = <M extends string> (rules: Rules<M>) => {
    const [bestOf, setBestOf] = useState<RoundOption>(1);
    const [userScore, setUserScore] = useState(0);
    const [cpuScore, setCpuScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [lastUserMove, setLastUserMove] = useState<M | null>(null);
    const [lastCpuMove, setLastCpuMove] = useState<M | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [roundWinner, setRoundWinner] = useState<Winner | null>(null);
    const [gameStep, setGameStep] = useState<string>(GAME_STEPS.SELECT_MOVE);

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
        setGameStep(GAME_STEPS.SELECT_MOVE);
    }

    const randomMove = (): M => rules.moves[Math.floor(Math.random() * rules.moves.length)];

    const play = (playerMove: M): void => {
        if (!gameStarted) return;

        setLastUserMove(playerMove);

        const cpuMove = randomMove();
        setLastCpuMove(cpuMove);

        const winner = rules.whoWins(playerMove, cpuMove);
        setRoundWinner(winner);

        if (winner === 'player') {
            setUserScore((prev) => prev + 1);
        } else if (winner === 'cpu') {
            setCpuScore((prev) => prev + 1);
        }

        setShowResult(true);
        setGameStep(GAME_STEPS.IN_RESULT);
    }

    const isFinished = !showResult && (userScore === maxWins || cpuScore === maxWins);
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
        gameStep: isFinished ? GAME_STEPS.GAME_OVER : gameStep,
        setGameStep,
    }
}
