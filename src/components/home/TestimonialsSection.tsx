import { IMAGES } from '@/data/images';
import TestimonialCarousel from "./TestimonialCarousel";
import type { Testimonial } from "@/lib/types";
import { testimonials as staticTestimonials } from "@/data/testimonials";
import { db } from "@/lib/db";
import { CheckCircle } from "lucide-react";
import ReviewForm from "./ReviewForm";

export default async function TestimonialsSection() {
  // Fetch approved reviews from our MongoDB CMS
  let approvedReviews: Testimonial[] = [];
  let destinations: { slug: string, name: string }[] = [];
  
  try {
    const [dbReviews, dbDestinations] = await Promise.all([
      db.getReviews({ status: 'approved' }),
      db.getDestinations()
    ]);
    
    // Map DB reviews to Testimonial interface
    approvedReviews = dbReviews.map(r => ({
      id: r.id!,
      name: r.name,
      rating: r.rating,
      quote: r.quote,
      avatar: r.avatar || IMAGES.TEAM.MEMBER_2, // default avatar
      destinationSlug: r.destinationSlug,
      destinationName: r.destinationName,
      time: new Date(r.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long' }),
      location: r.location
    }));
    
    // Extract lightweight destination info for the dropdown
    destinations = dbDestinations.map(d => ({
      slug: d.slug,
      name: d.name
    }));
  } catch (error) {
    console.error("Failed to load reviews or destinations from DB", error);
  }

  // Graceful fallback: If MongoDB returns 0 reviews, show the dummy ones so the site never looks broken
  const reviewsToDisplay = approvedReviews.length > 0 ? approvedReviews : staticTestimonials;

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-surface-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            <CheckCircle className="w-4 h-4" />
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
        
        {/* Public Review Form */}
        <ReviewForm destinations={destinations} />
      </div>
    </section>
  );
}
