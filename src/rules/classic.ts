import RulesClassic from '../assets/images/image-rules.svg?react';
import type { Rules, Winner } from './types';

export type ClassicMove = 'rock' | 'paper' | 'scissors';

const winsAgainst: Record<ClassicMove, ClassicMove> = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

const whoWins = (player: ClassicMove, cpu: ClassicMove): Winner => {
    if (player === cpu) {
        return 'draw';
    }

    if (winsAgainst[player] === cpu) {
        return 'player';
    }

    return 'cpu';
}

export const classicRules: Rules<ClassicMove> = {
    name: 'Classic',
    moves: ['rock', 'paper', 'scissors'],
    whoWins,
    RulesDiagram: RulesClassic,
}