import { urlFindAll, urlFilter } from '../config/index';
import { mapData } from './map-data';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? `${slug.replace(/[^]a-z0-9-_/gi, '')}` : '';
  const isFindAll = cleanSlug === '';
  const url = isFindAll ? urlFindAll : urlFilter(cleanSlug);
  const raw = await fetch(url);
  const json = await raw.json();
  const data = !isFindAll
    ? mapData('filled', json.data)[0] || []
    : mapData('filled', json.data);

  return data;
};
