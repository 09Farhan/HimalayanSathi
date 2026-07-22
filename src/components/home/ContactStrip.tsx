<<<<<<< HEAD
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function ContactStrip() {
  return (
    <section className="gradient-primary py-12 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Ready to plan your Himalayan adventure?</h2>
          <p className="opacity-90">Our travel experts are here to help you craft the perfect itinerary.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+919876543210" className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
            <Phone size={20} />
            <span>Call Us</span>
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-colors font-semibold">
            {/* Inline SVG for WhatsApp */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
          <Link href="/contact" className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary-dark font-semibold rounded-lg hover:bg-accent-light transition-colors">
            <Mail size={20} />
            <span>Enquire Now</span>
          </Link>
=======
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
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
        </div>
      </div>
    </section>
  );
}
