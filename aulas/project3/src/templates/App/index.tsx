import P from 'prop-types';
import Head from 'next/head';

import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';
import { siteName } from '../../config';

import { Base } from '../Base';
import { theme } from '../../styles/theme';

import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type HomeProps = {
  data: {
    menu: LogoLinkProps & { links: MenuLinkProps[] };
    title: string;
    slug: string;
    footerHtml: string;
    sections: SectionProps[];
  };
};

export type SectionProps = (
  | GridImageProps
  | GridTextProps
  | GridTwoColumnsProps
  | GridContentProps
) & { component: string };

function Home({ data }: HomeProps) {
  const { menu, sections, footerHtml, slug, title } = data;
  const { links, text, link, srcImg } = menu;
  return (
    <>
      <Head>
        <title>{title || siteName}</title>

        <meta name="theme-color" content={theme.colors.primaryColor} />
        <meta
          name="description"
          content="As landing pages mais legais da internet."
        />
      </Head>
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;
          if (component === 'section.section-two-columns') {
            return (
              <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />
            );
          }
          if (component === 'section.section-content') {
            return <GridContent key={key} {...(section as GridContentProps)} />;
          }
          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...(section as GridTextProps)} />;
          }
          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...(section as GridImageProps)} />;
          }
        })}
      </Base>
    </>
  );
}

export default Home;

Home.propTypes = {
  data: P.object,
};
