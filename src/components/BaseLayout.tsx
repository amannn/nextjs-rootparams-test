import {getLocale} from '@/utils/getLocale';
import Link from 'next/link';
import '../globals.css';

export default async function BaseLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className="p-4 max-w-lg">
        <div className="flex justify-between">
          <nav className="flex gap-4 py-4">
            <Link href="/">/</Link>
            <Link href="/test">/test</Link>
            <Link href="/en">/en</Link>
            <Link href="/de">/de</Link>
            <Link href="/en/foo">/en/foo</Link>
            <Link href="/de/foo">/de/foo</Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
