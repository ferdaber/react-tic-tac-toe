const togglePlayer = (currentPlayer: 'X' | 'O') => (currentPlayer === 'X' ? 'O' : 'X');
const copyRow = (row: Play[]) => [...row];
const copyBoard = (board: Play[][]) => board.map(copyRow);
const copyMoves = (moves: Play[][][]) => moves.map(copyBoard);
const replaceCell = (board: Play[][], rowNum: number, colNum: number, newVal: Play) => (
    ((board = copyBoard(board))[rowNum][colNum] = newVal),
    board
);
const getWinner = (board: Play[][]) => {
    const winningRow = board.find(row => row.every(cell => cell === 'X') || row.every(cell => cell === 'O'));
    if (winningRow) {
        return winningRow[0];
    }
    const winningCol = board
        .reduce((prevRow, curRow) => curRow.map((curVal, colNum) => (curVal === prevRow[colNum] ? curVal : null)))
        .find(val => val != null);
    if (winningCol) {
        return winningCol;
    }
    const winningDiags = board
        .reduce(
            (diags: Play[][], curRow, idx) => (
                diags[0].push(curRow[idx]),
                diags[1].push(curRow[board.length - 1 - idx]),
                diags
            ),
            [[], []]
        )
        .find(diag => diag.every(cell => cell === 'X') || diag.every(cell => cell === 'O'));
    return winningDiags && winningDiags[0];
};

export const DEFAULT_SIZE = 3;

export default (
    state: GameState = {
        moves: [new Array(DEFAULT_SIZE).fill(new Array(DEFAULT_SIZE).fill(null))],
        nextPlayer: 'X',
        winner: null,
        size: DEFAULT_SIZE
    },
    action: GameAction
) => {
    switch (action.type) {
        case 'MAKE_MOVE':
            const nextBoard = replaceCell(
                state.moves[state.moves.length - 1],
                action.rowNum,
                action.colNum,
                state.nextPlayer
            );
            return Object.assign({}, state, {
                nextPlayer: togglePlayer(state.nextPlayer),
                moves: [...copyMoves(state.moves), nextBoard],
                winner: getWinner(nextBoard)
            });
        case 'UNDO':
            const newMoves = copyMoves(state.moves.slice(0, action.moveNum + 1));
            const newPlayer =
                (state.moves.length - action.moveNum) % 2 === 0 ? togglePlayer(state.nextPlayer) : state.nextPlayer;
            const newWinner = state.moves.length - action.moveNum === 1 ? state.winner : null;
            return Object.assign({}, state, {
                nextPlayer: newPlayer,
                moves: newMoves,
                winner: newWinner
            });
        case 'RESIZE':
            return {
                moves: [new Array(action.size).fill(new Array(action.size).fill(null))],
                nextPlayer: 'X',
                winner: null as Play,
                size: action.size
            };
        default:
            return state;
    }
};
