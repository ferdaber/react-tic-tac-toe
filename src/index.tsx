import './styles/index.css';

import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
