"use client";

import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import { ChevronDown, Moon, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { t } = useLang();

  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "var(--emerald-deep)",
          overflow: "hidden",
        }}
      >
        {/* Islamic geometric SVG pattern */}
        <svg
          style={{
            position: "absolute",
            top: "50%",
            right: "-5%",
            transform: "translateY(-50%)",
            width: 600,
            height: 600,
            opacity: 0.06,
            pointerEvents: "none",
          }}
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="var(--gold)"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            stroke="var(--gold)"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            stroke="var(--gold)"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="60"
            stroke="var(--gold)"
            strokeWidth="0.5"
          />
          <polygon
            points="200,20 220,160 340,120 240,200 340,280 220,240 200,380 180,240 60,280 160,200 60,120 180,160"
            stroke="var(--gold)"
            strokeWidth="0.5"
          />
          <polygon
            points="200,80 215,175 290,155 225,200 290,245 215,225 200,320 185,225 110,245 175,200 110,155 185,175"
            stroke="var(--gold)"
            strokeWidth="0.5"
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={angle}
                x1="200"
                y1="200"
                x2={200 + 180 * Math.cos(rad)}
                y2={200 + 180 * Math.sin(rad)}
                stroke="var(--gold)"
                strokeWidth="0.3"
              />
            );
          })}
        </svg>

        <div
          className="section-container"
          style={{ paddingTop: 100, paddingBottom: 60, width: "100%" }}
        >
          <div
            className="hero-grid"
            style={{
              display: "flex",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* LEFT COLUMN */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  border: "1px solid rgba(201,168,76,0.4)",
                  borderRadius: 999,
                  padding: "6px 16px",
                  fontSize: 13,
                  color: "var(--gold)",
                  marginBottom: 28,
                }}
              >
                <Moon
                  size={14}
                  color="var(--gold)"
                  style={{ marginRight: 6, verticalAlign: 'middle' }}
                  aria-hidden="true"
                />
                {t(content.hero.badge)}
              </div>

              {/* Headline */}
              <h1
                className="hero-headline"
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "var(--white)",
                  whiteSpace: "pre-line",
                  marginBottom: 20,
                }}
              >
                {t(content.hero.headline)}
              </h1>

              {/* Subheadline */}
              <p
                className="hero-subheadline"
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: 520,
                  marginBottom: 32,
                }}
              >
                {t(content.hero.subheadline)}
              </p>

              {/* CTA row — button + subtext side by side */}
              <div
                className="hero-cta-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  marginBottom: 32,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.shakib.amol.amol_tracker_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    background: "#000",
                    color: "#fff",
                    padding: "0 24px",
                    height: 56,
                    boxSizing: "border-box",
                    borderRadius: 12,
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.15)",
                    transition: "background 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#111")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#000")
                  }
                >
                  <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
                    <path
                      d="M1.5 0.5C1 0.9 0.5 1.7 0.5 3.2V28.8C0.5 30.3 1 31.1 1.5 31.5L15.5 16L1.5 0.5Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M22.5 12L18 16L22.5 20L26 17.5C27 16.8 27 16 26 15.3L22.5 12Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M1.5 31.5L15.5 16L18 18.5L1.5 31.5Z"
                      fill="#34A853"
                    />
                    <path
                      d="M22.5 20L18 16L15.5 16L1.5 0.5C2.2 -0.2 3.2 -0.2 4 0.5L22.5 12V20Z"
                      fill="#EA4335"
                    />
                  </svg>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{ fontSize: 11, opacity: 0.7, lineHeight: 1.2 }}
                    >
                      Get it on
                    </span>
                    <span
                      style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.2 }}
                    >
                      Google Play
                    </span>
                  </div>
                </a>

                {/* CTA sub-line — sits beside the button, vertically centered */}
                <div
                  className="hero-cta-sub"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "0 18px",
                    height: 56,
                    boxSizing: "border-box",
                    borderRadius: 999,
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <Sparkles size={16} color="var(--gold)" strokeWidth={2} />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--gold)",
                      letterSpacing: 0.2,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t(content.hero.ctaSub)}
                  </span>
                </div>
              </div>

              {/* Hadith card */}
              <div
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: 12,
                  padding: 16,
                  maxWidth: 480,
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.7,
                  }}
                >
                  {t(content.hero.hadith)}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--gold)",
                    marginTop: 8,
                  }}
                >
                  {t(content.hero.hadithSource)}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN — Phone mockup */}
            <div
              className="hero-phone-col"
              style={{
                flex: "0 0 auto",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <div
                className="hero-phone-frame"
                style={{
                  width: 280,
                  aspectRatio: "9 / 20",
                  background: "#0D3D2E",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: 36,
                  boxShadow: "0 0 80px rgba(201,168,76,0.15)",
                  overflow: "hidden",
                  marginLeft: "auto",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/home.png"
                  alt="Amol Tracker Home Screen"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="280px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.4,
          }}
        >
          <ChevronDown
            size={28}
            style={{ animation: "heroBounce 2s ease-in-out infinite" }}
          />
        </div>
      </section>

      <style>{`
        @keyframes heroBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .hero-headline { font-size: 52px !important; }
        .hero-subheadline { font-size: 18px !important; }
        .hero-phone-frame { width: 280px !important; }

        @media (max-width: 768px) {
          .hero-grid {
            flex-direction: column !important;
            gap: 48px !important;
            text-align: center;
          }
          .hero-headline { font-size: 36px !important; }
          .hero-subheadline { font-size: 16px !important; max-width: 100% !important; }
          .hero-phone-frame { width: 240px !important; }
          .hero-phone-col { order: 2; justify-content: center !important; }
          .hero-cta-row { justify-content: center !important; }
          .hero-cta-row a, .hero-cta-sub { height: 48px !important; }
        }
      `}</style>
    </>
  );
}
