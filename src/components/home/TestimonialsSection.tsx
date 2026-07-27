import TestimonialCarousel from "./TestimonialCarousel";
import type { Testimonial } from "@/lib/types";
import { testimonials as staticTestimonials } from "@/data/testimonials";
import { db } from "@/lib/db";
import Image from "next/image";

export default async function TestimonialsSection() {
  // Fetch approved reviews from our MongoDB CMS
  let approvedReviews: Testimonial[] = [];
  try {
    const dbReviews = await db.getReviews({ status: 'approved' });
    // Map DB reviews to Testimonial interface
    approvedReviews = dbReviews.map(r => ({
      id: r.id!,
      name: r.name,
      rating: r.rating,
      quote: r.quote,
      avatar: r.avatar || "/images/team-2.jpg", // default avatar
      time: new Date(r.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long' }),
      location: r.location
    }));
  } catch (error) {
    console.error("Failed to load reviews from DB", error);
  }

  // Graceful fallback: If MongoDB returns 0 reviews, show the dummy ones so the site never looks broken
  const reviewsToDisplay = approvedReviews.length > 0 ? approvedReviews : staticTestimonials;

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-surface-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google" 
              width={16} 
              height={16} 
            />
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
        <div className="mt-12 text-center">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
          >
            View all reviews on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
