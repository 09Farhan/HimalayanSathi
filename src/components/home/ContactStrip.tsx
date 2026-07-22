import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * ContactStrip – A prominent CTA bar with phone, WhatsApp, and enquiry links.
 */
export default function ContactStrip() {
  return (
    <section id="contact-strip" className="relative overflow-hidden">
      <div className="gradient-primary py-12 md:py-16">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text */}
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Ready to Explore the Himalayas?
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Get in touch for customized itineraries, group bookings, or any
                travel queries. We&apos;re here to help!
              </p>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917679948664"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white text-primary font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                +91 76799 48664
              </a>
              <a
                href="https://wa.me/917679948664"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-accent text-primary-dark font-semibold hover:bg-accent-light hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
