import * as React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

interface GameRowProps {
    size: number;
    rowNum: number;
    rowState: Play[];
}

function GameRow(props: GameRowProps) {
    const row = new Array(props.size).fill(0);
    return (
        <div className="board-row">
            {row.map((val, idx) => <Cell key={idx} rowNum={props.rowNum} colNum={idx} />)}
        </div>
    );
}

const mapStateToProps = (state: GameState, ownProps: Pick<GameRowProps, 'rowNum'>) => {
    return {
        rowState: state.moves[state.moves.length - 1][ownProps.rowNum],
        size: state.size
    };
};

export default connect(mapStateToProps)(GameRow);
