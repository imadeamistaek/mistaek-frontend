import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const baseUrl = 'https://www.mistaek.com';
  
  // Add your current and future pages here
  const pages = [
    { url: '', priority: '1.0', changefreq: 'monthly' }, // Homepage
    // Add these as you build them:
    // { url: '/about', priority: '0.8', changefreq: 'monthly' },
    // { url: '/services', priority: '0.8', changefreq: 'monthly' },
    // { url: '/work', priority: '0.8', changefreq: 'monthly' },
    // { url: '/articles', priority: '0.6', changefreq: 'weekly' },
    // { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    // { url: '/pricing-calculator', priority: '0.9', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};