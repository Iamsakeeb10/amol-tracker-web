'use client';

import { useEffect, useRef, useState } from 'react';
import { content } from '@/lib/content';
import { useLang } from '@/context/LanguageContext';

export default function About() {
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
      id="about"
      style={{
        background: 'var(--emerald-deep)',
        padding: '96px 0',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className="section-container">
        <div className="about-grid">
          {/* LEFT COLUMN */}
          <div>
            <h2
              className="about-heading"
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: 'var(--white)',
              }}
            >
              {t(content.about.heading)}
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
                marginTop: 20,
              }}
            >
              {t(content.about.para1)}
            </p>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
                marginTop: 16,
              }}
            >
              {t(content.about.para2)}
            </p>
          </div>

          {/* RIGHT COLUMN — Value cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {content.about.values.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={20} color="var(--gold)" aria-hidden="true" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--white)',
                    }}
                  >
                    {t(item.title)}
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.5)',
                      marginTop: 2,
                    }}
                  >
                    {t(item.desc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .about-heading {
          font-size: 36px !important;
        }

        @media (max-width: 768px) {
          #about {
            padding: 64px 0 !important;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-heading {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
