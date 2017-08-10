const togglePlayer = (currentPlayer: 'X' | 'O') => (currentPlayer === 'X' ? 'O' : 'X');

const nextPlayer: GameReducer<'nextPlayer'> = (state, action, fullState) => ({
    MAKE_MOVE: () => togglePlayer(state),
    UNDO: () => ((fullState.moves.length - (action as UndoAction).moveNum) % 2 === 0 ? togglePlayer(state) : state),
    RESIZE: () => 'X'
});

export default nextPlayer;
