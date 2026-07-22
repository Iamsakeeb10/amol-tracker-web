import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amoltracker.app'),
  title: 'Amol Tracker — আমল ট্র্যাকার',
  description:
    'প্রতিদিনের ইসলামিক আমল ট্র্যাক করুন — স্ট্রিক, কমিউনিটি ও হিজরি ক্যালেন্ডার সহ। Daily Islamic habit tracker with streaks, community & Hijri calendar.',
  keywords: [
    'amol tracker',
    'আমল ট্র্যাকার',
    'islamic habit tracker',
    'daily amal',
    'bangladesh islamic app',
    'muslim app',
    'quran tracker',
    'namaz tracker',
  ],
  authors: [{ name: 'Grey Forge' }],
  creator: 'Grey Forge',
  openGraph: {
    title: 'Amol Tracker — আমল ট্র্যাকার',
    description:
      'প্রতিদিনের ইসলামিক আমল ট্র্যাক করুন — একসাথে, জবাবদিহিতার সাথে।',
    url: 'https://amoltracker.app',
    siteName: 'Amol Tracker',
    locale: 'bn_BD',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amol Tracker — আমল ট্র্যাকার',
    description: 'Daily Islamic habit tracker for Muslims.',
    images: ['/og-image.png'],
  },
  other: {
    'google-play-app': 'com.shakib.amol.amol_tracker_app',
    'google-play-url': 'https://play.google.com/store/apps/details?id=com.shakib.amol.amol_tracker_app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.variable}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
