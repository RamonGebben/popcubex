import './stylesheets/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import Dashboard from './src/components/Dashboard';
import { Router, Route, Link, browserHistory } from 'react-router'

// init shell
renderShell();

function renderShell() {
    let shell = document.createElement('div');
    shell.className = 'app-shell';
    document.body.appendChild(shell);

    ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Router>
    ), shell);
}
