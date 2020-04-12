import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from "@reach/router"

import App from './App';
import About from './components/About'
import AboutNote from './components/AboutNote'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App path="/" />
      <App path=":currentPath" />
      <About path="about" />
      <AboutNote path=":currentPath/about" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();