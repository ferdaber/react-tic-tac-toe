export const copyRow = (row: Play[]) => [...row];
export const copyBoard = (board: Play[][]) => board.map(copyRow);
export const copyMoves = (moves: Play[][][]) => moves.map(copyBoard);
export const replaceCell = (board: Play[][], rowNum: number, colNum: number, newVal: Play) => (
    ((board = copyBoard(board))[rowNum][colNum] = newVal),
    board
);

export const defaultState: GameState = {
    moves: [new Array(3).fill(new Array(3).fill(null))],
    nextPlayer: 'X',
    winner: null,
    size: 3
};
