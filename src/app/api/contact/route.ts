import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;
    
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, phone, message)' },
        { status: 400 }
      );
    }
    
    // Log the enquiry to console
    console.log('--- New Contact Enquiry ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
    console.log('---------------------------');
    
    // In production, integrate with email service or database here
    
    return NextResponse.json(
      { success: true, message: 'Enquiry received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
