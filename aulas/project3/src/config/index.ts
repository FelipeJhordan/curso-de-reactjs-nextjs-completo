export const siteName = 'Felipe Jhordan';
export const defaultSlug = 'landing-page';
export const urlFindAll = 'http://localhost:1337/api/pages/';

export const urlFilter = (slug: string): string =>
  `http://localhost:1337/api/pages?filters[slug][$eq]=${slug}`;
