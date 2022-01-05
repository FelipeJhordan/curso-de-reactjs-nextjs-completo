import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pageData = mapData('empty');
    expect(pageData.footerHtml).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.title).toBe('');
  });

  it('should map data if there are data', () => {
    const pagesData = mapData('filled', [
      {
        footer_text: '<p>Hey</p>',
        slug: 'slug',
        title: 'title',
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('<p>Hey</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
  });
});
