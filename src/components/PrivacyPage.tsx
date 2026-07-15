'use client';

import { useLang } from '@/context/LanguageContext';
import Link from 'next/link';

export default function PrivacyPage() {
  const { lang } = useLang();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--emerald-deep)',
      }}
    >
      {/* Back button */}
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
              transition: 'color 0.2s',
            }}
          >
            ← amoltracker.app
          </Link>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '48px 24px 96px',
        }}
      >
        {/* Last updated badge */}
        <div
          style={{
            display: 'inline-block',
            fontSize: 12,
            color: 'var(--gold-light)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 20,
            padding: '4px 14px',
            marginBottom: 24,
          }}
        >
          {lang === 'bn' ? 'সর্বশেষ হালনাগাদ: জানুয়ারি ২০২৬' : 'Last updated: January 2026'}
        </div>

        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: 'var(--white)',
            marginBottom: 32,
          }}
        >
          {lang === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}
        </h1>

        {lang === 'bn' ? <PrivacyContentBn /> : <PrivacyContentEn />}
      </div>
    </div>
  );
}

function PrivacyContentBn() {
  const h3Style: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 600,
    color: 'var(--gold-light)',
    marginTop: 32,
    marginBottom: 12,
  };

  const pStyle: React.CSSProperties = {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.8,
  };

  const liStyle: React.CSSProperties = {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.8,
  };

  return (
    <>
      <p style={pStyle}>
        আমল ট্র্যাকার আপনার ব্যক্তিগত তথ্য সংগ্রহ করে এবং সেগুলো সুরক্ষিত রাখে। এই প্রাইভেসি
        পলিসিতে বর্ণনা করা হয়েছে কীভাবে আমরা আপনার তথ্য ব্যবহার করি।
      </p>

      <h3 style={h3Style}>১. তথ্য সংগ্রহ</h3>
      <p style={pStyle}>আমরা নিম্নোক্ত তথ্য সংগ্রহ করতে পারি:</p>
      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
        <li style={liStyle}>নাম এবং ইমেইল ঠিকানা</li>
        <li style={liStyle}>দৈনিক আমলের ট্র্যাকিং ডেটা</li>
        <li style={liStyle}>অ্যাপ ব্যবহারের তথ্য</li>
        <li style={liStyle}>ডিভাইসের তথ্য (ডিভাইস মডেল, অপারেটিং সিস্টেম)</li>
      </ul>

      <h3 style={h3Style}>২. তথ্য ব্যবহার</h3>
      <p style={pStyle}>আমরা সংগৃহীত তথ্য নিম্নোক্ত উদ্দেশ্যে ব্যবহার করি:</p>
      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
        <li style={liStyle}>আপনার অ্যাপের অভিজ্ঞতা উন্নত করতে</li>
        <li style={liStyle}>কমিউনিটি ফিচার চালাতে</li>
        <li style={liStyle}>নিরাপত্তা নিশ্চিত করতে</li>
        <li style={liStyle}>সাপোর্ট প্রদান করতে</li>
      </ul>

      <h3 style={h3Style}>৩. তথ্য শেয়ারিং</h3>
      <p style={pStyle}>
        আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে বিক্রি বা শেয়ার করি না। তবে
        আইনানুগ বাধ্যবাধকতা মেনে আমাদের তথ্য প্রকাশ করতে পারি।
      </p>

      <h3 style={h3Style}>৪. নিরাপত্তা</h3>
      <p style={pStyle}>
        আমরা আপনার ডেটা সুরক্ষিত রাখতে যুক্তিসঙ্গত পদ্ধতি ব্যবহার করি। তবে
        ইন্টারনেটে কোনো পদ্ধতি ১০০% নিরাপদ নয়।
      </p>

      <h3 style={h3Style}>৫. শিশুদের গোপনীয়তা</h3>
      <p style={pStyle}>আমাদের অ্যাপ ১৩ বছরের কম বয়সী শিশুদের জন্য প্রস্তুত নয়।</p>

      <h3 style={h3Style}>৬. কুকি</h3>
      <p style={pStyle}>
        আমরা আপনার ব্রাউজারে কুকি সেট করতে পারি যাতে অ্যাপের অভিজ্ঞতা উন্নত হয়।
        আপনি আপনার ব্রাউজার সেটিংস থেকে কুকি নিষ্ক্রিয় করতে পারেন।
      </p>

      <h3 style={h3Style}>৭. নীতি পরিবর্তন</h3>
      <p style={pStyle}>
        আমরা সময়ে সময়ে এই প্রাইভেসি পলিসি আপডেট করতে পারি। যেকোনো পরিবর্তন এই
        পৃষ্ঠায় পোস্ট করা হবে।
      </p>

      <h3 style={h3Style}>৮. যোগাযোগ</h3>
      <p style={pStyle}>
        এই পলিসি সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
      </p>
    </>
  );
}

function PrivacyContentEn() {
  const h3Style: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 600,
    color: 'var(--gold-light)',
    marginTop: 32,
    marginBottom: 12,
  };

  const pStyle: React.CSSProperties = {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.8,
  };

  const liStyle: React.CSSProperties = {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.8,
  };

  return (
    <>
      <p style={pStyle}>
        Amol Tracker collects your personal information and keeps it secure. This
        privacy policy describes how we use your data.
      </p>

      <h3 style={h3Style}>1. Information We Collect</h3>
      <p style={pStyle}>We may collect the following information:</p>
      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
        <li style={liStyle}>Name and email address</li>
        <li style={liStyle}>Daily amal tracking data</li>
        <li style={liStyle}>App usage information</li>
        <li style={liStyle}>Device information (device model, operating system)</li>
      </ul>

      <h3 style={h3Style}>2. How We Use Your Data</h3>
      <p style={pStyle}>We use collected information to:</p>
      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
        <li style={liStyle}>Improve your app experience</li>
        <li style={liStyle}>Power community features</li>
        <li style={liStyle}>Ensure security</li>
        <li style={liStyle}>Provide support</li>
      </ul>

      <h3 style={h3Style}>3. Data Sharing</h3>
      <p style={pStyle}>
        We do not sell or share your personal information with third parties. However,
        we may disclose data when required by law.
      </p>

      <h3 style={h3Style}>4. Security</h3>
      <p style={pStyle}>
        We use reasonable measures to protect your data. However, no method of
        transmission over the internet is 100% secure.
      </p>

      <h3 style={h3Style}>5. Children&apos;s Privacy</h3>
      <p style={pStyle}>Our app is not intended for children under 13 years of age.</p>

      <h3 style={h3Style}>6. Cookies</h3>
      <p style={pStyle}>
        We may use cookies to enhance your app experience. You can disable cookies
        through your browser settings.
      </p>

      <h3 style={h3Style}>7. Changes to This Policy</h3>
      <p style={pStyle}>
        We may update this privacy policy from time to time. Any changes will be
        posted on this page.
      </p>

      <h3 style={h3Style}>8. Contact Us</h3>
      <p style={pStyle}>
        If you have any questions about this policy, please contact us.
      </p>
    </>
  );
}
