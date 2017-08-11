import * as React from 'react';
import { connect } from 'react-redux';
import GameInfo from './GameInfo';
import GameBoard from './GameBoard';
import GameSizer from './GameSizer';

function App(props: Pick<GameState, 'size'>) {
    return (
        <div>
            <GameSizer />
            <div className="game">
                <GameBoard />
                <GameInfo />
            </div>
        </div>
    );
}

export default connect((state: GameState) => {
    return {
        size: state.size
    };
})(App);
