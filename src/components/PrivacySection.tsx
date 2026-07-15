'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/context/LanguageContext';
import Link from 'next/link';

export default function PrivacySection() {
  const { lang } = useLang();
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

  return (
    <section
      ref={ref}
      id="privacy"
      style={{
        background: 'rgba(0,0,0,0.15)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '64px 0',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '0 24px',
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
            marginBottom: 20,
          }}
        >
          {lang === 'bn' ? 'সর্বশেষ হালনাগাদ: জানুয়ারি ২০২৬' : 'Last updated: January 2026'}
        </div>

        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: 'var(--white)',
            marginBottom: 24,
          }}
        >
          {lang === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}
        </h2>

        {lang === 'bn' ? (
          <PrivacyContentBn />
        ) : (
          <PrivacyContentEn />
        )}

        {/* Full policy link */}
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Link
            href="/privacy"
            style={{
              fontSize: 14,
              color: 'var(--gold-light)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(232,201,106,0.3)',
              paddingBottom: 2,
              transition: 'color 0.2s',
            }}
          >
            {lang === 'bn' ? 'সম্পূর্ণ পলিসি পড়ুন →' : 'Read full policy →'}
          </Link>
        </div>
      </div>
    </section>
  );
}

function PrivacyContentBn() {
  const h3Style: React.CSSProperties = {
    fontSize: 16,
    fontWeight: 600,
    color: 'var(--gold-light)',
    marginTop: 24,
    marginBottom: 8,
  };

  const pStyle: React.CSSProperties = {
    fontSize: 14,
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.8,
  };

  const liStyle: React.CSSProperties = {
    fontSize: 14,
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.8,
  };

  return (
    <>
      <p style={pStyle}>
        আমল ট্র্যাকার আপনার ব্যক্তিগত তথ্য সংগ্রহ করে এবং সেগুলো সুরক্ষিত রাখে। এই প্রাইভেসি
        পলিসিতে বর্ণনা করা হয়েছে কীভাবে আমরা আপনার তথ্য ব্যবহার করি।
      </p>

      <h3 style={h3Style}>তথ্য সংগ্রহ</h3>
      <p style={pStyle}>আমরা নিম্নোক্ত তথ্য সংগ্রহ করতে পারি:</p>
      <ul style={{ paddingLeft: 20 }}>
        <li style={liStyle}>নাম এবং ইমেইল ঠিকানা</li>
        <li style={liStyle}>দৈনিক আমলের ট্র্যাকিং ডেটা</li>
        <li style={liStyle}>অ্যাপ ব্যবহারের তথ্য</li>
        <li style={liStyle}>ডিভাইসের তথ্য (ডিভাইস মডেল, অপারেটিং সিস্টেম)</li>
      </ul>

      <h3 style={h3Style}>তথ্য ব্যবহার</h3>
      <p style={pStyle}>আমরা সংগৃহীত তথ্য নিম্নোক্ত উদ্দেশ্যে ব্যবহার করি:</p>
      <ul style={{ paddingLeft: 20 }}>
        <li style={liStyle}>আপনার অ্যাপের অভিজ্ঞতা উন্নত করতে</li>
        <li style={liStyle}>কমিউনিটি ফিচার চালাতে</li>
        <li style={liStyle}>নিরাপত্তা নিশ্চিত করতে</li>
        <li style={liStyle}>সাপোর্ট প্রদান করতে</li>
      </ul>

      <h3 style={h3Style}>তথ্য শেয়ারিং</h3>
      <p style={pStyle}>
        আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে বিক্রি বা শেয়ার করি না। তবে
        আইনানুগ বাধ্যবাধকতা মেনে আমাদের তথ্য প্রকাশ করতে পারি।
      </p>

      <h3 style={h3Style}>নিরাপত্তা</h3>
      <p style={pStyle}>
        আমরা আপনার ডেটা সুরক্ষিত রাখতে যুক্তিসঙ্গত পদ্ধতি ব্যবহার করি। তবে
        ইন্টারনেটে কোনো পদ্ধতি ১০০% নিরাপদ নয়।
      </p>

      <h3 style={h3Style}>শিশুদের গোপনীয়তা</h3>
      <p style={pStyle}>আমাদের অ্যাপ ১৩ বছরের কম বয়সী শিশুদের জন্য প্রস্তুত নয়।</p>

      <h3 style={h3Style}>যোগাযোগ</h3>
      <p style={pStyle}>
        এই পলিসি সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
      </p>
    </>
  );
}

function PrivacyContentEn() {
  const h3Style: React.CSSProperties = {
    fontSize: 16,
    fontWeight: 600,
    color: 'var(--gold-light)',
    marginTop: 24,
    marginBottom: 8,
  };

  const pStyle: React.CSSProperties = {
    fontSize: 14,
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.8,
  };

  const liStyle: React.CSSProperties = {
    fontSize: 14,
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.8,
  };

  return (
    <>
      <p style={pStyle}>
        Amol Tracker collects your personal information and keeps it secure. This
        privacy policy describes how we use your data.
      </p>

      <h3 style={h3Style}>Information We Collect</h3>
      <p style={pStyle}>We may collect the following information:</p>
      <ul style={{ paddingLeft: 20 }}>
        <li style={liStyle}>Name and email address</li>
        <li style={liStyle}>Daily amal tracking data</li>
        <li style={liStyle}>App usage information</li>
        <li style={liStyle}>Device information (device model, operating system)</li>
      </ul>

      <h3 style={h3Style}>How We Use Your Data</h3>
      <p style={pStyle}>We use collected information to:</p>
      <ul style={{ paddingLeft: 20 }}>
        <li style={liStyle}>Improve your app experience</li>
        <li style={liStyle}>Power community features</li>
        <li style={liStyle}>Ensure security</li>
        <li style={liStyle}>Provide support</li>
      </ul>

      <h3 style={h3Style}>Data Sharing</h3>
      <p style={pStyle}>
        We do not sell or share your personal information with third parties. However,
        we may disclose data when required by law.
      </p>

      <h3 style={h3Style}>Security</h3>
      <p style={pStyle}>
        We use reasonable measures to protect your data. However, no method of
        transmission over the internet is 100% secure.
      </p>

      <h3 style={h3Style}>Children&apos;s Privacy</h3>
      <p style={pStyle}>Our app is not intended for children under 13 years of age.</p>

      <h3 style={h3Style}>Contact Us</h3>
      <p style={pStyle}>
        If you have any questions about this policy, please contact us.
      </p>
    </>
  );
}
