const makeMove = (rowNum: number, colNum: number) =>
    ({
        type: 'MAKE_MOVE',
        rowNum,
        colNum
    } as MakeMoveAction);
const undo = (moveNum: number) =>
    ({
        type: 'UNDO',
        moveNum
    } as UndoAction);

const resize = (size: number) =>
    ({
        type: 'RESIZE',
        size
    } as ResizeAction);
