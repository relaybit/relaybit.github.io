import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://relaybit.gsvlona.chatgpt.site/sitemap.xml',
    host: 'https://relaybit.gsvlona.chatgpt.site',
  };
}
