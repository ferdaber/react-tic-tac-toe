import { combineReducers } from 'redux';
import { copyMoves } from './';
import { replaceCell } from './';

const moves: GameReducer<'moves'> = (state, action, fullState) => ({
    MAKE_MOVE: () => {
        action = action as MakeMoveAction;
        const nextBoard = replaceCell(state[state.length - 1], action.rowNum, action.colNum, fullState.nextPlayer);
        return [...copyMoves(state), nextBoard];
    },
    UNDO: () => copyMoves(state.slice(0, (action as UndoAction).moveNum)),
    RESIZE: () => ((action = action as ResizeAction), [new Array(action.size).fill(new Array(action.size).fill(null))])
});

const createReducer = <P extends keyof GameState>(reducer: GameReducer<P>) => (
    state: GameState[P],
    action: GameAction,
    overallState: GameState
) => (action.type in reducer(state, action, overallState) ? reducer(state, action, overallState) : state);

export default moves;
