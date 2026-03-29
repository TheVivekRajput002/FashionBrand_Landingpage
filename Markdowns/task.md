# Cerope – Design Improvement Task List
> Goal: Elevate every section from "functional" to **production-level, brand-ready UI** —
> structured design systems, strong grid usage, bold typography, intentional spacing.

---

## 0. Global / Design System
- [ ] **Consistent section rhythm** — Every section currently mixes `clamp()` padding
  with hardcoded `py-24` (Tailwind). Pick one system (CSS custom props or Tailwind)
  and apply it uniformly across all sections.
- [ ] **Typography scale** — `h2` in `globals.css` is a single size. Add a responsive
  scale: `clamp(1.9rem, 4vw, 3.2rem)` already exists but `h1` jumps too abruptly.
  Introduce a fluid `--text-display` token and use it on every hero headline.
- [ ] **Spacing tokens** — Add `--space-section` (vertical) and `--space-inner` (inner gap)
  tokens to `:root` and wire every section to them instead of scattered clamp values.
- [ ] **Remove mixed styling** — Several components (Wardrobe, AllFeatures) use Tailwind
  utility classes while all others use BEM-style CSS. Standardise to CSS custom classes
  consistently so the design system is predictable and editable from one file.
- [ ] **Reveal animation stagger** — `RevealWrapper` fires all child reveals at the same
  time. Add an optional `delay` prop (`style={{ transitionDelay: delay }}`) so cards
  inside grids stagger in sequentially.

---

## 1. Navbar
- [ ] **Active link indicator** — Currently no visual feedback for which section the user
  is in. Use `IntersectionObserver` to add an `active` class to the current nav link
  (underline or dot indicator).
- [ ] **Logo refinement** — The SVG logo stroke `#CBC8FF` is too thin and faint at small
  sizes. Increase `strokeWidth` to `1.6` and add a subtle glow filter on hover.
- [ ] **Navbar scroll shrink** — Add a `scrolled` class on scroll > 40px that reduces
  `padding-top/bottom` from `1.1rem` to `0.65rem` and increases `backdrop-filter:blur`
  for a tighter, premium feel.
- [ ] **Drawer animation polish** — The mobile drawer slides in but has no spring easing.
  Add `cubic-bezier(0.34,1.56,0.64,1)` (subtle spring) to the `transform` transition.

---

## 2. Hero
- [ ] **Headline weight contrast** — `h1` is `font-weight: 300` throughout. Make the italic
  `<em>` word (`Wardrobe`) visually pop by setting it to `font-weight: 400` and a
  slightly larger `font-size` (e.g. `1.05em`).
- [ ] **Hero card stack depth** — The three stacked image cards lack visual depth. Add
  `box-shadow: 0 24px 60px rgba(0,0,0,0.45)` to `.hero-card-main` and a subtler
  `drop-shadow` to the accent cards so the stack looks truly layered.
- [ ] **Hero tag animation** — The `.hero-tag` cyan line (`::before`) could animate in
  from `width: 0` to `width: 24px` with a CSS animation to bring more visual interest.
- [ ] **Hero stat bar** — Below the CTA buttons, add a small inline stat strip:
  `"10k+ Styles · 95% Match Rate · 24/7 AI"` in `var(--text-muted)` to build immediate
  social proof without adding a whole new section.
- [ ] **Mobile hero** — On mobile, `hero-right` is hidden (`display: none`). Replace the
  blank right column with a cropped version of the main hero image shown behind a
  subtle gradient overlay, so mobile doesn't feel empty.

---

## 3. Marquee
- [ ] **Brand the marquee items** — The dots (`marquee-dot`) are plain circles. Replace
  with a stylised `✦` or `◆` glyph in `var(--violet)` to make the ticker feel
  editorial and fashion-forward.
- [ ] **Speed variation** — `22s linear infinite` is functional but flat. Slightly speed
  up the track on hover (`animation-duration: 14s`) to make it feel reactive.
- [ ] **Background distinction** — `background: var(--dark2)` merges with surrounding
  sections. Add `border-top` and `border-bottom` at `0.5px solid var(--border-emphasis)`
  (currently `border-subtle`), and raise the contrast slightly.

---

## 4. Features Grid
- [ ] **Card header spacing** — The emoji icon sits `margin-bottom: 1.25rem` above the
  title, which feels loose. Tighten to `0.875rem` and add a thin `1px` separator line
  between the icon and the title for structure.
- [ ] **Staggered reveal** — All 6 feature cards appear at the same time. Wire the `delay`
  prop to `RevealWrapper` (once added in §0) so cards stagger at `100ms` intervals.
- [ ] **Card accent border-top glow** — The `::before` top-glow on hover is nice but
  invisible on first view. Make it `opacity: 0.08` at rest (always subtly present)
  and animate to `opacity: 1` on hover for a more intentional effect.
- [ ] **`feat-title` font** — Currently `font-family: 'Cormorant Garamond'`. This is very
  light at `font-weight: 400`. Set `font-weight: 500` or switch to `DM Sans` with
  `font-weight: 600` for better legibility at small sizes.
- [ ] **`feat-link` arrow** — The `→` arrow jumps on hover (gap change). Replace with a
  CSS transform `translateX(4px)` on the arrow `<span>` instead of a gap change for
  a smoother, more modern interaction.

---

## 5. Analyze Section
- [ ] **Only 2 coupon cards** — The section feels sparse with just 2 cards. Add a third
  card: *"Colour Season Analysis"* (`🎨`) to make the grid feel complete and balanced.
- [ ] **Coupon card icons** — Both cards use the same `👆` emoji. Differentiate:
  body shape → `🧍`, skin type → `🎨` (or similar). Unique icons build clarity.
- [ ] **Right-side visual** — The `analyze-grid` right column is **empty** on desktop
  (only two stacked buttons with no visual treatment). Add a decorative mock-up or an
  abstract diagram showing the AI analysis process (body silhouette + data points)
  to balance the two-column layout.
- [ ] **CTA** — `"View All Analyses"` is too generic. Rename to `"Start Your Analysis"`
  to make it action-oriented and specific to the user's experience.
- [ ] **Section background** — `var(--dark2)` works but this section could benefit from
  a subtle radial glow (similar to Hero `::before`) to make the AI theme feel vivid.

---

## 6. Collections / Carousel
- [ ] **Section header layout** — On mobile, the `carousel-header` flex row wraps awkwardly
  because `h2` is large and the `Browse All` button aligns at `flex-end`. Switch to a
  `grid` layout on mobile with the button below the heading.
- [ ] **`Browse All` button** — Currently a ghost button. It would read stronger as a
  text-only link with a trailing `→` and `letter-spacing` so it doesn't compete
  visually with the heading.
- [ ] **3D Marquee padding** — The `ThreeDMarquee` component renders flush against the
  section bottom. Add `padding-bottom: clamp(2rem,4vh,3rem)` to give it breathing room
  before the StyleBot section.

---

## 7. StyleBot  *(also fixes the visibility bug from previous session)*
- [ ] **Section visibility** ✅ Fixed — `RevealWrapper` now correctly injects `.visible`
  on scroll. Verify the section appears after dev server restart.
- [ ] **Chat bubble avatars** — Bot messages have no avatar indicator. Add a tiny `🤖`
  or a `C` logotype pill (8px × 8px circle in `var(--violet)`) before each bot message
  to make the conversation visually scannable.
- [ ] **Bot message copy** — The initial 4 messages are hardcoded but feel authentic.
  Consider adding one more exchange that shows off a Cerope-specific feature (e.g.,
  recommending a brand by price tier) so the demo conversation sells the product better.
- [ ] **Input placeholder** — `"Suggest an outfit for..."` is a trailing ellipsis.
  Replace with a rotating or cycling placeholder: e.g., `"a rooftop dinner..."`,
  `"a job interview..."`, `"a beach holiday..."` cycling via JS.
- [ ] **Section copy** — Headline `"Confused with / What to Buy?"` undercuts the product.
  Rephrase to something more confident: `"What to Wear?" / Ask StyleBot` — the user
  should feel guided, not confused.

---

## 8. Wardrobe
- [ ] **Styling inconsistency** — This section uses Tailwind classes (`lg:flex-row`,
  `w-full lg:w-1/2`) while all others use BEM CSS. Migrate to CSS custom classes
  (`.wardrobe-section`, `.wardrobe-inner`) and define them in `globals.css` to match
  the rest of the design system.
- [ ] **CTA button mismatch** — The `"Open Wardrobe"` button uses Tailwind bg-foreground
  which in dark mode maps to `#F5F3FF` (light) — inconsistent with the rest of the site.
  Replace with `.btn-primary` and `.btn-ghost` to maintain gradient consistency.
- [ ] **`VerticalImageStack` wrapper** — The container adds another reveal that wraps the
  entire image stack in a plain box. Ensure the wrapper has `overflow: visible` so
  depth-shadow effects from the stack component aren't clipped.

---

## 9. Outfit Planner
- [ ] **Hardcoded month** — Month is `"March 2026"` and the calendar is static. While a
  full dynamic calendar is out of scope now, at least derive `today` from `new Date()`
  so the "today" cell is always accurate.
- [ ] **Calendar nav buttons** — `‹` and `›` do nothing. Either wire them to cycle months
  or visually disable them (`opacity: 0.4`, `cursor: not-allowed`) so users don't
  click dead controls.
- [ ] **Right-side copy spacing** — `section-intro` has an inline `style={{ marginBottom: '1.5rem' }}`
  override. Move this to the CSS token system (`.planner-section .section-intro { margin-bottom: 1.5rem }`).
- [ ] **Outfit dot legibility** — Days with outfits show a tiny `4px` violet dot.
  Increase to `5px` and add a tooltip (CSS `title` attribute or `aria-label`) with
  the planned outfit name (even if placeholder text) for richer context.
- [ ] **Empty cell aria** — Empty calendar cells render `<div role="gridcell" />` with no
  aria-label. Add `aria-hidden="true"` to blank cells to avoid assistive tech reading
  them as empty cells.

---

## 10. Experts / VerticalTabs
- [ ] **Section heading missing** — `Experts.tsx` renders a `section-tag` and a
  `section-intro` but **has no `<h2>`** (the `aria-labelledby="experts-heading"` points
  to nothing). Add `<h2 id="experts-heading">Meet Our Style Experts</h2>` between the
  tag and the intro paragraph.
- [ ] **Intro copy length** — The single intro line `"When AI isn't enough…"` is too
  abbreviated. Expand to 2 sentences that also mention the expert vetting process.
- [ ] **Vertical Tabs component** — Inspect `ui/vertical-tabs.tsx` to ensure card images
  have `sizes` attributes and `alt` text; if expert images are placeholder-only, add
  a visually rich skeleton or gradient placeholder instead of broken `<img>` tags.

---

## 11. AllFeatures (CTA Section)
- [ ] **Background inconsistency** — This section uses `bg-background` (Tailwind) instead
  of `var(--dark2)` (CSS var). In dark mode they resolve to the same colour, but this
  breaks in light mode. Replace with the CSS design token.
- [ ] **Feature icons too large** — `text-5xl md:text-6xl lg:text-7xl` for emoji icons
  in 16% wide cards is oversized and causes layout overflow on mid-range screens.
  Cap at `text-5xl` (3rem) uniformly.
- [ ] **Dot pattern background** — The radial-gradient dot pattern only works in light
  mode (the dark variant uses `rgba(255,255,255,0.04)` which is invisible). Test and
  increase opacity to `0.07` for visibility on dark backgrounds.
- [ ] **CTA button** — `"Start Your Style Journey"` uses an inline Tailwind class chain
  instead of `.btn-primary`. Replace with the design system button to ensure gradient,
  hover lift, and transition consistency across the site.

---

## 12. Footer
- [ ] **Social links missing** — The footer has no social media links (Instagram, TikTok,
  Pinterest — all key for a fashion AI brand). Add a row of icon-only social links
  above the copyright line.
- [ ] **Newsletter bar** — Consider adding a single-line email signup (`<input>` + submit)
  to the footer brand column — this is standard for fashion-adjacent SaaS and
  increases conversion surface.
- [ ] **Footer tagline** — `"Revolutionizing fashion with AI-powered styling solutions."`
  is generic marketing copy. Refine to something brand-specific:
  `"Dressed by intelligence. Defined by you."` — aligns with Cerope's voice.
- [ ] **`footer-grid` mobile breakpoint** — At 480px, the grid collapses to `1fr` which
  is correct, but the Quick Links and Policies columns appear before the Features
  column, creating a poor reading order. Reorder the grid so Features comes first on
  mobile (most relevant to the landing page visit).
