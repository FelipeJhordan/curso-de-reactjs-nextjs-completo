import Home, { HomeProps } from '../templates/App';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';

export default function Index({ data = null }: HomeProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
