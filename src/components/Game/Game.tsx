import { GAME_STEPS } from '../../constants/gameSteps';
import type { useGame } from '../../hooks/UseGame';
import type { Rules } from '../../rules/types';
import { GameResult } from '../GameResult/GameResult';
import { RoundInfo } from '../RoundInfo/RoundInfo';
import { SelectMove } from '../SelectMove/SelectMove';

type GameState<M extends string> = ReturnType<typeof useGame<M>>

interface GameProps<M extends string> {
    game: GameState<M>;
    rules: Rules<M>;
}

export const Game = <M extends string> ({ game, rules }: GameProps<M>) => {
    const { play, lastUserMove, lastCpuMove, setShowResult, roundWinner, gameWinner, resetGame, gameStep, setGameStep } = game;

    const nextRound = () => {
        setShowResult(false);
        setGameStep(GAME_STEPS.SELECT_MOVE);
    }

    return (
        <div>
            {gameStep === GAME_STEPS.SELECT_MOVE && (
                <SelectMove rulesType={rules.name} moves={rules.moves} play={play} />
            )}
            {gameStep === GAME_STEPS.IN_RESULT && (
                <RoundInfo lastUserMove={lastUserMove} lastCpuMove={lastCpuMove} roundWinner={roundWinner} nextRound={nextRound} />
            )}
            {gameStep === GAME_STEPS.GAME_OVER && (
                <GameResult gameWinner={gameWinner!} resetGame={resetGame} />
            )}
        </div>
    )
}


