'use client';

import { useEffect } from 'react';

const consentKey = 'relaybit-analytics-consent';

export default function AnalyticsEvents() {
  useEffect(() => {
    function trackClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest('a[href]') as HTMLAnchorElement | null;
      if (!link || localStorage.getItem(consentKey) !== 'granted') return;

      const url = link.href;
      const destination = url.includes('t.me/')
        ? 'telegram'
        : url.startsWith('mailto:') || url.includes('mail.google.com')
          ? 'email'
          : url.includes('github.com')
            ? 'github'
            : null;

      if (!destination) return;
      window.gtag?.('event', 'contact_click', {
        contact_method: destination,
        link_url: url,
        link_text: link.textContent?.trim().slice(0, 100) || undefined,
      });
    }

    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, []);

  return null;
}

