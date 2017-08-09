import { DEFAULT_SIZE } from '../reducer';
import * as React from 'react';
import { connect } from 'react-redux';

interface GameSizerProps {
    size: number;
    onSubmit: (size: number) => void;
}

// interface GameSizerState {
//     inputValue: string;
// }

// class GameSizer extends React.Component<GameSizerProps, GameSizerState> {
//     constructor(props: GameSizerProps) {
//         super(props);
//         this.state = {
//             inputValue: this.props.size + ''
//         };
//     }

//     public onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         const newSize =
//             !isNaN(+this.state.inputValue) && +this.state.inputValue > 1 ? +this.state.inputValue : DEFAULT_SIZE;
//         if (newSize + '' !== this.state.inputValue) {
//             this.setState({ inputValue: newSize + '' });
//         }
//         this.props.onSubmit(newSize);
//         event.preventDefault();
//     };

//     public onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({ inputValue: event.target.value });
//     };

//     render() {
//         return (
//             <div className="board-resize">
//                 <label htmlFor="labelResize">Change board size:</label>
//                 <form onSubmit={this.onSubmit}>
//                     <input id="labelResize" value={this.state.inputValue} onChange={this.onChange} />
//                 </form>
//             </div>
//         );
//     }
// }

function GameSizer(props: GameSizerProps) {
    let inputElement: HTMLInputElement;

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const inputVal = inputElement.value;
        const newSize = !isNaN(+inputVal) && +inputVal > 1 ? +inputVal : DEFAULT_SIZE;
        if (newSize + '' !== inputVal) {
            inputElement.value = newSize + '';
            inputElement.classList.add('flash');
        }
        props.onSubmit(newSize);
        event.preventDefault();
    };

    const onFlashEnd = (event: React.AnimationEvent<HTMLInputElement>) => {
        event.currentTarget.classList.remove('flash');
    };

    return (
        <div className="board-resize">
            <label htmlFor="labelResize">Change board size:</label>
            <form onSubmit={onSubmit}>
                <input
                    className="resize-textbox"
                    autoComplete="off"
                    id="labelResize"
                    defaultValue={props.size + ''}
                    ref={input => (inputElement = input)}
                    onAnimationEnd={onFlashEnd}
                />
            </form>
        </div>
    );
}

const mapStateToProps = (state: GameState) => {
    return {
        size: state.size
    };
};

const mapDispatchToProps = {
    onSubmit(size: number): ResizeAction {
        return {
            type: 'RESIZE',
            size
        };
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSizer);
