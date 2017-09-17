import * as React from 'react'
import { connect } from 'react-redux'

import { TodoA, TodoB, TodoC } from './TodoItem'

interface TodoListProps extends TodoState { }

export class TodoList extends React.Component<TodoListProps, {}> {
    render() {
        return (
            <div className="todo-list">
                {this.props.todos.map(t => (
                    <div key={t.id}>
                        {this.getTodoItem(t)}
                    </div>
                ))}
            </div>
        )
    }

    getTodoItem(t: Todo) {
        switch (t.type) {
            case 'A':
                return <TodoA />
            case 'B':
                return <TodoB />
            case 'C':
                return <TodoC />
            default:
                return <TodoA />
        }
    }
}

const mapStateToProps = (state: TodoState) => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoList)