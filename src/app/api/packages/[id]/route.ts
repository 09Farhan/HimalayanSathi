import { NextResponse } from "next/server";
import { packages } from "@/data/packages";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(pkg);
}
