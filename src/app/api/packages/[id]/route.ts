import { NextResponse, NextRequest } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const pkg = await db.getPackageBySlug(id);
    
    if (!pkg) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    return NextResponse.json(pkg);
  } catch (error) {
    console.error('Failed to fetch package:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
