'use client';

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

const content = {
  lastUpdated: { bn: 'শেষ আপডেট: জুন ২০২৬', en: 'Last updated: June 2026' },
  title: { bn: 'শর্তাবলী', en: 'Terms & Conditions' },
  intro: {
    bn: 'অনুগ্রহ করে আমল ট্র্যাকার ব্যবহার করার আগে এই শর্তাবলী মনোযোগ দিয়ে পড়ুন। অ্যাপটি ডাউনলোড, ইনস্টল বা ব্যবহার করে আপনি এই শর্ত মেনে নিতে সম্মত হন। আপনি সম্মত না হলে, অনুগ্রহ করে অ্যাপটি ব্যবহার করবেন না।',
    en: 'Please read these Terms and Conditions carefully before using Amol Tracker. By downloading, installing, or using the app, you agree to be bound by these terms. If you do not agree, please do not use the app.',
  },
  s1: { bn: '১. আমল ট্র্যাকার সম্পর্কে', en: '1. About Amol Tracker' },
  s1_desc: {
    bn: 'আমল ট্র্যাকার একটি বিনামূল্যের মোবাইল অ্যাপ যা মুসলমানদের প্রতিদিনের ইসলামিক অভ্যাস (আমল) ট্র্যাক করতে, স্ট্রিক ও রিমাইন্ডারের মাধ্যমে ধারাবাহিকতা বজায় রাখতে এবং কমিউনিটি জবাবদিহিতার মাধ্যমে অনুপ্রাণিত থাকতে সাহায্য করে।',
    en: 'Amol Tracker is a free mobile application designed to help Muslims track their daily Islamic habits (amal), maintain consistency through streaks and reminders, and stay motivated through community accountability.',
  },
  s1_highlight: {
    bn: 'এই অ্যাপটি ব্যক্তিগত উন্নয়ন ও কমিউনিটি জবাবদিহিতার একটি হাতিয়ার হিসাবে তৈরি। এটি কোনো ধর্মীয় কর্তৃপক্ষ নয়। সকল ইসলামিক বিষয়বস্তু শুধুমাত্র রেফারেন্স হিসাবে প্রদান করা হয়েছে। ধর্মীয় সিদ্ধান্তের জন্য একজন যোগ্য আলেমের সাথে পরামর্শ করুন।',
    en: 'This app is built as a tool for personal improvement and community accountability. It is not a religious authority. All Islamic content is provided for reference only. Please consult a qualified scholar for religious rulings.',
  },
  s2: { bn: '২. যোগ্যতা', en: '2. Eligibility' },
  s2_list: [
    { bn: 'এই অ্যাপ ব্যবহার করতে আপনার বয়স কমপক্ষে ১৩ বছর হতে হবে।', en: 'You must be at least 13 years old to use this app.' },
    { bn: 'অ্যাপ ব্যবহার করে আপনি নিশ্চিত করছেন যে আপনার বয়স ১৩ বা তার বেশি, অথবা ১৩-১৮ বছর বয়সী হলে অভিভাবকের সম্মতি রয়েছে।', en: 'By using the app, you confirm that you are 13 or older, or that you have parental consent if you are between 13–18 years old.' },
    { bn: 'অ্যাকাউন্ট তৈরি করার সময় আপনাকে সঠিক তথ্য প্রদান করতে হবে।', en: 'You must provide accurate information when creating your account.' },
  ],
  s3: { bn: '৩. ব্যবহারকারী অ্যাকাউন্ট', en: '3. User Account' },
  s3_1: { bn: '৩.১ অ্যাকাউন্ট তৈরি', en: '3.1 Account Creation' },
  s3_1_list: [
    { bn: 'আপনি আপনার গুগল অ্যাকাউন্ট বা অতিথি (anonymous) হিসাবে সাইন ইন করতে পারেন।', en: 'You can sign in using your Google account or as an anonymous guest.' },
    { bn: 'আপনার গুগল অ্যাকাউন্টের নিরাপত্তা এবং আপনার আমল ট্র্যাকার অ্যাকাউন্টের মাধ্যমে যেকোনো কার্যকলাপের দায়িত্ব আপনার।', en: 'You are responsible for maintaining the security of your Google account and any activity that occurs through your Amol Tracker account.' },
    { bn: 'আপনি প্রতিজন ব্যক্তির জন্য শুধুমাত্র একটি অ্যাকাউন্ট তৈরি করতে পারেন।', en: 'You may only create one account per person.' },
  ],
  s3_2: { bn: '৩.২ অ্যাকাউন্ট বন্ধকরণ', en: '3.2 Account Termination' },
  s3_2_list: [
    { bn: 'আপনি যেকোনো সময় আমাদের সাথে যোগাযোগ করে আপনার অ্যাকাউন্ট মুছে ফেলতে পারেন।', en: 'You may delete your account at any time by contacting us.' },
    { bn: 'আমরা এই শর্ত লঙ্ঘনকারী অ্যাকাউন্ট আগাম বিজ্ঞপ্তি ছাড়াই স্থগিত বা বন্ধ করার অধিকার রাখি।', en: 'We reserve the right to suspend or terminate accounts that violate these terms, without prior notice.' },
  ],
  s4: { bn: '৪. গ্রহণযোগ্য ব্যবহার', en: '4. Acceptable Use' },
  s4_desc: {
    bn: 'আপনি আমল ট্র্যাকার শুধুমাত্র এর নির্ধারিত উদ্দেশ্যে ব্যবহার করতে সম্মত হন। আপনাকে অবশ্যই নিম্নলিখিত কাজ করতে হবে না:',
    en: 'You agree to use Amol Tracker only for its intended purpose. You must NOT:',
  },
  s4_list: [
    { bn: 'আপনার প্রদর্শন নাম বা যেকোনো পাবলিক ফিল্ডে আপত্তিজনক, অভদ্র বা ইসলামবিরোধী বিষয়বস্তু পোস্ট করা', en: 'Post offensive, abusive, or un-Islamic content in your display name or any public field' },
    { bn: 'অন্য কারো ভান করা বা বিভ্রান্তিকর প্রদর্শন নাম ব্যবহার করা', en: 'Impersonate another person or use a misleading display name' },
    { bn: 'অ্যাপ বা এর ডেটা হ্যাক, কাজ করানো বা এর সুযোগ নেওয়ার চেষ্টা করা', en: 'Attempt to manipulate, hack, or exploit the app or its data' },
    { bn: 'অন্য ব্যবহারকারীদের স্প্যাম বা হয়রানি করতে অ্যাপ ব্যবহার করা', en: 'Use the app to spam or harass other users' },
    { bn: 'অন্য ব্যবহারকারীদের অনুপযুক্ত বা ক্ষতিকর দুআ পাঠানো', en: 'Send inappropriate or harmful duas to other users' },
    { bn: 'অ্যাপ রিভার্স-ইঞ্জিনিয়ার বা কপি করার চেষ্টা করা', en: 'Attempt to reverse-engineer or copy the app' },
    { bn: 'আমাদের লিখিত সম্মতি ছাড়া যেকোনো বাণিজ্যিক উদ্দেশ্যে অ্যাপ ব্যবহার করা', en: 'Use the app for any commercial purpose without our written consent' },
    { bn: 'লিডারবোর্ড র‍্যাংকিং ম্যানিপুলেট করতে ফেক অ্যাকাউন্ট তৈরি করা', en: 'Create fake accounts to manipulate leaderboard rankings' },
  ],
  s4_warning: {
    bn: 'গ্রহণযোগ্য ব্যবহার লঙ্ঘনের ফলে সতর্কতা ছাড়াই অ্যাকাউন্ট স্থগিত হতে পারে।',
    en: 'Violation of acceptable use may result in immediate account suspension without warning or refund.',
  },
  s5: { bn: '৫. কমিউনিটি বৈশিষ্ট্য', en: '5. Community Features' },
  s5_1: { bn: '৫.১ কমিউনিটি শিট ও লিডারবোর্ড', en: '5.1 Community Sheet & Leaderboard' },
  s5_1_desc: {
    bn: 'আপনার দৈনিক আমল লগ জমা দিয়ে আপনি সম্মত হন যে আপনার ডেটা (প্রদর্শন নাম, ছবি এবং আমল সম্পন্ন অবস্থা) অ্যাপের অন্যান্য যাচাইকৃত ব্যবহারকারীদের কমিউনিটি শিট ও লিডারবোর্ডে দৃশ্যমান হতে পারে।',
    en: 'By submitting your daily amal log, you agree that your data (display name, photo, and amal completion status) may be visible to other authenticated users of the app in the community sheet and leaderboard.',
  },
  s5_1_anon: {
    bn: 'আপনি যেকোনো সময় সেটিংসে Anonymous Mode চালু করে অন্য ব্যবহারকারীদের কাছ থেকে আপনার পরিচয় লুকাতে পারেন।',
    en: 'You can enable Anonymous Mode in Settings at any time to hide your identity from other users.',
  },
  s5_2: { bn: '৫.২ দুআ বৈশিষ্ট্য', en: '5.2 Dua Feature' },
  s5_2_list: [
    { bn: 'দুআ বৈশিষ্ট্য ব্যবহারকারীদের দিনে একবার অন্য ব্যবহারকারীকে একটি দুআ নোটিফিকেশন পাঠানোর সুযোগ দেয়।', en: 'The dua feature allows users to send a single dua notification to another user per day.' },
    { bn: 'অ্যাপের মাধ্যমে পাঠানো দুআ শুধুমাত্র বিল্ট-ইন বৈশিষ্ট্যে সীমাবদ্ধ এবং ব্যবহারকারীদের যোগাযোগ বা হয়রানি করতে ব্যবহার করা যাবে না।', en: 'Duas sent through the app are limited to the built-in feature and must not be used to contact or harass users.' },
    { bn: 'যেকোনো ব্যবহারকারী যিনি এটি অনুচিতভাবে ব্যবহার করেন তার জন্য দুআ বৈশিষ্ট্য বন্ধ করার অধিকার আমাদের রয়েছে।', en: 'We reserve the right to disable the dua feature for any user who misuses it.' },
  ],
  s5_3: { bn: '৫.৩ ব্যবহারকারীর বিষয়বস্তু', en: '5.3 User Content' },
  s5_3_desc: {
    bn: 'আপনি যেকোনো বিষয়বস্তু প্রদান করেন (প্রদর্শন নাম ইত্যাদি) তা যথাযথ, সম্মানজনক এবং ইসলামিক মূল্যবোধের সাথে সামঞ্জস্যপূর্ণ হতে হবে। এই মানদণ্ড লঙ্ঘনকারী বিষয়বস্তু সরিয়ে ফেলার অধিকার আমাদের রয়েছে।',
    en: 'Any content you provide (display name, etc.) must be appropriate, respectful, and consistent with Islamic values. We reserve the right to remove content that violates these standards.',
  },
  s6: { bn: '৬. আমল ডেটা ও নির্ভুলতা', en: '6. Amal Data & Accuracy' },
  s6_highlight: {
    bn: 'আমল ট্র্যাকার একটি স্ব-রিপোর্টিং টুল। আমরা সম্পূর্ণভাবে আপনার সৎ তথ্যের উপর নির্ভরশীল। অ্যাপটি আপনাকে সাহায্য করার একটি হাতিয়ার — এর মূল্য আপনার নিয়তের উপর নির্ভরশীল। মনে রাখবেন: আল্লাহ আমাদের অন্তরে যা আছে তা জানেন।',
    en: 'Amol Tracker is a self-reporting tool. We rely entirely on your honest input. The app is a tool to help you — its value depends on your sincerity. Remember: Allah knows what is in our hearts.',
  },
  s6_list: [
    { bn: 'সকল আমল লগ ব্যবহারকারী দ্বারা স্ব-রিপোর্টেড। আমল প্রকৃতপক্ষে সম্পাদিত হয়েছে কিনা আমরা যাচাই করি না।', en: 'All amal logs are self-reported by the user. We do not verify whether amal was actually performed.' },
    { bn: 'স্কোর, স্ট্রিক এবং লিডারবোর্ড অবস্থান আপনার জমাকৃত ডেটার উপর ভিত্তি করে গণনা করা হয়।', en: 'Scores, streaks, and leaderboard positions are calculated based on your submitted data.' },
    { bn: 'এই অ্যাপ ব্যবহারের ভিত্তিতে যেকোনো ধর্মীয় বা আধ্যাত্মিক ফলাফলের জন্য আমরা দায়ী নই।', en: 'We are not responsible for any religious or spiritual outcomes based on your use of this app.' },
  ],
  s7: { bn: '৭. ইসলামিক বিষয়বস্তু দাবি-অস্বীকার', en: '7. Islamic Content Disclaimer' },
  s7_desc: {
    bn: 'আমল ট্র্যাকারে হাদিস, দুআ এবং আমল পরামর্শসহ ইসলামিক বিষয়বস্তু রয়েছে। অনুগ্রহ করে মনে রাখবেন:',
    en: 'Amol Tracker includes Islamic content such as hadiths, duas, and amal suggestions. Please note:',
  },
  s7_list: [
    { bn: 'সকল হাদিস সনদপ্রাপ্ত সংকলন (বুখারী, মুসলিম ইত্যাদি) থেকে নেওয়া হয়েছে কিন্তু শুধুমাত্র অনুপ্রেরণামূলক উদ্দেশ্যে প্রদান করা হয়েছে।', en: 'All hadiths are sourced from authentic collections (Bukhari, Muslim, etc.) but are provided for motivational purposes only.' },
    { bn: 'অ্যাপটি কোনো ফাতওয়া প্ল্যাটফর্ম নয়। ইসলামিক আইনি সিদ্ধান্তের জন্য অ্যাপের উপর নির্ভর করবেন না।', en: 'The app is not a fatwa platform. Do not rely on the app for Islamic legal rulings.' },
    { bn: 'নামাজের সময় এবং ইসলামিক তারিখ গণনা আনুমানিক। সঠিক সময়ের জন্য আপনার স্থানীয় মসজিদের সাথে যাচাই করুন।', en: 'Prayer times and Islamic date calculations are approximations. Please verify with your local mosque for exact times.' },
    { bn: 'এই অ্যাপ ব্যবহার করলে কোনো ধর্মীয় দায়িত্ব পূরণ হয় বা আধ্যাত্মিক উপকার নিশ্চিত হয় এমন কোনো দাবি আমাদের নেই।', en: 'We make no claim that using this app fulfills any religious obligation or guarantees spiritual benefit.' },
  ],
  s8: { bn: '৮. বৌদ্ধিক সম্পত্তি', en: '8. Intellectual Property' },
  s8_list: [
    { bn: 'আমল ট্র্যাকার অ্যাপ, এর ডিজাইন, কোড এবং ব্র্যান্ড ডেভেলপারের মালিকানাধীন।', en: 'The Amol Tracker app, its design, code, and brand are owned by the developer.' },
    { bn: 'লিখিত অনুমতি ছাড়া এই অ্যাপের ভিত্তিতে কপি, পরিবর্তন, বিতরণ বা ডেরিভেটিভ কাজ তৈরি করতে পারবেন না।', en: 'You may not copy, modify, distribute, or create derivative works based on this app without written permission.' },
    { bn: 'অ্যাপে উদ্ধৃত ইসলামিক টেক্সট (কুরআনের আয়াত, হাদিস) পাবলিক ডোমেইনে।', en: 'Islamic texts (Quran verses, hadiths) quoted in the app are in the public domain.' },
  ],
  s9: { bn: '৯. উপলব্ধতা ও আপডেট', en: '9. Availability & Updates' },
  s9_list: [
    { bn: 'আমল ট্র্যাকার বিনামূল্যে প্রদান করা হয়। আমরা যেকোনো সময় নোটিশ ছাড়াই সেবা পরিবর্তন, স্থগিত বা বন্ধ করার অধিকার রাখি।', en: 'Amol Tracker is provided free of charge. We reserve the right to modify, suspend, or discontinue the service at any time without notice.' },
    { bn: 'অ্যাপ উন্নত করতে আমরা আপডেট প্রকাশ করতে পারি। কিছু আপডেট সেবা চালিয়ে যেতে প্রয়োজন হতে পারে।', en: 'We may release updates to improve the app. Some updates may be required to continue using the service.' },
    { bn: 'আমরা ১০০% আপটাইমের গ্যারান্টি দিই না। নির্ধারিত বা জরুরি রক্ষণাবেক্ষণের ফলে সাময়িক অনুপলব্ধতা হতে পারে।', en: 'We do not guarantee 100% uptime. Scheduled or emergency maintenance may cause temporary unavailability.' },
  ],
  s10: { bn: '১০. দায়বদ্ধতার সীমাবদ্ধতা', en: '10. Limitation of Liability' },
  s10_desc: {
    bn: 'আইনের অনুমোজিত সর্বোচ্চ পরিমাণে, আমল ট্র্যাকার এবং এর ডেভেলপার নিম্নলিখিত বিষয়ে দায়ী নন:',
    en: 'To the maximum extent permitted by law, Amol Tracker and its developer are not liable for:',
  },
  s10_list: [
    { bn: 'প্রযুক্তিগত সমস্যায় আমল ডেটা হারানো', en: 'Any loss of amal data due to technical issues' },
    { bn: 'ভুল নামাজের সময় বা হিজরি তারিখ গণনা', en: 'Incorrect prayer times or Hijri date calculations' },
    { bn: 'অ্যাপ ব্যবহার থেকে যেকোনো আধ্যাত্মিক বা ধর্মীয় ফলাফল', en: 'Any spiritual or religious outcomes from using the app' },
    { bn: 'অন্য ব্যবহারকারীদের পোস্ট করা বিষয়বস্তু থেকে ক্ষতি', en: 'Any harm caused by content posted by other users' },
    { bn: 'অ্যাপ ব্যবহার থেকে উদ্ভূত যেকোনো পরোক্ষ, আকস্মিক বা পরিণামগত ক্ষতি', en: 'Any indirect, incidental, or consequential damages arising from use of the app' },
  ],
  s10_as_is: {
    bn: 'অ্যাপটি "যেমন আছে" তেমনি প্রদান করা হয়েছে, কোনো ধরনের ওয়ারেন্টি ছাড়া।',
    en: 'The app is provided "as is" without warranties of any kind, express or implied.',
  },
  s11: { bn: '১১. গোপনীয়তা', en: '11. Privacy' },
  s11_desc: {
    bn: 'আমল ট্র্যাকার ব্যবহার আমাদের',
    en: 'Your use of Amol Tracker is also governed by our',
  },
  s11_privacy: { bn: 'প্রাইভেসি পলিসি', en: 'Privacy Policy' },
  s11_end: {
    bn: 'দ্বারাও পরিচালিত, যা এই শর্তাবলীর অন্তর্ভুক্ত।',
    en: ', which is incorporated into these Terms by reference.',
  },
  s12: { bn: '১২. এই শর্তে পরিবর্তন', en: '12. Changes to These Terms' },
  s12_desc: {
    bn: 'আমরা সময়ে সময়ে এই শর্তাবলী আপডেট করতে পারি। আমরা যখন করি, তখন এই পৃষ্ঠার শীর্ষে তারিখ আপডেট করব এবং ইন-অ্যাপ ঘোষণার মাধ্যমে ব্যবহারকারীদের জানাব। পরিবর্তন কার্যকর হওয়ার পর অ্যাপ চালিয়ে গেলে আপনি নতুন শর্ত মেনে নেন।',
    en: 'We may update these Terms and Conditions from time to time. When we do, we will update the date at the top of this page and notify users through an in-app announcement. Your continued use of the app after changes take effect means you accept the new terms.',
  },
  s13: { bn: '১৩. প্রযোজ্য আইন', en: '13. Governing Law' },
  s13_desc: {
    bn: 'এই শর্তাবলী বাংলাদেশের আইন দ্বারা পরিচালিত। আমল ট্র্যাকার ব্যবহার থেকে উদ্ভূত যেকোনো বিরোধ বাংলাদেশের আদালতের এখতিয়ারে অধীন হবে।',
    en: 'These Terms are governed by the laws of Bangladesh. Any disputes arising from the use of Amol Tracker will be subject to the jurisdiction of the courts of Bangladesh.',
  },
  s14: { bn: '১৪. যোগাযোগ করুন', en: '14. Contact Us' },
  s14_desc: {
    bn: 'এই শর্তাবলী সম্পর্কে প্রশ্ন আছে? আমরা সাহায্য করতে প্রস্তুত।',
    en: 'Questions about these Terms? We\'re happy to help.',
  },
};

export default function TermsPage() {
  const { t } = useLang();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--emerald-deep)' }}>
      <div
        style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="section-container">
          <Link
            href="/"
            style={{
              fontSize: 14,
              color: 'var(--gold-light)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            ←
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 96px' }}>
        <div style={badgeStyle}>{t(content.lastUpdated)}</div>

        <h1 style={titleStyle}>{t(content.title)}</h1>

        <p style={pStyle}>{t(content.intro)}</p>

        <h2 style={h2Style}>{t(content.s1)}</h2>
        <p style={pStyle}>{t(content.s1_desc)}</p>
        <div style={highlightStyle}>{t(content.s1_highlight)}</div>

        <h2 style={h2Style}>{t(content.s2)}</h2>
        <ul style={{ paddingLeft: 20 }}>
          {content.s2_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h2 style={h2Style}>{t(content.s3)}</h2>
        <h3 style={h3Style}>{t(content.s3_1)}</h3>
        <ul style={{ paddingLeft: 20 }}>
          {content.s3_1_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>
        <h3 style={h3Style}>{t(content.s3_2)}</h3>
        <ul style={{ paddingLeft: 20 }}>
          {content.s3_2_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h2 style={h2Style}>{t(content.s4)}</h2>
        <p style={pStyle}>{t(content.s4_desc)}</p>
        <div style={cardStyle}>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {content.s4_list.map((item, i) => (
              <li key={i} style={liStyle}>{t(item)}</li>
            ))}
          </ul>
        </div>
        <div style={warningStyle}>{t(content.s4_warning)}</div>

        <h2 style={h2Style}>{t(content.s5)}</h2>
        <h3 style={h3Style}>{t(content.s5_1)}</h3>
        <p style={pStyle}>{t(content.s5_1_desc)}</p>
        <p style={pStyle}>{t(content.s5_1_anon)}</p>

        <h3 style={h3Style}>{t(content.s5_2)}</h3>
        <ul style={{ paddingLeft: 20 }}>
          {content.s5_2_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h3 style={h3Style}>{t(content.s5_3)}</h3>
        <p style={pStyle}>{t(content.s5_3_desc)}</p>

        <h2 style={h2Style}>{t(content.s6)}</h2>
        <div style={highlightStyle}>{t(content.s6_highlight)}</div>
        <ul style={{ paddingLeft: 20 }}>
          {content.s6_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h2 style={h2Style}>{t(content.s7)}</h2>
        <p style={pStyle}>{t(content.s7_desc)}</p>
        <ul style={{ paddingLeft: 20 }}>
          {content.s7_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h2 style={h2Style}>{t(content.s8)}</h2>
        <ul style={{ paddingLeft: 20 }}>
          {content.s8_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h2 style={h2Style}>{t(content.s9)}</h2>
        <ul style={{ paddingLeft: 20 }}>
          {content.s9_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h2 style={h2Style}>{t(content.s10)}</h2>
        <p style={pStyle}>{t(content.s10_desc)}</p>
        <ul style={{ paddingLeft: 20 }}>
          {content.s10_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>
        <p style={pStyle}>{t(content.s10_as_is)}</p>

        <h2 style={h2Style}>{t(content.s11)}</h2>
        <p style={pStyle}>
          {t(content.s11_desc)}{' '}
          <Link href="/privacy" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
            {t(content.s11_privacy)}
          </Link>
          , {t(content.s11_end)}
        </p>

        <h2 style={h2Style}>{t(content.s12)}</h2>
        <p style={pStyle}>{t(content.s12_desc)}</p>

        <h2 style={h2Style}>{t(content.s13)}</h2>
        <p style={pStyle}>{t(content.s13_desc)}</p>

        <div style={contactBoxStyle}>
          <h2 style={contactBoxH2Style}>{t(content.s14)}</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: 12, fontSize: 14 }}>
            {t(content.s14_desc)}
          </p>
          <p style={{ marginTop: 8, fontSize: 14 }}>
            <a href="mailto:shakibshovon.10@gmail.com" style={contactLinkStyle}>
              shakibshovon.10@gmail.com
            </a>
          </p>
        </div>
      </div>

      <footer style={footerStyle}>
        © 2026 Amol Tracker. All rights reserved.
      </footer>
    </div>
  );
}

const badgeStyle: React.CSSProperties = {
  display: 'inline-block',
  fontSize: 12,
  color: 'var(--gold-light)',
  border: '1px solid rgba(201,168,76,0.3)',
  borderRadius: 20,
  padding: '4px 14px',
  marginBottom: 24,
};

const titleStyle: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 700,
  color: 'var(--white)',
  marginBottom: 32,
};

const h2Style: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: 'var(--gold-light)',
  marginTop: 32,
  marginBottom: 12,
  paddingBottom: 8,
  borderBottom: '2px solid rgba(232,201,106,0.3)',
};

const h3Style: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: 'var(--gold-light)',
  marginTop: 20,
  marginBottom: 8,
};

const pStyle: React.CSSProperties = {
  fontSize: 14,
  color: 'rgba(255,255,255,0.7)',
  lineHeight: 1.8,
  marginBottom: 12,
};

const liStyle: React.CSSProperties = {
  fontSize: 14,
  color: 'rgba(255,255,255,0.7)',
  lineHeight: 1.8,
  marginBottom: 6,
};

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.06)',
  borderRadius: 12,
  padding: 20,
  margin: '16px 0',
  border: '1px solid rgba(255,255,255,0.08)',
};

const highlightStyle: React.CSSProperties = {
  background: 'rgba(26,92,66,0.3)',
  borderLeft: '4px solid var(--gold-light)',
  padding: '14px 16px',
  borderRadius: '0 8px 8px 0',
  margin: '16px 0',
  fontSize: 14,
  color: 'rgba(255,255,255,0.75)',
  lineHeight: 1.7,
};

const warningStyle: React.CSSProperties = {
  background: 'rgba(198,40,40,0.15)',
  borderLeft: '4px solid #c62828',
  padding: '14px 16px',
  borderRadius: '0 8px 8px 0',
  margin: '16px 0',
  fontSize: 14,
  color: 'rgba(255,150,150,0.9)',
  lineHeight: 1.7,
};

const contactBoxStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,0.2)',
  borderRadius: 12,
  padding: 24,
  marginTop: 40,
  textAlign: 'center',
};

const contactBoxH2Style: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: 'var(--gold-light)',
  marginBottom: 0,
};

const contactLinkStyle: React.CSSProperties = {
  color: 'var(--gold-light)',
  textDecoration: 'none',
  fontWeight: 600,
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '32px 24px',
  fontSize: 12,
  color: 'rgba(255,255,255,0.4)',
  borderTop: '1px solid rgba(255,255,255,0.06)',
  marginTop: 48,
};
