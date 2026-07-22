import { NextResponse, NextRequest } from 'next/server';
import { packages } from '@/data/packages';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const region = searchParams.get('region');
    const duration = searchParams.get('duration');
    const type = searchParams.get('type');
    const featured = searchParams.get('featured');
    
    let filteredPackages = packages;
    
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
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
