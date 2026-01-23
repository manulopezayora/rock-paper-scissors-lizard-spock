import RulesLizard from '../assets/images/image-rules-bonus.svg?react';
import type { Move, Rules, Winner } from './types';

const winsAgainst: Record<Move, Move> = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
}

const whoWins = (player: Move, cpu: Move): Winner => {
    // Implement the logic to determine the winner in Lizard Spock rules
    return 'cpu'; // Placeholder
}

export const lizardSpockRules: Rules = {
    name: 'Lizard Spock',
    // moves: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    moves: ['rock', 'paper', 'scissors'],
    whoWins,
    RulesDiagram: RulesLizard
}