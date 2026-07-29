import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

// Helper to check authentication
async function isAuthenticated() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('admin_session');
  return sessionToken?.value === process.env.ADMIN_SECRET;
}

export async function GET(request: NextRequest) {
  try {
    const destinations = await db.getDestinations();
    return NextResponse.json(destinations);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch destinations' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await request.json();
    const result = await db.insertDestination(body);
    if (result.success) {
      revalidatePath('/destinations');
      if (body.slug) revalidatePath(`/destinations/${body.slug}`);
      return NextResponse.json({ success: true, id: result.id });
    }
    return NextResponse.json({ error: result.error }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create destination' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await request.json();
    // Prevent modifying _id which is immutable in MongoDB
    const { id, _id, ...updateData } = body;
    
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    
    const result = await db.updateDestination(id, updateData);
    if (result.success) {
      revalidatePath('/destinations');
      if (updateData.slug) revalidatePath(`/destinations/${updateData.slug}`);
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: result.error }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update destination' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { id } = await request.json();
    
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    
    const result = await db.deleteDestination(id);
    if (result.success) {
      revalidatePath('/destinations');
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete destination' }, { status: 500 });
  }
}
