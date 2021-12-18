import { useReducer } from 'react';
import './App.css';
// estado inicial
const globalState = {
  title: 'O título que contexto',
  body: 'O body de contexto',
  counter: 0,
};
// função que será acionada quando alterado o state
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('Chamou muda');
      return { ...state, title: 'Mudou ' + action.payload };
    case 'inverter':
      console.log('Inverter');
      return { ...state, title: state.title.split('').reverse().join('') };
  }
  // sempre é importante retornar o estado na ação
  return { ...state };
};

// Usado com estados mais complexos que requerem uma lógica
function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleDateString('pt-BR') })}>
        Click to muda
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}> Click to inverter</button>
    </div>
  );
}

export default App;
