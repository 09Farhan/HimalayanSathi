import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destinations | Himalayan Sathi Tours & Travels',
  description: 'Explore our breathtaking destinations across Darjeeling, Sikkim, Bhutan, and Northeast India. Find your perfect Himalayan getaway.',
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
