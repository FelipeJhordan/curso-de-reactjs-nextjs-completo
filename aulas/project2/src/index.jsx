import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContextProvider } from './contexts/CounterContext';
import './index.css';
import Home from './templates/App';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
