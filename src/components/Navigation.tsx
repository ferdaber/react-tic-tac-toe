import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface NavProps extends React.Props<void> {
    to: string;
    exact?: boolean;
}

const Nav = (props: NavProps) =>
    <NavLink activeClassName="active" to={props.to} exact={props.exact}>
        <nav>
            {props.children}
        </nav>
    </NavLink>;

export default () =>
    <div className="nav-bar">
        <Nav to="/" exact={true}>
            Home
        </Nav>
        <Nav to="/tic-tac-toe">Game</Nav>
    </div>;
