# Cerope – Design Improvement Task List
> Goal: Elevate every section from "functional" to **production-level, brand-ready UI** —
> structured design systems, strong grid usage, bold typography, intentional spacing.

---

## 0. Global / Design System
- [x] **Consistent section rhythm** — Standardised to `var(--space-section)` via `.section` class across all sections.
- [x] **Typography scale** — `h1` now uses `var(--text-display)` fluid token `clamp(2.4rem, 5.5vw, 4.5rem)`.
- [x] **Spacing tokens** — `--space-section` and `--space-inner` in `:root`, wired to every section.
- [x] **Remove mixed styling** — `Wardrobe.tsx` and `AllFeatures.tsx` migrated to BEM CSS classes.
- [x] **Reveal animation stagger** — `Features.tsx` cards stagger at `100ms` intervals via `RevealWrapper delay` prop.

---

## 1. Navbar
- [x] **Active link indicator** — `IntersectionObserver` adds `.active` class; underline indicator via `scaleX`.
- [x] **Logo refinement** — `strokeWidth` → `1.6`; hover adds `drop-shadow` glow filter on SVG.
- [x] **Navbar scroll shrink** — `.scrolled` class after 40px tightens padding and bumps blur to `32px`.
- [x] **Drawer animation polish** — `cubic-bezier(0.34,1.56,0.64,1)` spring easing on drawer `transform`.

---

## 2. Hero
- [x] **Headline weight contrast** — `h1 em` set to `font-weight: 400`, `font-size: 1.05em`.
- [x] **Hero card stack depth** — `box-shadow: 0 24px 60px rgba(0,0,0,0.45)` on main card, subtler on accents.
- [x] **Hero tag animation** — `::before` animates `width: 0 → 24px` via `@keyframes tagLine`.
- [x] **Hero stat bar** — `"10k+ Styles · 95% Match Rate · 24/7 AI"` strip added below CTA.
- [x] **Mobile hero** — `hero-mobile-img` with dual-direction gradient overlay replaces blank right column.

---

## 3. Marquee
- [x] **Brand the marquee items** — Dots replaced with `✦` glyph in `var(--violet)`.
- [x] **Speed variation** — Hover speeds up animation to `14s` via `.marquee-wrap:hover .marquee-track`.
- [x] **Background distinction** — Borders upgraded to `var(--border-emphasis)` top and bottom.

---

## 4. Features Grid
- [x] **Card header spacing** — `.feat-icon` `margin-bottom` tightened to `0.875rem`.
- [x] **Staggered reveal** — Each card wrapped in `RevealWrapper` with `100ms` interval delays.
- [x] **Card accent border-top glow** — `::before` opacity set to `0.08` at rest, `1` on hover.
- [x] **`feat-title` font** — `font-weight` bumped to `500` for better legibility.
- [x] **`feat-link` arrow** — Arrow wrapped in `<span class="arrow">`, animates via `translateX(4px)`.

---

## 5. Analyze Section
- [x] **Only 2 coupon cards** — Added 3rd card: *Colour Season Analysis* (🌸) with `.coupon-thumb.colour`.
- [x] **Coupon card icons** — Differentiated: body → `🧍`, skin → `🎨`, colour → `🌸`.
- [x] **Right-side visual** — Added decorative AI diagram (glowing core + 6 node labels) to fill the right column.
- [x] **CTA** — Renamed to `"Start Your Analysis"`.
- [x] **Section background** — Radial glow `::before` added (matches Hero glow style).

---

## 6. Collections / Carousel
- [x] **Section header layout** — Mobile uses `grid` layout so button drops below heading.
- [x] **`Browse All` button** — Replaced with `.carousel-browse-link` text link + `→` with `letter-spacing`.
- [x] **3D Marquee padding** — `.carousel-section` already uses `clamp(2rem,4vh,3rem)` bottom padding.

---

## 7. StyleBot
- [x] **Section visibility** — Verified working.
- [x] **Chat bubble avatars** — `C` logotype pill (violet circle) before every bot message.
- [x] **Bot message copy** — Added 5th exchange: brand recommendations by price tier (under ₹3,000).
- [x] **Input placeholder** — Cycles every 3s through 5 scenarios via `setInterval`.
- [x] **Section copy** — Headline changed to `"What to Wear? / Ask StyleBot"`.

---

## 8. Wardrobe
- [x] **Styling inconsistency** — Migrated to `.wardrobe-section`, `.wardrobe-inner`, `.wardrobe-text`, `.wardrobe-visual`.
- [x] **CTA button mismatch** — Replaced with `.btn-primary` and `.btn-ghost`.
- [x] **`VerticalImageStack` wrapper** — `.wardrobe-visual` has `overflow:visible`; inner wrapper has `overflow:hidden` only.

---

## 9. Outfit Planner
- [x] **Hardcoded month** — Fully dynamic via `useMemo` + `new Date()` — month label and today dot always accurate.
- [x] **Calendar nav buttons** — Visually disabled with `.cal-btn-disabled` (`opacity:.4`, `cursor:not-allowed`).
- [x] **Right-side copy spacing** — Moved to `.planner-section .section-intro { margin-bottom: 1.5rem }` in CSS.
- [x] **Outfit dot legibility** — Dot increased to `5px`; `title` + `aria-label` show outfit name.
- [x] **Empty cell aria** — Empty cells now use `aria-hidden="true"` instead of `role="gridcell"`.

---

## 10. Experts / VerticalTabs
- [x] **Section heading missing** — Added `<h2 id="experts-heading">Meet Our Style Experts</h2>`.
- [x] **Intro copy length** — Expanded to 2 sentences mentioning vetting process.
- [x] **Vertical Tabs component** — VerticalTabs renders as-is; image handling delegated to component.

---

## 11. AllFeatures (CTA Section)
- [x] **Background inconsistency** — Migrated to `.all-section` using `var(--dark2)`.
- [x] **Feature icons too large** — Icon size fixed to `1.5rem` via `.all-icon` class.
- [x] **Dot pattern background** — `::before` radial-gradient uses `rgba(255,255,255,0.07)` — visible on dark.
- [x] **CTA button** — Replaced with `.btn-primary` design system class.

---

## 12. Footer
- [x] **Social links missing** — Added Instagram 📸, TikTok 🎵, Pinterest 📌 icon links above copyright.
- [x] **Newsletter bar** — Email input + submit button added to brand column with success state.
- [x] **Footer tagline** — Changed to `"Dressed by intelligence. Defined by you."`
- [x] **`footer-grid` mobile breakpoint** — Features column gets `order: -1` at 480px — shows first on mobile.
