import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// SAS- Importing Router
import {BrowserRouter as Router} from 'react-router-dom';

// You'll need to wrap <App /> for routing to work
// SAS - Browser is wrapping App
ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById('root')
);