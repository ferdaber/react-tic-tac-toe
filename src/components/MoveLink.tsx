import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

interface MoveLinkProps {
    moveNum: number;
    dispatch?: Dispatch<UndoAction>;
}

function MoveLink(props: MoveLinkProps) {
    const onClick = () =>
        props.dispatch({
            type: 'UNDO',
            moveNum: props.moveNum
        });

    return (
        <a href="#" onClick={onClick}>
            {props.moveNum ? `Move #${props.moveNum}` : 'Game start'}
        </a>
    );
}

export default connect()(MoveLink);
