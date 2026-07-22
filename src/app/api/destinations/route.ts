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
}
