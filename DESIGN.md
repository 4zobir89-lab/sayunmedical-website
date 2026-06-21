# DESIGN.md — Sayun Medical Corporation


## Complete Design System Documentation

> **Version:** 18.0 · **Updated:** 2026-06-21 · **Codename:** "Clinical Trust"

---

## 1. Design Philosophy

### 1.1 Core Identity
The visual identity of Sayun Medical Corporation is built around **clinical trust** — the feeling that patients, doctors, and hospital administrators get when they interact with a brand they can rely on for life-critical equipment.

The palette pairs a **clinical green** (evoking healing, safety, and the medical profession) with a **medical blue accent** (evoking technology, precision, and diagnostics). The combination is deliberately different from the "navy + cyan" and "cream + teal" palettes used in earlier iterations, and draws inspiration from the visual language of global healthcare brands like Philips Healthcare and GE Healthcare.

### 1.2 Design Principles
1. **Trust through clarity** — Every element is legible, every contrast ratio meets WCag AA, every interaction is predictable.
2. **Restraint over decoration** — One accent color, limited shadows, no decorative gradients. The content is the hero.
3. **Bilingual by design** — Arabic (RTL) is the primary language; English (LTR) is a first-class citizen, not an afterthought.
4. **Mobile-first responsiveness** — Every layout is designed at 360px first, then enhanced for 768px, 1024px, 1280px, and 1440px+.
5. **Performance as a feature** — WebP images, system font fallbacks, minimal JS, lazy loading.

---

## 2. Color System

### 2.1 Brand Palette

#### Primary — Clinical Green

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--color-primary` | `#0B6E4F` | `#34D399` | Buttons, links, active states |
| `--color-primary-hover` | `#0D8A63` | `#6EE7B7` | Hover states |
| `--color-primary-active` | `#075940` | `#10B981` | Active/pressed states |
| `--color-primary-light` | `#10B981` | `#A7F3D0` | Highlights, emerald accents |
| `--color-primary-subtle` | `#A7E5C8` | `#064E3B` | Subtle backgrounds |
| `--color-primary-lightest` | `#ECFAF3` | `#052E22` | Lightest tint backgrounds |
| `--color-primary-deep` | `#064531` | `#D1FAE5` | Deep text on light |

#### Accent — Medical Blue

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--color-accent` | `#0EA5E9` | `#38BDF8` | Secondary CTA, badges |
| `--color-accent-light` | `#38BDF8` | `#7DD3FC` | Light accent |
| `--color-accent-hover` | `#0284C7` | `#0EA5E9` | Hover |
| `--color-accent-subtle` | `#E0F2FE` | `#0C2A3E` | Subtle accent bg |

#### Semantic Colors

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--color-success` | `#16A34A` | `#34D399` | Success messages |
| `--color-warning` | `#D97706` | `#FBBF24` | Warning messages |
| `--color-danger` | `#DC2626` | `#F87171` | Error/destructive |
| `--color-info` | `#0EA5E9` | `#60A5FA` | Info messages |

### 2.2 Neutrals

| Token | Light | Dark |
|-------|-------|------|
| `--color-bg` | `#F4F7F5` | `#0A1F1A` |
| `--color-surface` | `#FFFFFF` | `#0F2920` |
| `--color-card` | `#FFFFFF` | `#0F2920` |
| `--color-text` | `#0F172A` | `#F0FDF4` |
| `--color-text-secondary` | `#1E293B` | `#E2F8E8` |
| `--color-text-muted` | `#475569` | `#B8D4C2` |
| `--color-text-disabled` | `#64748B` | `#7BA890` |
| `--color-border` | `#E5E7EB` | `#1F3D33` |
| `--color-border-subtle` | `#F1F5F3` | `#15302A` |
| `--color-border-strong` | `#CBD5E1` | `#2A4D40` |

### 2.3 Dark Mode Surfaces (Cinematic Chapters)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-deep` | `#0A1F1A` | Innovation section, CTA banner |
| `--color-surface-1` | `#0F2920` | Drawer, elevated dark surfaces |
| `--color-surface-2` | `#14342A` | Cards on dark |
| `--color-surface-3` | `#1A3F33` | Hover on dark |
| `--glass-tint` | `rgba(15,41,32,0.72)` | Glass panels |
| `--color-glass-border` | `rgba(255,255,255,0.08)` | Glass borders |

### 2.4 Contrast Compliance (WCag 2.1)

| Pair | Ratio | Level |
|------|-------|-------|
| `--color-text` on `--color-bg` | 15.8:1 | AAA |
| `--color-text-secondary` on `--color-bg` | 13.2:1 | AAA |
| `--color-text-muted` on `--color-bg` | 7.1:1 | AAA |
| `--color-text-disabled` on `--color-bg` | 4.8:1 | AA |
| `--color-text` on `--color-bg-deep` (dark) | 16.5:1 | AAA |
| `--color-text-muted` on `--color-bg-deep` (dark) | 6.2:1 | AA |
| White on `--color-primary` | 5.2:1 | AA |

---

## 3. Typography

### 3.1 Font Families

| Role | Font | Variable | Weights |
|------|------|----------|---------|
| Arabic body + display | Tajawal | `--font-tajawal` | 300, 400, 500, 700, 800 |
| Latin body + numbers | Inter | `--font-inter` | 400, 500, 600, 700 |
| Monospace (code, numbers) | JetBrains Mono | `--font-mono` | 400, 500, 600 |

```css
body {
  font-family: var(--font-tajawal), 'Tajawal', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.7;
}
```

### 3.2 Type Scale (Fluid with `clamp()`)

| Class | Size | Usage |
|-------|------|-------|
| `.t-display` | `clamp(2.5rem, 6vw, 4.5rem)` | Hero headlines |
| `.t-h1` | `clamp(2rem, 4vw, 3rem)` | Page titles |
| `.t-h2` | `clamp(1.5rem, 3vw, 2.25rem)` | Section titles |
| `.t-h3` | `clamp(1.125rem, 2vw, 1.5rem)` | Card titles |
| `.t-h4` | `clamp(1rem, 1.5vw, 1.125rem)` | Sub-titles |
| `.t-body-lg` | `1.125rem` | Lead paragraphs |
| `.t-body` | `1rem` | Body text |
| `.t-body-sm` | `0.875rem` | Secondary text |
| `.t-label` | `0.75rem` | Labels, eyebrows (uppercase, 0.08em tracking) |
| `.t-caption` | `0.75rem` | Captions |

### 3.3 Typography Rules

| Context | Letter-spacing | Line-height |
|---------|---------------|-------------|
| Display (48px+) | -0.02em to -0.04em | 1.0–1.2 |
| Body (15–18px) | 0 | 1.5–1.6 (AR: 1.7–1.8) |
| ALL CAPS labels | 0.08em | 1.5 |
| **Arabic text** | **0 (never apply letter-spacing)** | 1.7–1.8 |

### 3.4 Three-Weight System

| Weight | Value | Usage |
|--------|-------|-------|
| Read | 400 | Body copy |
| Emphasize | 500 | UI labels, navigation |
| Announce | 700–800 | Headlines, buttons |

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (Base-8)

```
4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
```

### 4.2 Section Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--space-section` | `clamp(4rem, 8vw, 6rem)` | Default section padding |
| `--space-section-sm` | `clamp(2.5rem, 5vw, 4rem)` | Compact sections |
| `--space-section-xs` | `clamp(1.5rem, 3vw, 2.5rem)` | Tight sections (trust bar) |

### 4.3 Container

| Token | Value |
|-------|-------|
| `--container-max` | `76rem` (1216px) |
| `--container-px` | `1rem` (mobile), `1.5rem` (sm), `2rem` (lg) |

```css
.container-yps {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-px);
}
```

### 4.4 Breakpoints

| Name | Width | Target |
|------|-------|--------|
| `sm` | 360px+ | Galaxy S10, iPhone SE |
| `md` | 414px+ | iPhone 11/12/13 |
| `lg` | 768px+ | iPad portrait |
| `xl` | 1024px+ | iPad landscape, laptop |
| `2xl` | 1280px+ | Desktop |
| `3xl` | 1440px+ | Large desktop |

> **Note:** Tailwind v4 responsive classes (`lg:`, `xl:`) are unreliable in this project. Use `useIsDesktop` hook (JS) or explicit `@media` queries in CSS for critical responsive behavior.

---

## 5. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `0.375rem` | Badges, small elements |
| `--radius-md` | `0.75rem` | Inputs, small cards |
| `--radius-lg` | `1rem` | Cards, containers |
| `--radius-xl` | `1.5rem` | Large cards, glass panels |
| `--radius-2xl` | `2rem` | Modals, drawers |
| `--radius-full` | `9999px` | Buttons (pill), avatars |

---

## 6. Shadows (Tinted)

All shadows are tinted with the brand color `rgba(7,89,64,...)` instead of pure black, creating a warmer, more cohesive feel.

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(7,89,64,0.04), 0 1px 3px rgba(7,89,64,0.06)` | Default cards |
| `--shadow-md` | `0 2px 8px rgba(7,89,64,0.06), 0 4px 16px rgba(7,89,64,0.08)` | Raised elements |
| `--shadow-lg` | `0 4px 16px rgba(7,89,64,0.06), 0 8px 32px rgba(7,89,64,0.10)` | Hover state |
| `--shadow-xl` | `0 8px 24px rgba(7,89,64,0.08), 0 20px 60px rgba(7,89,64,0.12)` | Modals |
| `--shadow-2xl` | `0 25px 50px -12px rgba(7,89,64,0.25)` | Drawers |
| `--shadow-primary` | `0 4px 16px rgba(11,110,79,0.30)` | Primary button glow |

---

## 7. Motion

### 7.1 Easing

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entering UI, reveals |
| `--ease-base` | `cubic-bezier(0.4, 0, 0.2, 1)` | General transitions |

### 7.2 Durations

| Token | Value | Usage |
|-------|-------|-------|
| `--dur-fast` | `200ms` | Instant feedback (hover, focus) |
| `--dur-base` | `300ms` | Default state changes |
| `--dur-slow` | `500ms` | Image transitions, reveals |

### 7.3 Animation Utilities

| Class | Effect |
|-------|--------|
| `.card-lift` | `translateY(-4px)` + `shadow-xl` on hover |
| `.img-zoom` | `scale(1.05)` on `.group:hover` (500ms) |
| `.img-zoom-slow` | `scale(1.08)` on `.group:hover` (700ms) |
| `.link-underline` | Animated underline (`scaleX(0→1)`) |
| `.badge-pop` | `scale(1.05)` on hover |
| `.btn-shine` | Shine sweep effect on primary CTAs |
| `.skeleton` | Shimmer animation for loading states |

### 7.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Component System

### 8.1 Buttons

| Class | Background | Text | Usage |
|-------|-----------|------|-------|
| `.btn-brand` | `--color-primary` | white | Primary CTA |
| `.btn-accent` | `--color-accent` | white | Secondary CTA |
| `.btn-outline` | transparent | `--color-text` | Tertiary actions |
| `.btn-ghost` | transparent | `--color-text-secondary` | Subtle actions |
| `.btn-white` | white | `--color-primary-deep` | On dark backgrounds |
| `.btn-white-outline` | transparent | white | On dark backgrounds |
| `.btn-destructive` | `--color-danger` | white | Delete actions |
| `.btn-secondary` | `--color-primary-lightest` | `--color-primary` | Soft CTA |

**Sizes:** `.btn-sm` (36px), default (44px), `.btn-lg` (52px)

**States:** hover (`translateY(-1px)` + shadow), active (`translateY(0)`), focus-visible (2px outline), disabled (opacity 0.5)

### 8.2 Cards

| Class | Shadow | Hover | Usage |
|-------|--------|-------|-------|
| `.card` | `--shadow-sm` | `translateY(-4px)` + `--shadow-lg` | Default |
| `.card-pro` | `--shadow-sm` | `translateY(-3px)` + `--shadow-lg` + border change | Products, projects |
| `.card-lift` | none | `translateY(-4px)` + `--shadow-xl` | Featured cards |
| `.card-glass` | `--shadow-sm` | `translateY(-3px)` + `--shadow-md` | Glass panels |
| `.card-glass-premium` | blur(16px) | `translateY(-4px)` + darker bg | Premium overlays |

### 8.3 Badges

| Class | Background | Text | Usage |
|-------|-----------|------|-------|
| `.badge-default` | `--color-primary-lightest` | `--color-primary` | Default |
| `.badge-accent` | `--color-accent-subtle` | `--color-accent` | New items |
| `.badge-success` | `--color-success-bg` | `--color-success` | Success |
| `.badge-warning` | `--color-warning-bg` | `--color-warning` | Warning |
| `.badge-destructive` | `--color-danger-bg` | `--color-danger` | Error |
| `.badge-dark` | `rgba(255,255,255,0.12)` | `rgba(255,255,255,0.85)` | On dark |

### 8.4 Inputs

```css
.input {
  background: var(--color-card);
  border: 1.5px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  min-height: 44px;
  font-size: 0.95rem;
}
.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(11,110,79,0.08);
}
```

### 8.5 Image Utilities

| Class | Effect |
|-------|--------|
| `.img-frame` | `object-fit: cover` container |
| `.img-contain` | `object-fit: contain` container |
| `.img-overlay-bottom` | Brand-green gradient overlay (92% → transparent) |
| `.ar-4-3` / `.ar-16-9` / `.ar-1-1` / `.ar-3-4` / `.ar-3-2` | Aspect ratio helpers |

---

## 9. Layout Patterns

### 9.1 Section Rhythm (Alternating Backgrounds)

```
HomeSlider (image)
  → TrustBar (surface/white)
  → Partners (bg/gray)
  → Categories (surface/white)
  → Featured (surface/white)
  → Stories (surface/white)
  → Innovation (bg-deep/dark)
  → CTA (surface-2/dark)
```

### 9.2 Bento Grid

Used in StrategicCategories, FeaturedProducts, StoriesHighlight:

```css
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: minmax(200px, 1fr);
```

- Large card: `col-span-2 row-span-2` (fills 2×2)
- Small cards: `h-full` (fill 1×1)
- CTA card: `h-full` (fills last cell)

### 9.3 Products Grid (Responsive)

```css
.products-grid {
  grid-template-columns: 1fr;          /* mobile */
}
@media (min-width: 480px)  { 2 columns }
@media (min-width: 1024px) { 3 columns (with 240px sidebar) }
@media (min-width: 1280px) { 4 columns (with 240px sidebar) }
```

### 9.4 Full-Bleed Sections

```css
.full-bleed {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-inline: -50vw;
}
```

---

## 10. RTL (Right-to-Left)

### 10.1 Setup

```html
<html lang="ar" dir="rtl">
```

### 10.2 Rules

| Rule | Implementation |
|------|---------------|
| Use logical properties | `margin-inline-start`, `padding-inline-end`, `inset-inline-start` |
| No `letter-spacing` on Arabic | Breaks cursive joining |
| Arrows mirror | `ArrowLeft` in RTL = previous, `ArrowRight` = next |
| Drawer slides from RIGHT | `translateX(100%)` when closed (RTL start side) |
| Numbers stay LTR | `dir="ltr"` on phone, email, dates |
| `text-align: start/end` | Not `left/right` |

### 10.3 Bilingual Content

All text content is stored as `{ ar: string, en: string }` in the dictionary (`src/lib/i18n/dictionary.ts`) and resolved at runtime via `useLanguage().t(key)`.

---

## 11. Accessibility (WCag 2.1 AA)

| Requirement | Implementation |
|-------------|---------------|
| Contrast 4.5:1 (normal text) | All text tokens exceed 4.8:1 on bg |
| Contrast 3:1 (large text) | All headings exceed 7:1 |
| Focus-visible | 2px solid `--color-primary` outline, 2px offset |
| Touch targets ≥44px | All buttons have `min-height: 44px` |
| Skip-to-content | `.skip-link` at top of every page |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables all animations |
| alt text | All images have descriptive `alt` attributes |
| aria-label | All icon-only buttons have `aria-label` |
| Semantic HTML | `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |

---

## 12. Image Strategy

### 12.1 Formats

| Type | Format | Optimization |
|------|--------|-------------|
| Product photos | WebP | sharp compression (82 quality, max 1200px) |
| Gallery images | JPEG | Original from Google Drive |
| Logos | PNG | Transparency preserved |
| Brochures | PDF | Original from Mindray |
| Hero/slider | JPEG | Original resolution |

### 12.2 Directory Structure

```
public/images/
├── home_slider/          # Slider images (1.jpg, 2.jpg)
├── comp_logos/           # Brand logos (logo-1.png to logo-4.png)
├── mindray/              # Mindray product photos (WebP)
│   ├── icu/              # 7 photos
│   ├── or/               # 19 photos
│   ├── emergency/        # 5 photos
│   ├── diagnostics/      # 11 photos
│   └── imaging/          # 3 photos
├── products/             # Gallery images (by category)
│   ├── medical_imaging_system/
│   ├── patient_monitoring_systems/
│   ├── x_ray/
│   ├── anesthesia_machines/
│   ├── surgical_lights_and_operating_tables/
│   ├── dental_unit/
│   ├── incubator_and_warmer/
│   ├── infusion_pumps/
│   ├── sterilizer/
│   ├── electronic_apparatus/
│   └── furniture/
└── logo-sayun.png        # Company logo

public/brochures/
└── mindray/              # 45 PDF brochures
```

### 12.3 Next.js Image

All images use `next/image` with:
- `fill` + `object-cover` for cards
- `sizes` attribute for responsive loading
- `priority` for above-the-fold images
- `loading="lazy"` for below-the-fold (default)

---

## 13. Component Architecture

### 13.1 Directory Structure

```
src/components/
├── sections/              # Home page sections (8)
│   ├── home-slider.tsx    # Hero carousel
│   ├── trust-bar.tsx      # Stats with CounterUp
│   ├── partner-carousel.tsx # Brand marquee
│   ├── strategic-categories.tsx # Bento grid
│   ├── featured-products.tsx # 1 large + 2 side
│   ├── stories-highlight.tsx # Testimonial bento
│   ├── innovation-section.tsx # Dark chapter
│   └── hero-section.tsx   # Legacy hero (unused)
├── site/                  # Shared site components (12)
│   ├── header.tsx         # Navbar (useIsDesktop hook)
│   ├── footer.tsx         # 4-column + live clock
│   ├── whatsapp-fab.tsx   # WhatsApp + scroll-to-top
│   ├── scroll-reveal.tsx  # Framer Motion reveal
│   ├── section-header.tsx # Eyebrow + title + subtitle
│   ├── page-hero.tsx      # Gradient + breadcrumb
│   ├── cta-banner.tsx     # Dark CTA with glows
│   ├── counter-up.tsx     # Animated counter
│   ├── stat-card.tsx      # Stat with icon
│   ├── theme-toggle.tsx   # Sun/moon
│   ├── language-switcher.tsx # AR/EN
│   └── skip-link.tsx      # Accessibility
├── cart/                  # Cart drawer
├── providers/             # Cart, Language, Theme
├── admin/                 # Admin components
└── ui/                    # shadcn/ui primitives (50+)
```

### 13.2 Total Stats

| Metric | Count |
|--------|-------|
| Components | 79 |
| Pages | 31 |
| CSS rules | 179+ |
| Utility classes | 60+ |
| Design tokens | 90+ |

---

## 14. Page Templates

### 14.1 Home Page
```
HomeSlider → TrustBar → PartnerCarousel → StrategicCategories →
FeaturedProducts → StoriesHighlight → InnovationSection → CTABanner
```

### 14.2 Interior Pages
```
PageHero (gradient + breadcrumb) → Content sections → CTABanner
```

### 14.3 Product Detail
```
Breadcrumb → Gallery + Info (2-col) → Tabs (overview/specs/related)
```

### 14.4 Products List
```
PageHero → Filter bar (sticky) → Sidebar + Grid (responsive)
```

### 14.5 RFQ (3-step)
```
PageHero → Progress bar → Step content → Navigation
```

---

## 15. Database Schema (Neon PostgreSQL)

### 15.1 Models

| Model | Records | Description |
|-------|---------|-------------|
| User | 1 | Admin user (NextAuth) |
| Category | 18 | 8 new + 10 legacy |
| Brand | 5 | Mindray, JPI, EMED, KENLIF, TMW |
| Product | 30 | With images, specs, brochures |
| Project | 7 | Case studies |
| Testimonial | 3 | Success stories |
| Setting | 15 | Site configuration |
| ContentBlock | — | Editable content (future) |
| RfqSubmission | — | Quote requests |
| ContactSubmission | — | Contact form |
| MediaFile | — | Uploaded media |
| AuditLog | — | Activity log |

### 15.2 Connection

```
postgresql://neondb_owner:***@ep-summer-feather-ah7pkysn-pooler.c-3.us-east-1.aws.neon.tech/neondb
```

---

## 16. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | v4 |
| UI Primitives | shadcn/ui | latest |
| Animation | Framer Motion | 12.x |
| Icons | Lucide React | 0.5x |
| Fonts | Tajawal + Inter | next/font |
| Database | Prisma + Neon PostgreSQL | 6.x |
| Auth | NextAuth.js | 4.x |
| Deploy | Vercel | — |
| Node | ≥ 18.17 | — |

---

## 17. File Inventory

### 17.1 Key Files

| File | Purpose | Lines |
|------|---------|-------|
| `src/app/globals.css` | Design tokens + utilities | ~1424 |
| `src/data/products.ts` | Product/category data (static) | ~736 |
| `src/lib/i18n/dictionary.ts` | All UI strings (AR/EN) | ~677 |
| `tailwind.config.ts` | Tailwind theme + colors | ~135 |
| `prisma/schema.prisma` | Database schema | ~400 |
| `src/components/site/header.tsx` | Navbar | ~530 |
| `src/components/sections/home-slider.tsx` | Hero carousel | ~293 |

### 17.2 Protected Files (Do Not Modify)

```
src/app/admin/              ← Admin panel
src/app/api/                ← API routes
src/components/admin/       ← Admin components
src/components/providers/   ← Cart, Language, Theme
src/components/ui/          ← shadcn primitives
src/lib/                    ← db, auth, i18n, utils
src/middleware.ts           ← Admin protection
prisma/                     ← Schema + seed
```

---

## 18. Changelog

| Version | Date | Changes |
|---------|------|---------|
| v18 | 2026-06-21 | HomeSlider + image compression (WebP) + Neon DB migration |
| v17 | 2026-06-21 | All category cards now have images |
| v16 | 2026-06-21 | Mindray product photos + brochures linked |
| v15 | 2026-06-21 | Reorganized into 8 medical equipment categories |
| v14 | 2026-06-21 | Products page desktop layout (4-col grid) |
| v13 | 2026-06-21 | Bento grid consistency (equal heights) |
| v12 | 2026-06-21 | Desktop layout (section rhythm, container width) |
| v11 | 2026-06-21 | UX enhancements (micro-interactions, 404 redesign) |
| v10 | 2026-06-21 | Complete UI/UX overhaul (drawer, cart, buttons, contrast) |
| v9 | 2026-06-21 | Contrast + image display + card polish |
| v8 | 2026-06-21 | Clinical Trust identity (clinical green + medical blue) |

---

© 2026 Sayun Medical Corporation. All rights reserved.
