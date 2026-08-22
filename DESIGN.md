# Design System: MARIFER

## 1. Visual Theme & Atmosphere

MARIFER is a **warm, premium Uruguayan fashion e-commerce** design system. The atmosphere is **soft, approachable, and quietly sophisticated** — never cold or clinical.

The palette centers on a **deep violet brand anchor (#452453)** balanced by a creamy off-white canvas (#FFFCFF) tinted with the faintest violet whisper. Neutrals are deliberately warmed toward the brand hue, eliminating harsh grays. **Gold Amber (#D4A15A)** is the singular brand accent (warmth, "6 cuotas", highlights). **Berry Pop (#D94F78)** serves strictly as a _semantic alias_ for sale/urgency — not a brand accent.

Elevation uses **violet-tinted shadows** so every layer feels like it belongs to the same world. Motion is snappy but gentle — 140–420ms with signature ease-out. Density is generous: 24px base gutter, 14px card radius, 44px tap targets.

**Dials:** Creativity 9 (inline image typography), Variance 8 (asymmetric Hero, Bento grids), Density 5 (generous whitespace), Motion 6 (spring physics on all interactions).

---

## 2. Color Palette & Roles

### Brand Ramp (Violet — OKLCH-balanced)

| Token | Hex | Role |
|-------|-----|------|
| `--violet-50` | #FAF7FB | Subtlest tint; hover backgrounds |
| `--violet-100` | #F2E6F4 | Primary surface tint; chips, focus rings |
| `--violet-200` | #E3CDE8 | Stronger tint; borders, disabled |
| `--violet-300` | #CAA8D3 | Interactive borders, focus ring base |
| `--violet-400` | #A97CB6 | Icon accents, secondary text on dark |
| `--violet-500` | #8A559A | Link hover, brand-text on light |
| `--violet-600` | #683A79 | Primary hover, pressed |
| **`--violet-700`** | **#452453** | **Brand anchor — logo, primary actions, headlines** |
| `--violet-800` | #351B41 | Dark mode surfaces |
| `--violet-900` | #241230 | Dark mode canvas, strongest text |
| `--violet-950` | #150A1C | Absolute depth |

### Warm Neutrals (Violet-tinted)

| Token | Hex | Role |
|-------|-----|------|
| **`--canvas`** | **#FFFCFF** | **Page background — never pure white** |
| `--neutral-50` | #FAF8FB | Card interiors |
| `--neutral-100` | #F4F1F6 | Muted surfaces |
| `--neutral-200` | #E8E3EC | Hairline borders |
| `--neutral-300` | #D3CCD8 | Default borders, input resting |
| `--neutral-400` | #AAA1B0 | Disabled text, placeholder icons |
| `--neutral-500` | #7D7384 | Muted body text |
| `--neutral-700` | #403945 | Body copy, form labels |
| `--neutral-900` | #1A161D | Strongest headings on light |

### Singular Brand Accent (Max 1, Saturation <80%)

| Token | Hex | Role |
|-------|-----|------|
| **`--gold-500`** | **#D4A15A** | **Highlights, "6 cuotas", primary CTAs needing warmth** |
| `--gold-100` | #FBF1DE | Free-shipping banner |
| `--gold-300` | #EED6A3 | — |
| `--gold-700` | #96662A | Gold text on light |

### Semantic Aliases (Commerce/State — Not Brand Accents)

| Token | Hex | Role |
|-------|-----|------|
| `--sale` | #D94F78 | Sale badges, discount prices, urgency |
| `--sale-bg` | #FDE9EF | Sale soft backgrounds |
| `--success` | #10B981 | Success states |
| `--error` | #E11D48 | Error states, destructive actions |

### Component Tokens (Use These in Components)

- **Surfaces:** `--surface-canvas` (#FFFCFF), `--surface-card` (#FFFFFF), `--surface-subtle` (violet-100), `--surface-muted` (neutral-100), `--surface-inset` (neutral-200), `--surface-inverse` (violet-700)
- **Text:** `--text-strong` (violet-900), `--text-body` (neutral-700), `--text-muted` (neutral-500), `--text-faint` (neutral-400), `--text-on-brand` (white), `--text-brand` (violet-700)
- **Borders:** `--border-hairline` (neutral-200), `--border-default` (neutral-300), `--border-strong` (violet-300), `--border-brand` (violet-700)
- **Actions:** `--action-primary` (violet-700), `--action-primary-hover` (violet-600), `--action-primary-press` (violet-800), `--action-primary-soft` (violet-100), `--action-secondary-bg` (white), `--focus-ring` (rgba(69,36,83,0.28))
- **Commerce:** `--price-current` (violet-900), `--price-was` (neutral-400), `--sale` (berry-500), `--highlight` (gold-500)

### Dark Mode (`[data-theme="brand"]`)

Canvas → violet-700, cards → violet-800, text → violet-200/white, borders → rgba(white, 0.16–0.28), primary actions invert to white.

### Banned Colors

- Purple/Violet neon gradients ("AI Purple" aesthetic)
- Pure Black (#000000) — use Violet Abyss 950
- Oversaturated accents >80% saturation
- Mixed warm/cool gray systems
- More than ONE brand accent (Gold Amber only)

---

## 3. Typography Rules

### Font Families

- **Display (Headlines):** **Outfit** — geometric, warm, weights 600–800. Negative tracking on hero/headings.
- **Body (UI, Copy):** **Manrope** — humanist, readable, weights 400–700. Neutral tracking.
- **Logo/Brand Moments:** **Lobster Two Bold Italic** — retro script, _only_ for logo/marquee.
- **Mono:** **JetBrains Mono** — code, tabular numbers, metadata. **Density >7: all numbers switch to mono.**

### Scale (Clamped, 1.25 ratio compressed)

| Token | Size | Line Height | Weight | Tracking | Use |
|-------|------|-------------|--------|----------|-----|
| `--text-hero` | clamp(44px, 6vw, 72px) | 1.08 | 800 | -0.025em | Hero headlines |
| `--text-h1` | 36px | 1.2 | 700 | -0.012em | Page titles |
| `--text-h2` | 28px | 1.2 | 700 | -0.012em | Section headers |
| `--text-h3` | 20px | 1.2 | 600 | -0.012em | Card titles |
| `--text-h4` | 17px | 1.2 | 600 | 0 | Button lg, product names |
| `--text-lead` | 18px | 1.45 | 400 | 0 | Hero subcopy |
| **`--text-body-size`** | **15px** | **1.45** | **400** | **0** | **Base body copy** |
| `--text-small` | 13px | 1.45 | 400 | 0 | Secondary info |
| `--text-caption` | 12px | 1.45 | 400 | 0 | Hints, errors (minimum) |
| `--text-tag` | 11px | 1.0 | 800 | +0.09em | **Uppercase tags, eyebrows** |
| `--text-eyebrow` | 11px | 1.0 | 800 | +0.16em | Section eyebrows |

### Hierarchy Principles

- **Display (Outfit)** owns `h1–h5` — color `--text-strong`, tracking `-0.012em`.
- **Body (Manrope)** owns everything else — color `--text-body` (or muted/faint).
- **Never** set font-size below 12px.
- **Eyebrow/Tag:** uppercase, black weight, wide tracking, brand violet.
- **Body max-width: 65ch** — enforced via container/prose.

### Banned Fonts

- `Inter` — banned in premium/creative contexts
- Generic serifs (`Times New Roman`, `Georgia`, `Garamond`, `Palatino`) — BANNED. If serif needed: `Fraunces`, `Gambarino`, `Editorial New`, `Instrument Serif` only. **Serif always BANNED in dashboards/software UIs.**

---

## 4. Component Stylings

### Buttons

- **Shape:** Pill (999px radius)
- **Base:** Inline-flex, centered, bold Manrope, 1px transparent border, 200ms ease-standard
- **Sizes:** `sm` (34px/13px), `md` (44px/15px), `lg` (52px/17px)
- **Variants:**
  - **Primary:** violet-700 bg, white text, `--shadow-brand`. Hover → violet-600 + elevated shadow. Press → `scale(0.985)`.
  - **Secondary:** White bg, violet-900 text, neutral-300 border. Hover → muted surface + violet-300 border.
  - **Soft:** Violet-100 bg, violet-700 text. Hover → violet-200.
  - **Ghost:** Transparent, violet-700 text. Hover → violet-100 bg.
  - **Sale:** Berry-500 bg, white text, berry shadow. Hover → berry-700.
- **States:** Focus-visible = 2px solid primary + 2px offset. Disabled = neutral-200 bg, neutral-400 text.
- **No neon glows. No custom cursors. Tactile push on active.**

### Cards / Containers

- **Shape:** 14px (`--radius-card`) — softer than standard 8–12px.
- **Background:** `--surface-card` (white / violet-800 dark).
- **Border:** 1px `--border-hairline`.
- **Shadow:** Resting `xs` (0 1px 2px rgba(violet-900, 0.06)). Hover → `lg` (0 14px 36px rgba(violet-900, 0.14)) + `translateY(-2px)`.
- **Padding:** Internal 12px, content gap 12px.
- **Image Radius:** 10px (sm) for media; 20px (lg) for hero/product.
- **Usage:** ONLY when elevation communicates hierarchy. High-density: replace with `border-top` dividers or negative space.
- **No overlapping** — clean spatial separation always.

### Inputs / Forms

- **Shape:** Pill (999px) — matches buttons.
- **Height:** 44px minimum (tap target).
- **Background:** `--surface-card`.
- **Border:** 1px `--border-default` resting; `--border-brand` focus; `--error` error.
- **Focus Ring:** 3px `rgba(69,36,83,0.28)`.
- **Label:** Manrope semibold 13px, `--text-strong`, **above** input.
- **Placeholder/Text:** Manrope 15px, `--text-strong` / `--text-muted`.
- **Icon Slot:** Leading, 16×16, currentColor.
- **Hint/Error:** Caption 12px, muted or `--error`.
- **No floating labels.** Standard 0.5rem gap (label → input → hint).

### Badges / Tags

- **Shape:** Pill (999px), 3px×9px padding.
- **Text:** Manrope black 11px, uppercase, +0.09em tracking.
- **Tones:** `brand` (violet-700/white), `sale` (berry-500/white), `gold` (gold-500/violet-900), `neutral` (inset/body), `success` (green-500/white).

### Navigation

- **Header:** Sticky, 72px, violet-700 bar over gold-100 announcement strip.
- **Logo:** Lobster Two Italic 30px, white.
- **Nav Links:** Manrope semibold 15px, violet-200 → white active.
- **Search Input:** Embedded, pill, 240px wide.
- **Icon Buttons:** 44×44 tap target, pill, white icons, hover → violet-600 bg.
- **Desktop:** Clean horizontal, generous spacing. **No hamburger on desktop.**
- **Mobile:** Collapses to clean mobile menu (slide-in/overlay). No tiny hamburgers without labels.

### Price Display

- **Current:** Violet-900, Outfit semibold (size-dependent).
- **Was/Original:** Neutral-400, strikethrough, smaller.
- **Installments:** "6 cuotas sin recargo" in gold-500, tag style.

### Product Grid

- **Columns:** 4-col ≥1024px (gap 24px), 2-col mobile (gap 12px).
- **Card Aspect:** 3:4 (product), 1:1 (thumbnails).
- **Image Radius:** 10px (sm).

### Loaders (Skeletal Shimmer Only)

- **Behavior:** Shifting light reflection across placeholder shapes matching exact layout dimensions and rounded corners.
- **Implementation:** CSS keyframe on gradient overlay, ~1.5s infinite.
- **Variants:** Text lines (h-4), images (aspect-square), buttons (pill), cards (full skeleton).
- **BANNED:** Circular spinners, bouncing dots, "Loading..." text.

### Empty States

- **Composition:** Illustrated/icon + guidance text + primary action to populate.
- **Never:** Just "No data found" text alone.
- **Examples:** Empty cart → illustration + "Agregá tu primer producto" CTA. Empty wishlist → heart icon + "Guardá lo que te gusta". No results → search icon + "Probá otros términos" + clear filters.

### Error States

- **Inline:** Red accent underline/border on failed field. Clear recovery action text.
- **Toast:** `--error` bg (10%), `--error` text, dismissible, auto-dismiss 5s (non-critical).
- **Page-level:** Composed illustration + explanation + primary action (retry / home / contact).

---

## 5. Hero Section (Signature)

The Hero is the first impression — striking, creative, **never generic**.

- **Inline Image Typography (Signature):** Embed small contextual photos directly between words/letters in the headline. Images sit inline at type-height, rounded (8px), acting as visual punctuation. Example: "Descubrí [foto: manos] tu estilo [foto: percha] único".
- **No Overlapping:** Text never overlaps images/content. Every element has its own spatial zone. No z-index stacking, no absolute-positioned headlines over images.
- **No Filler Text:** "Scroll to explore", "Swipe down", arrows, bouncing chevrons — **ALL BANNED**. Content pulls users naturally.
- **Asymmetric Structure (Variance 8):** **Split Screen (50/50)**, **Left-Aligned text / Right visual**, or **Asymmetric Whitespace**. **Centered Hero BANNED.**
- **CTA Restraint:** Maximum **one primary CTA**. No secondary "Learn more" links.
- **Responsive:** Inline images stack below headline on mobile (<768px). Hero scales via `clamp()`.

---

## 6. Layout Principles

### Spacing Scale (4px base, 1.10× progression)

`4 · 8 · 12 · 16 · 24 · 32 · 40 · 56 · 72 · 96`

- **Gutter/Grid Gap:** 24px (desktop), 12px (mobile).
- **Container Max:** **1400px**, centered. Horizontal padding: mobile 16px, tablet 24px, desktop 48px.
- **Section Vertical Rhythm:** 56px major, 32px sub, 24px inside cards.
- **Header Height:** 72px fixed.
- **Sidebar (Filters):** 264px fixed.

### Grid & Alignment

- **12-column implied grid** via 24px gutters. **CSS Grid for all structural layouts.** Flexbox percentage math (`calc(33% - 1rem)`) **BANNED**.
- **Product catalog:** 4-col auto-fit grid, gap 24px.
- **Bento Architecture:** Row 1: 3 equal cols. Row 2: 70/30 split. Each tile has a perpetual micro-animation.
- **Card internals:** Flex column, gap 12px (media → content → price).
- **Form stacks:** Flex column, gap 6px (label → input → hint).

### Density & Whitespace

- **Generous but not sparse.** 24px base gutter creates rhythm. Cards: 12px internal. Hero: 56–72px vertical.
- **No arbitrary spacing** — every value from scale.
- **Mobile compaction:** Grid gaps halve (24→12), section padding → 32px, hero via clamp.

### Elevation & Depth

- **Four levels + brand:**
  - `xs` (0 1px 2px / 6%) — resting cards
  - `sm` (0 2px 6px / 7%) — subtle lift
  - `md` (0 6px 18px / 10%) — dropdowns, modals
  - `lg` (0 14px 36px / 14%) — hover cards, elevated panels
  - `brand` (0 6px 18px rgba(69,36,83,0.24)) — primary buttons
- **All shadows tinted with violet-900** (`rgba(36,18,48,α)`), never neutral gray.
- **Inset highlight:** `inset 0 1px 0 rgba(255,252,255,0.5)` for pressed surfaces.

### Banned Layout Patterns

- 3 equal cards horizontally — use Bento, Zig-Zag, or horizontal scroll
- Centered Hero sections (Variance 8)
- Overlapping elements — clean spatial zones only
- `h-screen` — always `min-h-[100dvh]`
- Flexbox percentage math — CSS Grid only

---

## 7. Responsive Rules (Hard Requirement)

**Every screen tested at:** 375px, 390px, 768px, 1024px, 1440px.

- **Mobile-First Collapse (<768px):** All multi-column → strict single column. `width: 100%`, `padding: 1rem`, `gap: 1.5rem`. **No exceptions.**
- **No Horizontal Scroll:** Horizontal overflow on mobile = **critical failure**.
- **Typography Scaling:** Headlines via `clamp()`. Body stays 15px minimum. **Never below 14px.** Readable on 375px.
- **Touch Targets:** All interactive ≥44×44px. Generous spacing between clickables. Buttons **full-width on mobile**.
- **Images:** Scale proportionally. Inline typography images **stack below headline on mobile**.
- **Navigation:** Desktop horizontal → clean mobile menu (slide-in/overlay). No label-less hamburgers.
- **Cards/Grids:** Bento/asymmetric → stacked single-column, full-width. Maintain 1rem internal padding.
- **Spacing:** Vertical gaps reduce proportionally (`clamp(3rem, 8vw, 6rem)`). Never cramped, never excessively airy.

---

## 8. Motion & Interaction (Code-Phase Intent)

> Stitch generates static screens. This documents **intended motion behavior** for the coding agent.

- **Physics:** Spring-based exclusively. `stiffness: 100, damping: 20`. **No linear easing.**
- **Perpetual Micro-Loops:** Every active component has infinite-loop state:
  - **Pulse** — status dots, live indicators
  - **Typewriter** — search bars, empty input prompts
  - **Float** — feature icons, decorative elements
  - **Shimmer** — loading states, skeletal placeholders
- **Staggered Orchestration:** Lists/grids mount with cascaded delays (`animation-delay: calc(var(--index) * 100ms)`). Waterfall reveals.
- **Layout Transitions:** Smooth re-ordering via shared element IDs. Physics-simulated swaps.
- **Hardware Rules:** Animate **ONLY `transform` and `opacity`**. Never `top/left/width/height`. Grain/noise on fixed `pointer-events-none` pseudo-elements only.
- **Performance:** CPU-heavy loops in microscopic leaf components. No parent re-renders. **60fps minimum.**
- **Reduced Motion:** Respect `prefers-reduced-motion` (disable spring, use instant).

---

## 9. Anti-Patterns (Banned — Explicit "NEVER DO")

1. **No emojis** — anywhere in UI, code, alt text
2. **No `Inter` font** — use `Outfit`, `Manrope`, `Geist`, `Cabinet Grotesk`, `Satoshi`
3. **No generic serifs** — if serif needed: `Fraunces`, `Instrument Serif` only. **Serif BANNED in dashboards.**
4. **No pure black** (#000000) — Off-Black / Violet Abyss 950 only
5. **No neon outer glows** or default box-shadow glows
6. **No oversaturated accents** >80% saturation
7. **No excessive gradient text** on large headers
8. **No custom mouse cursors**
9. **No overlapping elements** — clean spatial separation always
10. **No 3-col equal card layouts** — use Bento, Zig-Zag, horizontal scroll
11. **No centered Hero sections** (Variance 8)
12. **No filler UI text:** "Scroll to explore", "Swipe down", arrows, chevrons
13. **No generic names:** "John Doe", "Acme", "Nexus", "SmartFlow"
14. **No fake round numbers:** `99.99%`, `50%` — use organic: `47.2%`, `+1 (312) 847-1928`
15. **No fabricated data/stats** — never generate metrics, uptime, response times, deploy counts not provided by user. Use `[metric]` placeholders.
16. **No fake metric sections** — "SYSTEM PERFORMANCE", "KEY STATISTICS", "BY THE NUMBERS" with invented data
17. **No `LABEL // YEAR` formatting** — "SYSTEM // 2024" is lazy AI convention
18. **No AI copy clichés:** "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize"
19. **No broken Unsplash links** — use `picsum.photos/seed/{id}/800/600` or SVG avatars
20. **No generic `shadcn/ui` defaults** — customize radii, colors, shadows to this system
21. **No `z-index` spam** — only for Navbar, Modal, Overlay contexts
22. **No `h-screen`** — always `min-h-[100dvh]`
23. **No circular loading spinners** — skeletal shimmer only
24. **No >1 brand accent** — Gold Amber (#D4A15A) only

---

## Stitch Prompting Guidance

When prompting Stitch for new MARIFER screens, lead with:

> **"MARIFER e-commerce: warm violet brand (#452453) on creamy off-white (#FFFCFF), violet-tinted neutrals, singular Gold Amber accent (#D4A15A), Berry Pop (#D94F78) as sale/urgency only. Generous 24px rhythm, 14px card radius, pill buttons/inputs, violet-tinted shadows. Outfit display (800/700, negative tracking) + Manrope body (15px/1.45, 65ch max). Spring physics (100/20), perpetual micro-loops, staggered 100ms cascade. Variance 8 asymmetric layouts, Bento grids, no 3-col equal cards. Uruguayan fashion retail tone — approachable, premium, trustworthy."**

Then specify:
- **Screen type** (Home, PDP, Cart, Checkout, Account, Category, Search)
- **Key components** (Hero, ProductGrid, ProductCard, Price, SizePicker, FilterSidebar)
- **State variations** (empty, loading, error, sale, dark mode)
- **Responsive breakpoints** (375px, 768px, 1280px+)

Reference this DESIGN.md for exact tokens and component recipes.