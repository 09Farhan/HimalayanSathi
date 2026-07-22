<<<<<<< HEAD
import { NextResponse } from "next/server";
import { destinations } from "@/data/destinations";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region");

  let filtered = destinations;
  if (region && region !== "all") {
    filtered = destinations.filter((d) => d.region === region);
  }

  return NextResponse.json(filtered);
=======
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
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
}
