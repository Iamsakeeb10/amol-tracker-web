'use client';

import { useEffect, useRef, useState } from 'react';
import { content } from '@/lib/content';
import { useLang } from '@/context/LanguageContext';

export default function Stats() {
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
      style={{
        background: 'rgba(255,255,255,0.04)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        padding: '32px 0',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="stats-grid"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
            width: '100%',
          }}
        >
          {content.stats.items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && (
                <div
                  className="stats-divider"
                  style={{
                    width: 1,
                    height: 40,
                    background: 'rgba(201,168,76,0.15)',
                    margin: '0 32px',
                    flexShrink: 0,
                  }}
                />
              )}
              <div
                style={{
                  textAlign: 'center',
                  flex: 1,
                  padding: '0 16px',
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: 'var(--gold)',
                    lineHeight: 1.2,
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.55)',
                    marginTop: 4,
                  }}
                >
                  {t(item.label)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid {
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 0;
        }
        .stats-divider {
          display: block !important;
        }

        @media (max-width: 768px) {
          .stats-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 24px 0;
          }
          .stats-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
