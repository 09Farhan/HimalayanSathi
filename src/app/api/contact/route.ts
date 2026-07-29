import { NextResponse, NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { sendLeadNotificationEmail, sendCustomerAutoReplyEmail } from '@/lib/email';
import { sendWhatsAppNotification } from '@/lib/whatsapp';

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
    
    const leadData = {
      name,
      email,
      phone,
      message: message || '',
      destination: destination || '',
      travelDates: travelDates || '',
      travellers: travellers || '',
      source: source || 'Contact Form'
    };

    // Insert lead into database
    await db.insertLead(leadData);

    // Send notifications concurrently (non-blocking, if any fail it won't crash the user response)
    Promise.allSettled([
      sendLeadNotificationEmail(leadData),
      sendCustomerAutoReplyEmail(leadData),
      sendWhatsAppNotification(leadData)
    ]).catch(err => console.error("Error in notification Promise.allSettled:", err));
    
    return NextResponse.json(
      { success: true, message: 'Enquiry received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

