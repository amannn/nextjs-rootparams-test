import {getLocale} from '@/utils/getLocale';
import GetLocale from './GetLocale';

async function action() {
  'use server';

  return await getLocale();
}

export default async function Foo() {
  const locale = await getLocale();

  return (
    <div>
      <p>Hello {locale} from foo!</p>
      <GetLocale action={action} />
    </div>
  );
}
