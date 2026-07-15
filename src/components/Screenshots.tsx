'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { content } from '@/lib/content';
import { useLang } from '@/context/LanguageContext';

export default function Screenshots() {
  const { t } = useLang();
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
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

  const handleError = (i: number) => {
    setImgErrors((prev) => ({ ...prev, [i]: true }));
  };

  return (
    <section
      ref={ref}
      id="screenshots"
      style={{
        background: 'rgba(0,0,0,0.2)',
        padding: '96px 0',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className="section-container">
        {/* Heading */}
        <h2
          className="screenshots-heading"
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: 'var(--white)',
            textAlign: 'center',
          }}
        >
          {t(content.screenshots.heading)}
        </h2>
        <p
          className="screenshots-subheading"
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'center',
            marginTop: 12,
            marginBottom: 64,
          }}
        >
          {t(content.screenshots.subheading)}
        </p>

        {/* Screenshots grid / scroll */}
        <div className="screenshots-grid">
          {content.screenshots.captions.map((caption, i) => (
            <div key={i} className="screenshot-card">
              {/* Phone frame */}
              <div className="screenshot-phone">
                {imgErrors[i] ? (
                  /* Fallback placeholder when image is missing */
                  <div
                    style={{
                      background: 'rgba(201,168,76,0.1)',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(201,168,76,0.5)',
                      fontSize: 13,
                      textAlign: 'center',
                      padding: 12,
                    }}
                  >
                    {t(caption)}
                  </div>
                ) : (
                  <Image
                    src={`/images/screenshot-${i + 1}.png`}
                    alt={t(caption)}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="220px"
                    priority={i === 0}
                    onError={() => handleError(i)}
                  />
                )}
              </div>

              {/* Caption */}
              <p
                style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.5)',
                  textAlign: 'center',
                  marginTop: 12,
                }}
              >
                {t(caption)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .screenshots-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          justify-items: center;
        }
        .screenshot-card {
          width: 220px;
        }
        .screenshot-phone {
          position: relative;
          width: 220px;
          aspect-ratio: 9 / 19;
          border-radius: 28px;
          border: 1.5px solid rgba(201,168,76,0.3);
          background: rgba(13,61,46,0.8);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .screenshots-heading {
          font-size: 36px !important;
        }
        .screenshots-subheading {
          font-size: 16px !important;
        }

        @media (max-width: 1023px) {
          .screenshots-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          #screenshots {
            padding: 64px 0 !important;
          }
          .screenshots-heading {
            font-size: 28px !important;
          }
          .screenshots-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px;
            padding-bottom: 16px;
            -webkit-overflow-scrolling: touch;
          }
          .screenshots-grid::-webkit-scrollbar {
            display: none;
          }
          .screenshot-card {
            flex: 0 0 220px;
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
}
