import { useState } from 'react';
import type { Rules } from '../../rules/types';
import styles from './RulesModal.module.css';

interface RulesModalProps {
  rules: Rules
}

export const RulesModal = ({ rules }: RulesModalProps) => {

    const Rules = rules.RulesDiagram;

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className={styles.rules}>
            <button className={`btn ${styles.rules__btn}`} onClick={openModal}>Rules</button>
            <div className={`${styles.rules__modal} ${isOpen ? styles.rules__modal_active : ''}`}>
                <div className={styles.modal__content}>
                    <h2 className={styles.modal__title}>Rules</h2>
                    <Rules />
                    <button className={styles.close_modal} onClick={closeModal}>+</button>
                </div>
            </div>
        </div>
    )
}
