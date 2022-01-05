import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContextProvider } from './contexts/CounterContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './templates/App';
import Abc from './templates/Abc';
import { Menu } from './components/Menu';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/abc/:slug" element={<Abc />} exact />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
