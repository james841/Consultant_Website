import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Keep your admin area private from crawlers
    },
    sitemap: 'https://www.infosentinelmind.co.uk/sitemap.xml',
  };
}