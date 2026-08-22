# Design System: MARIFER

**Project ID:** organic-be70416d-e11a-46dc-ac70-51956bc5d6fb

## Configuration — Set Your Style

Adjust these dials before prompting Stitch. They control creative intensity, density, asymmetry, and motion.

| Dial              | Level | Description                                                             |
| ----------------- | ----- | ----------------------------------------------------------------------- |
| **Creativity**    | `9`   | Expressive, editorial, inline images in headlines, strong asymmetry     |
| **Density**       | `5`   | Balanced sections, generous 24px gutter, 14px card radius               |
| **Variance**      | `8`   | Asymmetric layouts, no two sections alike, centered Hero BANNED         |
| **Motion Intent** | `6`   | Spring physics (100/20), perpetual micro-loops, staggered orchestration |

> **Usage:** Lead Stitch prompts with these dials. At Creativity 9, expect inline image typography and dramatic scale contrast. At Variance 8, Hero must be asymmetric (Split Screen / Left-Aligned). Motion 6 = fluid spring physics on every interactive element.

---

## 1. Visual Theme & Atmosphere

MARIFER is a **warm, premium Uruguayan fashion e-commerce** design system. The atmosphere is **soft, approachable, and quietly sophisticated** — never cold or clinical.

The palette centers on a **deep violet brand anchor (#452453)** balanced by a creamy off-white canvas (#FFFCFF) tinted with the faintest violet whisper. Neutrals are deliberately warmed toward the brand hue, eliminating harsh grays. **Gold Amber (#D4A15A)** is the singular brand accent (warmth, "6 cuotas", highlights). **Berry Pop (#D94F78)** serves strictly as a _semantic alias_ for sale/urgency — not a brand accent.

Elevation uses **violet-tinted shadows** (never neutral gray) so every layer feels like it belongs to the same world. Motion is snappy but gentle — 140–420ms with signature ease-out that feels responsive, not flashy. Density is generous: 24px base gutter, 14px card radius, 44px tap targets. It breathes.

**Dial Mapping:** Creativity 9 → inline image typography in Hero. Variance 8 → asymmetric Hero, Bento grids, no 3-col equal cards. Density 5 → generous whitespace. Motion 6 → spring physics on all interactions, perpetual micro-loops on active components.

---

## 2. Color Palette & Roles

### Brand Ramp (Violet — OKLCH-balanced)

| Name                | Hex         | Role                                                    |
| ------------------- | ----------- | ------------------------------------------------------- |
| Violet Whisper 50   | #FAF7FB     | Subtlest brand tint; hover backgrounds, soft badges     |
| Violet Mist 100     | #F2E6F4     | Primary surface tint; category chips, input focus rings |
| Violet Haze 200     | #E3CDE8     | Stronger tint; borders, disabled states                 |
| Violet Blush 300    | #CAA8D3     | Interactive borders, focus ring base                    |
| Violet Petal 400    | #A97CB6     | Icon accents, secondary text on dark                    |
| Violet Orchid 500   | #8A559A     | Link hover, brand-text on light                         |
| Violet Plum 600     | #683A79     | Primary hover, pressed states                           |
| **Violet Core 700** | **#452453** | **Brand anchor — logo, primary actions, headlines**     |
| Violet Midnight 800 | #351B41     | Dark mode surfaces, heavy emphasis                      |
| Violet Ink 900      | #241230     | Dark mode canvas, strongest text                        |
| Violet Abyss 950    | #150A1C     | Absolute depth                                          |

### Warm Neutrals (Violet-tinted)

| Name                 | Hex         | Role                                   |
| -------------------- | ----------- | -------------------------------------- |
| **Canvas White**     | **#FFFCFF** | **Page background — never pure white** |
| Neutral Whisper 50   | #FAF8FB     | Card interiors, subtle banding         |
| Neutral Mist 100     | #F4F1F6     | Muted surfaces, alternate rows         |
| Neutral Haze 200     | #E8E3EC     | Hairline borders, dividers             |
| Neutral Blush 300    | #D3CCD8     | Default borders, input resting         |
| Neutral Petal 400    | #AAA1B0     | Disabled text, placeholder icons       |
| Neutral Orchid 500   | #7D7384     | Muted body text, secondary labels      |
| Neutral Plum 600     | #5A5261     | —                                      |
| Neutral Midnight 700 | #403945     | Body copy, form labels                 |
| Neutral Ink 900      | #1A161D     | Strongest headings on light            |

### Singular Brand Accent (Max 1, Saturation <80%)

| Name               | Hex         | Role                                                    |
| ------------------ | ----------- | ------------------------------------------------------- |
| **Gold Amber 500** | **#D4A15A** | **Highlights, "6 cuotas", primary CTAs needing warmth** |
| Gold Glow 100      | #FBF1DE     | Free-shipping banner, highlight soft bg                 |
| Gold Sand 300      | #EED6A3     | —                                                       |
| Gold Bronze 700    | #96662A     | Gold text on light                                      |

### Semantic Aliases (Commerce/State — Not Brand Accents)

| Alias                  | Hex         | Role                                             |
| ---------------------- | ----------- | ------------------------------------------------ |
| **--sale / --urgency** | **#D94F78** | Sale badges, discount prices, urgency indicators |
| Berry Mist 100         | #FDE9EF     | Sale soft backgrounds                            |
| Berry Blush 300        | #F6B4C8     | —                                                |
| Berry Deep 700         | #9C2B4D     | Sale text on light                               |
| --success              | #10B981     | Success states, confirmations                    |
| --error                | #E11D48     | Error states, destructive actions                |

### Semantic Aliases (Component Tokens — Use These in Components)

- **Surfaces:** `--surface-canvas` (#FFFCFF), `--surface-card` (#FFFFFF), `--surface-subtle` (violet-100), `--surface-muted` (neutral-100), `--surface-inset` (neutral-200), `--surface-inverse` (violet-700)
- **Text:** `--text-strong` (violet-900), `--text-body` (neutral-700), `--text-muted` (neutral-500), `--text-faint` (neutral-400), `--text-on-brand` (neutral-0), `--text-brand` (violet-700)
- **Borders:** `--border-hairline` (neutral-200), `--border-default` (neutral-300), `--border-strong` (violet-300), `--border-brand` (violet-700)
- **Actions:** `--action-primary` (violet-700), `--action-primary-hover` (violet-600), `--action-primary-press` (violet-800), `--action-primary-soft` (violet-100), `--action-secondary-bg` (white), `--focus-ring` (rgba(69,36,83,0.28))
- **Commerce:** `--price-current` (violet-900), `--price-was` (neutral-400), `--sale` (berry-500), `--highlight` (gold-500)

### Dark Mode (`[data-theme="brand"]`)

Canvas flips to violet-700, cards to violet-800, text to violet-200/neutral-0, borders to rgba(white, 0.16–0.28), primary actions invert to neutral-0.

### Banned Colors (Explicit)

- Purple/Violet neon gradients — the "AI Purple" aesthetic
- Pure Black (#000000) — always Off-Black (Zinc-950 / Violet Abyss 950)
- Oversaturated accents above 80% saturation
- Mixed warm/cool gray systems within one project
- More than ONE brand accent color (Gold Amber is the only one)

---

## 3. Typography Rules

### Font Families

- **Display (Headlines):** **Outfit** — geometric, warm, weights 600–800. Negative tracking on hero/headings.
- **Body (UI, Copy):** **Manrope** — humanist, readable, weights 400–700. Neutral tracking.
- **Logo/Brand Moments:** **Lobster Two Bold Italic** — retro script with serifs, _only_ for logo/marquee moments.
- **Mono:** **JetBrains Mono** — code, tabular numbers, metadata. **High-density override (Density >7): all numbers switch to mono.**

### Scale (Clamped, 1.25 ratio compressed for UI)

| Token              | Size                   | Line Height   | Weight      | Tracking | Use                                      |
| ------------------ | ---------------------- | ------------- | ----------- | -------- | ---------------------------------------- |
| `--text-hero`      | clamp(44px, 6vw, 72px) | 1.08 (tight)  | 800         | -0.025em | Hero headlines                           |
| `--text-h1`        | 36px                   | 1.2 (snug)    | 700         | -0.012em | Page titles                              |
| `--text-h2`        | 28px                   | 1.2 (snug)    | 700         | -0.012em | Section headers                          |
| `--text-h3`        | 20px                   | 1.2 (snug)    | 600         | -0.012em | Card titles                              |
| `--text-h4`        | 17px                   | 1.2 (snug)    | 600         | 0        | Button lg, product names                 |
| `--text-lead`      | 18px                   | 1.45 (normal) | 400         | 0        | Hero subcopy                             |
| `--text-body-size` | **15px**               | 1.45 (normal) | 400         | 0        | **Base body copy**                       |
| `--text-small`     | 13px                   | 1.45          | 400         | 0        | Secondary info, timestamps               |
| `--text-caption`   | 12px                   | 1.45          | 400         | 0        | Hints, errors, footnotes (minimum)       |
| `--text-tag`       | 11px                   | 1.0           | 800 (black) | +0.09em  | **Uppercase tags, eyebrows, categories** |
| `--text-eyebrow`   | 11px                   | 1.0           | 800         | +0.16em  | Section eyebrows                         |

### Hierarchy Principles

- **Display family (Outfit)** owns all `h1–h5` — color `--text-strong`, tracking `--tracking-head`.
- **Body family (Manrope)** owns everything else — color `--text-body` (or muted/faint for hierarchy).
- **Never** set font-size below 12px.
- **Eyebrow/Tag** style: uppercase, black weight, wide tracking, brand violet text.
- **Body max-width: 65ch** — enforced via container or prose class.

### Banned Fonts (Explicit)

- `Inter` — banned everywhere in premium/creative contexts
- Generic serif fonts (`Times New Roman`, `Georgia`, `Garamond`, `Palatino`) — BANNED. If serif is needed for editorial/creative, use only distinctive modern serifs: `Fraunces`, `Gambarino`, `Editorial New`, `Instrument Serif`. **Serif is always BANNED in dashboards or software UIs.**

---

## 4. Component Stylings

### Buttons

- **Shape:** **Pill (999px radius)** — fully rounded ends, friendly and tactile.
- **Base:** Inline-flex, centered, bold Manrope, 1px transparent border, snappy transitions (200ms ease-standard).
- **Sizes:** `sm` (34px / 13px), `md` (44px / 15px), `lg` (52px / 17px).
- **Variants:**
  - **Primary:** Violet-700 bg, white text, brand shadow (`--shadow-brand`). Hover → violet-600 + elevated shadow. Press → `scale(0.985)`.
  - **Secondary:** White bg, violet-900 text, neutral-300 border, xs shadow. Hover → muted surface + violet-300 border.
  - **Soft:** Violet-100 bg, violet-700 text. Hover → violet-200.
  - **Ghost:** Transparent, violet-700 text. Hover → violet-100 bg.
  - **Sale:** Berry-500 bg, white text, berry shadow. Hover → berry-700.
- **States:** Focus-visible = 2px solid primary + 2px offset. Disabled = neutral-200 bg, neutral-400 text, no shadow.
- **No neon outer glows. No custom mouse cursors. Tactile push feedback on active.**

### Cards / Containers

- **Shape:** **Generously rounded (14px / `--radius-card`)** — softer than standard 8–12px.
- **Background:** `--surface-card` (pure white on light, violet-800 on dark).
- **Border:** 1px `--border-hairline` (neutral-200 / rgba white 0.16).
- **Shadow:** Resting `xs` (0 1px 2px rgba(violet-900, 0.06)). Hover → `lg` (0 14px 36px rgba(violet-900, 0.14)) + `translateY(-2px)` lift.
- **Padding:** Internal `--space-12` (12px), content gap `--space-12`.
- **Image/Thumb Radius:** `--radius-sm` (10px) for media inside cards; `--radius-lg` (20px) for hero/product images.
- **Usage Rule:** Cards ONLY when elevation communicates hierarchy. High-density layouts replace cards with `border-top` dividers or negative space.
- **No Overlapping:** Cards never overlap other cards or content. Clean spatial separation always.

### Inputs / Forms

- **Shape:** **Pill (999px)** — matches buttons for visual harmony.
- **Height:** 44px minimum (tap target).
- **Background:** `--surface-card` (white / violet-800).
- **Border:** 1px `--border-default` (neutral-300) resting; `--border-brand` (violet-700) on focus; `--error` on error.
- **Focus Ring:** `--focus-ring` (3px rgba(69,36,83,0.28)).
- **Label:** Manrope semibold 13px, `--text-strong`, positioned **above** input.
- **Placeholder/Text:** Manrope 15px, `--text-strong` (input), `--text-muted` (placeholder).
- **Icon Slot:** Leading, 16×16, currentColor.
- **Hint/Error:** Caption 12px, muted or `--error`.
- **No floating labels. Standard 0.5rem gap between label-input-error stack.**

### Badges / Tags

- **Shape:** Pill (999px), 3px×9px padding.
- **Text:** Manrope black 11px, uppercase, +0.09em tracking.
- **Tones:** `brand` (violet-700/white), `sale` (berry-500/white), `gold` (gold-500/violet-900), `neutral` (inset surface/body), `success` (green-500/white).

### Navigation

- **Header:** Sticky, 72px height, violet-700 bar over gold-100 announcement strip.
- **Logo:** Lobster Two Italic 30px, white.
- **Nav Links:** Manrope semibold 15px, violet-200 default → white active.
- **Search Input:** Embedded in header, pill, 240px wide.
- **Icon Buttons:** 44×44 tap target, pill, white icons, hover → violet-600 bg.
- **Desktop:** Clean horizontal with generous spacing. **No hamburger on desktop.**
- **Mobile:** Collapses to clean mobile menu (slide-in or full-screen overlay). No tiny hamburger without labels.

### Price Display

- **Current:** Violet-900, Outfit semibold (size-dependent).
- **Was/Original:** Neutral-400, strikethrough, smaller.
- **Installments:** "6 cuotas sin recargo" in gold-500, tag style.

### Product Grid

- **Columns:** 4-col ≥1024px (gap 24px), 2-col mobile (gap 12px).
- **Card Aspect:** 3:4 (product), 1:1 (thumbnails).
- **Image Radius:** 10px (sm).

### Loaders (Skeletal Shimmer — No Circular Spinners)

- **Behavior:** Shifting light reflection across placeholder shapes matching exact layout dimensions and rounded corners.
- **Implementation:** CSS keyframe animation on gradient overlay. Duration ~1.5s infinite.
- **Variants:** Text lines (h-4), images (aspect-square), buttons (pill), cards (full card skeleton).
- **BANNED:** Generic circular spinners, bouncing dots, "Loading..." text-only.

### Empty States

- **Composition:** Illustrated/icon composition + guidance text + primary action to populate.
- **Never:** Just "No data found" or "No results" text alone.
- **Examples:** Empty cart → illustration + "Agregá tu primer producto" CTA. Empty wishlist → heart icon + "Guardá lo que te gusta". No search results → search icon + "Probá otros términos" + clear filters button.

### Error States

- **Inline, Contextual:** Red accent underline or border on failed field. Clear recovery action text.
- **Toast/Alert:** `--error` bg (10%), `--error` text, dismissible, auto-dismiss after 5s for non-critical.
- **Page-level:** Composed illustration + explanation + primary action (retry / go home / contact).

---

## 5. Hero Section

The Hero is the first impression — it must be striking, creative, and **never generic**.

- **Inline Image Typography (Signature Technique):** Embed small, contextual photos or visuals directly between words or letters in the headline. Images sit inline at type-height, rounded (8px), acting as visual punctuation. Example: "Descubrí [foto: manos eligiendo tela] tu estilo [foto: percha con prenda] único" — images replace words or sit between them.
- **No Overlapping Elements:** Text must never overlap images or other text. Every element has its own clear spatial zone. No z-index stacking of content layers, no absolute-positioned headlines over images. Clean separation always.
- **No Filler Text:** "Scroll to explore", "Swipe down", scroll arrow icons, bouncing chevrons, "Discover more below" — **ALL BANNED**. The user knows how to scroll. Let the content pull them in naturally.
- **Asymmetric Structure (Variance 8 → Centered BANNED):** Use **Split Screen (50/50)**, **Left-Aligned text / Right visual**, or **Asymmetric Whitespace** with large empty zones. No centered hero layouts.
- **CTA Restraint:** Maximum **one primary CTA button**. No secondary "Learn more" links. No redundant micro-copy below the headline.
- **Responsive:** Inline typography images stack below headline on mobile (<768px) instead of inline. Hero scales via `clamp()`.

---

## 6. Layout Principles

### Spacing Scale (4px base, 1.10× progression)

`4 · 8 · 12 · 16 · 24 · 32 · 40 · 56 · 72 · 96`

- **Gutter/Grid Gap:** 24px (desktop), 12px (mobile).
- **Container Max:** **1400px**, centered, 24px horizontal padding (mobile: 16px, tablet: 24px, desktop: 48px).
- **Section Vertical Rhythm:** 56px between major sections, 32px between sub-sections, 24px inside cards.
- **Header Height:** 72px fixed.
- **Sidebar (Filters):** 264px fixed.

### Grid & Alignment

- **12-column implied grid** via 24px gutters. **CSS Grid for all structural layouts.** Never flexbox percentage math (`calc(33% - 1rem)` is BANNED).
- **Product catalog:** 4-col auto-fit grid, gap 24px.
- **Feature rows / Bento Architecture:**
  - Row 1: 3 columns (equal)
  - Row 2: 2 columns (70/30 split)
  - Each tile contains a perpetual micro-animation
- **Card internals:** Flex column, gap 12px (media → content → price).
- **Form stacks:** Flex column, gap 6px (label → input → hint).

### Density & Whitespace

- **Generous but not sparse.** 24px base gutter creates rhythm. Cards have 12px internal padding. Hero sections use 56–72px vertical padding.
- **No arbitrary spacing** — every value comes from the scale.
- **Mobile compaction:** Grid gaps halve (24→12), section padding drops to 32px, hero scales via clamp.

### Elevation & Depth

- **Four shadow levels + brand:**
  - `xs` (0 1px 2px / 6%) — resting cards
  - `sm` (0 2px 6px / 7%) — subtle lift
  - `md` (0 6px 18px / 10%) — dropdowns, modals
  - `lg` (0 14px 36px / 14%) — hover cards, elevated panels
  - `brand` (0 6px 18px rgba(69,36,83,0.24)) — primary buttons
- **All shadows tinted with violet-900** (`rgba(36,18,48,α)`), never neutral gray.
- **Inset highlight:** `inset 0 1px 0 rgba(255,252,255,0.5)` for pressed/active surfaces.

### Banned Layout Patterns

- **3 equal cards horizontally** — use Bento, Zig-Zag, or horizontal scroll
- **Centered Hero sections** (Variance 8)
- **Overlapping elements** — clean spatial zones only
- **`h-screen`** — always `min-h-[100dvh]` (iOS Safari address bar jump)
- **Flexbox percentage math** — CSS Grid only

---

## 7. Responsive Rules

**Hard Requirement:** Every screen must work flawlessly across all viewports. **Responsive is not optional. Every single element must be tested at 375px, 390px, 768px, 1024px, and 1440px.**

- **Mobile-First Collapse (< 768px):** All multi-column layouts collapse to a strict single column. `width: 100%`, `padding: 1rem`, `gap: 1.5rem`. **No exceptions.**
- **No Horizontal Scroll:** Horizontal overflow on mobile is a **critical failure**. All elements must fit within viewport width. If any element causes horizontal scroll, the design is broken.
- **Typography Scaling:** Headlines scale down gracefully via `clamp()`. Body text stays `1rem` (15px) minimum. **Never shrink body below 14px.** Headlines must remain readable on 375px screens.
- **Touch Targets:** All interactive elements minimum **44×44px** tap target. Generous spacing between clickable items. Buttons must be **full-width on mobile**.
- **Image Behavior:** Hero and inline images scale proportionally. Inline typography images (photos between words) **stack below the headline on mobile** instead of inline.
- **Navigation:** Desktop horizontal nav collapses to a clean mobile menu (slide-in or full-screen overlay). No tiny hamburger icons without labels.
- **Cards & Grids:** Bento grids and asymmetric layouts revert to stacked single-column cards with full-width. Maintain internal padding (`1rem`).
- **Spacing Consistency:** Vertical section gaps reduce proportionally on mobile (`clamp(3rem, 8vw, 6rem)`). Never cramped, never excessively airy.
- **Testing Viewports (Mandatory):** `375px` (iPhone SE), `390px` (iPhone 14), `768px` (iPad), `1024px` (small laptop), `1440px` (desktop).

---

## 8. Motion & Interaction (Code-Phase Intent)

> **Note:** Stitch generates static screens — it does not animate. This section documents the **intended motion behavior** so that the coding agent (Antigravity, Cursor, etc.) knows exactly how to implement animations when building the exported design into a live product.

- **Physics Engine:** Spring-based exclusively. `stiffness: 100, damping: 20`. **No linear easing anywhere.** Premium, weighty feel on all interactive elements.
- **Perpetual Micro-Loops:** Every active dashboard/component has an infinite-loop state:
  - **Pulse** on status dots, live indicators
  - **Typewriter** on search bars, empty input prompts
  - **Float** on feature icons, decorative elements
  - **Shimmer** on loading states, skeletal placeholders
- **Staggered Orchestration:** Lists and grids mount with cascaded delays (`animation-delay: calc(var(--index) * 100ms)`). Waterfall reveals, never instant mount.
- **Layout Transitions:** Smooth re-ordering via shared element IDs. Items swap positions with physics, simulating real-time intelligence.
- **Hardware Rules:** Animate **ONLY `transform` and `opacity`**. Never `top`, `left`, `width`, `height`. Grain/noise filters on fixed, `pointer-events-none` pseudo-elements only.
- **Performance:** CPU-heavy perpetual animations isolated in microscopic leaf components. Never trigger parent re-renders. Target **60fps minimum**.
- **Reduced Motion:** Transitions respect `prefers-reduced-motion` (handled at app level — disable spring, use instant).

---

## 9. Anti-Patterns (Banned — Explicit "NEVER DO" Rules)

1. **No emojis** — anywhere in UI, code, or alt text
2. **No `Inter` font** — use `Outfit`, `Manrope`, `Geist`, `Cabinet Grotesk`, `Satoshi`
3. **No generic serif fonts** (`Times New Roman`, `Georgia`, `Garamond`) — if serif needed, use distinctive modern serifs only (`Fraunces`, `Instrument Serif`)
4. **No pure black** (`#000000`) — Off-Black or Zinc-950 / Violet Abyss 950 only
5. **No neon outer glows** or default box-shadow glows
6. **No oversaturated accent colors** above 80% saturation
7. **No excessive gradient text** on large headers
8. **No custom mouse cursors**
9. **No overlapping elements** — text never overlaps images or other content. Clean spatial separation always
10. **No 3-column equal card layouts** for features — use Bento, Zig-Zag, or horizontal scroll
11. **No centered Hero sections** (at Variance 8)
12. **No filler UI text:** "Scroll to explore", "Swipe down", "Discover more below", scroll arrows, bouncing chevrons — all BANNED
13. **No generic names:** "John Doe", "Sarah Chan", "Acme", "Nexus", "SmartFlow"
14. **No fake round numbers:** `99.99%`, `50%`, `1234567` — use organic data: `47.2%`, `+1 (312) 847-1928`
15. **No fabricated data or statistics** — never generate metrics, performance numbers, uptime percentages, response times, or any data not explicitly provided by the user. "99.98% UPTIME SLA", "124ms AVG. RESPONSE", "18.5k DEPLOY CYCLES" are invented AI filler. Use `[metric]` placeholders if real data is unavailable
16. **No fake system/metric sections** — "SYSTEM PERFORMANCE METRICS", "KEY STATISTICS", "BY THE NUMBERS" dashboard cards filled with invented data are BANNED
17. **No `LABEL // YEAR` formatting** — "SYSTEM // 2024", "METRICS // 2025" is a lazy AI convention, not real design typography
18. **No AI copywriting clichés:** "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize"
19. **No broken Unsplash links** — use `picsum.photos/seed/{id}/800/600` or SVG UI Avatars
20. **No generic `shadcn/ui` defaults** — customize radii, colors, shadows to match this system
21. **No `z-index` spam** — use only for Navbar, Modal, Overlay layer contexts
22. **No `h-screen`** — always `min-h-[100dvh]`
23. **No circular loading spinners** — skeletal shimmer only
24. **More than ONE brand accent color** — Gold Amber (#D4A15A) is the only one

---

## Stitch Prompting Guidance

When prompting Stitch for new MARIFER screens, lead with:

> **"MARIFER e-commerce design system: warm violet brand (#452453) on creamy off-white canvas (#FFFCFF), violet-tinted neutrals, singular Gold Amber accent (#D4A15A), Berry Pop (#D94F78) as sale/urgency semantic only. Generous 24px rhythm, 14px card radius, pill buttons/inputs, violet-tinted shadows. Outfit display (800/700, negative tracking) + Manrope body (15px/1.45, 65ch max). Spring physics (100/20), perpetual micro-loops, staggered 100ms cascade. Variance 8 asymmetric layouts, Bento grids, no 3-col equal cards. Uruguayan fashion retail tone — approachable, premium, trustworthy."**

Then specify:

- **Screen type** (Home, PDP, Cart, Checkout, Account, Category, Search, etc.)
- **Key components** needed (Hero, ProductGrid, ProductCard, Price, SizePicker, FilterSidebar, etc.)
- **State variations** (empty, loading, error, sale, dark mode)
- **Responsive breakpoints** (mobile 375px, tablet 768px, desktop 1280px+)

Reference this DESIGN.md for exact tokens and component recipes.
