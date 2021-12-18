import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

const Post = ({ post }) => {
  console.log('filho renderizou');
  console.log(post);

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai renderizou!');

  // Component didMount

  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);
  return (
    <div className="app">
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {/* /*memorizar component */}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existe posts</p>}
    </div>
  );
}

export default App;
