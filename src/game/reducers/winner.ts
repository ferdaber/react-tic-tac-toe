import { replaceCell } from './';

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

const winner: GameReducer<'winner'> = (state, action, fullState) => ({
    MAKE_MOVE: () => {
        action = action as MakeMoveAction;
        return getWinner(
            replaceCell(fullState.moves[fullState.moves.length - 1], action.rowNum, action.colNum, fullState.nextPlayer)
        ) as Play;
    },
    RESIZE: () => null as Play,
    UNDO: () => (fullState.moves.length - (action as UndoAction).moveNum === 1 ? state : null)
});
export default winner;
