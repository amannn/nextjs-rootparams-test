import {Locale, routing} from '@/config';
import {unstable_rootParams} from 'next/server';

export async function getLocale() {
  const {locale} = await unstable_rootParams();

  if (!isLocale(locale)) {
    return routing.defaultLocale;
  }

  return locale;
}

function isLocale(locale: unknown): locale is Locale {
  return typeof locale === 'string' && routing.locales.includes(locale);
}
