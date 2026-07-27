import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.quote || !body.rating) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const review = {
      name: body.name,
      rating: Number(body.rating),
      quote: body.quote,
      location: body.location || '',
      avatar: body.avatar || '',
      // FORCED TO PENDING for public submissions
      status: 'pending' as const, 
    };

    const result = await db.insertReview(review);
    
    if (result.success) {
      return NextResponse.json({ success: true, id: result.id });
    } else {
      return NextResponse.json({ error: 'Failed to insert review' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
