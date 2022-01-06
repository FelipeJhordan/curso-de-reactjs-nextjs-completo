export const siteName = 'Felipe Jhordan';
export const defaultSlug = 'landing-page';
export const urlFilter = (slug) =>
  `http://localhost:1337/api/pages?filters[slug][$eq]=${slug}`;
export const urlFindAll = 'http://localhost:1337/api/pages/';
