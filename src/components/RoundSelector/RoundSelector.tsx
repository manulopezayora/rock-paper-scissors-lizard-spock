import type { RoundOption } from '../../rules/types';
import styles from './RoundSelector.module.css';

interface RoundSelectorProps {
    bestOf: RoundOption
    setBestOf: (value: RoundOption) => void
}

export const RoundSelector = ({ bestOf, setBestOf }: RoundSelectorProps) => {
    const options: RoundOption[] = [1, 3, 5];

    return (
        <fieldset className={styles.round_selector}>
            <legend className={styles.legend}>Number of rounds</legend>
            {options.map((option) => (
                <label key={option} className={styles.label}>
                    <input
                        type="radio"
                        name="best-of"
                        value={option}
                        checked={bestOf === option}
                        onChange={() => setBestOf(option)}
                    />
                    {`Best of ${option}`}
                </label>
            ))}
        </fieldset>
    )
}
