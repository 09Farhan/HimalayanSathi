import { NextResponse, NextRequest } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const region = searchParams.get('region');
    const duration = searchParams.get('duration');
    const type = searchParams.get('type');
    const featured = searchParams.get('featured');
    
    // Fetch all from DB
    let filteredPackages = await db.getPackages();
    
    if (region) {
      filteredPackages = filteredPackages.filter(
        (pkg) => pkg.region.toLowerCase() === region.toLowerCase()
      );
    }
    
    if (duration) {
      filteredPackages = filteredPackages.filter(
        (pkg) => pkg.durationCategory.toLowerCase() === duration.toLowerCase()
      );
    }
    
    if (type) {
      filteredPackages = filteredPackages.filter(
        (pkg) => pkg.type.toLowerCase() === type.toLowerCase()
      );
    }
    
    if (featured === 'true') {
      filteredPackages = filteredPackages.filter((pkg) => pkg.featured);
    }

    return NextResponse.json(filteredPackages);
  } catch (error) {
    console.error('Failed to fetch packages:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
