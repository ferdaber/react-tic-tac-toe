import * as React from 'react';
import { connect } from 'react-redux';
import GameRow from './GameRow';

interface GameBoardProps {
    size: number;
    boardState: Play[][];
}

function GameBoard(props: GameBoardProps) {
    const col = new Array(props.size).fill(0);
    return (
        <div className="game-board">
            {col.map((val, idx) => <GameRow key={idx} rowNum={idx} />)}
        </div>
    );
}

const mapStateToProps = (state: GameState) => {
    return {
        boardState: state.moves[state.moves.length - 1],
        size: state.size
    };
};

export default connect(mapStateToProps)(GameBoard);
