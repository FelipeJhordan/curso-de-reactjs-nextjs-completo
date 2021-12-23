import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Heading = () => {
  const [state] = useCounterContext();
  return <h1 style={{ fontSize: '32px' }}>{state.counter}</h1>;
};
