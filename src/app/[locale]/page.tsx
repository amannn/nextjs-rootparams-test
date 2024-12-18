import {getLocale} from '@/utils/getLocale';

export default async function Home() {
  const locale = await getLocale();

  return (
    <main>
      <div>Hello {locale}!</div>
    </main>
  );
}
