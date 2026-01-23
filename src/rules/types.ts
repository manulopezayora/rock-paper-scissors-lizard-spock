import type { ComponentType, SVGProps } from 'react';

export type RoundOption = 1 | 3 | 5;
export type Move = 'rock' | 'paper' | 'scissors';
export type Winner = 'player' | 'cpu' | 'draw';

export const MOVES: Record<string, Move> = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
}

export interface Rules {
    name: string;
    moves: Move[];
    whoWins: (player: Move, cpu: Move) => Winner;
    RulesDiagram: ComponentType<SVGProps<SVGSVGElement>>;
}