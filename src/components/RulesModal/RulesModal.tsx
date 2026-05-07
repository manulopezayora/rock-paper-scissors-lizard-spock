import { useState, useRef, useEffect } from 'react';
import type { ClassicMove } from '../../rules/classic';
import type { LizardSpockMove } from '../../rules/lizardSpock';
import type { Rules } from '../../rules/types';
import styles from './RulesModal.module.css';

interface RulesModalProps {
  rules: Rules<ClassicMove> | Rules<LizardSpockMove>;
}

export const RulesModal = ({ rules }: RulesModalProps) => {

    const Rules = rules.RulesDiagram;

    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.focus();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
            closeModal();
        }
    };

    return (
        <div className={styles.rules}>
            <button className={`btn ${styles.rules__btn}`} onClick={openModal} aria-haspopup="dialog">Rules</button>
            {isOpen && (
                <div 
                    className={`${styles.rules__modal} ${styles.rules__modal_active}`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="rules-title"
                    onKeyDown={handleKeyDown}
                >
                    <div className={styles.modal__content} tabIndex={-1} ref={modalRef}>
                        <h2 id="rules-title" className={styles.modal__title}>Rules</h2>
                        <Rules aria-hidden="true" />
                        <button className={styles.close_modal} onClick={closeModal} aria-label="Close rules">+</button>
                    </div>
                </div>
            )}
        </div>
    )
}
