import {Locale, routing} from '@/config';
import {unstable_rootParams as rootParams} from 'next/server';

export async function getLocale() {
  const {locale} = await rootParams();
  console.log('`locale` from `rootParams`: ', locale);

  if (!isLocale(locale)) {
    console.log(`Using default locale '${routing.defaultLocale}' as fallback`);
    return routing.defaultLocale;
  }

  return locale;
}

function isLocale(locale: unknown): locale is Locale {
  return typeof locale === 'string' && routing.locales.includes(locale);
}
