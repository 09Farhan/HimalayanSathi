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
}
