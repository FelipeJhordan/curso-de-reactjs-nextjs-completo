import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRun = true) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const run = useCallback(async () => {
    await new Promise((r) => setTimeout(r, 2000));

    setResult(null);
    setError(null);
    setStatus('pending');

    return asyncFunction()
      .then((response) => {
        setStatus('settled');
        setResult(response);
      })
      .catch((error) => {
        setStatus('error');
        setError(error);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, result, error, status];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();
  return json;
};

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData);

  if (status === 'idle') {
    return <pre>Nada executando</pre>;
  }

  if (status === 'pending') {
    return <pre>Loading</pre>;
  }

  if (status === 'error') {
    return <pre>Error</pre>;
  }

  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
};

const App = Home;
export default App;
