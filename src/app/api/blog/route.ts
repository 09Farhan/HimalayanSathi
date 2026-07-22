<<<<<<< HEAD
import { NextResponse } from "next/server";
import { blogPosts } from "@/data/blog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let filtered = blogPosts;

  if (category && category !== "all") {
    filtered = filtered.filter((post) => post.category === category);
  }

  return NextResponse.json(filtered);
=======
import { NextResponse, NextRequest } from 'next/server';
import { blogPosts } from '@/data/blog';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    
    let filteredPosts = blogPosts;
    
    if (category) {
      filteredPosts = filteredPosts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      );
    }

    return NextResponse.json(filteredPosts);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
}
