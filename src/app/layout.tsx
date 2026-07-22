import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LeadCapturePopup } from '@/components/ui/LeadCapturePopup';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Himalayan Sathi Tours & Travels | Discover the Mystical Himalayas',
  description: 'Your trusted companion for exploring the mystical Himalayas. Govt. registered tour operator offering customized packages for Darjeeling, Sikkim, Bhutan, and North East India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-body bg-surface text-text-primary antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <LeadCapturePopup />
      </body>
    </html>
  );
}
