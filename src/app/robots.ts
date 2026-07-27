import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const DOMAIN = 'https://himalayan-sathi.vercel.app';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Block admin and internal API routes
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
