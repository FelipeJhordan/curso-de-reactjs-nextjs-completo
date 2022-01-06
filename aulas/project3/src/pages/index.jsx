import Head from 'next/head';
import P from 'prop-types';
import Home from '../templates/App';
import { loadPages } from '../api/load-pages';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getServerSideProps = async () => {
  let data;

  try {
    data = await loadPages('landing-page');
  } catch (e) {
    //
  }
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
