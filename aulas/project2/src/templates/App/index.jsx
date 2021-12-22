import React, { cloneElement, useState } from 'react';

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

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return React.Children.map(children, (child) => {
    if (typeof child.type === 'string') return child;
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};

const TurnedOn = ({ isOn, children }) => (isOn ? children : null);
const TurnedOff = ({ isOn, children }) => (!isOn ? children : null);
// eslint-disable-next-line react/prop-types
const TurnButton = ({ isOn, onTurn }) => {
  return <button onClick={onTurn}>Turn is {isOn ? 'Off' : 'On'}</button>;
};

export const Home = () => {
  return (
    <TurnOnOff>
      <div>
        <TurnedOn>Aqui as coisas que vão acontecer quando estiver on</TurnedOn>
        <TurnedOff>Aqui vão as coisa do OFF.</TurnedOff>
        <TurnButton />
      </div>
    </TurnOnOff>
  );
};
