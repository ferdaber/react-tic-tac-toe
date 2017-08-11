import * as React from 'react';
import { Route } from 'react-router';
import Navigation from './Navigation';
import GameInfo from './GameInfo';
import GameBoard from './GameBoard';
import GameSizer from './GameSizer';

const Game = () =>
    <div>
        <GameSizer />
        <div className="game">
            <GameBoard />
            <GameInfo />
        </div>
    </div>;

const Intro = () => <div>Welcome to the app!</div>;

export default function App() {
    return (
        <div>
            <Navigation />
            <Route exact={true} path="/" component={Intro} />
            <Route path="/tic-tac-toe" component={Game} />
        </div>
    );
}
