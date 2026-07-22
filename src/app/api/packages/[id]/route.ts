<<<<<<< HEAD
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
=======
import { NextResponse, NextRequest } from 'next/server';
import { packages } from '@/data/packages';

// Next.js 15+ requires params to be a Promise in dynamic route handlers
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const pkg = packages.find((p) => p.id === id);
    
    if (!pkg) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }
    
    return NextResponse.json(pkg);
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
}
