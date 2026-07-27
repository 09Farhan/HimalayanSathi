import TestimonialCarousel from "./TestimonialCarousel";
import type { Testimonial } from "@/lib/types";
import { testimonials as staticTestimonials } from "@/data/testimonials";
import Image from "next/image";

async function fetchGoogleReviews(): Promise<{ reviews: Testimonial[], url: string } | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null; // Fallback to static if credentials missing
  }

  try {
    // 86400 = 24 hours caching to preserve API quotas and guarantee instant loads
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,url&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    );

    if (!res.ok) return null;

    const data = await res.json();
    if (!data.result || !data.result.reviews) return null;

    const googleUrl = data.result.url || "https://maps.google.com";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formattedReviews: Testimonial[] = data.result.reviews.map((rev: any) => ({
      id: rev.time.toString(),
      name: rev.author_name,
      rating: rev.rating,
      quote: rev.text,
      avatar: rev.profile_photo_url,
      time: rev.relative_time_description,
      authorUrl: rev.author_url,
    }));

    // Sort by rating (5 stars first), then slice top 5
    const topReviews = formattedReviews
      .filter((r) => r.rating >= 4 && r.quote.length > 20)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);

    if (topReviews.length === 0) return null;

    return { reviews: topReviews, url: googleUrl };
  } catch (error) {
    console.error("Failed to fetch Google Reviews:", error);
    return null;
  }
}

export default async function TestimonialsSection() {
  const googleData = await fetchGoogleReviews();
  
  const reviewsToDisplay = googleData?.reviews || staticTestimonials;
  const googleUrl = googleData?.url;
  const isUsingGoogle = !!googleData;

  if (reviewsToDisplay.length === 0) return null;

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-surface-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            {isUsingGoogle && (
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                alt="Google" 
                width={16} 
                height={16} 
              />
            )}
            Verified Traveller Reviews
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What Our <span className="text-primary-light">Travellers</span> Say
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real stories from real travellers who explored the Himalayas with us.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Client-side carousel */}
        <TestimonialCarousel testimonials={reviewsToDisplay} />
        
        {/* Attribution / CTA */}
        {isUsingGoogle && googleUrl && (
          <div className="mt-12 text-center">
            <a 
              href={googleUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
            >
              View all reviews on Google &rarr;
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
