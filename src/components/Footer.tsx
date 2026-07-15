'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';
import { content } from '@/lib/content';
import { useLang } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLang();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <footer
        ref={ref}
        style={{
          background: 'rgba(0,0,0,0.3)',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          padding: '40px 0',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="section-container" style={{ textAlign: 'center' }}>
          {/* Row 1: App name + tagline */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--gold)' }}>
              🌙 {t(content.nav.brand)}
            </div>
            <p
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.45)',
                marginTop: 8,
              }}
            >
              {t(content.footer.tagline)}
            </p>
          </div>

          {/* Row 2: Footer links */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 24,
              flexWrap: 'wrap',
              marginBottom: 24,
            }}
          >
            <Link href="/privacy" className="footer-link">
              {t(content.footer.privacy)}
            </Link>
            <Link href="/terms" className="footer-link">
              {t(content.footer.terms)}
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.shakib.amol.amol_tracker_app"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Google Play
            </a>
          </div>

          {/* Row 3: Copyright */}
          <p
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            {t(content.footer.copyright)}
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'var(--gold)',
            color: 'var(--emerald-deep)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            transition: 'opacity 0.2s',
          }}
        >
          <ChevronUp size={20} />
        </button>
      )}

      <style>{`
        .footer-link {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--gold-light);
        }
      `}</style>
    </>
  );
}
