# Amol Tracker Web - Project Documentation

> **Version**: 0.1.0
> **Last Updated**: 2026-07-16
> **Status**: Early Scaffold (single commit from Create Next App)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Versions](#2-tech-stack--versions)
3. [Directory Structure](#3-directory-structure)
4. [Dependencies Analysis](#4-dependencies-analysis)
5. [Configuration Files](#5-configuration-files)
6. [Source Code Inventory](#6-source-code-inventory)
7. [Theme & Design System](#7-theme--design-system)
8. [Type Definitions](#8-type-definitions)
9. [Current Features](#9-current-features)
10. [Empty / Placeholder Directories](#10-empty--placeholder-directories)
11. [Git History](#11-git-history)
12. [Deployment](#12-deployment)
13. [Feature Roadmap Template](#13-feature-roadmap-template)

---

## 1. Project Overview

**Amol Tracker Web** is a Next.js web application currently in its initial scaffold phase. The project was bootstrapped with `create-next-app` and has a single initial commit. The directory structure suggests a planned feature set around tracking, blogging, cards, forms, and sections — but no business logic has been implemented yet.

**Project Name**: `amol-tracker-web`
**Version**: `0.1.0`
**License**: Private (not published)

---

## 2. Tech Stack & Versions

### Core Framework

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.2.10 | React framework (App Router) |
| `react` | 19.2.4 | UI library |
| `react-dom` | 19.2.4 | React DOM renderer |
| `typescript` | ^5 | Type system |

### Styling

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | ^4 | Utility-first CSS framework |
| `@tailwindcss/postcss` | ^4 | PostCSS plugin for Tailwind |
| `clsx` | ^2.1.1 | Conditional className utility |

### UI & Animation

| Package | Version | Purpose |
|---------|---------|---------|
| `framer-motion` | ^12.42.2 | Animation library |
| `lucide-react` | ^1.24.0 | Icon library |

### Content & Markdown

| Package | Version | Purpose |
|---------|---------|---------|
| `react-markdown` | ^10.1.0 | Markdown renderer |
| `remark-gfm` | ^4.0.1 | GitHub Flavored Markdown plugin |

### Email

| Package | Version | Purpose |
|---------|---------|---------|
| `nodemailer` | ^9.0.3 | Email sending library |
| `@types/nodemailer` | ^8.0.1 | TypeScript types for nodemailer |

### Analytics & Performance

| Package | Version | Purpose |
|---------|---------|---------|
| `@vercel/analytics` | ^2.0.1 | Vercel Analytics |
| `@vercel/speed-insights` | ^2.0.0 | Vercel Speed Insights |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `eslint` | ^9 | Linter |
| `eslint-config-next` | 16.2.10 | Next.js ESLint config |
| `@types/node` | ^20 | Node.js types |
| `@types/react` | ^19 | React types |
| `@types/react-dom` | ^19 | React DOM types |

---

## 3. Directory Structure

```
amol-tracker-web/
├── .git/                    # Git repository
├── .gitignore               # Git ignore rules
├── .mimocode/               # MiMoCode agent config
├── .next/                   # Next.js build output (gitignored)
├── AGENTS.md                # Agent instructions
├── CLAUDE.md                # Claude agent config
├── eslint.config.mjs        # ESLint flat config
├── next-env.d.ts            # Next.js TypeScript declarations
├── next.config.ts           # Next.js configuration
├── node_modules/            # Dependencies (gitignored)
├── package.json             # Project manifest
├── package-lock.json        # Lock file
├── postcss.config.mjs       # PostCSS config (Tailwind)
├── public/                  # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md                # Default Next.js README
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── favicon.ico      # Favicon
│   │   ├── globals.css      # Global styles + theme
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components (EMPTY)
│   │   ├── blog/            # Blog components
│   │   ├── cards/           # Card components
│   │   ├── forms/           # Form components
│   │   ├── layout/          # Layout components (header, footer, nav)
│   │   ├── sections/        # Page section components
│   │   ├── shared/          # Shared/reusable components
│   │   └── ui/              # UI primitives (buttons, inputs, etc.)
│   ├── hooks/               # Custom React hooks (EMPTY)
│   ├── lib/                 # Utility libraries
│   │   ├── data/            # Data layer (EMPTY)
│   │   └── utils/
│   │       └── index.ts     # cn() utility
│   └── types/
│       └── index.ts         # TypeScript interfaces
└── tsconfig.json            # TypeScript config
```

---

## 4. Dependencies Analysis

### Already Installed (Ready to Use)

These packages are installed and available but **not yet used in any component**:

| Package | Status | Suggested Use |
|---------|--------|---------------|
| `framer-motion` | Installed, unused | Page transitions, scroll animations, micro-interactions |
| `lucide-react` | Installed, unused | Icons throughout the UI |
| `react-markdown` | Installed, unused | Blog post rendering, markdown content |
| `remark-gfm` | Installed, unused | Tables, strikethrough, task lists in markdown |
| `nodemailer` | Installed, unused | Contact forms, email notifications |

### Potential Additions (Not Yet Installed)

| Package | Purpose | Priority |
|---------|---------|----------|
| `@tanstack/react-query` | Server state management, caching | High |
| `zustand` or `jotai` | Client state management | Medium |
| `react-hook-form` | Form validation and handling | High |
| `zod` | Schema validation | High |
| `next-auth` | Authentication | High |
| `prisma` + `@prisma/client` | Database ORM | High |
| `date-fns` or `dayjs` | Date formatting | Medium |
| `recharts` or `chart.js` | Data visualization/charts | Medium |
| `react-hot-toast` | Toast notifications | Low |
| `next-intl` or `next-i18n-router` | Internationalization | Low |
| `@storybook/react` | Component documentation | Low |
| `playwright` or `cypress` | E2E testing | Medium |
| `vitest` | Unit testing | Medium |

---

## 5. Configuration Files

### `next.config.ts`
- **Image domains**: `images.unsplash.com`, `images.pexels.com`
- No custom webpack config
- No redirects/rewrites
- No middleware

### `tsconfig.json`
- Target: ES2017
- Module: esnext (bundler resolution)
- Strict mode: enabled
- Path alias: `@/*` → `./src/*`

### `eslint.config.mjs`
- Flat config format (ESLint 9)
- Extends: `next/core-web-vitals`, `next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

### `postcss.config.mjs`
- Single plugin: `@tailwindcss/postcss`

### `.gitignore`
- Standard Next.js ignores
- Environment files (`.env*`)
- Build artifacts

---

## 6. Source Code Inventory

### Files with Implementation

| File | Lines | Purpose |
|------|-------|---------|
| `src/app/layout.tsx` | 66 | Root layout with fonts, analytics, skip-to-content link, dark mode script |
| `src/app/page.tsx` | 12 | Home page — placeholder "Amol Tracker" heading |
| `src/app/globals.css` | 94 | Full theme system (light/dark), custom properties, animations |
| `src/types/index.ts` | 11 | `User` and `ApiResponse<T>` interfaces |
| `src/lib/utils/index.ts` | 5 | `cn()` class name merge utility |

### Key Implementation Details

#### `layout.tsx`
- Uses **Geist** and **Geist Mono** fonts via `next/font/google`
- Dark mode: class-based (`.dark` on `<html>`)
- Inline script to read `localStorage('theme')` and apply dark class before paint (FOUC prevention)
- Skip-to-content link for accessibility
- Vercel Analytics + Speed Insights integrated

#### `globals.css`
- Full design token system with CSS custom properties
- Light theme: white surfaces, blue primary (#3B82F6)
- Dark theme: near-black backgrounds (#0D0D0F), elevated surfaces
- Custom scrollbar styling for dark mode
- `fadeUp` keyframe animation
- Focus-visible outline styling for accessibility

#### `types/index.ts`
```typescript
interface User {
  id: string
  name: string
  email: string
}

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
```

---

## 7. Theme & Design System

### Color Palette

#### Light Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--color-white` | `#FFFFFF` | Page background |
| `--color-surface-50` | `#FAFAFA` | Subtle backgrounds |
| `--color-surface-100` | `#F4F4F5` | Card backgrounds |
| `--color-surface-200` | `#E4E4E7` | Borders |
| `--color-surface-300` | `#D4D4D8` | Disabled elements |
| `--color-primary` | `#3B82F6` | Brand blue |
| `--color-primary-dark` | `#2563EB` | Hover states |
| `--color-primary-light` | `#DBEAFE` | Selection highlight |
| `--color-text-primary` | `#1C1C1E` | Headings |
| `--color-text-body` | `#3F3F46` | Body text |
| `--color-text-muted` | `#71717A` | Secondary text |
| `--color-error` | `#EF4444` | Error states |

#### Dark Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--color-dark-bg` | `#0D0D0F` | Page background |
| `--color-dark-surface` | `#141416` | Card backgrounds |
| `--color-dark-elevated` | `#1C1C1F` | Elevated surfaces |
| `--color-dark-border` | `#2A2A2E` | Borders |
| `--color-dark-border-bright` | `#3A3A3F` | Active borders |
| `--color-dark-text` | `#E8E8EA` | Primary text |
| `--color-dark-muted` | `#6B6B72` | Secondary text |

### Typography
- **Sans**: Geist (variable font)
- **Mono**: Geist Mono (variable font)

### Shadows
- `--shadow-card`: Subtle card elevation
- `--shadow-card-hover`: Blue-tinted hover elevation

---

## 8. Type Definitions

### Current Types

```typescript
// User entity
interface User {
  id: string
  name: string
  email: string
}

// Generic API response wrapper
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
```

### Missing Types (Planned Based on Directory Structure)

- `BlogPost` — for `components/blog/`
- `Card` — for `components/cards/`
- `FormData` — for `components/forms/`
- `NavItem`, `FooterLink` — for `components/layout/`
- `Section` — for `components/sections/`

---

## 9. Current Features

### Implemented
- [x] Next.js App Router setup
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS v4 with PostCSS
- [x] Dark/light theme system (class-based)
- [x] FOUC prevention for dark mode
- [x] Skip-to-content accessibility link
- [x] Vercel Analytics + Speed Insights
- [x] Geist font family
- [x] `cn()` utility for conditional classes
- [x] Basic `User` and `ApiResponse` types
- [x] Image optimization config (Unsplash, Pexels)

### Not Implemented (Planned by Directory Structure)
- [ ] Blog components and pages
- [ ] Card components
- [ ] Form components and handling
- [ ] Layout components (Header, Footer, Navigation)
- [ ] Page sections (Hero, Features, CTA, etc.)
- [ ] Shared/reusable components
- [ ] UI primitives (Button, Input, Modal, etc.)
- [ ] Custom hooks
- [ ] Data layer / API integration
- [ ] Authentication
- [ ] Database integration
- [ ] Email functionality (nodemailer installed but unused)
- [ ] Markdown rendering (react-markdown installed but unused)
- [ ] Animations (framer-motion installed but unused)
- [ ] Icons (lucide-react installed but unused)

---

## 10. Empty / Placeholder Directories

These directories exist but contain no files. They represent **planned feature areas**:

| Directory | Likely Purpose |
|-----------|---------------|
| `src/components/blog/` | Blog post cards, list, detail views |
| `src/components/cards/` | Reusable card components |
| `src/components/forms/` | Contact forms, input forms, form validation |
| `src/components/layout/` | Header, Footer, Sidebar, Navigation |
| `src/components/sections/` | Page sections (Hero, Features, Testimonials, etc.) |
| `src/components/shared/` | Cross-feature shared components |
| `src/components/ui/` | Design system primitives (Button, Input, Badge, etc.) |
| `src/hooks/` | Custom React hooks (useTheme, useAuth, etc.) |
| `src/lib/data/` | API clients, data fetching, static data |

---

## 11. Git History

```
2b3ca71  Initial commit from Create Next App
```

- **1 commit total**
- **No remote configured** (not pushed to any remote)
- **No branches** beyond default

---

## 12. Deployment

### Current Setup
- **Platform**: Vercel (configured via `@vercel/analytics` and `@vercel/speed-insights`)
- **Build**: `next build`
- **Dev**: `next dev` (port 3000)
- **No CI/CD** configured
- **No environment variables** committed (`.env*` gitignored)

### Deployment Checklist (Future)
- [ ] Configure environment variables on Vercel
- [ ] Set up custom domain
- [ ] Configure preview deployments
- [ ] Set up CI/CD pipeline (if needed)

---

## 13. Feature Roadmap Template

Use this template when planning features with AI:

```markdown
### Feature: [Name]
**Version**: [SemVer] e.g., 0.2.0
**Priority**: [P0/P1/P2]
**Dependencies**: [packages to install]
**Types needed**: [new TypeScript interfaces]
**Components**: [new components to create]
**Pages/Routes**: [new routes]
**Hooks**: [new custom hooks]
**Lib/Data**: [new utility or data files]
**Estimated effort**: [S/M/L/XL]

#### Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

#### Technical Notes
- ...
```

### Example Feature Entries

#### v0.2.0 — UI Foundation
- **Packages**: none (use existing)
- **Components**: `ui/Button`, `ui/Input`, `ui/Card`, `ui/Badge`, `ui/Modal`
- **Layout**: `layout/Header`, `layout/Footer`, `layout/Navigation`
- **Types**: `NavItem`, `ButtonVariant`, `InputProps`

#### v0.3.0 — Home Page
- **Packages**: `framer-motion` (installed), `lucide-react` (installed)
- **Sections**: `sections/Hero`, `sections/Features`, `sections/CTA`
- **Animations**: scroll-triggered fade-up, staggered reveals

#### v0.4.0 — Blog
- **Packages**: `react-markdown` (installed), `remark-gfm` (installed)
- **Components**: `blog/BlogCard`, `blog/BlogList`, `blog/BlogPost`
- **Pages**: `/blog`, `/blog/[slug]`
- **Types**: `BlogPost`, `BlogMetadata`
- **Data**: `lib/data/posts.ts` (static) or API integration

#### v0.5.0 — Contact Form
- **Packages**: `nodemailer` (installed), add `react-hook-form`, `zod`
- **Components**: `forms/ContactForm`, `forms/FormInput`
- **API**: `/api/contact` (Next.js API route)
- **Types**: `ContactFormData`

#### v0.6.0 — Authentication (if needed)
- **Packages**: add `next-auth`
- **Components**: `shared/AuthProvider`, `forms/LoginForm`
- **Types**: `Session`, `User` (extend existing)
- **Middleware**: route protection

---

## Notes for AI Planning

When using this document to plan features:

1. **Check installed packages first** — many are already available (framer-motion, lucide-react, react-markdown, nodemailer)
2. **Follow the directory structure** — the `components/` subdirectories indicate planned organization
3. **Use the design system** — colors, shadows, and tokens are defined in `globals.css`
4. **Respect the type pattern** — extend `src/types/index.ts` with new interfaces
5. **Use the `@/*` path alias** — maps to `./src/*`
6. **Dark mode is class-based** — use `dark:` Tailwind variants
7. **No state management yet** — plan which solution fits (zustand, jotai, context)
8. **No API layer yet** — plan data fetching strategy (server actions, API routes, external API)
9. **Vercel is the target** — optimize for Vercel deployment
