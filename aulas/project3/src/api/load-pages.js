import { urlFindAll, urlFilter } from '../config/index';
import { mapData } from './map-data';
import dataMock from './data.json';

const filterDataJsonMock = (pages = [], slugUrl = '') => {
  return pages.filter(({ slug = '' }) => {
    return slug.trim() === slugUrl.trim();
  });
};

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? `${slug.replace(/[^]a-z0-9-_/gi, '')}` : '';
  const isFindAll = cleanSlug === '';
  // const url = isFindAll ? urlFindAll : urlFilter(cleanSlug);
  // const raw = await fetch(url);
  // const json = await raw.json();

  const json = isFindAll ? dataMock : filterDataJsonMock(dataMock, cleanSlug);
  const data = !isFindAll
    ? mapData('filled', json)[0] || []
    : mapData('filled', json);
  return data;
};
