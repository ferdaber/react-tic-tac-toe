interface GameState {
    moves: Play[][][];
    nextPlayer: Play;
    winner: Play;
    size: number;
}

type Play = 'O' | 'X';
