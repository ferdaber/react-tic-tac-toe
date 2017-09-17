let counter = 0

const makeTodo = (type: string) => ({
    id: (counter++).toString(),
    type: type.toUpperCase(),
    isDone: false,
    title: `todo-${type.toLowerCase()}`
} as Todo)

const defaultTodos: Todo[] = [
    makeTodo('A'),
    makeTodo('B'),
    makeTodo('B'),
    makeTodo('C'),
    makeTodo('C')
]

export default (
    state: TodoState = {
        todos: defaultTodos
    },
    action: TodoAction
) => {
    switch (action.type) {
        case 'DELETE_TODO':
            const todoIndex = state.todos.findIndex(t => t.id === action.todoId)
            const todos = [...state.todos]
            todos.splice(todoIndex, 1)
            return { todos }
        default:
            return state;
    }
}