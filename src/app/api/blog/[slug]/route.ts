<<<<<<< HEAD
import { NextResponse } from "next/server";
import { blogPosts } from "@/data/blog";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(post);
=======
import { NextResponse, NextRequest } from 'next/server';
import { blogPosts } from '@/data/blog';

// Next.js 15+ requires params to be a Promise in dynamic route handlers
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
}
