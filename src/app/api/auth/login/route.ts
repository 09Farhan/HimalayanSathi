import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password } = body;
  
  // Hardcoded secure password for simplicity
  if (password === 'Admin@Himalayan2024') {
    const response = NextResponse.json({ success: true }, { status: 200 });
    
    // Set a simple cookie session (expires in 24 hours)
    response.cookies.set('hs_admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 1 day
    });
    
    return response;
  }
  
  return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}
