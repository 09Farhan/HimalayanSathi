import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const destinations = await db.getDestinations();
    return NextResponse.json(destinations);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch destinations' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await db.insertDestination(body);
    if (result.success) {
      return NextResponse.json({ success: true, id: result.id });
    }
    return NextResponse.json({ error: result.error }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create destination' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    
    const result = await db.updateDestination(id, updateData);
    if (result.success) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: result.error }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update destination' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    
    const result = await db.deleteDestination(id);
    if (result.success) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete destination' }, { status: 500 });
  }
}
