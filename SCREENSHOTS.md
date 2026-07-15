# Screenshots — Amol Tracker Website

All images live in `public/images/`. Next.js serves `public/` at the site root.

---

## 1. App Screenshot Carousel (10 images)

**Used in:** `src/components/Screenshots.tsx` (carousel + preview modal)

| # | Filename | Section Name |
|---|----------|-------------|
| 1 | `home.png` | Home Screen |
| 2 | `community.png` | Community Sheet |
| 3 | `calendar.png` | Hijri Calendar |
| 4 | `leaderboard.png` | Leaderboard |
| 5 | `quran.png` | Quran Reader |
| 6 | `dua.png` | Dua Collection |
| 7 | `counter.png` | Dhikr Counter |
| 8 | `asmaul_husna.png` | Asma ul Husna |
| 9 | `course.png` | Quiz |
| 10 | `report.png` | Reports |

---

## 2. Hero Section Phone Mockup

**File:** `public/images/home.png`
**Used in:** `src/components/Hero.tsx` (right column phone frame)

---

## 3. Open Graph / Social Share Image

**File:** `public/og-image.png`
**Dimensions:** 1200 x 630 px
**Used in:** `src/app/layout.tsx` (Open Graph & Twitter card metadata)

---

## Notes

- All images should be PNG format at 9:19 portrait aspect ratio (except og-image).
- Screenshots are displayed inside phone-shaped frames — images don't need device bezels.
- If a screenshot file is missing, the component falls back to a gold-tinted placeholder.
