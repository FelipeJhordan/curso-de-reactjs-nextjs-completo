import { useState, useEffect } from 'react';
import './App.css';

const eventFn = () => {
  alert('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  // component did Update - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // component did Mount - executa toda vez que o component inicia ( 1 vez )
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // component Will unmount - limpeza
    return () => {
      document.querySelector('h1').removeEventListener('click', eventFn);
    };
  }, []);

  // Com dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('o contador mudou para ' + counter + '  contador 2 mudou para ' + counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Contador 1: {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>+</button>
      <hr />
      <h1>Contador 2: {counter2}</h1>

      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}

export default App;
