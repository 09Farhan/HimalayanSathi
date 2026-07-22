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
}
