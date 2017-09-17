import * as React from 'react'
import { connect } from 'react-redux'

interface TodoProps {
    todo: Todo
    onClick(todoId: string): DeleteTodoAction
}

const Todo = (props: TodoProps) => (
    <button
        className={`todo-item ${props.todo.isDone ? 'done' : ''}`}
        onClick={() => props.onClick(props.todo.id)}
    >
        [{props.todo.type}]: {props.todo.title}
    </button>
)

const mapStateToPropsFactory = (type: string) => (state: TodoState) => ({
    todo: state.todos.find(t => t.type === type)
})

const mapDispatchToProps = {
    onClick(todoId: string): DeleteTodoAction {
        return {
            type: 'DELETE_TODO',
            todoId
        }
    }
}

export const TodoA = connect(mapStateToPropsFactory('A'), mapDispatchToProps)(Todo)
export const TodoB = connect(mapStateToPropsFactory('B'), mapDispatchToProps)(Todo)
export const TodoC = connect(mapStateToPropsFactory('C'), mapDispatchToProps)(Todo)