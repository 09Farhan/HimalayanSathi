import { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, PhoneCall, Mail } from 'lucide-react';
import FaqAccordion from '@/components/sections/FaqAccordion';
import { faqs } from '@/data/faq';
import PageBanner from '@/components/sections/PageBanner';

export const metadata: Metadata = {
  title: 'FAQ | Himalayan Sathi Tours & Travels',
};

export default function FAQPage() {
  // Group FAQs by category
  const categories = ['Booking', 'Payment', 'Cancellation', 'Travel Tips', 'General'];
  
  const faqsByCategory = categories.map(category => ({
    name: category,
    items: faqs.filter(faq => faq.category === category)
  })).filter(cat => cat.items.length > 0);

  return (
    <main className="min-h-screen pb-20 bg-surface">
      <PageBanner 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about booking, travel requirements, and our services." 
      />

      {/* FAQ Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {faqsByCategory.map((category, index) => (
            <div key={category.name} className={`mb-12 ${index !== 0 ? 'pt-8 border-t border-gray-200' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-heading font-bold text-primary">
                  {category.name}
                </h2>
              </div>
              <FaqAccordion items={category.items} />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto bg-surface-dark text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl font-heading font-bold mb-4">Still have questions?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-accent text-white rounded-xl font-medium hover:bg-opacity-90 transition-colors w-full sm:w-auto"
            >
              Contact Us
            </Link>
            <div className="flex gap-4">
              <a href="tel:+917679948664" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <PhoneCall className="w-5 h-5" />
              </a>
              <a href="mailto:info@himalayansathi.com" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
