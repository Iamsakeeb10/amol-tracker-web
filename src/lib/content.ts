import {
  ClipboardList,
  Globe,
  Flame,
  CalendarDays,
  Trophy,
  BookOpen,
  Lock,
  BadgeCheck,
  Handshake,
  Sparkles,
  Bell,
  GraduationCap,
  Brain,
  BarChart3,
  BellRing,
  User,
  Smartphone,
  Languages,
  LogIn,
  WifiOff,
  Settings,
  Share2,
  Repeat,
  Users,
} from 'lucide-react';
import { PrayingHands, Mosque, Tasbih } from './icons';

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
      bn: 'Google Play-এ এখন উপলব্ধ',
      en: 'Now available on Google Play',
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
        value: '৳0',
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
    showMore: { bn: 'আরও দেখুন', en: 'Show More' },
    showLess: { bn: 'কম দেখুন', en: 'Show Less' },
    items: [
      {
        icon: ClipboardList,
        title: { bn: 'দৈনিক আমল লগ', en: 'Daily Amal Log' },
        desc: {
          bn: '৯টি গুরুত্বপূর্ণ আমল ট্র্যাক করুন। ফরয নামাজ থেকে আযকার পর্যন্ত সব।',
          en: 'Track 9 important daily amal. From Fard prayers to daily adhkar.',
        },
      },
      {
        icon: Globe,
        title: { bn: 'কমিউনিটি শিট', en: 'Community Sheet' },
        desc: {
          bn: "সবার আমল একটি লাইভ শিটে দেখুন। বন্ধুদের দেখে নিজে অনুপ্রাণিত হন।",
          en: "See everyone's amal in a live sheet. Get motivated seeing your friends.",
        },
      },
      {
        icon: Flame,
        title: { bn: 'স্ট্রিক সিস্টেম', en: 'Streak System' },
        desc: {
          bn: 'ধারাবাহিকতা গড়ুন। স্ট্রিক ফ্রিজ ও মাইলস্টোন ব্যাজ পান।',
          en: 'Build consistency. Get streak freezes and milestone badges.',
        },
      },
      {
        icon: CalendarDays,
        title: { bn: 'হিজরি ক্যালেন্ডার', en: 'Hijri Calendar' },
        desc: {
          bn: 'ইসলামিক তারিখে আমলের ইতিহাস দেখুন। মাগরিবের পর তারিখ পরিবর্তন।',
          en: 'View amal history in Islamic dates. Date changes after Maghrib.',
        },
      },
      {
        icon: Trophy,
        title: { bn: 'লিডারবোর্ড', en: 'Leaderboard' },
        desc: {
          bn: 'দৈনিক ও সাপ্তাহিক র\u200C্যাংকিং দেখুন। সুস্থ প্রতিযোগিতায় এগিয়ে থাকুন।',
          en: 'Daily and weekly rankings. Stay ahead in healthy competition.',
        },
      },
      {
        icon: BookOpen,
        title: { bn: 'কুরআন রিডার', en: 'Quran Reader' },
        desc: {
          bn: 'অ্যাপের ভেতরেই কুরআন পড়ুন। বাংলা অনুবাদ সহ।',
          en: 'Read Quran inside the app. With Bengali translation.',
        },
      },
      {
        icon: PrayingHands,
        title: { bn: 'দুআ লিস্ট', en: 'Dua List' },
        desc: {
          bn: 'দৈনিক দুআ সংগ্রহ। কমিউনিটি মেম্বারদের দুআ পাঠান।',
          en: 'Collection of daily duas. Send duas to community members.',
        },
      },
      {
        icon: Mosque,
        title: { bn: 'কিবলা ও আযান', en: 'Qibla & Azan' },
        desc: {
          bn: 'কিবলার দিক ও নামাজের সময় রিমাইন্ডার। বাংলাদেশ সময় অনুযায়ী।',
          en: 'Qibla direction and prayer time reminders. Bangladesh time accurate.',
        },
      },
      {
        icon: Tasbih,
        title: { bn: 'যিকর কাউন্টার', en: 'Zikr Counter' },
        desc: {
          bn: 'তাসবীহ গণনা করুন। কাস্টম যিকর সেট করুন।',
          en: 'Count your tasbih. Set custom zikr targets.',
        },
      },
      {
        icon: Sparkles,
        title: { bn: 'আসমাউল হুসনা', en: 'Asma ul Husna' },
        desc: {
          bn: 'সার্চ, ফিল্টার, বিস্তারিত দৃশ্য এবং ইন্টারেক্টিভ কুইজ সহ আল্লাহর ৯৯টি সুন্দর নাম শিখুন ও মুখস্থ করুন।',
          en: 'Learn and memorize the 99 Beautiful Names of Allah with search, filters, detail views, and an interactive quiz.',
        },
      },
      {
        icon: Bell,
        title: { bn: 'সালাতের সময় ও আজান রিমাইন্ডার', en: 'Prayer Times & Adhan' },
        desc: {
          bn: 'কাস্টমাইজযোগ্য আজান অ্যালার্ট এবং কুয়ায়েট আওয়ার্স সহ সুনির্দিষ্ট সালাতের সময়ের নোটিফিকেশন পান।',
          en: 'Get precise prayer time notifications with customizable adhan alerts and quiet hours.',
        },
      },
      {
        icon: GraduationCap,
        title: { bn: 'ইসলামিক কোর্স ও সিলেবাস', en: 'Islamic Courses' },
        desc: {
          bn: 'পাঠ, ভিডিও কনটেন্ট, বুকমার্ক এবং স্পেসড রিপিটিশন রিভিউ শিডিউলিং সহ গঠনমূলক ইসলামিক কোর্সে অ্যাক্সেস পান।',
          en: 'Access structured Islamic courses with lessons, video content, bookmarks, and spaced repetition review.',
        },
      },
      {
        icon: Brain,
        title: { bn: 'কুইজ ও মূল্যায়ন', en: 'Quiz & Assessment' },
        desc: {
          bn: 'টাইমড কুইজ, মাল্টিপল-চয়েস প্রশ্ন, তাৎক্ষণিক স্কোরিং এবং বিস্তারিত ফলাফল দিয়ে আপনার জ্ঞান পরীক্ষা করুন।',
          en: 'Test your knowledge with timed quizzes, multiple-choice questions, instant scoring, and detailed results.',
        },
      },
      {
        icon: BarChart3,
        title: { bn: 'রিপোর্ট ও অ্যানালিটিক্স', en: 'Reports & Analytics' },
        desc: {
          bn: 'বার চার্ট, অন্তর্দৃষ্টি, আমল ব্রেকডাউন এবং শেয়ারযোগ্য রিপোর্ট কার্ড সহ সাপ্তাহিক, মাসিক বা কাস্টম-রেঞ্জ রিপোর্ট দেখুন।',
          en: 'View weekly, monthly, or custom-range reports with bar charts, insights, amal breakdown, and shareable report cards.',
        },
      },
      {
        icon: BellRing,
        title: { bn: 'নোটিফিকেশন ও রিমাইন্ডার', en: 'Notifications & Reminders' },
        desc: {
          bn: 'কাস্টমাইজযোগ্য সকাল/সন্ধ্যা রিমাইন্ডার, স্ট্রিক অ্যালার্ট, কমিউনিটি আপডেট এবং বাধামুক্ত ফোকাসের জন্য কুয়ায়েট আওয়ার্স।',
          en: 'Customizable morning/evening reminders, streak alerts, community updates, and quiet hours for uninterrupted focus.',
        },
      },
      {
        icon: User,
        title: { bn: 'প্রোফাইল ও ব্যাজ', en: 'Profile & Badges' },
        desc: {
          bn: 'আপনার পরিসংখ্যান, অর্জিত ব্যাজ এবং XP অগ্রগতি ট্র্যাক করুন। গোপনীয়তা-সচেতন ব্যবহারকারীদের জন্য নামহীন ডিসপ্লে বেছে নিন।',
          en: 'Track your stats, earned badges, and XP progress. Choose anonymous display for privacy-conscious users.',
        },
      },
      {
        icon: Smartphone,
        title: { bn: 'হোম স্ক্রিন উইজেট', en: 'Home Screen Widget' },
        desc: {
          bn: 'অ্যান্ড্রয়েড হোম স্ক্রিন উইজেট দিয়ে আপনার স্ট্রিক, সম্পন্ন আমল গণনা এবং হিজরি তারিখ এক নজরে দেখুন।',
          en: 'See your streak, completed amal count, and Hijri date at a glance with the Android home screen widget.',
        },
      },
      {
        icon: Languages,
        title: { bn: 'বহুভাষিক সমর্থন', en: 'Multi-Language Support' },
        desc: {
          bn: 'অ্যাপজুড়ে স্থানীয়কৃত UI, তারিখ এবং সংখ্যা সহ সম্পূর্ণ ইংরেজি এবং বাংলা ভাষার সমর্থন।',
          en: 'Full English and Bengali language support with localized UI, dates, and numerals throughout the app.',
        },
      },
      {
        icon: LogIn,
        title: { bn: 'গুগল সাইন-ইন ও ফায়ারবেস অথ', en: 'Google Sign-In & Firebase Auth' },
        desc: {
          bn: 'গুগল দিয়ে দ্রুত এবং নিরাপদ সাইন-ইন। আপনার ডেটা ডিভাইস জুড়ে পূর্ণ সিঙ্ক সহ ফায়ারবেসে নিরাপদে সংরক্ষিত।',
          en: 'Quick and secure sign-in with Google. Your data is safely stored in Firebase with full sync across devices.',
        },
      },
      {
        icon: WifiOff,
        title: { bn: 'অফলাইন সমর্থন', en: 'Offline Support' },
        desc: {
          bn: 'ইন্টারনেট থাকুক বা না থাকুক নিরবচ্ছিন্যভাবে কাজ করে। আপনার আমল ডেটা স্থানীয়ভাবে ক্যাশ করা হয় এবং অনলাইনে ফিরে এলে সিঙ্ক হয়।',
          en: "Works seamlessly with or without internet. Your amal data is cached locally and synced when you're back online.",
        },
      },
      {
        icon: Settings,
        title: { bn: 'অ্যাডমিন ড্যাশবোর্ড', en: 'Admin Dashboard' },
        desc: {
          bn: 'একটি ইন-বিল্ট অ্যাডমিন প্যানেল থেকে ঘোষণা, আমল ফিল্ড, কোর্স, পাঠ, কুইজ এবং পুশ নোটিফিকেশন পরিচালনা করুন।',
          en: 'Manage announcements, amal fields, courses, lessons, quizzes, and push notifications from a built-in admin panel.',
        },
      },
      {
        icon: Share2,
        title: { bn: 'রিপোর্ট শেয়ার করুন', en: 'Share Reports' },
        desc: {
          bn: 'আপনার পরিসংখ্যান ও অন্তর্দৃষ্টি সহ সুন্দর শেয়ারযোগ্য রিপোর্ট কার্ড তৈরি করুন। সোশ্যাল মিডিয়ায় আপনার অগ্রগতি শেয়ার করুন।',
          en: 'Generate beautiful shareable report cards with your stats and insights. Share your progress on social media.',
        },
      },
      {
        icon: Repeat,
        title: { bn: 'স্পেসড রিপিটিশন রিভিউ', en: 'Spaced Repetition Review' },
        desc: {
          bn: 'সময়ের সাথে যা শিখেছেন তা শক্তিশালী করতে স্পেসড রিপিটিশন ব্যবহার করে স্বয়ংক্রিয়ভাবে পাঠ রিভিউ শিডিউল করুন।',
          en: "Automatically schedule lesson reviews using spaced repetition to reinforce what you've learned over time.",
        },
      },
      {
        icon: Users,
        title: { bn: 'কমিউনিটি জবাবদিহিতা', en: 'Community Accountability' },
        desc: {
          bn: 'একটি শেয়ারড শিটে আপনার কমিউনিটির দৈনিক আমল লগ দেখুন। সামাজিক স্বচ্ছতার মাধ্যমে জবাবদিহি থাকুন।',
          en: "View your community's daily amal logs on a shared sheet. Stay accountable through social transparency.",
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
      { bn: 'কুরআন রিডার', en: 'Quran Reader' },
      { bn: 'দোয়া সংগ্রহ', en: 'Dua Collection' },
      { bn: 'যিকির কাউন্টার', en: 'Dhikr Counter' },
      { bn: 'আসমাউল হুসনা', en: 'Asma ul Husna' },
      { bn: 'কুইজ', en: 'Quiz' },
      { bn: 'রিপোর্ট', en: 'Reports' },
    ],
  },
  about: {
    heading: { bn: 'কেন আমল ট্র্যাকার?', en: 'Why Amol Tracker?' },
    para1: {
      bn: 'আমরা একদল বন্ধু Google Sheet-এ আমল ট্র্যাক করতাম। তারপর ভাবলাম — এটাকে আরও সুন্দর, সহজ ও কার্যকর করা যায় না? সেখান থেকেই আমল ট্র্যাকারের জন্ম।',
      en: "We were a group of friends tracking amal on Google Sheets. Then we thought — can we make this more beautiful, simple and effective? That's where Amol Tracker was born.",
    },
    para2: {
      bn: 'অ্যাপটি তৈরি হয়েছে বাংলাদেশি মুসলিমদের জন্য। সম্পূর্ণ বিনামূল্যে, কোনো বিজ্ঞাপন নেই, কোনো প্রিমিয়াম নেই। শুধু নিয়ত বিশুদ্ধ রাখুন — বাকিটা আল্লাহর উপর।',
      en: 'The app is built for Bangladeshi Muslims. Completely free, no ads, no premium. Just keep your intention pure — leave the rest to Allah.',
    },
    values: [
      {
        icon: Lock,
        title: { bn: 'প্রাইভেট', en: 'Private' },
        desc: { bn: 'আপনার ডেটা বিক্রি হয় না', en: 'Your data is never sold' },
      },
      {
        icon: BadgeCheck,
        title: { bn: 'বিনামূল্যে', en: 'Free' },
        desc: { bn: 'সব ফিচার সম্পূর্ণ ফ্রি', en: 'All features completely free' },
      },
      {
        icon: Handshake,
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
      bn: 'মুসলিম উম্মাহর জন্য তৈরি, ভালোবাসা দিয়ে',
      en: 'Built for the Muslim Ummah, with love',
    },
    privacy: { bn: 'প্রাইভেসি পলিসি', en: 'Privacy Policy' },
    terms: { bn: 'শর্তাবলী', en: 'Terms & Conditions' },
    copyright: { bn: '© ২০২৬ আমল ট্র্যাকার · Grey Forge', en: '© 2026 Amol Tracker · Grey Forge' },
  },
} as const;

export type Content = typeof content;
