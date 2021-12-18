import { createContext, useState } from 'react';
import P from 'prop-types';
import globalState from './data.js';

export const GlobalContext = createContext();
export const AppContext = ({ children }) => {
  const [state, setState] = useState(globalState);
  return <GlobalContext.Provider value={{ state, setState }}>{children}</GlobalContext.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};
