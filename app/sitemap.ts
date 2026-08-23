import type { MetadataRoute } from 'next';

const baseUrl = 'https://relaybit.gsvlona.chatgpt.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/projects', '/projects/local-leads-scout', '/projects/telegram-game-bot', '/projects/lead-hunter', '/services', '/about'];
  return paths.map((path, index) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : path === '/projects' || path === '/services' ? 0.9 : 0.7,
  }));
}
