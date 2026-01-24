import type { ComponentType, SVGProps } from 'react';

export type RoundOption = 1 | 3 | 5;
export type Winner = 'player' | 'cpu' | 'draw';

export type Rules<M extends string> = {
    name: string;
    moves: M[];
    whoWins: (player: M, cpu: M) => Winner;
    RulesDiagram: ComponentType<SVGProps<SVGSVGElement>>;
}