import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;
    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }
    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = options;
      changed = true;
    }

    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      try {
        const response = await fetch(urlRef.current, { signal, ...optionsRef.current });
        const jsonResult = await response.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        console.warn(e.message);
      }
    };
    fetchData();

    return () => {
      wait = true;
      controller.abort();
    };
  }, [shouldLoad]);

  return [result, loading];
};

const App = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    headers: {
      abc: 1 + postId,
    },
  });

  useEffect(() => {
    console.log('Id do post ' + postId);
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };
  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <p onClick={() => handleClick(p.id)} key={'post-' + p.id}>
              {p.title}
            </p>
          ))
        ) : (
          <p onClick={() => handleClick('')}>{result.title}</p>
        )}
      </div>
    );
  }

  return <h1>Oi</h1>;
};

export default App;
