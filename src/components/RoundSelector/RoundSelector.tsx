import type { RoundOption } from '../../rules/types';
import styles from './RoundSelector.module.css';

interface RoundSelectorProps {
    bestOf: RoundOption
    setBestOf: (value: RoundOption) => void
}

export const RoundSelector = ({ bestOf, setBestOf }: RoundSelectorProps) => {
    const options: RoundOption[] = [1, 3, 5];

    return (
        <div className={styles.round_selector}>
            {options.map((option) => (
                <label key={option} style={{ cursor: "pointer", fontSize: 20, fontWeight: '500' }}>
                    <input
                        type="radio"
                        value={option}
                        checked={bestOf === option}
                        onChange={() => setBestOf(option)}
                        style={{ marginRight: 6 }}
                    />
                    {`Best of ${option}`}
                </label>
            ))}
        </div>
    )
}
