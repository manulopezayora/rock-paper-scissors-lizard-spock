import RulesClassic from '../assets/images/image-rules.svg?react';
import type { Move, Rules, Winner } from './types';

const winsAgainst: Record<Move, Move> = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

const whoWins = (player: Move, cpu: Move): Winner => {
    if (player === cpu) {
        return 'draw';
    }

    if (winsAgainst[player] === cpu) {
        return 'player';
    }

    return 'cpu';
}

export const classicRules: Rules = {
    name: 'Classic',
    moves: ['rock', 'paper', 'scissors'],
    whoWins,
    RulesDiagram: RulesClassic,
}