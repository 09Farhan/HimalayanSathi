import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary config will automatically pick up CLOUDINARY_URL if available,
// but we explicitly define them here to be safe if they use separate keys.
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const quote = formData.get('quote') as string;
    const rating = formData.get('rating') as string;
    const location = formData.get('location') as string;
    const avatar = formData.get('avatar') as string;
    const imageFile = formData.get('image') as File | null;
    
    // Basic validation
    if (!name || !quote || !rating) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let imageUrl = '';

    // Handle Image Upload if an image was provided
    if (imageFile && imageFile.size > 0) {
      try {
        const arrayBuffer = await imageFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        const uploadResult = await new Promise<any>((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'himalayan_sathi_reviews' },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          uploadStream.end(buffer);
        });
        
        imageUrl = uploadResult.secure_url;
      } catch (uploadError) {
        console.error('Failed to upload image to Cloudinary:', uploadError);
        // Proceed without the image if upload fails so the review is still saved
      }
    }

    const review = {
      name: name,
      rating: Number(rating),
      quote: quote,
      location: location || '',
      avatar: avatar || '',
      ...(imageUrl && { image: imageUrl }),
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
    console.error('Review submission error:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
