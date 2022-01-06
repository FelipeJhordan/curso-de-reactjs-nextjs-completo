import Home from '../templates/App';
import P from 'prop-types';
import { loadPages } from '../api/load-pages';

export default function Page({ data }) {
  return <Home data={data} />;
}

Page.propTypes = {
  data: P.object,
};

// com fallback = false, o servidor não vai tentar adivinhar ou aceitar qualquer rota,
// com fallback = true, o servidor vai "alto criar a pagina com a rota"
export const getStaticPaths = async () => {
  const paths = (await loadPages()).map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug);
  } catch (e) {
    data = null;
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
