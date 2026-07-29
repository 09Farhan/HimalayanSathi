require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Testing SMTP Configuration...');
  console.log('-------------------------------');
  console.log('SMTP_HOST:', process.env.SMTP_HOST || 'smtp.gmail.com');
  console.log('SMTP_PORT:', process.env.SMTP_PORT || 587);
  console.log('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'NOT SET');
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'NOT SET');
  console.log('-------------------------------');

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('❌ Error: Missing SMTP_USER or SMTP_PASS in .env.local');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    console.log('Verifying connection credentials with SMTP server...');
    await transporter.verify();
    console.log('✅ Success! SMTP server accepted the connection and credentials.');
    
    // Attempt a test email
    console.log('Sending test email to', process.env.SMTP_USER, '...');
    await transporter.sendMail({
      from: `"Test Bot" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: 'SMTP Test Successful',
      text: 'If you are reading this, your email configuration is working perfectly!',
    });
    console.log('✅ Test email sent successfully!');

  } catch (error) {
    console.error('❌ Failed to connect to SMTP server:');
    console.error(error.message);
    if (error.code === 'EAUTH') {
      console.error('\\n👉 HINT: This is an Authentication Error.');
      console.error('If you are using Gmail, you MUST use an App Password, not your regular password.');
      console.error('Go to Google Account -> Security -> 2-Step Verification -> App Passwords to generate one.');
    }
  }
}

testEmail();
