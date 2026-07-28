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
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const packages = await db.getPackages();
  return NextResponse.json(packages);
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.title || !body.slug || !body.priceRange) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await db.insertPackage(body);
    
    if (result.success) {
      revalidatePath('/packages'); // Purge cache
      revalidatePath(`/packages/${body.slug}`);
      return NextResponse.json({ success: true, id: result.id });
    } else {
      return NextResponse.json({ error: 'Failed to insert package' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, _id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }

    const result = await db.updatePackage(id, updateData);
    
    if (result.success) {
      revalidatePath('/packages'); 
      if (updateData.slug) {
        revalidatePath(`/packages/${updateData.slug}`);
      }
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Failed to update package' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }

    const result = await db.deletePackage(id);
    
    if (result.success) {
      revalidatePath('/packages');
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Failed to delete package' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
