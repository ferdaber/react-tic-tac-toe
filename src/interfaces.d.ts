interface GameState {
    moves: Play[][][];
    nextPlayer: Play;
    winner: Play;
    size: number;
}

interface TakeMoveAction {
    type: 'MAKE_MOVE';
    rowNum: number;
    colNum: number;
}

interface UndoAction {
    type: 'UNDO';
    moveNum: number;
}

interface ResizeAction {
    type: 'RESIZE';
    size: number;
}

type Play = 'O' | 'X';

type GameAction = TakeMoveAction | UndoAction | ResizeAction;
