import type { ComponentType, SVGProps } from 'react';

export type RoundOption = 1 | 3 | 5;

export interface Rules {
    name: string;
    moves: string[];
    RulesDiagram: ComponentType<SVGProps<SVGSVGElement>>;
}