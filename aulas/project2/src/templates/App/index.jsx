import React, { cloneElement } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

const Parent = ({ children }) => {
  return React.Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...s });
    return newChild;
  });
};

export const Home = () => {
  return (
    <Parent>
      <p>Oi</p>
      <p>Oi</p>
    </Parent>
  );
};
