import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const baseUrl = (process.env.SITE_URL || 'https://relaybit.github.io').replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/projects/', '/projects/local-leads-scout/', '/projects/telegram-game-bot/', '/projects/lead-hunter/', '/services/', '/about/', '/privacy/'];
  return paths.map((path, index) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date('2026-08-24'),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : path === '/projects/' || path === '/services/' ? 0.9 : path === '/privacy/' ? 0.1 : 0.7,
  }));
}
