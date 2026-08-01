"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={() => scroll("left")}
          className="p-3 rounded-full bg-white text-primary shadow-sm hover:bg-primary hover:text-white transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 rounded-full bg-white text-primary shadow-sm hover:bg-primary hover:text-white transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {testimonials.map((testimonial, i) => (
          <div
            key={testimonial.id}
            className="min-w-[300px] md:min-w-[380px] snap-center bg-white rounded-3xl p-8 shadow-card flex flex-col hover:shadow-card-hover transition-shadow duration-300 border border-gray-50"
            style={{
              animation: `fadeInUp 0.6s ease-out forwards`,
              animationDelay: `${i * 0.15}s`,
              opacity: 0,
            }}
          >
            <div className="flex text-accent mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(testimonial.rating) ? "fill-current" : "text-gray-200"
                  }`}
                />
              ))}
            </div>

            <Quote className="w-10 h-10 text-primary-light/10 mb-4" />

            <p className="text-text-secondary italic mb-8 flex-grow leading-relaxed">
              "{testimonial.quote}"
            </p>

            {testimonial.image && (
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden border border-gray-100">
                <Image src={testimonial.image} alt="Traveller photo" fill className="object-cover" />
              </div>
            )}

            <div className="flex items-center gap-4 mt-auto">
              <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-primary-light/10 border-2 border-primary/10 text-primary font-heading font-bold text-xl">
                {testimonial.name ? testimonial.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div>
                <h4 className="font-bold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-text-muted">
                  {testimonial.time || testimonial.location || "Google Reviewer"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
