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
  metadataBase: new URL(process.env.SITE_URL || 'https://leonid-automation-portfolio.gsvlona.chatgpt.site'),
  title: 'NORTHLINE — студия автоматизации',
  description: 'Telegram-боты, парсеры и цифровые системы, которые освобождают бизнес от ручной работы.',
  openGraph: {
    title: 'NORTHLINE — автоматизация без рутины',
    description: 'Telegram-боты · Парсеры · Интеграции',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NORTHLINE — автоматизация без рутины',
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
