import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { cookies } from 'next/headers';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY,
  api_secret: (process.env.CLOUDINARY_API_SECRET || '').trim(),
});

export async function POST(request: Request) {
  try {
    // Basic auth check
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin_session');
    if (sessionToken?.value !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { paramsToSign } = body;
    
    if (!paramsToSign) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      (process.env.CLOUDINARY_API_SECRET as string || '').trim()
    );

    return NextResponse.json({ signature });
  } catch (error: any) {
    console.error('Cloudinary signature error:', error);
    return NextResponse.json({ error: 'Failed to sign request' }, { status: 500 });
  }
}
