import { useContext } from 'react';
import { GlobalContext } from '../../contexts/App';

// eslint-disable-next-line
const H1 = ({ children }) => {
  const {
    state: { counter, title },
  } = useContext(GlobalContext);
  return (
    <h1>
      {title} e contador {counter}
    </h1>
  );
};

export default H1;
