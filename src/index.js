import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
require('dotenv').config()

ReactDOM.render(
    <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        <App />
    </HashRouter>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
