'use client';

import { useEffect, useRef, useState } from 'react';
import { Moon } from 'lucide-react';
import { content } from '@/lib/content';
import { useLang } from '@/context/LanguageContext';

export default function Download() {
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
      id="download"
      style={{
        background: 'linear-gradient(rgba(201,168,76,0.08), transparent)',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        padding: '96px 0',
        textAlign: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className="section-container">
        {/* Crescent icon */}
        <div style={{ marginBottom: 24 }}>
          <Moon size={48} color="var(--gold)" role="img" aria-label="Crescent moon" />
        </div>

        {/* Heading */}
        <h2
          className="download-heading"
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: 'var(--white)',
          }}
        >
          {t(content.download.heading)}
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.65)',
            marginTop: 12,
          }}
        >
          {t(content.download.subheading)}
        </p>

        {/* Google Play button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.shakib.amol.amol_tracker_app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: '#000',
            color: '#fff',
            borderRadius: 12,
            padding: '14px 28px',
            marginTop: 40,
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = '#111')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = '#000')
          }
        >
          <svg width="32" height="32" viewBox="0 0 28 32" fill="none">
            <path
              d="M1.5 0.5C1 0.9 0.5 1.7 0.5 3.2V28.8C0.5 30.3 1 31.1 1.5 31.5L15.5 16L1.5 0.5Z"
              fill="#4285F4"
            />
            <path
              d="M22.5 12L18 16L22.5 20L26 17.5C27 16.8 27 16 26 15.3L22.5 12Z"
              fill="#FBBC04"
            />
            <path d="M1.5 31.5L15.5 16L18 18.5L1.5 31.5Z" fill="#34A853" />
            <path
              d="M22.5 20L18 16L15.5 16L1.5 0.5C2.2 -0.2 3.2 -0.2 4 0.5L22.5 12V20Z"
              fill="#EA4335"
            />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <span style={{ fontSize: 11, opacity: 0.7, lineHeight: 1.2 }}>
              Get it on
            </span>
            <span style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.2 }}>
              Google Play
            </span>
          </div>
        </a>

        {/* Sub text */}
        <p
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.4)',
            marginTop: 12,
          }}
        >
          {t(content.download.sub)}
        </p>

        {/* Hadith card */}
        <div
          style={{
            maxWidth: 480,
            margin: '40px auto 0',
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 12,
            padding: 16,
            textAlign: 'left',
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.7,
            }}
          >
            {t(content.download.hadith)}
          </p>
          <p
            style={{
              fontSize: 12,
              color: 'var(--gold)',
              marginTop: 8,
            }}
          >
            {t(content.hero.hadithSource)}
          </p>
        </div>
      </div>

      <style>{`
        .download-heading {
          font-size: 40px !important;
        }

        @media (max-width: 768px) {
          #download {
            padding: 64px 0 !important;
          }
          .download-heading {
            font-size: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
