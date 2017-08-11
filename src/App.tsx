import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import Game from './game';

const Foo = () => <div>Hello world!</div>;
const Home = () => <div>This is the home page</div>;

export default function App() {
    return (
        <div>
            <div className="nav-bar">
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <nav>
                    <Link to="/tic-tac-toe/3">Tic Tac Toe Game</Link>
                </nav>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </div>
            <div>
                <Route exact={true} path="/" component={Home} />
                <Route path="/tic-tac-toe/:size" component={Game} />
                <Route path="/about" component={Foo} />
            </div>
        </div>
    );
}
