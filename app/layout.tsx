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
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: 'Леонид — автоматизация, боты и парсеры',
  description: 'Telegram-боты, парсеры и небольшие системы автоматизации для бизнеса.',
  openGraph: {
    title: 'Леонид — автоматизация без рутины',
    description: 'Telegram-боты · Парсеры · Интеграции',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Леонид — автоматизация без рутины',
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
        {children}
      </body>
    </html>
  );
}
