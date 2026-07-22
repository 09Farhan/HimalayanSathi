import { NextResponse, NextRequest } from 'next/server';
import { destinations } from '@/data/destinations';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const region = searchParams.get('region');
    
    let filteredDestinations = destinations;
    
    if (region) {
      filteredDestinations = destinations.filter(
        (dest) => dest.region.toLowerCase() === region.toLowerCase()
      );
    }

    return NextResponse.json(filteredDestinations);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
