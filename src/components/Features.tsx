'use client';

import { useEffect, useRef, useState } from 'react';
import { content } from '@/lib/content';
import { useLang } from '@/context/LanguageContext';

export default function Features() {
  const { t } = useLang();
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
      id="features"
      style={{
        background: 'var(--emerald-deep)',
        padding: '96px 0',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className="section-container">
        {/* Heading */}
        <h2
          className="features-heading"
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: 'var(--white)',
            textAlign: 'center',
          }}
        >
          {t(content.features.heading)}
        </h2>
        <p
          className="features-subheading"
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'center',
            marginTop: 12,
            marginBottom: 64,
          }}
        >
          {t(content.features.subheading)}
        </p>

        {/* Features grid */}
        <div className="features-grid">
          {content.features.items.map((item, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: 24,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(201,168,76,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginTop: 14,
                }}
              >
                {t(item.title)}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.6,
                  marginTop: 8,
                }}
              >
                {t(item.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .features-heading {
          font-size: 36px !important;
        }
        .features-subheading {
          font-size: 16px !important;
        }

        @media (max-width: 1023px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          #features {
            padding: 64px 0 !important;
          }
          .features-heading {
            font-size: 28px !important;
          }
          .features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
