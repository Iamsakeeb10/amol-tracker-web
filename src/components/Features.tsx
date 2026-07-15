'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '@/lib/content';
import { useLang } from '@/context/LanguageContext';

const INITIAL_COUNT = 9;

export default function Features() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const allItems = content.features.items;
  const visibleItems = showAll ? allItems : allItems.slice(0, INITIAL_COUNT);
  const hasMore = allItems.length > INITIAL_COUNT;

  const handleToggle = useCallback(() => {
    const willCollapse = showAll;

    if (willCollapse && ref.current) {
      // Scroll to top of features section before collapsing
      const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const navbarHeight = 64;
      const targetScroll = sectionTop - navbarHeight - 20;

      // Only scroll if user is below the features section header
      if (window.scrollY > targetScroll) {
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }

    setShowAll(!showAll);
  }, [showAll]);

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
          <AnimatePresence initial={false}>
            {visibleItems.map((item, i) => (
              <motion.div
                key={`feature-${i}`}
                className="feature-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.25,
                  delay: showAll && i >= INITIAL_COUNT ? (i - INITIAL_COUNT) * 0.03 : 0,
                  ease: 'easeOut',
                }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: 24,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.transition = 'all 0.2s ease';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.transition = 'all 0.2s ease';
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
                  }}
                >
                  <item.icon size={24} color="var(--gold)" aria-hidden="true" />
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
        {hasMore && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 48,
            }}
          >
            <motion.button
              onClick={handleToggle}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(201,168,76,0.4)',
                borderRadius: 12,
                padding: '14px 32px',
                color: 'var(--gold)',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.1)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
              }}
            >
              <span>{showAll ? t(content.features.showLess) : t(content.features.showMore)}</span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.button>
          </div>
        )}
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
