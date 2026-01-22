import { useState } from "react";
import type { RoundOption } from "../rules/types";

export function useGame() {
    const [bestOf, setBestOf] = useState<RoundOption>(1);
    const [userScore, setUserScore] = useState(0);
    const [cpuScore, setCpuScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const startGame = () => setGameStarted(true);

    const resetGame = () => {
        setUserScore(0)
        setCpuScore(0)
        setGameStarted(false)
    }

    return {
        bestOf,
        setBestOf,
        userScore,
        cpuScore,
        gameStarted,
        startGame,
        resetGame,
    }
}
