import { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Himalayan Sathi Tours & Travels',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get In Touch</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          We'd love to hear from you. Whether you have a question about our packages, pricing, or anything else, our team is ready to answer all your questions.
        </p>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="w-full">
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-surface-dark p-8 rounded-2xl shadow-card h-fit text-white">
            <h2 className="text-2xl font-heading font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+917679948664" className="hover:text-accent transition-colors">+91 76799 48664</a>
                    <a href="tel:+918766807543" className="hover:text-accent transition-colors">+91 87668 07543</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:info@himalayansathi.com" className="hover:text-accent transition-colors">info@himalayansathi.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <p className="text-gray-300">Hill Cart Road, Siliguri, West Bengal 734001, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/917679948664" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">+91 76799 48664</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Operating Hours</h3>
                  <p className="text-gray-300">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-300">Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10 pt-8 border-t border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-center">Follow Us</h3>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-6xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-card">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114093.84074212574!2d88.35032545084961!3d26.711808035123984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44114f5441d8f%3A0xbaa03a28c0c8003!2sSiliguri%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1709230000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location - Siliguri, West Bengal"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
