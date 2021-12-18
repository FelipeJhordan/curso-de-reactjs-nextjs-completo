import React, { useCallback, useState } from 'react';
import P from 'prop-types';
import './App.css';

// Memorizar o component Button no cache
const Button = React.memo(function Button({ incrementCounter }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementCounter(10)}>+</button>;
});

Button.propTypes = {
  incrementCounter: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  // Utilizar o useCallback para não ter que "recriar" a função toda vez que o component App() for renderizado e sim apenas quando tiver mudança na função
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Contador 1: {counter}</h1>
      <Button incrementCounter={incrementCounter} />
    </div>
  );
}

export default App;
