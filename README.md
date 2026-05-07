# Rock Paper Scissors Lizard Spock

Juego clásico y su variante extendida implementados en React + TypeScript.

![Preview](./design/desktop-preview.jpg)

## Modos de Juego

| Modo | Movimientos |
|------|-------------|
| **Classic** | Rock, Paper, Scissors |
| **Lizard Spock** | Rock, Paper, Scissors, Lizard, Spock |

## Tech Stack

| Tecnología | Versión |
|------------|---------|
| React | 19.x |
| TypeScript | 5.x |
| Vite | 7.x |
| React Router | 7.x |

## Getting Started

```bash
npm install
npm run dev
```

## Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build para producción |
| `npm run lint` | Verificar código con ESLint |
| `npm run preview` | Preview del build |

## Estructura del Proyecto

```
src/
├── components/     # Componentes React
│   ├── Game/           # Contenedor principal
│   ├── GameResult/     # Pantalla de fin de juego
│   ├── GameToken/     # Token visual de cada movimiento
│   ├── Header/        # Titulo + puntuacion
│   ├── RoundInfo/     # Info de ronda actual
│   ├── RoundSelector/ # Selector de numero de rondas
│   ├── RulesModal/    # Modal con las reglas
│   └── SelectMove/   # Selector de movimiento
├── constants/      # Constantes (moves, gameSteps)
├── hooks/          # useGame (lógica del juego)
├── pages/          # Classic, LizardSpock
├── rules/          # Reglas de cada modo
└── assets/        # Imágenes y SVGs
```

## Componentes

- **Header** - Título del juego junto con puntuación del usuario y CPU
- **Game** - Contenedor que gestiona los pasos del juego
- **SelectMove** - Visualización del triángulo/pentágono para elegir movimiento
- **GameToken** - Token visual clickeable para cada movimiento
- **RoundInfo** - Muestra los movimientos jugados y resultado de la ronda
- **GameResult** - Pantalla de-fin de juego con opción de reiniciar
- **RoundSelector** - Selector de rondas (best-of 1, 3, 5...)
- **RulesModal** - Modal informativo con las reglas del juego

## API - useGame

Hook personalizado que gestiona toda la lógica del juego.

```typescript
import { useGame } from './hooks/UseGame';
import { classicRules } from './rules/classic';

const game = useGame(classicRules);

// Propiedades
game.bestOf         // Número total de rondas
game.userScore      // Puntuación del jugador
game.cpuScore      // Puntuación de la CPU
game.gameStarted    // Si el juego ha comenzado
game.lastUserMove // Último movimiento del jugador
game.lastCpuMove  // Último movimiento de la CPU
game.roundWinner  // Ganador de la ronda actual
game.gameWinner   // Ganador del juego (null si no terminó)
game.gameStep    // Paso actual: 'select-move' | 'in-result' | 'game-over'

// Métodos
game.startGame()      // Iniciar el juego
game.resetGame()       // Reiniciar puntuación y estado
game.play(move)       // Jugadar un movimiento
game.setBestOf(n)     // Cambiar número de rondas
```

## Reglas del Juego

### Classic

- **Rock** beats Scissors
- **Scissors** beats Paper
- **Paper** beats Rock

### Lizard Spock

- **Scissors** beats Paper, Lizard
- **Paper** beats Rock, Spock
- **Rock** beats Lizard, Scissors
- **Lizard** beats Spock, Paper
- **Spock** beats Scissors, Rock

## Deploy

```bash
npm run build
```

El build se genera en la carpeta `dist/` lista para desplegar en cualquier hosting estático.

## License

MIT