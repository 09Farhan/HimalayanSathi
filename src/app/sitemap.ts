import { MetadataRoute } from 'next';
import { packages } from '@/data/packages';
import { blogPosts } from '@/data/blog';

const DOMAIN = 'https://himalayansathi.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static Routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/destinations',
    '/packages',
    '/cab-services',
    '/blog',
    '/gallery'
  ].map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Package Routes
  const packageRoutes = packages.map((pkg) => ({
    url: `${DOMAIN}/packages/${pkg.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic Blog Routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${DOMAIN}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...packageRoutes, ...blogRoutes];
}
