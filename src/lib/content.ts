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
          bn: "সবার আমল একটি লাইভ শিটে দেখুন। বন্ধুদের দেখে নিজে অনুপ্রাণিত হন।",
          en: "See everyone's amal in a live sheet. Get motivated seeing your friends.",
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
          bn: 'দৈনিক ও সাপ্তাহিক র\u200C্যাংকিং দেখুন। সুস্থ প্রতিযোগিতায় এগিয়ে থাকুন।',
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
      en: "We were a group of friends tracking amal on Google Sheets. Then we thought — can we make this more beautiful, simple and effective? That's where Amol Tracker was born.",
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
