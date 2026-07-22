import { NextResponse, NextRequest } from 'next/server';
import { db } from '@/lib/db';

export async function PATCH(request: NextRequest) {
  try {
    const { id, status } = await request.json();
    if (!id || !status) return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    
    const success = db.updateLeadStatus(id, status);
    if (success) return NextResponse.json({ success: true });
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    
    const success = db.deleteLead(id);
    if (success) return NextResponse.json({ success: true });
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
