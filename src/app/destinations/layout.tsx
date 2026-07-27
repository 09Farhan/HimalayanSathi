import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Himalayan Destinations | Sikkim Darjeeling Bhutan Tour Package',
  description: 'Explore the best destinations across Darjeeling, Sikkim, Bhutan, and the Dooars. Book your Dooars tour package or Gangtok tour package today.',
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
