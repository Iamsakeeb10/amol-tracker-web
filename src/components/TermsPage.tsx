'use client';

import { useLang } from '@/context/LanguageContext';
import Link from 'next/link';

export default function TermsPage() {
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
          {lang === 'bn' ? 'শর্তাবলী' : 'Terms & Conditions'}
        </h1>

        {lang === 'bn' ? <TermsContentBn /> : <TermsContentEn />}
      </div>
    </div>
  );
}

function TermsContentBn() {
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
        আমল ট্র্যাকার ব্যবহার করে আপনি নিম্নোক্ত শর্তাবলী মেনে নিচ্ছেন। অ্যাপটি ব্যবহার করার
        আগে অনুগ্রহ করে এই শর্তাবলী পড়ুন।
      </p>

      <h3 style={h3Style}>১. সেবা বর্ণনা</h3>
      <p style={pStyle}>
        আমল ট্র্যাকার একটি ইসলামিক হ্যাবিট ট্র্যাকিং অ্যাপ। এটি দৈনিক আমল ট্র্যাক করতে,
        কমিউনিটি সাথে সংযুক্ত থাকতে এবং স্ট্রিক তৈরি করতে সাহায্য করে। অ্যাপটি সম্পূর্ণ
        বিনামূল্যে।
      </p>

      <h3 style={h3Style}>২. ব্যবহারকারীর দায়িত্ব</h3>
      <p style={pStyle}>আপনি নিশ্চিত করছেন যে:</p>
      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
        <li style={liStyle}>আপনি ১৩ বছরের বেশি বয়সী</li>
        <li style={liStyle}>আপনি সত্য তথ্য প্রদান করছেন</li>
        <li style={liStyle}>আপনি অ্যাপটি সঠিকভাবে ব্যবহার করবেন</li>
        <li style={liStyle}>আপনি অন্যদের অধিকার সম্মান করবেন</li>
      </ul>

      <h3 style={h3Style}>৩. বুদ্ধিবৃত্তিক সম্পত্তি</h3>
      <p style={pStyle}>
        অ্যাপটির সকল কন্টেন্ট, ডিজাইন এবং কোড Grey Forge এর বুদ্ধিবৃত্তিক সম্পত্তি।
        আপনি এটি কপি, পরিবর্তন বা বিক্রি করতে পারবেন না।
      </p>

      <h3 style={h3Style}>৪. সীমাবদ্ধ দায়</h3>
      <p style={pStyle}>
        অ্যাপটি "যেমন আছে" ভিত্তিতে প্রদান করা হয়েছে। আমরা অ্যাপের মাধ্যমে প্রদত্ত
        তথ্যের নির্ভুলতা নিশ্চিত করি না। কোনো ক্ষতির জন্য আমরা দায়ী নই।
      </p>

      <h3 style={h3Style}>৫. সেবা পরিবর্তন</h3>
      <p style={pStyle}>
        আমরা যেকোনো সময় অ্যাপের ফিচার পরিবর্তন, আপডেট বা বন্ধ করতে পারি।
      </p>

      <h3 style={h3Style}>৬. অ্যাকাউন্ট বন্ধ</h3>
      <p style={pStyle}>
        শর্তাবলী লঙ্ঘন করলে আমরা আপনার অ্যাকাউন্ট বন্ধ করতে পারি।
      </p>

      <h3 style={h3Style}>৭. আইন</h3>
      <p style={pStyle}>
        এই শর্তাবলী বাংলাদেশের আইন অনুযায়ী পরিচালিত হবে।
      </p>

      <h3 style={h3Style}>৮. যোগাযোগ</h3>
      <p style={pStyle}>
        শর্তাবলী সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
      </p>
    </>
  );
}

function TermsContentEn() {
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
        By using Amol Tracker, you agree to the following terms and conditions.
        Please read these terms carefully before using the app.
      </p>

      <h3 style={h3Style}>1. Service Description</h3>
      <p style={pStyle}>
        Amol Tracker is an Islamic habit tracking app. It helps you track daily
        amal, stay connected with your community, and build streaks. The app is
        completely free to use.
      </p>

      <h3 style={h3Style}>2. User Responsibilities</h3>
      <p style={pStyle}>You agree that:</p>
      <ul style={{ paddingLeft: 20, marginTop: 8 }}>
        <li style={liStyle}>You are at least 13 years old</li>
        <li style={liStyle}>You will provide accurate information</li>
        <li style={liStyle}>You will use the app appropriately</li>
        <li style={liStyle}>You will respect the rights of others</li>
      </ul>

      <h3 style={h3Style}>3. Intellectual Property</h3>
      <p style={pStyle}>
        All content, design, and code in this app are the intellectual property of
        Grey Forge. You may not copy, modify, or sell this app.
      </p>

      <h3 style={h3Style}>4. Limitation of Liability</h3>
      <p style={pStyle}>
        The app is provided &quot;as is&quot;. We do not guarantee the accuracy of
        information provided through the app. We are not liable for any damages.
      </p>

      <h3 style={h3Style}>5. Changes to Service</h3>
      <p style={pStyle}>
        We may modify, update, or discontinue app features at any time.
      </p>

      <h3 style={h3Style}>6. Account Termination</h3>
      <p style={pStyle}>
        We may terminate your account if you violate these terms.
      </p>

      <h3 style={h3Style}>7. Governing Law</h3>
      <p style={pStyle}>
        These terms are governed by the laws of Bangladesh.
      </p>

      <h3 style={h3Style}>8. Contact Us</h3>
      <p style={pStyle}>
        If you have any questions about these terms, please contact us.
      </p>
    </>
  );
}
