import { useContext } from 'react';
import { GlobalContext } from '../../contexts/App';

// eslint-disable-next-line
const P = ({ children }) => {
  const {
    state: { body },
    setState,
  } = useContext(GlobalContext);
  return <p onClick={() => setState((prevState) => ({ ...prevState, counter: prevState.counter + 1 }))}>{body}</p>;
};

export default P;
