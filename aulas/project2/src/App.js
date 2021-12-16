import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse((prevState) => !prevState);
  };

  const handleIncrement = () => {
    setCounter((c) => c + 1);
  };

  const handleDecrement = () => {
    setCounter((c) => (c == 0 ? c : c - 1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {counter}</h1>
        <div>
          <button type="button" onClick={handleIncrement}>
            Aumentar
          </button>
          <button type="button" onClick={handleDecrement}>
            Diminuir
          </button>
        </div>
        <button type="button" onClick={handleClick}>
          {reverseClass ? 'Voltando' : 'Indo'}
        </button>
      </header>
    </div>
  );
}

export default App;
