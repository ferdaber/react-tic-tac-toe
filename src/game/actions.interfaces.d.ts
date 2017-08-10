type GameActionType = 'MAKE_MOVE' | 'UNDO' | 'RESIZE';
type GameAction = ResizeAction | UndoAction | MakeMoveAction;

interface ResizeAction {
    type: 'RESIZE';
    size: number;
}
interface UndoAction {
    type: 'UNDO';
    moveNum: number;
}
interface MakeMoveAction {
    type: 'MAKE_MOVE';
    rowNum: number;
    colNum: number;
}
