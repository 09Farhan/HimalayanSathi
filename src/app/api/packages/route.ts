<<<<<<< HEAD
import { NextResponse } from "next/server";
import { packages } from "@/data/packages";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region");
  const duration = searchParams.get("duration");
  const type = searchParams.get("type");
  const featured = searchParams.get("featured");

  let filtered = packages;

  if (region && region !== "all") {
    filtered = filtered.filter((p) => p.region === region);
  }
  if (duration && duration !== "all") {
    filtered = filtered.filter((p) => p.durationCategory === duration);
  }
  if (type && type !== "all") {
    filtered = filtered.filter((p) => p.type === type);
  }
  if (featured === "true") {
    filtered = filtered.filter((p) => p.featured);
  }

  return NextResponse.json(filtered);
=======
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
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
}
