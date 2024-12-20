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
            <Link href={`/${locale}`}>/{locale}</Link>
            <Link href={`/${locale}/foo`}>/{locale}/foo</Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
