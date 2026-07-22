import { NextResponse, NextRequest } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, destination, travelDates, travellers, source } = body;
    
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, phone)' },
        { status: 400 }
      );
    }
    
    // Insert lead into database
    await db.insertLead({
      name,
      email,
      phone,
      message: message || '',
      destination: destination || '',
      travelDates: travelDates || '',
      travellers: travellers || '',
      source: source || 'Contact Form'
    });
    
    return NextResponse.json(
      { success: true, message: 'Enquiry received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
