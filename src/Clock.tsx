import * as React from 'react';

interface ClockState {
    date: Date;
    intervalId: number;
}

export class Clock extends React.Component<object, ClockState> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>
                    The current time is: {this.state.date.toLocaleTimeString()}.
                </h1>
                <button onClick={this.handleClick}>Toggle timer</button>
                {!this.state.intervalId && <div>---Timer is currrently disabled---</div>}
            </div>
        );
    }

    public componentWillMount(): void {
        this.setState({
            date: new Date(),
            intervalId: window.setInterval(() => this.tick(), 1000)
        });
    }

    public componentWillUnmount(): void {
        clearInterval(this.state.intervalId);
        this.setState({
            intervalId: null
        });
    }

    private tick(): void {
        this.setState({ date: new Date() });
    }

    private handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
            this.setState({
                intervalId: null
            });
        } else {
            this.setState({ intervalId: window.setInterval(() => this.tick(), 1000) });
        }
    };
}
