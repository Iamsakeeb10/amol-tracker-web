'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  MessageCircle,
  Bug,
  Lightbulb,
  ChevronDown,
  HelpCircle,
  Clock,
  ArrowLeft,
  Copy,
  Check,
} from 'lucide-react';
import { content } from '@/lib/content';
import { useLang } from '@/context/LanguageContext';

const EMAIL = 'shakibshovon.10@gmail.com';
const PHONE = '01308831689';

export default function SupportPage() {
  const { t } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--emerald-deep)' }}>
      {/* Top bar */}
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
            <ArrowLeft size={16} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 96px' }}>
        {/* Badge */}
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
          {t(content.support.badge)}
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: 'var(--white)',
            lineHeight: 1.3,
            marginBottom: 12,
          }}
        >
          {t(content.support.title)}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          {t(content.support.subtitle)}
        </p>

        {/* Contact Cards Grid */}
        <div style={gridStyle} className="support-grid">
          {/* Email */}
          <div style={cardStyle}>
            <a href="mailto:shakibshovon.10@gmail.com" style={{ display: 'contents' }}>
              <div style={iconCircleStyle}>
                <Mail size={22} color="var(--gold)" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={cardTitleStyle}>{t(content.support.emailTitle)}</div>
                <div style={cardDescStyle}>{EMAIL}</div>
              </div>
            </a>
            <button
              onClick={() => handleCopy(EMAIL, 'email')}
              style={copyBtnStyle}
              aria-label="Copy email"
            >
              {copied === 'email' ? <Check size={16} color="#22c55e" /> : <Copy size={16} color="rgba(255,255,255,0.5)" />}
            </button>
          </div>

          {/* WhatsApp */}
          <div style={cardStyle}>
            <a
              href="https://wa.me/8801308831689"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'contents' }}
            >
              <div style={iconCircleStyle}>
                <MessageCircle size={22} color="var(--gold)" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={cardTitleStyle}>{t(content.support.whatsappTitle)}</div>
                <div style={cardDescStyle}>{PHONE}</div>
              </div>
            </a>
            <button
              onClick={() => handleCopy(PHONE, 'phone')}
              style={copyBtnStyle}
              aria-label="Copy phone number"
            >
              {copied === 'phone' ? <Check size={16} color="#22c55e" /> : <Copy size={16} color="rgba(255,255,255,0.5)" />}
            </button>
          </div>

          {/* Bug Report */}
          <a
            href="mailto:shakibshovon.10@gmail.com?subject=Bug%20Report%20%E2%80%94%20Amol%20Tracker"
            style={cardStyle}
          >
            <div style={iconCircleStyle}>
              <Bug size={22} color="var(--gold)" />
            </div>
            <div>
              <div style={cardTitleStyle}>{t(content.support.bugTitle)}</div>
              <div style={cardDescStyle}>{t(content.support.bugDesc)}</div>
            </div>
          </a>

          {/* Feature Suggestion */}
          <a
            href="mailto:shakibshovon.10@gmail.com?subject=Feature%20Suggestion%20%E2%80%94%20Amol%20Tracker"
            style={cardStyle}
          >
            <div style={iconCircleStyle}>
              <Lightbulb size={22} color="var(--gold)" />
            </div>
            <div>
              <div style={cardTitleStyle}>{t(content.support.featureTitle)}</div>
              <div style={cardDescStyle}>{t(content.support.featureDesc)}</div>
            </div>
          </a>
        </div>

        {/* Response time */}
        <div style={responseTimeStyle}>
          <Clock size={18} color="var(--gold-light)" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
            {t(content.support.responseTime)}
          </span>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: 56 }}>
          <div style={faqTitleRowStyle}>
            <HelpCircle size={22} color="var(--gold-light)" />
            <h2 style={faqTitleStyle}>{t(content.support.faqTitle)}</h2>
          </div>

          <div style={{ marginTop: 24 }}>
            {content.support.faq.map((item, i) => (
              <div key={i} style={faqItemStyle}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={faqHeaderStyle}
                >
                  <span style={{ flex: 1, textAlign: 'left' }}>{t(item.q)}</span>
                  <ChevronDown
                    size={18}
                    color="rgba(255,255,255,0.5)"
                    style={{
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s',
                      flexShrink: 0,
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div style={faqBodyStyle}>
                    <p style={faqTextStyle}>{t(item.a)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '32px 24px',
          fontSize: 12,
          color: 'rgba(255,255,255,0.4)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          marginTop: 48,
        }}
      >
        © 2026 Amol Tracker. All rights reserved.
      </footer>

      <style>{`
        @media (max-width: 600px) {
          .support-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 16,
};

const cardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 14,
  padding: 20,
  textDecoration: 'none',
  transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
  cursor: 'pointer',
};

const iconCircleStyle: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: '50%',
  background: 'rgba(201,168,76,0.12)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: 'var(--white)',
  marginBottom: 2,
};

const cardDescStyle: React.CSSProperties = {
  fontSize: 13,
  color: 'rgba(255,255,255,0.5)',
};

const responseTimeStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginTop: 24,
  padding: '14px 20px',
  background: 'rgba(201,168,76,0.08)',
  borderRadius: 12,
  border: '1px solid rgba(201,168,76,0.15)',
};

const faqTitleRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};

const faqTitleStyle: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 700,
  color: 'var(--gold-light)',
  margin: 0,
};

const faqItemStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 12,
  marginBottom: 12,
  overflow: 'hidden',
};

const faqHeaderStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '16px 20px',
  background: 'none',
  border: 'none',
  color: 'var(--white)',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'left',
};

const faqBodyStyle: React.CSSProperties = {
  padding: '0 20px 16px',
};

const faqTextStyle: React.CSSProperties = {
  fontSize: 14,
  color: 'rgba(255,255,255,0.6)',
  lineHeight: 1.7,
  margin: 0,
};

const copyBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 6,
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background 0.2s',
  flexShrink: 0,
};

