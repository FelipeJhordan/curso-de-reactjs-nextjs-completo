import React, { useDebugValue, useEffect, useState } from 'react';

const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState(false);
  useDebugValue('Qualquer coisa que eu quiser', (name) => {
    return name + 'modificado';
  });
  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);
    const handleChange = () => {
      if (!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    };

    matchMedia.addEventListener('change', handleChange);

    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};
export default function App() {
  const huge = useMediaQuery('(min-width:980px)');
  const big = useMediaQuery('(max-width:979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width:767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width:321px)');
  const background = huge ? 'green' : big ? 'red' : medium ? 'yellow' : small ? 'purple' : 'black';
  return (
    <>
      <h1 style={{ fontSize: '60px', background, display: 'inline' }}>Oi</h1>
    </>
  );
}
