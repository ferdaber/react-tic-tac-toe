import * as React from 'react';
import { Route } from 'react-router';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux'

import gameReducer from '../game-reducer'
import todoReducer from '../todo-reducer'

import Navigation from './Navigation';
import GameInfo from './GameInfo';
import GameBoard from './GameBoard';
import GameSizer from './GameSizer';
import TodoList from './TodoList';

const Game = () =>
    <div>
        <GameSizer />
        <div className="game">
            <GameBoard />
            <GameInfo />
        </div>
    </div>;

const Intro = () => <div>Welcome to the app!</div>;

interface GameAppInterface {
    store: Store<GameState>
}

class GameApp extends React.Component implements GameAppInterface {
    store = createStore(gameReducer)

    render() {
        return (
            <Provider store={this.store}>
                <Game />
            </Provider>
        )
    }
}

interface TodoAppInterface {
    store: Store<TodoState>
}

class TodoApp extends React.Component implements TodoAppInterface {
    store = createStore(todoReducer)

    render() {
        return (
            <Provider store={this.store}>
                <TodoList />
            </Provider>
        )
    }
}

export default function App() {
    return (
        <div>
            <Navigation />
            <Route exact={true} path="/" component={Intro} />
            <Route path="/tic-tac-toe" component={GameApp} />
            <Route path="/todo" component={TodoApp} />
        </div>
    );
}
