import * as React from 'react';
import { connect } from 'react-redux';

interface CellProps {
    rowNum: number;
    colNum: number;
    cellState: Play;
    gameComplete: boolean;
    onClick: (rowNum: number, colNum: number) => void;
}

function Cell(props: CellProps) {
    const onClick = () => {
        if (!props.gameComplete && props.cellState == null) {
            return props.onClick(props.rowNum, props.colNum);
        }
    };

    return (
        <button className="square" onClick={onClick}>
            {props.cellState}
        </button>
    );
}

const mapStateToProps = (state: GameState, ownProps: Pick<CellProps, 'rowNum' | 'colNum'>) => {
    return {
        cellState: state.moves[state.moves.length - 1][ownProps.rowNum][ownProps.colNum],
        gameComplete: state.winner != null
    };
};

const mapDispatchToProps = {
    onClick(rowNum: number, colNum: number): TakeMoveAction {
        return {
            type: 'MAKE_MOVE',
            rowNum,
            colNum
        };
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
