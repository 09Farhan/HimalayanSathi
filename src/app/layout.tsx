import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LeadCapturePopup } from "@/components/ui/LeadCapturePopup";
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
  title: "Top Himalayan Travel Agency | Sikkim, Darjeeling & Bhutan Tours",
  description: "Book customized tour packages for Sikkim, Darjeeling, Bhutan, and North East India with Himalayan Sathi. Experience expert local guides and affordable pricing.",
  keywords: ["Sikkim tour packages", "Darjeeling tours", "Bhutan travel agency", "Himalayan travel", "North East India tourism"],
  openGraph: {
    title: "Himalayan Sathi Tours & Travels",
    description: "Discover the breathtaking beauty of the Himalayas. Expertly crafted tours to Sikkim, Darjeeling, Bhutan, and Northeast India.",
    url: DOMAIN,
    siteName: "Himalayan Sathi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalayan Sathi Tours & Travels",
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
