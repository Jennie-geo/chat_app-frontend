import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './Apps';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Apps />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
