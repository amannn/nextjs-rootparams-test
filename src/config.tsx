export const routing = {
  locales: ['en', 'de'],
  defaultLocale: 'en'
};

export type Locale = (typeof routing.locales)[number];
