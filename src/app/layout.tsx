<<<<<<< HEAD
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
=======
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  title: "Himalayan Sathi Tours & Travels | Sikkim, Darjeeling & Bhutan Tours",
  description: "Discover the breathtaking beauty of the Himalayas with Himalayan Sathi Tours & Travels. We offer expertly crafted tours to Sikkim, Darjeeling, Bhutan, and Northeast India. Your trusted Himalayan travel companion.",
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
};

export default function RootLayout({
  children,
<<<<<<< HEAD
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
=======
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-body bg-surface text-text-primary antialiased">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
      </body>
    </html>
  );
}
