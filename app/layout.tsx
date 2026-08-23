import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://relaybit.gsvlona.chatgpt.site'),
  title: 'RELAYBIT — автоматизация и цифровые решения',
  description: 'Разработка Telegram-ботов, парсеров, AI-инструментов и автоматизации для бизнеса. Реальные кейсы и быстрый запуск рабочих решений.',
  keywords: ['автоматизация бизнеса', 'разработка Telegram-ботов', 'Telegram-бот на заказ', 'парсер данных', 'AI-автоматизация', 'интеграция API', 'разработка на Python', 'RELAYBIT'],
  authors: [{ name: 'Гусев Леонид' }],
  creator: 'Гусев Леонид',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'RELAYBIT',
          url: 'https://relaybit.gsvlona.chatgpt.site',
          description: 'Автоматизация бизнеса, Telegram-боты, парсеры и AI-инструменты.',
          author: { '@type': 'Person', name: 'Гусев Леонид' },
        })}} />
        {children}
      </body>
    </html>
  );
}
