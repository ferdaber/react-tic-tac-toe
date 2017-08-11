import GameSizer from './GameSizer';
import GameInfo from './GameInfo';
import GameBoard from './GameBoard';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface GameProps extends RouteComponentProps<{ size: string }> {}

export default function Game(props: GameProps) {
    return (
        <div>
            <div className="game">
                <GameBoard />
                <GameInfo />
            </div>
            <GameSizer />
        </div>
    );
}
