import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (mode, pagesData) => {
  if (mode === 'empty') {
    return {
      footerHtml: '',
      slug: '',
      title: '',
      sections: [],
      menu: {},
    };
  }

  return pagesData.map((data) => {
    const {
      footer_text = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;
    return {
      footerHtml: footer_text,
      slug: slug,
      title: title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
