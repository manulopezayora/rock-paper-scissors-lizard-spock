import type { Move } from '../rules/types';

export const MOVES: Record<string, Move> = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
} as const;