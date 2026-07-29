interface LeadData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  destination?: string;
  travelDates?: string;
  travellers?: string;
  source?: string;
}

export async function sendWhatsAppNotification(lead: LeadData): Promise<boolean> {
  const token = process.env.META_WHATSAPP_TOKEN;
  const phoneNumberId = process.env.META_PHONE_NUMBER_ID;
  const recipientNumber = process.env.WHATSAPP_RECIPIENT_NUMBER || '917679948664'; // Default to client's number, format needs country code

  // If WhatsApp API credentials are not set, fail gracefully
  if (!token || !phoneNumberId) {
    console.warn('⚠️ WhatsApp notification skipped: META_WHATSAPP_TOKEN or META_PHONE_NUMBER_ID not configured.');
    return false;
  }

  // Format the message content
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'short', timeStyle: 'short' });
  
  const packageDetails = lead.destination ? lead.destination : 'Not Specified';
  const travelDates = lead.travelDates ? `\n📅 *Dates:* ${lead.travelDates}` : '';
  const travellersCount = lead.travellers ? `\n👥 *Travellers:* ${lead.travellers}` : '';
  const userMessage = lead.message ? `\n\n💬 *Message:*\n${lead.message}` : '';

  const messageText = `🔥 *New Lead Received!*

👤 *Name:* ${lead.name}
✉️ *Email:* ${lead.email}
📞 *Phone:* ${lead.phone}
🗺️ *Package/Service:* ${packageDetails}${travelDates}${travellersCount}
🌐 *Source:* ${lead.source || 'Website Form'}${userMessage}

🕒 *Time:* ${timestamp} (IST)`;

  try {
    const url = `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`;

    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: recipientNumber.replace(/\D/g, ''), // Strip any non-numeric characters just in case
        type: 'text',
        text: {
          preview_url: false,
          body: messageText,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ WhatsApp API Error:', errorData);
      return false;
    }

    console.log(`✅ WhatsApp notification sent successfully to ${recipientNumber}`);
    return true;
  } catch (error) {
    console.error('❌ Failed to send WhatsApp notification:', error);
    return false;
  }
}
