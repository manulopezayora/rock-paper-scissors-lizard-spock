import { Header } from '../components/Header/Header';
import { RoundSelector } from '../components/RoundSelector/RoundSelector';
import { RulesModal } from '../components/RulesModal/RulesModal';
import { useGame } from '../hooks/UseGame';
import { classicRules } from '../rules/classic';

export const Classic = () => {
    const { bestOf, setBestOf, startGame, gameStarted } = useGame();

    return (
        <>
            <Header />

            {!gameStarted && (
                <section className="rounds_selector">
                    <h2>Select Rounds to play</h2>
                    <RoundSelector bestOf={bestOf} setBestOf={setBestOf} />
                    <button className="btn rounds_selector__btn" onClick={startGame}>Play!</button>
                </section>
            )}

            <RulesModal rules={classicRules}/>

        </>
    )
}
