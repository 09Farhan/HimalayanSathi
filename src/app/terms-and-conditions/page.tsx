import { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Himalayan Sathi Tours',
  description: 'Read the terms and conditions for booking tour packages, cab services, and other travel arrangements with Himalayan Sathi.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Header */}
      <section className="bg-primary py-16 mt-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-primary-light max-w-2xl mx-auto">
            Please read these terms carefully before booking your trip with us.
          </p>
        </div>
      </section>

      {/* Content */}
      <SectionContainer className="py-12 md:py-20 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg max-w-none prose-headings:text-primary-dark prose-a:text-accent">
          
          <h2>1. Booking and Payments</h2>
          <p>
            A minimum advance payment of 30% of the total tour cost is required to confirm your booking. 
            The remaining 70% must be paid at least 7 days prior to the arrival date or upon arrival as per mutual agreement.
            For peak season bookings, a 50% advance may be required.
          </p>

          <h2>2. Cancellation Policy</h2>
          <ul>
            <li><strong>30+ days prior to arrival:</strong> 10% of the total tour cost will be charged as cancellation fee.</li>
            <li><strong>15 - 29 days prior to arrival:</strong> 25% of the total tour cost will be charged.</li>
            <li><strong>7 - 14 days prior to arrival:</strong> 50% of the total tour cost will be charged.</li>
            <li><strong>Less than 7 days or No Show:</strong> 100% of the total tour cost will be charged (No Refund).</li>
          </ul>

          <h2>3. Alteration of Itinerary</h2>
          <p>
            Himalayan Sathi reserves the right to alter or modify the itinerary in the event of unforeseen circumstances such as natural calamities, landslides, political unrest, or strikes. Any additional costs incurred due to such changes will be borne by the client.
          </p>

          <h2>4. Travel Documents & Permits</h2>
          <p>
            It is the responsibility of the traveler to carry valid identification (Voter ID, Passport) and passport-size photographs for obtaining necessary permits for regions like Sikkim and Bhutan. PAN Cards and Aadhaar Cards (without DOB) are generally not accepted for permit generation in Sikkim.
          </p>

          <h2>5. Liability & Insurance</h2>
          <p>
            Himalayan Sathi acts only as a booking agent for hotels, transport, and other services. We are not liable for any loss, damage, injury, delay, or irregularity which may occur due to negligence of third-party service providers. We strongly recommend that travelers obtain comprehensive travel insurance prior to their trip.
          </p>

          <h2>6. Pricing</h2>
          <p>
            All prices are subject to change without prior notice due to fluctuations in fuel prices, taxes, or hotel tariffs. However, once a booking is confirmed with an advance payment, the price remains fixed.
          </p>

          <h2>7. Jurisdiction</h2>
          <p>
            Any disputes arising out of these terms and conditions shall be subject to the exclusive jurisdiction of the courts in Siliguri, West Bengal.
          </p>

          <div className="mt-12 p-6 bg-surface-muted rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Have Questions?</h3>
            <p className="text-gray-600 mb-0">
              If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@himalayansathi.com" className="text-primary font-semibold">info@himalayansathi.com</a>.
            </p>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
