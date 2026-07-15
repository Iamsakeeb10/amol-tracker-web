"use client";

import { useLang } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const SCREENSHOT_FILES = [
  "home",
  "community",
  "calendar",
  "leaderboard",
  "quran",
  "dua",
  "counter",
  "asmaul_husna",
  "course",
  "report",
];

export default function Screenshots() {
  const { t } = useLang();
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleError = (i: number) => {
    setImgErrors((prev) => ({ ...prev, [i]: true }));
  };

  const updateScrollButtons = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, [updateScrollButtons]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.cursor = "grab";
      }
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 240;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const total = content.screenshots.captions.length;

  const openPreview = (i: number) => setPreviewIndex(i);
  const closePreview = () => setPreviewIndex(null);
  const prevPreview = () => setPreviewIndex((p) => (p !== null ? (p - 1 + total) % total : null));
  const nextPreview = () => setPreviewIndex((p) => (p !== null ? (p + 1) % total : null));

  useEffect(() => {
    if (previewIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowLeft") prevPreview();
      if (e.key === "ArrowRight") nextPreview();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    document.body.style.scrollbarGutter = "stable";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      document.body.style.scrollbarGutter = "";
    };
  }, [previewIndex]);

  return (
    <section
      ref={ref}
      id="screenshots"
      style={{
        background: "rgba(0,0,0,0.25)",
        padding: "120px 0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div className="section-container">
        {/* Heading */}
        <h2
          className="screenshots-heading"
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "var(--white)",
            textAlign: "center",
          }}
        >
          {t(content.screenshots.heading)}
        </h2>
        <p
          className="screenshots-subheading"
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
            marginTop: 12,
            marginBottom: 64,
          }}
        >
          {t(content.screenshots.subheading)}
        </p>

        {/* Screenshots carousel wrapper */}
        <div className="screenshots-wrapper">
          {/* Left arrow */}
          <button
            className="screenshot-arrow left"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            style={{ opacity: canScrollLeft ? 1 : 0.3 }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="screenshots-scroll"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {content.screenshots.captions.map((caption, i) => (
              <div
                key={i}
                className="screenshot-card"
                onClick={() => openPreview(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openPreview(i)}
              >
                {/* Phone frame */}
                <div className="screenshot-phone">
                  {imgErrors[i] ? (
                    /* Fallback placeholder when image is missing */
                    <div
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(201,168,76,0.5)",
                        fontSize: 13,
                        textAlign: "center",
                        padding: 12,
                      }}
                    >
                      {t(caption)}
                    </div>
                  ) : (
                    <Image
                      src={`/images/${SCREENSHOT_FILES[i]}.png`}
                      alt={t(caption)}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="220px"
                      priority={i < 4}
                      onError={() => handleError(i)}
                    />
                  )}
                </div>

                {/* Caption */}
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    textAlign: "center",
                    marginTop: 12,
                  }}
                >
                  {t(caption)}
                </p>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            className="screenshot-arrow right"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            style={{ opacity: canScrollRight ? 1 : 0.3 }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Preview modal — portaled to body to escape transformed parent */}
      {previewIndex !== null &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="screenshot-modal-overlay" onClick={closePreview}>
            <div className="screenshot-modal" onClick={(e) => e.stopPropagation()}>
              {/* Close */}
              <button className="screenshot-modal-close" onClick={closePreview} aria-label="Close">
                <X size={20} />
              </button>

              {/* Prev */}
              <button className="screenshot-modal-nav prev" onClick={prevPreview} aria-label="Previous">
                <ChevronLeft size={28} />
              </button>

              {/* Image */}
              <div className="screenshot-modal-body">
                <div className="screenshot-modal-phone">
                  {imgErrors[previewIndex] ? (
                    <div
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(201,168,76,0.6)",
                        fontSize: 16,
                        textAlign: "center",
                        padding: 24,
                      }}
                    >
                      {t(content.screenshots.captions[previewIndex])}
                    </div>
                  ) : (
                    <Image
                      src={`/images/${SCREENSHOT_FILES[previewIndex]}.png`}
                      alt={t(content.screenshots.captions[previewIndex])}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 767px) 200px, 280px"
                      priority
                      onError={() => handleError(previewIndex)}
                    />
                  )}
                </div>
                <p className="screenshot-modal-caption">
                  {t(content.screenshots.captions[previewIndex])}
                </p>
              </div>

              {/* Next */}
              <button className="screenshot-modal-nav next" onClick={nextPreview} aria-label="Next">
                <ChevronRight size={28} />
              </button>
            </div>
          </div>,
          document.body,
        )}

      <style>{`
        .screenshots-wrapper {
          position: relative;
          padding: 0 80px;
        }

       .screenshots-scroll {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
  padding: 80px 80px;        /* was "8px 0" — adds space so first/last cards aren't flush against the arrows */
  scroll-padding-inline: 80px; /* keeps snap centering correct with the new padding */
  scroll-behavior: smooth;
}

        .screenshots-scroll:active {
          cursor: grabbing;
        }

        .screenshots-scroll::-webkit-scrollbar {
          display: none;
        }

        .screenshots-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .screenshot-card {
          flex: 0 0 220px;
          scroll-snap-align: center;
          cursor: pointer;
        }

        .screenshot-phone {
          position: relative;
          width: 220px;
          aspect-ratio: 9 / 20;
          border-radius: 28px;
          border: 1.5px solid rgba(201,168,76,0.3);
          background: #0D3D2E;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .screenshot-card:hover .screenshot-phone {
          transform: translateY(-4px);
          box-shadow: 0 24px 70px rgba(0,0,0,0.5);
        }

        .screenshot-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(13,61,46,0.9), rgba(20,80,60,0.9));
          border: 1px solid rgba(201,168,76,0.4);
          color: var(--gold);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .screenshot-arrow:hover {
          background: linear-gradient(135deg, rgba(20,80,60,0.95), rgba(30,100,75,0.95));
          border-color: rgba(201,168,76,0.7);
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 6px 25px rgba(0,0,0,0.4);
        }

        .screenshot-arrow:active {
          transform: translateY(-50%) scale(0.95);
        }

        .screenshot-arrow.left {
          left: 0;
        }

        .screenshot-arrow.right {
          right: 0;
        }

        .screenshots-heading {
          font-size: 36px !important;
        }

        .screenshots-subheading {
          font-size: 16px !important;
        }

        @media (max-width: 767px) {
          #screenshots {
            padding: 80px 0 !important;
          }
          .screenshots-heading {
            font-size: 28px !important;
          }
          .screenshots-wrapper {
            padding: 0;
          }
          .screenshot-arrow {
            display: none;
          }
          @media (max-width: 767px) {
  .screenshots-scroll {
    gap: 16px;
    padding: 24px 24px;        /* was "8px 16px" — enough vertical room for the shadow, plus left/right space to match desktop */
    scroll-padding-inline: 24px;
  }
}
          .screenshot-card {
            flex: 0 0 180px;
          }
          .screenshot-phone {
            width: 180px;
            border-radius: 24px;
          }
        }

        /* ── Preview modal ── */
        .screenshot-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          overflow-y: auto;
          animation: modalFadeIn 0.25s ease;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .screenshot-modal {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          max-height: 92vh;
          animation: modalSlideUp 0.3s ease;
        }

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .screenshot-modal-close {
          position: absolute;
          top: -16px;
          right: -16px;
          z-index: 10;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(13,61,46,0.95), rgba(20,80,60,0.95));
          border: 1px solid rgba(201,168,76,0.4);
          color: var(--gold);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }

        .screenshot-modal-close:hover {
          background: linear-gradient(135deg, rgba(20,80,60,0.95), rgba(30,100,75,0.95));
          border-color: rgba(201,168,76,0.7);
          transform: scale(1.1);
        }

        .screenshot-modal-nav {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(13,61,46,0.9), rgba(20,80,60,0.9));
          border: 1px solid rgba(201,168,76,0.4);
          color: var(--gold);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .screenshot-modal-nav:hover {
          background: linear-gradient(135deg, rgba(20,80,60,0.95), rgba(30,100,75,0.95));
          border-color: rgba(201,168,76,0.7);
          transform: scale(1.08);
        }

        .screenshot-modal-nav:active {
          transform: scale(0.95);
        }

        .screenshot-modal-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .screenshot-modal-phone {
          position: relative;
          height: min(78vh, calc(100vh - 100px));
          width: auto;
          aspect-ratio: 9 / 20;
          border-radius: 36px;
          border: 2px solid rgba(201,168,76,0.35);
          background: #0D3D2E;
          overflow: hidden;
          box-shadow: 0 32px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.1);
        }

        .screenshot-modal-caption {
          font-size: 16px;
          color: rgba(255,255,255,0.75);
          text-align: center;
          letter-spacing: 0.01em;
        }

        @media (max-width: 767px) {
          .screenshot-modal {
            gap: 12px;
          }
          .screenshot-modal-phone {
            height: min(68vh, calc(100vh - 80px));
            border-radius: 28px;
          }
          .screenshot-modal-nav {
            width: 42px;
            height: 42px;
          }
          .screenshot-modal-close {
            top: -12px;
            right: -12px;
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
}
