import RulesLizard from '../assets/images/image-rules-bonus.svg?react';
import type { Rules, Winner } from './types';

export type LizardSpockMove = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';

const winsAgainst: Record<LizardSpockMove, LizardSpockMove[]> = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors'],
}

const whoWins = (player: LizardSpockMove, cpu: LizardSpockMove): Winner => {
    if (player === cpu) {
        return 'draw';
    }

    if (winsAgainst[player].includes(cpu)) {
        return 'player';
    }

    return 'cpu';
}

export const lizardSpockRules: Rules<LizardSpockMove> = {
    name: 'Lizard Spock',
    moves: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    whoWins,
    RulesDiagram: RulesLizard
}