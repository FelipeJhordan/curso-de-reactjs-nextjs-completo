import Home from '../templates/App';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';

export type IndexProps = {
  data: [];
};

export default function Index({ data = null }: IndexProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
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
