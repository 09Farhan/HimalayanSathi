import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from 'next/dynamic';

const LeadCapturePopup = dynamic(
  () => import("@/components/ui/LeadCapturePopup").then(mod => mod.LeadCapturePopup)
);
import SchemaInjector from "@/components/seo/SchemaInjector";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const DOMAIN = "https://himalayan-sathi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: "Himalayan Sathi | Sikkim & Darjeeling Tour Operator",
  description: "Book customized Sikkim Darjeeling Bhutan tour packages with Himalayan Sathi, a trusted Sikkim tour operator. Affordable Gangtok and North Sikkim tour packages.",
  keywords: ["Sikkim tour operator", "Darjeeling tour operator", "Sikkim Darjeeling Bhutan tour package", "Gangtok tour package", "North Sikkim tour package", "Sikkim family tour package", "Dooars tour package"],
  openGraph: {
    title: "Himalayan Sathi | Sikkim & Darjeeling Tour Operator",
    description: "Book customized Sikkim Darjeeling Bhutan tour packages with Himalayan Sathi, a trusted Sikkim tour operator.",
    url: DOMAIN,
    siteName: "Himalayan Sathi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalayan Sathi | Sikkim & Darjeeling Tour Operator",
    description: "Expertly crafted tours to Sikkim, Darjeeling, Bhutan, and Northeast India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const touristTripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Sikkim Darjeeling Bhutan Tour Package",
  "description": "Comprehensive tour covering the best of Sikkim, Darjeeling, and Bhutan.",
  "touristType": [
    "Family",
    "Honeymoon",
    "Adventure"
  ],
  "provider": {
    "@type": "TravelAgency",
    "name": "Himalayan Sathi Tours & Travels"
  }
};

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Himalayan Sathi Tours & Travels",
  "image": `${DOMAIN}/images/logo.png`, // Placeholder for actual logo
  "url": DOMAIN,
  "telephone": "+91-9876543210", // Placeholder
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Market",
    "addressLocality": "Darjeeling",
    "addressRegion": "West Bengal",
    "postalCode": "734101",
    "addressCountry": "IN"
  },
  "priceRange": "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased bg-surface text-text-primary`}>
        <SchemaInjector schemaData={travelAgencySchema} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <LeadCapturePopup />
      </body>
    </html>
  );
}
