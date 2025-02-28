import {getLocale} from '@/utils/getLocale';
import {NextResponse} from 'next/server';

export async function GET() {
  return NextResponse.json({
    locale: await getLocale()
  });
}
