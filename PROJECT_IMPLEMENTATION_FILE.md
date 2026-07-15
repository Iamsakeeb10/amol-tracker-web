# 🌐 Amol Tracker Web — Cursor Prompt Plan

> Next.js 15 App Router · TypeScript · Tailwind CSS v4
> Bengali first · English toggle · Mobile responsive · Production ready
> Execute chunks in order. Test after each chunk before proceeding.

---

## 📁 Project Context (read before every chunk)

```
Stack:     Next.js 15.4, React 19, TypeScript, Tailwind CSS v4
Router:    App Router (src/app/)
Styling:   Tailwind v4 (CSS-first config in app/globals.css)
State:     React useState only (no external state lib needed)
Fonts:     Google Fonts — Hind Siliguri (Bengali), Inter (English)
Colors:    Emerald #0D3D2E · Gold #C9A84C · Gold Light #E8C96A
i18n:      Manual toggle (bn/en) via React context — no next-intl
Images:    next/image, stored in public/images/
Icons:     lucide-react (already installed)
```

---

## ✅ Chunk 1 — Global Setup & Design System

### Prompt for Cursor:

```
Set up the global design system for Amol Tracker landing page.

Do exactly the following — nothing more, nothing less:

---

STEP 1: Replace src/app/globals.css with this:

@import "tailwindcss";

:root {
  --emerald-deep:   #0D3D2E;
  --emerald-mid:    #1A5C42;
  --emerald-light:  #256B4E;
  --gold:           #C9A84C;
  --gold-light:     #E8C96A;
  --gold-pale:      #F5DFA0;
  --cream:          #FAF6EE;
  --white:          #FFFFFF;
  --text-primary:   #1C1C1C;
  --text-secondary: #4A4A4A;
  --text-muted:     #888888;
  --success:        #2ECC71;
  --danger:         #E74C3C;
  --font-sans:      'Inter', system-ui, sans-serif;
  --font-bengali:   'Hind Siliguri', 'Inter', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--emerald-deep);
  color: var(--white);
  font-family: var(--font-sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

body.lang-bn {
  font-family: var(--font-bengali);
}

::selection {
  background: var(--gold);
  color: var(--emerald-deep);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 768px) {
  .section-container {
    padding: 0 16px;
  }
}

---

STEP 2: Replace src/app/layout.tsx with this:

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amol Tracker — আমল ট্র্যাকার',
    description: 'Daily Islamic habit tracker for Muslims.',
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
      <body className={inter.variable}>{children}</body>
    </html>
  );
}

---

STEP 3: Create src/lib/content.ts

This file holds ALL text content for both languages.
Every UI string lives here — no hardcoded text in components.

export type Lang = 'bn' | 'en';

export const content = {
  nav: {
    brand: { bn: 'আমল ট্র্যাকার', en: 'Amol Tracker' },
    features: { bn: 'ফিচার', en: 'Features' },
    screenshots: { bn: 'স্ক্রিনশট', en: 'Screenshots' },
    about: { bn: 'সম্পর্কে', en: 'About' },
    privacy: { bn: 'প্রাইভেসি', en: 'Privacy' },
    download: { bn: 'ডাউনলোড', en: 'Download' },
    langToggle: { bn: 'English', en: 'বাংলা' },
  },
  hero: {
    badge: {
      bn: '🌙 Google Play-এ এখন উপলব্ধ',
      en: '🌙 Now available on Google Play',
    },
    headline: {
      bn: 'প্রতিদিনের ইসলামিক আমল\nট্র্যাক করুন — একসাথে',
      en: 'Track your daily Islamic\nhabits — together',
    },
    subheadline: {
      bn: 'স্ট্রিক, কমিউনিটি শিট, হিজরি ক্যালেন্ডার ও আরও অনেক কিছু নিয়ে। আপনার বন্ধুদের সাথে জবাবদিহিতার মাধ্যমে ভালো অভ্যাস গড়ুন।',
      en: 'With streaks, community sheet, Hijri calendar and more. Build good habits through accountability with your friends.',
    },
    cta: { bn: 'Google Play থেকে ডাউনলোড করুন', en: 'Download on Google Play' },
    ctaSub: { bn: 'বিনামূল্যে · কোনো বিজ্ঞাপন নেই', en: 'Free · No ads' },
    hadith: {
      bn: '"আল্লাহর কাছে সবচেয়ে প্রিয় আমল সেটি যা নিয়মিত করা হয়, যদিও তা অল্প।"',
      en: '"The most beloved deeds to Allah are those done consistently, even if small."',
    },
    hadithSource: { bn: '— বুখারী ও মুসলিম', en: '— Bukhari & Muslim' },
  },
  stats: {
    items: [
      {
        value: '9',
        label: { bn: 'দৈনিক আমল', en: 'Daily Amal' },
      },
      {
        value: '100',
        label: { bn: 'পয়েন্ট স্কোর', en: 'Point Score' },
      },
      {
        value: '∞',
        label: { bn: 'স্ট্রিক সম্ভাবনা', en: 'Streak Potential' },
      },
      {
        value: '0৳',
        label: { bn: 'সম্পূর্ণ বিনামূল্যে', en: 'Completely Free' },
      },
    ],
  },
  features: {
    heading: { bn: 'যা যা পাবেন', en: 'What you get' },
    subheading: {
      bn: 'একটি অ্যাপে সব ইসলামিক হ্যাবিট টুলস',
      en: 'All Islamic habit tools in one app',
    },
    items: [
      {
        icon: '📋',
        title: { bn: 'দৈনিক আমল লগ', en: 'Daily Amal Log' },
        desc: {
          bn: '৯টি গুরুত্বপূর্ণ আমল ট্র্যাক করুন। ফরয নামাজ থেকে আযকার পর্যন্ত সব।',
          en: 'Track 9 important daily amal. From Fard prayers to daily adhkar.',
        },
      },
      {
        icon: '🌍',
        title: { bn: 'কমিউনিটি শিট', en: 'Community Sheet' },
        desc: {
          bn: 'সবার আমল একটি লাইভ শিটে দেখুন। বন্ধুদের দেখে নিজে অনুপ্রাণিত হন।',
          en: 'See everyone\'s amal in a live sheet. Get motivated seeing your friends.',
        },
      },
      {
        icon: '🔥',
        title: { bn: 'স্ট্রিক সিস্টেম', en: 'Streak System' },
        desc: {
          bn: 'ধারাবাহিকতা গড়ুন। স্ট্রিক ফ্রিজ ও মাইলস্টোন ব্যাজ পান।',
          en: 'Build consistency. Get streak freezes and milestone badges.',
        },
      },
      {
        icon: '📅',
        title: { bn: 'হিজরি ক্যালেন্ডার', en: 'Hijri Calendar' },
        desc: {
          bn: 'ইসলামিক তারিখে আমলের ইতিহাস দেখুন। মাগরিবের পর তারিখ পরিবর্তন।',
          en: 'View amal history in Islamic dates. Date changes after Maghrib.',
        },
      },
      {
        icon: '🏆',
        title: { bn: 'লিডারবোর্ড', en: 'Leaderboard' },
        desc: {
          bn: 'দৈনিক ও সাপ্তাহিক র‌্যাংকিং দেখুন। সুস্থ প্রতিযোগিতায় এগিয়ে থাকুন।',
          en: 'Daily and weekly rankings. Stay ahead in healthy competition.',
        },
      },
      {
        icon: '📖',
        title: { bn: 'কুরআন রিডার', en: 'Quran Reader' },
        desc: {
          bn: 'অ্যাপের ভেতরেই কুরআন পড়ুন। বাংলা অনুবাদ সহ।',
          en: 'Read Quran inside the app. With Bengali translation.',
        },
      },
      {
        icon: '🤲',
        title: { bn: 'দুআ লিস্ট', en: 'Dua List' },
        desc: {
          bn: 'দৈনিক দুআ সংগ্রহ। কমিউনিটি মেম্বারদের দুআ পাঠান।',
          en: 'Collection of daily duas. Send duas to community members.',
        },
      },
      {
        icon: '🕌',
        title: { bn: 'কিবলা ও আযান', en: 'Qibla & Azan' },
        desc: {
          bn: 'কিবলার দিক ও নামাজের সময় রিমাইন্ডার। বাংলাদেশ সময় অনুযায়ী।',
          en: 'Qibla direction and prayer time reminders. Bangladesh time accurate.',
        },
      },
      {
        icon: '📿',
        title: { bn: 'যিকর কাউন্টার', en: 'Zikr Counter' },
        desc: {
          bn: 'তাসবীহ গণনা করুন। কাস্টম যিকর সেট করুন।',
          en: 'Count your tasbih. Set custom zikr targets.',
        },
      },
    ],
  },
  screenshots: {
    heading: { bn: 'অ্যাপ দেখুন', en: 'See the app' },
    subheading: {
      bn: 'সুন্দর ডিজাইন, সহজ ব্যবহার',
      en: 'Beautiful design, easy to use',
    },
    captions: [
      { bn: 'হোম স্ক্রিন', en: 'Home Screen' },
      { bn: 'কমিউনিটি শিট', en: 'Community Sheet' },
      { bn: 'হিজরি ক্যালেন্ডার', en: 'Hijri Calendar' },
      { bn: 'লিডারবোর্ড', en: 'Leaderboard' },
    ],
  },
  about: {
    heading: { bn: 'কেন আমল ট্র্যাকার?', en: 'Why Amol Tracker?' },
    para1: {
      bn: 'আমরা একদল বন্ধু Google Sheet-এ আমল ট্র্যাক করতাম। তারপর ভাবলাম — এটাকে আরও সুন্দর, সহজ ও কার্যকর করা যায় না? সেখান থেকেই আমল ট্র্যাকারের জন্ম।',
      en: 'We were a group of friends tracking amal on Google Sheets. Then we thought — can we make this more beautiful, simple and effective? That\'s where Amol Tracker was born.',
    },
    para2: {
      bn: 'অ্যাপটি তৈরি হয়েছে বাংলাদেশি মুসলিমদের জন্য। সম্পূর্ণ বিনামূল্যে, কোনো বিজ্ঞাপন নেই, কোনো প্রিমিয়াম নেই। শুধু নিয়ত বিশুদ্ধ রাখুন — বাকিটা আল্লাহর উপর।',
      en: 'The app is built for Bangladeshi Muslims. Completely free, no ads, no premium. Just keep your intention pure — leave the rest to Allah.',
    },
    values: [
      {
        icon: '🔒',
        title: { bn: 'প্রাইভেট', en: 'Private' },
        desc: { bn: 'আপনার ডেটা বিক্রি হয় না', en: 'Your data is never sold' },
      },
      {
        icon: '🆓',
        title: { bn: 'বিনামূল্যে', en: 'Free' },
        desc: { bn: 'সব ফিচার সম্পূর্ণ ফ্রি', en: 'All features completely free' },
      },
      {
        icon: '🤝',
        title: { bn: 'কমিউনিটি', en: 'Community' },
        desc: { bn: 'একসাথে ভালো থাকুন', en: 'Be better together' },
      },
    ],
  },
  download: {
    heading: { bn: 'এখনই শুরু করুন', en: 'Start now' },
    subheading: {
      bn: 'ডাউনলোড করুন এবং আজই আমল লগ করা শুরু করুন',
      en: 'Download and start logging your amal today',
    },
    cta: { bn: 'Google Play থেকে ডাউনলোড', en: 'Download on Google Play' },
    sub: { bn: 'Android · বিনামূল্যে', en: 'Android · Free' },
    hadith: {
      bn: '"নিয়ত বিশুদ্ধ রাখো — বাকিটা আল্লাহর উপর ছেড়ে দাও।"',
      en: '"Keep your intention pure — leave the rest to Allah."',
    },
  },
  footer: {
    tagline: {
      bn: 'মুসলিম উম্মাহর জন্য তৈরি, ভালোবাসা দিয়ে 🤲',
      en: 'Built for the Muslim Ummah, with love 🤲',
    },
    privacy: { bn: 'প্রাইভেসি পলিসি', en: 'Privacy Policy' },
    terms: { bn: 'শর্তাবলী', en: 'Terms & Conditions' },
    copyright: { bn: '© ২০২৬ আমল ট্র্যাকার · Grey Forge', en: '© 2026 Amol Tracker · Grey Forge' },
  },
} as const;

export type Content = typeof content;

---

STEP 4: Create src/context/LanguageContext.tsx

'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import type { Lang } from '@/lib/content';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (obj: { bn: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'bn',
  toggleLang: () => {},
  t: (obj) => obj.bn,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('bn');

  useEffect(() => {
    const saved = localStorage.getItem('amol_lang') as Lang | null;
    if (saved === 'bn' || saved === 'en') setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-bn', lang === 'bn');
    localStorage.setItem('amol_lang', lang);
  }, [lang]);

  const toggleLang = () =>
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));

  const t = (obj: { bn: string; en: string }) => obj[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

---

STEP 5: Wrap layout.tsx children with LanguageProvider

In src/app/layout.tsx, import LanguageProvider and
wrap {children} with it:

import { LanguageProvider } from '@/context/LanguageContext';

// Inside body tag:
<body className={inter.variable}>
  <LanguageProvider>{children}</LanguageProvider>
</body>

---

STEP 6: Replace src/app/page.tsx with this scaffold:

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import About from '@/components/About';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Screenshots />
      <About />
      <Download />
      <Footer />
    </main>
  );
}

Do NOT create any component files yet. Just the page scaffold.
Run: npm run dev — should compile without errors.
```

---

## ✅ Chunk 2 — Navbar Component

### Prompt for Cursor:

```
Read src/lib/content.ts and src/context/LanguageContext.tsx
completely before writing any code.

Create src/components/Navbar.tsx

Requirements:
- Fixed top navbar, full width
- Background: rgba(13, 61, 46, 0.95) with backdrop blur
- Border bottom: 1px solid rgba(201, 168, 76, 0.2)
- Left: 🌙 icon + brand name from content.nav.brand
- Center (desktop only): nav links — Features, Screenshots, About, Privacy
- Right: Language toggle button + Download button
- Language toggle: shows current opposite language label
  (if bn active → shows "English", if en → shows "বাংলা")
- Download button: gold background, emerald text, rounded
- Mobile: hamburger menu (lucide Menu icon)
  - Opens full-screen overlay with all nav items
  - Close with X button or backdrop tap
- Smooth hide/show on scroll (hide on scroll down, show on scroll up)
- All text from content.ts via useLang() hook

Scroll behavior:
const [show, setShow] = useState(true);
const [lastY, setLastY] = useState(0);
useEffect(() => {
  const onScroll = () => {
    const y = window.scrollY;
    setShow(y < lastY || y < 80);
    setLastY(y);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, [lastY]);

Nav links scroll to section IDs:
#features, #screenshots, #about, #privacy, #download

Exact styles:
- Height: 64px desktop, 56px mobile
- Brand font size: 18px, color: var(--gold-light)
- Nav links: 14px, color: rgba(255,255,255,0.7),
  hover: var(--gold-light), transition 0.2s
- Lang toggle: 12px, border: 1px solid rgba(201,168,76,0.4),
  color: var(--gold), padding: 6px 12px, border-radius: 20px
- Download btn: background var(--gold), color var(--emerald-deep),
  14px, font-weight 600, padding: 8px 18px, border-radius: 20px
```

---

## ✅ Chunk 3 — Hero Section

### Prompt for Cursor:

```
Read src/lib/content.ts and src/context/LanguageContext.tsx
completely before writing any code.

Create src/components/Hero.tsx

Requirements:
- Full viewport height (min-height: 100vh)
- Background: var(--emerald-deep)
- Subtle Islamic geometric SVG pattern in background
  (concentric circles + 8-pointed star, opacity 0.06,
  color var(--gold), positioned center-right)
- Content centered vertically, left-aligned on desktop,
  center-aligned on mobile
- Two column layout on desktop:
  Left (55%): text content
  Right (45%): phone mockup image

LEFT COLUMN content in order:
1. Badge pill: gold border, gold text, small, rounded-full
   Text from content.hero.badge
2. Headline: large, serif-like weight, white
   Use \n as line break: whitespace-pre-line
   Font size: 52px desktop, 36px mobile
   Line height: 1.15
3. Subheadline: 18px desktop, 16px mobile
   Color: rgba(255,255,255,0.7)
   Max width: 520px
4. CTA button row:
   - Primary: Google Play button
     Black background, white text, Play Store icon (SVG inline)
     "Get it on" small text above "Google Play"
     href: '#download' (will update to real link later)
   - Below button: content.hero.ctaSub in small gold text
5. Hadith card:
   - Background: rgba(201,168,76,0.08)
   - Border: 1px solid rgba(201,168,76,0.2)
   - Border-radius: 12px
   - Padding: 16px
   - Italic text: content.hero.hadith
   - Small source below: content.hero.hadithSource

RIGHT COLUMN:
- Phone frame mockup (rounded rectangle, 280px wide)
- Background: rgba(255,255,255,0.05)
- Border: 1px solid rgba(201,168,76,0.25)
- Border-radius: 36px
- Inside: placeholder with text "App Screenshot"
  (Will be replaced with actual screenshot image in Chunk 5)
- Subtle golden glow behind phone:
  box-shadow: 0 0 80px rgba(201,168,76,0.15)

Mobile layout:
- Single column, content above, phone below
- Phone mockup: 240px wide, centered

Scroll indicator at bottom:
- Animated bounce arrow pointing down
- Color: rgba(255,255,255,0.4)
```

---

## ✅ Chunk 4 — Stats Bar + Features Section

### Prompt for Cursor:

```
Read src/lib/content.ts and src/context/LanguageContext.tsx
before writing any code.

CREATE TWO components:

---

COMPONENT 1: src/components/Stats.tsx

- Full width bar
- Background: rgba(255,255,255,0.04)
- Border top and bottom: 1px solid rgba(201,168,76,0.15)
- 4 stat items in a row (2x2 grid on mobile)
- Each item:
  - Large number: 36px, font-weight 700, color var(--gold)
  - Label below: 13px, color rgba(255,255,255,0.55)
- Dividers between items on desktop
- Padding: 32px 0
- Data from content.stats.items

---

COMPONENT 2: src/components/Features.tsx

Section id="features"

- Background: var(--emerald-deep)
- Padding: 96px 0 desktop, 64px 0 mobile
- Section heading: content.features.heading
  Font size: 36px desktop, 28px mobile
  Color: white, font-weight 700, centered
- Subheading below: content.features.subheading
  Color: rgba(255,255,255,0.55), 16px, centered
  Margin bottom: 64px

- Features grid: 3 columns desktop, 2 columns tablet,
  1 column mobile
- Each feature card:
  - Background: rgba(255,255,255,0.04)
  - Border: 1px solid rgba(255,255,255,0.08)
  - Border-radius: 16px
  - Padding: 24px
  - Hover: border-color rgba(201,168,76,0.3),
    background rgba(201,168,76,0.05),
    transform translateY(-2px)
  - Transition: all 0.2s ease
  - Icon: 32px emoji in gold-tinted circle
    (width 48px, height 48px, border-radius 12px,
    background rgba(201,168,76,0.12),
    display flex, align center)
  - Title: 16px, font-weight 600, color white, margin-top 14px
  - Description: 14px, color rgba(255,255,255,0.6),
    line-height 1.6, margin-top 8px

All text from content.features.items via useLang().
```

---

## ✅ Chunk 5 — Screenshots Section

### Prompt for Cursor:

```
Read src/lib/content.ts and src/context/LanguageContext.tsx
before writing any code.

Create src/components/Screenshots.tsx

Section id="screenshots"

- Background: rgba(0,0,0,0.2) — slightly darker than rest
- Padding: 96px 0 desktop, 64px 0 mobile
- Section heading: content.screenshots.heading — centered
- Subheading: content.screenshots.subheading — centered
- Margin below heading: 64px

LAYOUT:
- Horizontal scroll container on mobile
- 4-column grid on desktop (≥1024px)
- 2-column grid on tablet (768px–1023px)
- Single horizontal scroll on mobile (<768px)

Each screenshot card:
- Width: 220px fixed (allows horizontal scroll on mobile)
- Phone frame wrapper:
  - Border-radius: 28px
  - Border: 1.5px solid rgba(201,168,76,0.3)
  - Background: rgba(13,61,46,0.8)
  - Overflow: hidden
  - Aspect ratio: 9/19 (phone proportions)
  - Box-shadow: 0 20px 60px rgba(0,0,0,0.4)
- Inside phone frame:
  - Use next/image with fill layout
  - Image paths: /images/screenshot-1.png through screenshot-4.png
  - Alt text from content.screenshots.captions[i] via t()
  - Fallback if image missing: solid emerald bg with caption text
- Caption below phone:
  - Text from content.screenshots.captions[i]
  - Font size: 13px, color rgba(255,255,255,0.5)
  - Text-align: center
  - Margin-top: 12px

PLACEHOLDER IMAGES:
Create public/images/ directory.
If screenshot images don't exist yet, show a placeholder:
<div style={{
  background: 'rgba(201,168,76,0.1)',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(201,168,76,0.5)',
  fontSize: '13px',
}}>
  {t(content.screenshots.captions[i])}
</div>

Real screenshots can be dropped into public/images/ later
without any code changes.
```

---

## ✅ Chunk 6 — About + Download Sections

### Prompt for Cursor:

```
Read src/lib/content.ts and src/context/LanguageContext.tsx
before writing any code.

CREATE TWO components:

---

COMPONENT 1: src/components/About.tsx

Section id="about"
Padding: 96px 0 desktop, 64px 0 mobile
Background: var(--emerald-deep)

Layout: 2 column desktop (50/50), single column mobile

LEFT column:
- Heading: content.about.heading
  Font size: 36px desktop, 28px mobile
  Font-weight: 700, color white
- Para 1: content.about.para1
  Font size: 16px, color rgba(255,255,255,0.7)
  Line-height: 1.8, margin-top: 20px
- Para 2: content.about.para2
  Same styles, margin-top: 16px

RIGHT column:
- 3 value cards stacked vertically, gap 12px
- Each card:
  Background: rgba(255,255,255,0.05)
  Border: 1px solid rgba(255,255,255,0.08)
  Border-radius: 12px
  Padding: 16px 20px
  Display: flex, align-items: center, gap: 14px
  - Icon circle: 40px, border-radius 50%
    Background rgba(201,168,76,0.12)
    Font-size: 20px, flex-shrink 0
  - Title: 14px, font-weight 600, color white
  - Desc: 12px, color rgba(255,255,255,0.5), margin-top 2px

Data from content.about.values

---

COMPONENT 2: src/components/Download.tsx

Section id="download"
Background: linear gradient from rgba(201,168,76,0.08) to transparent
Border-top: 1px solid rgba(201,168,76,0.2)
Padding: 96px 0 desktop, 64px 0 mobile
Text centered

Content:
1. Star/crescent decorative icon (🌙) — 48px, centered
2. Heading: content.download.heading
   Font size: 40px desktop, 30px mobile
   Font-weight: 700, color white
3. Subheading: content.download.subheading
   16px, color rgba(255,255,255,0.65), margin-top 12px
4. Google Play button:
   Display: inline-flex, align-items center, gap 12px
   Background: #000, color white
   Border-radius: 12px
   Padding: 14px 28px
   Margin-top: 40px
   Border: 1px solid rgba(255,255,255,0.15)
   Hover: background #111
   Left: Google Play SVG icon (32px)
   Right: two lines of text
     "Get it on" — 11px, opacity 0.7
     "Google Play" — 20px, font-weight 600
   href="#" — update to real Play Store URL
5. Sub text below button: content.download.sub
   Font-size: 13px, color rgba(255,255,255,0.4), margin-top 12px
6. Hadith quote card (same style as Hero hadith card):
   Max-width 480px, margin: 40px auto 0
   content.download.hadith + content.hero.hadithSource
```

---

## ✅ Chunk 7 — Privacy Policy Section + Footer

### Prompt for Cursor:

```
Read src/lib/content.ts and src/context/LanguageContext.tsx
before writing any code.

CREATE TWO components:

---

COMPONENT 1: src/components/PrivacySection.tsx

Section id="privacy"
Background: rgba(0,0,0,0.15)
Border-top: 1px solid rgba(255,255,255,0.06)
Padding: 64px 0

Max-width: 720px, centered, padding 0 24px

Content (hardcoded, not from content.ts — privacy is always shown):

Show Bengali by default, switch based on lang:

Bengali content:
  Heading: "প্রাইভেসি পলিসি"
  Para 1: "আমল ট্র্যাকার আপনার ব্যক্তিগত তথ্য সংগ্রহ করে..."
  [Use the full Bengali privacy policy text you already have
   in your privacy_policy.html file]

English content:
  [Use the full English privacy policy text]

Style:
- Heading: 28px, font-weight 700, color white, mb 24px
- Sub-headings (h3): 16px, font-weight 600, color var(--gold-light)
  margin-top 24px, margin-bottom 8px
- Paragraphs: 14px, color rgba(255,255,255,0.65), line-height 1.8
- Bullet lists: same color, padding-left 20px
- "Last updated" badge at top: small pill, gold border

Note: Link to full privacy policy page from footer.
This section shows a summary — "Full policy" link at bottom
opens the /privacy page (create that page in Chunk 8).

---

COMPONENT 2: src/components/Footer.tsx

Background: rgba(0,0,0,0.3)
Border-top: 1px solid rgba(201,168,76,0.15)
Padding: 40px 0

Layout: 3 rows centered

Row 1: App name + tagline
- 🌙 + "আমল ট্র্যাকার" in gold
- content.footer.tagline below in small muted text

Row 2: Footer links (horizontal, centered, gap 24px)
- Privacy Policy → /privacy
- Terms & Conditions → /terms
- Google Play → actual Play Store URL
- Each: 13px, color rgba(255,255,255,0.45)
  hover: var(--gold-light), transition 0.2s

Row 3: Copyright
- content.footer.copyright
- 13px, color rgba(255,255,255,0.25)

Also add: scroll-to-top button (bottom right, fixed position)
- 40px circle, background var(--gold), color var(--emerald-deep)
- Shows only when scrolled > 400px
- Smooth scroll to top on click
- ChevronUp icon from lucide-react
```

---

## ✅ Chunk 8 — Privacy & Terms Pages + Final Polish

### Prompt for Cursor:

```
Read src/lib/content.ts before writing any code.

CREATE these files:

---

FILE 1: src/app/privacy/page.tsx

Full standalone privacy policy page.
Import and render PrivacyPage component.
Metadata: title "Privacy Policy — Amol Tracker"

---

FILE 2: src/app/terms/page.tsx

Full standalone terms & conditions page.
Import and render TermsPage component.
Metadata: title "Terms & Conditions — Amol Tracker"

---

FILE 3: src/components/PrivacyPage.tsx

Full page layout with:
- Back button: "← amoltracker.app" link to /
- Content: full privacy policy text (both languages,
  toggle via LanguageContext)
- Same styling as PrivacySection but full page width
- Wrap with LanguageProvider for standalone page use

---

FILE 4: src/components/TermsPage.tsx

Same structure as PrivacyPage but with T&C content.

---

FILE 5: src/app/sitemap.ts

import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://amoltracker.app', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://amoltracker.app/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: 'https://amoltracker.app/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];
}

---

FILE 6: src/app/robots.ts

import { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://amoltracker.app/sitemap.xml',
  };
}

---

POLISH TASKS (do after all files created):

1. Add smooth section animations:
   In each section component, add this pattern:

   'use client';
   import { useEffect, useRef, useState } from 'react';

   const ref = useRef<HTMLElement>(null);
   const [visible, setVisible] = useState(false);

   useEffect(() => {
     const obs = new IntersectionObserver(
       ([e]) => { if (e.isIntersecting) setVisible(true); },
       { threshold: 0.1 }
     );
     if (ref.current) obs.observe(ref.current);
     return () => obs.disconnect();
   }, []);

   Style on section:
   opacity: visible ? 1 : 0
   transform: visible ? 'translateY(0)' : 'translateY(24px)'
   transition: 'opacity 0.6s ease, transform 0.6s ease'

2. Update all href="#download" to actual Play Store URL:
   https://play.google.com/store/apps/details?id=com.shakib.amol.amol_tracker_app
   (Update when app is live)

3. Verify mobile responsiveness:
   - All sections use .section-container for max-width
   - No horizontal overflow on 375px width
   - Touch targets minimum 44px
   - Font sizes readable at 375px

4. Performance check:
   - All images use next/image
   - Google Fonts loaded with display=swap
   - No unused imports
   - Run: npm run build — zero errors and zero warnings
```

---

## ✅ Chunk 9 — Real Screenshots & Final Content

### Prompt for Cursor:

```
This is the final content chunk. No new components needed.

TASK 1 — Add real app screenshots:

Place these files in public/images/:
- screenshot-1.png  (Home screen)
- screenshot-2.png  (Community sheet)
- screenshot-3.png  (History calendar)
- screenshot-4.png  (Leaderboard)

If images are already in public/images/, verify
Screenshots.tsx uses next/image correctly:

<Image
  src={`/images/screenshot-${i + 1}.png`}
  alt={t(content.screenshots.captions[i])}
  fill
  style={{ objectFit: 'cover' }}
  sizes="220px"
  priority={i === 0}
/>

TASK 2 — Update Play Store URL everywhere:

Search entire codebase for '#download' and
'play.google.com/store/apps/details'
Replace with actual URL:
https://play.google.com/store/apps/details?id=com.shakib.amol.amol_tracker_app

TASK 3 — Add Open Graph image:

Create public/og-image.png (1200x630px)
Emerald background, gold text "Amol Tracker — আমল ট্র্যাকার"
Add to layout.tsx metadata:
openGraph: {
  images: [{ url: '/og-image.png', width: 1200, height: 630 }],
}

TASK 4 — Final build verification:

Run: npm run build
Expected: ✓ Compiled successfully
Zero TypeScript errors
Zero missing image warnings

Run: npm run start
Check on:
- Chrome desktop (1440px)
- Chrome mobile emulator (375px iPhone SE)
- Language toggle works correctly
- All sections scroll smoothly
- Navbar hides/shows on scroll
- Download button opens Play Store URL
```

---

## 📋 Deployment — Vercel (after all chunks done)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set production domain
vercel --prod
```

In Vercel dashboard:

- Add custom domain: amoltracker.app (or whatever you have)
- Environment variables: none needed (no .env secrets)
- Build command: `npm run build`
- Output directory: `.next`

---

## 🎯 SEO Checklist (after deployment)

- [ ] Submit sitemap.xml to Google Search Console
- [ ] Verify amoltracker.app in Search Console
- [ ] Test OG image on opengraph.xyz
- [ ] Test mobile on PageSpeed Insights
- [ ] Share landing page URL in Play Store listing

---

## 📁 Final File Structure

```
src/
├── app/
│   ├── layout.tsx          ← Chunk 1
│   ├── page.tsx            ← Chunk 1
│   ├── globals.css         ← Chunk 1
│   ├── sitemap.ts          ← Chunk 8
│   ├── robots.ts           ← Chunk 8
│   ├── privacy/
│   │   └── page.tsx        ← Chunk 8
│   └── terms/
│       └── page.tsx        ← Chunk 8
├── components/
│   ├── Navbar.tsx          ← Chunk 2
│   ├── Hero.tsx            ← Chunk 3
│   ├── Stats.tsx           ← Chunk 4
│   ├── Features.tsx        ← Chunk 4
│   ├── Screenshots.tsx     ← Chunk 5
│   ├── About.tsx           ← Chunk 6
│   ├── Download.tsx        ← Chunk 6
│   ├── PrivacySection.tsx  ← Chunk 7
│   ├── Footer.tsx          ← Chunk 7
│   ├── PrivacyPage.tsx     ← Chunk 8
│   └── TermsPage.tsx       ← Chunk 8
├── context/
│   └── LanguageContext.tsx ← Chunk 1
└── lib/
    └── content.ts          ← Chunk 1

public/
├── images/
│   ├── screenshot-1.png   ← Chunk 9
│   ├── screenshot-2.png   ← Chunk 9
│   ├── screenshot-3.png   ← Chunk 9
│   └── screenshot-4.png   ← Chunk 9
└── og-image.png            ← Chunk 9
```
