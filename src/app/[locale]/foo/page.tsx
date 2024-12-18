import {getLocale} from '@/utils/getLocale';

export default async function Foo() {
  const locale = await getLocale();
  return <div>Hello {locale} from Foo!</div>;
}
