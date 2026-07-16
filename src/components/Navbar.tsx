'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { content } from '@/lib/content';
import { useLang } from '@/context/LanguageContext';

const navLinks = [
  { key: 'features' as const, href: '#features' },
  { key: 'screenshots' as const, href: '#screenshots' },
  { key: 'about' as const, href: '#about' },
  { key: 'privacy' as const, href: '/privacy' },
  { key: 'support' as const, href: '/support' },
];

export default function Navbar() {
  const { t, toggleLang } = useLang();
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShow(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/')) {
      window.location.href = href;
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className="amol-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 64,
          background: 'rgba(13, 61, 46, 0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
          transform: show ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div
          className="section-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none',
            }}
          >
            <img src="/images/icon.png" alt="" width={32} height={32} style={{ borderRadius: 6 }} />
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                lineHeight: 1,
                color: 'var(--gold-light)',
              }}
            >
              {t(content.nav.brand)}
            </span>
          </a>

          {/* Desktop nav links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
            }}
            className="nav-desktop"
          >
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--gold-light)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')
                }
              >
                {t(content.nav[keyToNav(link.key)])}
              </a>
            ))}
          </div>

          {/* Right side: lang toggle + download + mobile hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={toggleLang}
              style={{
                fontSize: 12,
                border: '1px solid rgba(201,168,76,0.4)',
                background: 'transparent',
                color: 'var(--gold)',
                padding: '8px 14px',
                borderRadius: 20,
                cursor: 'pointer',
                transition: 'all 0.2s',
                height: 34,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.background = 'rgba(201,168,76,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {t(content.nav.langToggle)}
            </button>

            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#download');
              }}
              className="nav-download-btn"
              style={{
                fontSize: 14,
                fontWeight: 600,
                background: 'var(--gold)',
                color: 'var(--emerald-deep)',
                padding: '8px 18px',
                borderRadius: 20,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
                height: 34,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {t(content.nav.download)}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="nav-mobile-toggle"
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: 4,
              }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(13, 61, 46, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setMobileOpen(false); }}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: 8,
            }}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <a
            href="#"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setMobileOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none',
              marginBottom: 16,
            }}
          >
            <img src="/images/icon.png" alt="" width={32} height={32} style={{ borderRadius: 6 }} />
            <span
              style={{
                fontSize: 22,
                fontWeight: 600,
                lineHeight: 1,
                color: 'var(--gold-light)',
              }}
            >
              {t(content.nav.brand)}
            </span>
          </a>

          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--gold-light)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')
              }
            >
              {t(content.nav[keyToNav(link.key)])}
            </a>
          ))}

          <button
            onClick={(e) => { e.stopPropagation(); toggleLang(); }}
            style={{
              fontSize: 14,
              border: '1px solid rgba(201,168,76,0.4)',
              background: 'transparent',
              color: 'var(--gold)',
              padding: '8px 20px',
              borderRadius: 20,
              cursor: 'pointer',
              marginTop: 8,
            }}
          >
            {t(content.nav.langToggle)}
          </button>

          <a
            href="#download"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleNavClick('#download');
            }}
            style={{
              fontSize: 16,
              fontWeight: 600,
              background: 'var(--gold)',
              color: 'var(--emerald-deep)',
              padding: '12px 28px',
              borderRadius: 20,
              textDecoration: 'none',
              marginTop: 8,
            }}
          >
            {t(content.nav.download)}
          </a>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-download-btn { display: inline-flex !important; }
        .nav-mobile-toggle { display: none !important; }
        .amol-nav { height: 64px !important; }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-download-btn { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
          .amol-nav { height: 56px !important; }
        }
      `}</style>
    </>
  );
}

function keyToNav(key: string): 'features' | 'screenshots' | 'about' | 'privacy' | 'support' {
  return key as 'features' | 'screenshots' | 'about' | 'privacy' | 'support';
}
