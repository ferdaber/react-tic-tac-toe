interface GameState {
    moves: Play[][][]
    nextPlayer: Play
    winner: Play
    size: number
}

interface TodoState {
    todos: Todo[]
}

interface Todo {
    type: 'A' | 'B' | 'C'
    id: string
    title: string
    isDone: boolean
}

interface DeleteTodoAction {
    type: 'DELETE_TODO'
    todoId: string
}

type TodoAction = DeleteTodoAction

interface TakeMoveAction {
    type: 'MAKE_MOVE'
    rowNum: number
    colNum: number
}

interface UndoAction {
    type: 'UNDO'
    moveNum: number
}

interface ResizeAction {
    type: 'RESIZE'
    size: number
}

type Play = 'O' | 'X'

type GameAction = TakeMoveAction | UndoAction | ResizeAction
