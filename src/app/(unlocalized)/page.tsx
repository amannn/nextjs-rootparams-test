import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col gap-1 p-1">
      <Link href="/en">→ en</Link>
      <Link href="/de">→ de</Link>
    </div>
  );
}
