import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { path } = await request.json();
    
    if (path) {
      revalidatePath(path);
      return NextResponse.json({ success: true, revalidated: true });
    }
    
    return NextResponse.json({ error: 'Path is required' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 });
  }
}
