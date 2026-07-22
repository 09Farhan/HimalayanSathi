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
}
