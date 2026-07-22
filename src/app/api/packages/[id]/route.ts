import { NextResponse, NextRequest } from 'next/server';
import { packages } from '@/data/packages';

// Next.js 15+ requires params to be a Promise in dynamic route handlers
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const pkg = packages.find((p) => p.id === id);
    
    if (!pkg) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }
    
    return NextResponse.json(pkg);
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
