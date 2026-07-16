'use client';

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

const content = {
  lastUpdated: { bn: 'শেষ আপডেট: জুন ২০২৬', en: 'Last updated: June 2026' },
  title: { bn: 'প্রাইভেসি পলিসি', en: 'Privacy Policy' },
  intro: {
    bn: 'আমল ট্র্যাকার ("আমরা", "আমাদের", বা "অ্যাপটি") মুসলমানদের প্রতিদিনের ইসলামিক অভ্যাস ট্র্যাক করতে সাহায্য করার জন্য তৈরি। আমরা আপনার গোপনীয়তা গুরুত্বপূর্ণ মনে করি। এই নীতি ব্যাখ্যা করে আমরা কোন ডেটা সংগ্রহ করি, কেন সংগ্রহ করি, এবং এটি কীভাবে রক্ষা করি।',
    en: 'Amol Tracker ("we", "our", or "the app") is built to help Muslims track their daily Islamic habits with sincerity and consistency. We take your privacy seriously. This policy explains what data we collect, why we collect it, and how we protect it.',
  },
  s1: { bn: '১. আমরা যে তথ্য সংগ্রহ করি', en: '1. Information We Collect' },
  s1_1: { bn: '১.১ অ্যাকাউন্ট তথ্য', en: '1.1 Account Information' },
  s1_1_desc: { bn: 'আপনি গুগল দিয়ে সাইন ইন করলে আমরা পাই:', en: 'When you sign in with Google, we receive:' },
  s1_1_list: [
    { bn: 'আপনার প্রদর্শন নাম', en: 'Your display name' },
    { bn: 'আপনার ইমেইল ঠিকানা', en: 'Your email address' },
    { bn: 'আপনার প্রোফাইল ছবির URL', en: 'Your profile photo URL' },
    { bn: 'একটি অনন্য গুগল ব্যবহারকারী ID', en: 'A unique Google user ID' },
  ],
  s1_1_guest: {
    bn: 'আপনি অতিথি (anonymous) হিসাবে সাইন ইন করলে, আমরা শুধুমাত্র একটি এলোমেলো তৈরি anonymous ব্যবহারকারী ID সংরক্ষণ করি। কোনো ব্যক্তিগত তথ্য সংগ্রহ করা হয় না।',
    en: 'If you sign in as a guest (anonymous), we only store a randomly generated anonymous user ID. No personal information is collected.',
  },
  s1_2: { bn: '১.২ আমল লগ ডেটা', en: '1.2 Amal Log Data' },
  s1_2_desc: { bn: 'আপনি প্রতিদিনের আমল লগ করলে আমরা সংরক্ষণ করি:', en: 'When you log your daily amal, we store:' },
  s1_2_list: [
    { bn: 'আপনি প্রতিদিন কোন আমল ফিল্ড সম্পন্ন করেছেন', en: 'Which amal fields you completed each day' },
    { bn: 'আপনার দৈনিক স্কোর', en: 'Your daily score' },
    { bn: 'লগের হিজরি তারিখ', en: 'The Hijri date of the log' },
    { bn: 'জমা দেওয়ার সময়', en: 'Timestamp of submission' },
  ],
  s1_2_note: {
    bn: 'এই ডেটা আমাদের Firebase ডাটাবেসে সংরক্ষিত এবং কমিউনিটি শিট, লিডারবোর্ড এবং আপনার ব্যক্তিগত ইতিহাস চালাতে ব্যবহৃত হয়।',
    en: 'This data is stored in our Firebase database and is used to power the community sheet, leaderboard, and your personal history.',
  },
  s1_3: { bn: '১.৩ ব্যবহারের ডেটা', en: '1.3 Usage Data' },
  s1_3_list: [
    { bn: 'স্ট্রিক এবং ব্যাজ অগ্রগতি', en: 'Streak and badge progress' },
    { bn: 'নোটিফিকেশন পছন্দ', en: 'Notification preferences' },
    { bn: 'ভাষা পছন্দ', en: 'Language preferences' },
    { bn: 'অ্যাপ সেটিংস (quiet hours, anonymous mode)', en: 'App settings (quiet hours, anonymous mode)' },
  ],
  s1_4: { bn: '১.৪ ডিভাইস তথ্য', en: '1.4 Device Information' },
  s1_4_desc: { bn: 'পুশ নোটিফিকেশনের জন্য আমরা সংগ্রহ ও সংরক্ষণ করি:', en: 'For push notifications, we collect and store your:' },
  s1_4_list: [
    { bn: 'Firebase Cloud Messaging (FCM) টোকেন', en: 'Firebase Cloud Messaging (FCM) token' },
  ],
  s1_4_note: {
    bn: 'আমরা আপনার ডিভাইস মডেল, অপারেটিং সিস্টেম সংস্করণ, বা নোটিফিকেশনের বাইরে অন্য কোনো হার্ডওয়্যার তথ্য সংগ্রহ করি না।',
    en: 'We do not collect your device model, operating system version, or any other hardware information beyond what is needed for notifications.',
  },
  s2: { bn: '২. আমরা আপনার তথ্য কীভাবে ব্যবহার করি', en: '2. How We Use Your Information' },
  s2_list: [
    { bn: 'আপনার ব্যক্তিগত হোম স্ক্রিনে আপনার আমল অগ্রগতি প্রদর্শন করতে', en: 'To display your amal progress on your personal home screen' },
    { bn: 'কমিউনিটি শিটে সদস্যদের আমল লগ দেখাতে', en: 'To show community members\' amal logs on the community sheet' },
    { bn: 'লিডারবোর্ড র‍্যাংকিং গণনা ও প্রদর্শন করতে', en: 'To calculate and display leaderboard rankings' },
    { bn: 'দৈনিক রিমাইন্ডার এবং স্ট্রিক নোটিফিকেশন পাঠাতে', en: 'To send daily reminders and streak notifications' },
    { bn: 'আপনার স্ট্রিক এবং ব্যাজ ইতিহাস বজায় রাখতে', en: 'To maintain your streak and badge history' },
    { bn: 'কমিউনিটির মধ্যে দুআ পাঠানো ও গ্রহণ করার সুযোগ দিতে', en: 'To allow you to send and receive duas within the community' },
  ],
  s2_not: { bn: 'আমরা আপনার ডেটা এর জন্য ব্যবহার করি না:', en: 'We do not use your data for:' },
  s2_not_list: [
    { bn: 'তৃতীয় পক্ষকে বিক্রি করা', en: 'Selling to third parties' },
    { bn: 'বিজ্ঞাপন বা মার্কেটিং', en: 'Advertising or marketing' },
    { bn: 'অ্যাপের বাইরে প্রোফাইলিং বা ট্র্যাকিং', en: 'Profiling or tracking outside the app' },
    { bn: 'অ্যাপের ইসলামিক অভ্যাস ট্র্যাকিং ফাংশনের সাথে সম্পর্কহীন যেকোনো উদ্দেশ্য', en: 'Any purpose unrelated to the app\'s Islamic habit tracking function' },
  ],
  s3: { bn: '৩. কমিউনিটি ও পাবলিক ডেটা', en: '3. Community & Public Data' },
  s3_desc: {
    bn: 'আমল ট্র্যাকারে একটি পাবলিক কমিউনিটি শিট আছে যেখানে সকল ব্যবহারকারীর দৈনিক আমল লগ অন্যান্য সাইন-ইন ব্যবহারকারীদের দৃশ্যমান।',
    en: 'Amol Tracker has a public community sheet where all users\' daily amal logs are visible to other signed-in users of the app.',
  },
  s3_list: [
    {
      bn: 'ডিফল্টে, আপনার প্রদর্শন নাম, প্রোফাইল ছবি এবং আমল ডেটা কমিউনিটি শিট ও লিডারবোর্ডে অন্য ব্যবহারকারীদের দৃশ্যমান।',
      en: 'By default, your display name, profile photo, and amal data are visible to other users in the community sheet and leaderboard.',
    },
    {
      bn: 'আপনি যেকোনো সময় সেটিংসে Anonymous Mode চালু করতে পারেন। চালু থাকলে আপনার নাম ও ছবি লুকানো থাকে — অন্য ব্যবহারকারীদের কাছে আপনি "Anonymous" হিসাবে দেখায়।',
      en: 'You can enable Anonymous Mode in Settings at any time. When enabled, your name and photo are hidden — you appear as "Anonymous" to other users.',
    },
    {
      bn: 'Anonymous mode-ও আপনার আমল ডেটা (কোন কাজ সম্পন্ন করেছেন) দৃশ্যমান থাকে — শুধু আপনার পরিচয় লুকানো হয়।',
      en: 'Your amal data (which tasks you completed) remains visible even in anonymous mode — only your identity is hidden.',
    },
  ],
  s4: { bn: '৪. ডেটা সংরক্ষণ ও নিরাপত্তা', en: '4. Data Storage & Security' },
  s4_list: [
    {
      bn: 'সকল ডেটা Google Firebase (Firestore) এ নিরাপদে সংরক্ষিত, Google-এর নিরাপদ অবকাঠামোতে হোস্ট করা।',
      en: 'All data is stored securely on Google Firebase (Firestore), hosted on Google\'s secure infrastructure.',
    },
    { bn: 'সকল ডেটা এনক্রিপ্টেড HTTPS সংযোগের মাধ্যমে প্রেরিত হয়।', en: 'All data is transmitted over encrypted HTTPS connections.' },
    {
      bn: 'Firebase Security Rules দ্বারা আপনার ডেটায় অ্যাক্সেস সুরক্ষিত — ব্যবহারকারীরা শুধু নিজের আমল লগ পড়তে ও লিখতে পারেন।',
      en: 'Access to your data is protected by Firebase Security Rules — users can only read and write their own amal logs.',
    },
    {
      bn: 'ইন্টারনেট ছাড়াই অ্যাপ চালানোর জন্য আপনার ডিভাইসে Hive (এনক্রিপ্টেড লোকাল স্টোরেজ) ব্যবহার করে একটি লোকাল অফলাইন ক্যাশ সংরক্ষিত হয়।',
      en: 'A local offline cache is stored on your device using Hive (encrypted local storage) so the app works without internet.',
    },
  ],
  s5: { bn: '৫. ডেটা সংরক্ষণ সময়কাল', en: '5. Data Retention' },
  s5_list: [
    { bn: 'আপনার অ্যাকাউন্ট সক্রিয় থাকা পর্যন্ত আপনার অ্যাকাউন্ট ডেটা ও আমল লগ সংরক্ষিত থাকে।', en: 'Your account data and amal logs are retained as long as your account is active.' },
    { bn: 'আপনি অ্যাকাউন্ট মুছে ফেললে, আপনার সকল ব্যক্তিগত ডেটা ও আমল লগ ৩০ দিনের মধ্যে স্থায়ীভাবে মুছে ফেলা হবে।', en: 'If you delete your account, all your personal data and amal logs will be permanently deleted within 30 days.' },
    { bn: 'অ্যাকাউন্ট মুছে ফেলার অনুরোধ করতে নিচের ইমেইলে যোগাযোগ করুন।', en: 'To request account deletion, contact us at the email below.' },
  ],
  s6: { bn: '৬. তৃতীয় পক্ষের সেবা', en: '6. Third-Party Services' },
  s6_desc: { bn: 'আমরা নিম্নলিখিত তৃতীয় পক্ষের সেবা ব্যবহার করি:', en: 'We use the following third-party services:' },
  s6_table: {
    headers: [{ bn: 'সেবা', en: 'Service' }, { bn: 'উদ্দেশ্য', en: 'Purpose' }, { bn: 'প্রাইভেসি পলিসি', en: 'Privacy Policy' }],
    rows: [
      [{ bn: 'Google Firebase', en: 'Google Firebase' }, { bn: 'প্রমাণীকরণ, ডাটাবেস, নোটিফিকেশন', en: 'Authentication, database, notifications' }, 'firebase.google.com'],
      [{ bn: 'Google Sign-In', en: 'Google Sign-In' }, { bn: 'অ্যাকাউন্ট প্রমাণীকরণ', en: 'Account authentication' }, 'policies.google.com'],
      [{ bn: 'Firebase Cloud Messaging', en: 'Firebase Cloud Messaging' }, { bn: 'পুশ নোটিফিকেশন', en: 'Push notifications' }, 'firebase.google.com'],
    ],
  },
  s7: { bn: '৭. শিশুদের গোপনীয়তা', en: '7. Children\'s Privacy' },
  s7_desc: {
    bn: 'আমল ট্র্যাকার ১৩ বছর বা তার বেশি বয়সী ব্যবহারকারীদের জন্য নির্ধারিত। আমরা ১৩ বছরের কম বয়সী শিশুদের কাছ থেকে জানাজানি ব্যক্তিগত তথ্য সংগ্রহ করি না। আপনি বিশ্বাস করলে যে ১৩ বছরের কম বয়সী একটি শিশু আমাদের ব্যক্তিগত তথ্য প্রদান করেছে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন এবং আমরা এটি মুছে ফেলব।।',
    en: 'Amol Tracker is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us immediately and we will delete it.',
  },
  s8: { bn: '৮. আপনার অধিকার', en: '8. Your Rights' },
  s8_desc: { bn: 'আপনার অধিকার আছে:', en: 'You have the right to:' },
  s8_list: [
    { bn: 'আমাদের কাছে থাকা আপনার ব্যক্তিগত ডেটা অ্যাক্সেস করতে', en: 'Access the personal data we hold about you' },
    { bn: 'ভুল তথ্য সংশোধনের অনুরোধ করতে', en: 'Request correction of inaccurate data' },
    { bn: 'আপনার অ্যাকাউন্ট ও সম্পর্কিত সকল ডেটা মুছে ফেলার অনুরোধ করতে', en: 'Request deletion of your account and all associated data' },
    { bn: 'অ্যাপ সেটিংসের মাধ্যমে যেকোনো সময় নোটিফিকেশন থেকে বের হতে', en: 'Opt out of notifications at any time through app Settings' },
    { bn: 'অন্য ব্যবহারকারীদের কাছ থেকে আপনার পরিচয় লুকাতে anonymous mode চালু করতে', en: 'Enable anonymous mode to hide your identity from other users' },
  ],
  s9: { bn: '৯. এই নীতিতে পরিবর্তন', en: '9. Changes to This Policy' },
  s9_desc: {
    bn: 'আমরা সময়ে সময়ে এই প্রাইভেসি পলিসি আপডেট করতে পারি। আমরা যখন করি, তখন এই পৃষ্ঠার শীর্ষে "শেষ আপডেট" তারিখ আপডেট করব এবং ইন-অ্যাপ ঘোষণার মাধ্যমে ব্যবহারকারীদের জানাব। পরিবর্তনের পর অ্যাপ ব্যবহার চালিয়ে গেলে আপনি আপডেট করা নীতি মেনে নেন।',
    en: 'We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page and notify users through an in-app announcement. Continued use of the app after changes means you accept the updated policy.',
  },
  s10: { bn: '১০. যোগাযোগ করুন', en: '10. Contact Us' },
  s10_desc: {
    bn: 'এই প্রাইভেসি পলিসি সম্পর্কে প্রশ্ন আছে? আমরা সাহায্য করতে প্রস্তুত।',
    en: 'Questions about this Privacy Policy? We\'re here to help.',
  },
};

export default function PrivacyPage() {
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
        <h3 style={h3Style}>{t(content.s1_1)}</h3>
        <p style={pStyle}>{t(content.s1_1_desc)}</p>
        <ul style={{ paddingLeft: 20 }}>
          {content.s1_1_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>
        <p style={pStyle}>{t(content.s1_1_guest)}</p>

        <h3 style={h3Style}>{t(content.s1_2)}</h3>
        <p style={pStyle}>{t(content.s1_2_desc)}</p>
        <ul style={{ paddingLeft: 20 }}>
          {content.s1_2_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>
        <p style={pStyle}>{t(content.s1_2_note)}</p>

        <h3 style={h3Style}>{t(content.s1_3)}</h3>
        <ul style={{ paddingLeft: 20 }}>
          {content.s1_3_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h3 style={h3Style}>{t(content.s1_4)}</h3>
        <p style={pStyle}>{t(content.s1_4_desc)}</p>
        <ul style={{ paddingLeft: 20 }}>
          {content.s1_4_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>
        <p style={pStyle}>{t(content.s1_4_note)}</p>

        <h2 style={h2Style}>{t(content.s2)}</h2>
        <div style={cardStyle}>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {content.s2_list.map((item, i) => (
              <li key={i} style={liStyle}>{t(item)}</li>
            ))}
          </ul>
        </div>
        <p style={pStyle}>{t(content.s2_not)}</p>
        <div style={cardStyle}>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {content.s2_not_list.map((item, i) => (
              <li key={i} style={liStyle}>{t(item)}</li>
            ))}
          </ul>
        </div>

        <h2 style={h2Style}>{t(content.s3)}</h2>
        <p style={pStyle}>{t(content.s3_desc)}</p>
        <ul style={{ paddingLeft: 20 }}>
          {content.s3_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h2 style={h2Style}>{t(content.s4)}</h2>
        <ul style={{ paddingLeft: 20 }}>
          {content.s4_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h2 style={h2Style}>{t(content.s5)}</h2>
        <ul style={{ paddingLeft: 20 }}>
          {content.s5_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h2 style={h2Style}>{t(content.s6)}</h2>
        <p style={pStyle}>{t(content.s6_desc)}</p>
        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                {content.s6_table.headers.map((h, i) => (
                  <th key={i} style={thStyle}>{t(h)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.s6_table.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => {
                    const isLastRow = ri === content.s6_table.rows.length - 1;
                    if (ci === 2) {
                      const url = cell as string;
                      return (
                        <td key={ci} style={{ ...tdStyle, borderBottom: isLastRow ? 'none' : undefined }}>
                          <a href={`https://${url}`} style={{ color: 'var(--gold-light)' }}>{url}</a>
                        </td>
                      );
                    }
                    return (
                      <td key={ci} style={tdStyle}>
                        {t(cell as { bn: string; en: string })}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2Style}>{t(content.s7)}</h2>
        <p style={pStyle}>{t(content.s7_desc)}</p>

        <h2 style={h2Style}>{t(content.s8)}</h2>
        <p style={pStyle}>{t(content.s8_desc)}</p>
        <ul style={{ paddingLeft: 20 }}>
          {content.s8_list.map((item, i) => (
            <li key={i} style={liStyle}>{t(item)}</li>
          ))}
        </ul>

        <h2 style={h2Style}>{t(content.s9)}</h2>
        <p style={pStyle}>{t(content.s9_desc)}</p>

        <div style={contactBoxStyle}>
          <h2 style={contactBoxH2Style}>{t(content.s10)}</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: 12, fontSize: 14 }}>
            {t(content.s10_desc)}
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

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '8px 12px',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  color: 'var(--gold-light)',
  fontWeight: 600,
  fontSize: 13,
};

const tdStyle: React.CSSProperties = {
  padding: '8px 12px',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  color: 'rgba(255,255,255,0.7)',
  fontSize: 13,
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
