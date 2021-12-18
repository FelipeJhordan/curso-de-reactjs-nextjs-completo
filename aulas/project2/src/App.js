import React, { useContext, useState } from 'react';
import './App.css';
import Div from './components/Div';
import { AppContext } from './contexts/App';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
