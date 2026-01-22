import { Header } from '../components/Header/Header'
import { RulesModal } from '../components/RulesModal/RulesModal'

export const Classic = () => {
  return (
    <>
        <Header />

        <div id="app" className="app">
            <form id="form" className="form">
            <div className="form__fields">
                <h2 className="form__title">Select Rounds to play</h2>
            </div>
            <div className="form__fields">
                <select name="rounds" className="rounds">
                <option value="1" selected>The best of 1 round</option>
                <option value="3">The best of 3 rounds</option>
                <option value="5">The best of 5 rounds</option>
                </select>
            </div>
            <div className="form__fields">
                <button className="btn form__btn">Play!</button>
            </div>
            </form>
        </div>

      <RulesModal />

    </>
  )
}
