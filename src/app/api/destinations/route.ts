import { NextResponse, NextRequest } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const region = searchParams.get('region');
    
    let filteredDestinations = await db.getDestinations();
    
    if (region) {
      filteredDestinations = filteredDestinations.filter(
        (dest: any) => dest.region.toLowerCase() === region.toLowerCase()
      );
    }

    return NextResponse.json(filteredDestinations);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
