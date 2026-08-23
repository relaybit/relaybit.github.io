import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import AnalyticsConsent from './components/AnalyticsConsent';
import './globals.css';

const siteUrl = process.env.SITE_URL || 'https://relaybit.gsvlona.chatgpt.site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'RELAYBIT — автоматизация и цифровые решения',
  description: 'Разработка Telegram-ботов, парсеров, AI-инструментов и автоматизации для бизнеса. Реальные кейсы и быстрый запуск рабочих решений.',
  keywords: ['автоматизация бизнеса', 'разработка Telegram-ботов', 'Telegram-бот на заказ', 'парсер данных', 'AI-автоматизация', 'интеграция API', 'разработка на Python', 'RELAYBIT'],
  authors: [{ name: 'Гусев Леонид' }],
  creator: 'Гусев Леонид',
  verification: {
    google: 'siQKNA0-mX2IT23iC4dqQAWlxCu1w3ACr-OeUWW5QAE',
    yandex: '856edd8f88a32774',
  },
  category: 'Разработка программного обеспечения',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'RELAYBIT — автоматизация без рутины',
    description: 'Telegram-боты, парсеры, AI-инструменты и интеграции для бизнеса.',
    url: '/',
    siteName: 'RELAYBIT',
    locale: 'ru_RU',
    type: 'website',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RELAYBIT — автоматизация без рутины',
    description: 'Telegram-боты · Парсеры · Интеграции',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="ga-consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', { analytics_storage: 'denied' });
          try { if (localStorage.getItem('relaybit-analytics-consent') === 'granted') gtag('consent', 'update', { analytics_storage: 'granted' }); } catch (_) {}
        `}</Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9KWMSZYJDT" strategy="afterInteractive" />
        <Script id="ga-config" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-9KWMSZYJDT', { anonymize_ip: true });
        `}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'RELAYBIT',
          url: siteUrl,
          description: 'Автоматизация бизнеса, Telegram-боты, парсеры и AI-инструменты.',
          author: { '@type': 'Person', name: 'Гусев Леонид' },
        })}} />
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
