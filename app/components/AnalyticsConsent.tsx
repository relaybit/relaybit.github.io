'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const consentKey = 'relaybit-analytics-consent';

export default function AnalyticsConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { setVisible(!localStorage.getItem(consentKey)); } catch { setVisible(true); }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  function choose(value: 'granted' | 'denied') {
    try { localStorage.setItem(consentKey, value); } catch {}
    window.dataLayer = window.dataLayer || [];
    window.gtag?.('consent', 'update', { analytics_storage: value });
    if (value === 'granted') {
      window.gtag?.('event', 'page_view', {
        page_location: window.location.href,
        page_title: document.title,
      });
    }
    setVisible(false);
  }
  if (!visible) return null;
  return <aside className="analytics-consent" aria-label="Настройки аналитики"><p>Используем Google Analytics, чтобы понимать посещаемость сайта. Аналитика включится только с вашего согласия. <Link href="/privacy">Подробнее</Link></p><div><button type="button" onClick={() => choose('denied')}>Только необходимые</button><button type="button" className="accept" onClick={() => choose('granted')}>Разрешить аналитику</button></div></aside>;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
