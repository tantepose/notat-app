import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from "@reach/router"

import App from './App';
import About from './components/About'
import AboutNote from './components/AboutNote'
import NoteList from './components/NoteList'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App path="/" />
      <NoteList path="list" />
      <About path="about" />
      <App path=":currentPath" />
      <AboutNote path=":currentPath/info" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();