import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/">Home</Link>
      <Link to="/abc/:slug" exact>
        Abc
      </Link>
    </nav>
  );
};
