import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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

export async function sendLeadNotificationEmail(lead: LeadData) {
  const recipient = process.env.LEAD_EMAIL_RECIPIENT || 'mdsafi8240@gmail.com';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
      <h2 style="color: #2c3e50; border-bottom: 2px solid #f39c12; padding-bottom: 10px;">New Lead Submitted</h2>
      
      <p style="font-size: 14px; color: #7f8c8d;">A new enquiry was just submitted on Himalayan Sathi.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px; color: #34495e;">Name:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #2c3e50;">${lead.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #34495e;">Email:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #2c3e50;"><a href="mailto:${lead.email}" style="color: #3498db;">${lead.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #34495e;">Phone:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #2c3e50;">${lead.phone}</td>
        </tr>
        ${lead.destination ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #34495e;">Destination:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #2c3e50;">${lead.destination}</td>
        </tr>` : ''}
        ${lead.travelDates ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #34495e;">Travel Dates:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #2c3e50;">${lead.travelDates}</td>
        </tr>` : ''}
        ${lead.travellers ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #34495e;">Travellers:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #2c3e50;">${lead.travellers}</td>
        </tr>` : ''}
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #34495e;">Source:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #2c3e50;">${lead.source || 'Website Form'}</td>
        </tr>
      </table>

      ${lead.message ? `
      <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #3498db; border-radius: 4px;">
        <h3 style="margin-top: 0; color: #34495e; font-size: 14px;">Message:</h3>
        <p style="color: #2c3e50; white-space: pre-wrap; margin-bottom: 0;">${lead.message}</p>
      </div>` : ''}

      <div style="margin-top: 30px; font-size: 12px; color: #95a5a6; text-align: center;">
        <p>This is an automated message from Himalayan Sathi.</p>
        <p>Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</p>
      </div>
    </div>
  `;

  try {
    // Attempt to send email but don't fail hard if SMTP is not configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('⚠️ Email notification skipped: SMTP credentials not configured in environment variables.');
      return false;
    }

    await transporter.sendMail({
      from: `"Himalayan Sathi Leads" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject: `🔥 New Lead: ${lead.name} (${lead.source || 'Website Form'})`,
      html: htmlContent,
    });
    
    console.log(`✅ Lead notification email sent successfully to ${recipient}`);
    return true;
  } catch (error) {
    console.error('❌ Failed to send lead notification email:', error);
    return false; // Return false but don't throw to prevent crashing the main API route
  }
}
