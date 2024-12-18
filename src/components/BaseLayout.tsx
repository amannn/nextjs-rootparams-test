import {getLocale} from '@/utils/getLocale';
import '../globals.css';

export default async function BaseLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className="p-4 max-w-lg">{children}</body>
    </html>
  );
}
