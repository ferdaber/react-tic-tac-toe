import * as React from 'react';
import { connect } from 'react-redux';
import MoveLink from './MoveLink';

function GameInfo(props: GameState) {
    return (
        <div className="game-info">
            <div>
                {props.winner ? `Winning player: ${props.winner}` : `Next player: ${props.nextPlayer}`}
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
