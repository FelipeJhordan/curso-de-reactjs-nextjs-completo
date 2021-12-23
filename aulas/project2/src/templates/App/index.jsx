import React, { Suspense, useState } from 'react';
// import LazyComponent from './lazy-component';

const loadComponent = () => {
  console.log('Component carregando ....');
  return import('./lazy-component');
};
const LazyComponent = React.lazy(loadComponent);

export const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          Show {show ? 'Lc on screen' : 'Lc not on screen'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando</p>}>{show && <LazyComponent />}</Suspense>
    </div>
  );
};
