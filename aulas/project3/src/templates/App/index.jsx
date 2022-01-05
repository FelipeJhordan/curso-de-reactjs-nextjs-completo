import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { Base } from '../Base';
import { Loading } from '../Loading';
import { PageNotFound } from '../PageNotFound';

import { mapData } from '../../api/map-data';
import dataJson from '../../api/data.json';

import { url, defaultSlug, siteName } from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : defaultSlug;
    const load = async () => {
      try {
        const data = await new Promise((r) => {
          let dataFiltered;
          setTimeout(() => {
            dataFiltered = dataJson.filter((page) => {
              return page.slug === slug;
            });
            r(dataFiltered);
          }, 1000);
        });
        console.log(data);
        const pageData = mapData('filled', data);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, [location]);
  useEffect(() => {
    if (data === undefined) {
      document.title = 'Página não encontrada - ' + siteName;
    }

    if (data && !data.slug) {
      document.title = 'Carregando a página - ' + siteName;
    }

    if (data && data.title) {
      document.title = data.title + ' - ' + siteName;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;
        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
