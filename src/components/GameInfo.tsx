import * as React from 'react';
import { connect } from 'react-redux';
import MoveLink from './MoveLink';

const isBoardFilled = (state: GameState) => state.winner == null && state.moves.length === state.size ** 2 + 1;

function GameInfo(props: GameState) {
    return (
        <div className="game-info">
            <div>
                {props.winner
                    ? `Winning player: ${props.winner}`
                    : isBoardFilled(props) ? `It's a tie!` : `Next player: ${props.nextPlayer}`}
            </div>
            <ol>
                {props.moves.map((val, idx) =>
                    <li key={idx}>
                        <MoveLink moveNum={idx} />
                    </li>
                )}
            </ol>
        </div>
    );
}

const mapStateToProps = (state: GameState) => {
    return { ...state };
};

export default connect(mapStateToProps)(GameInfo);
