# Design System: MARIFER
**Project ID:** organic-be70416d-e11a-46dc-ac70-51956bc5d6fb

## 1. Visual Theme & Atmosphere
MARIFER is a warm, premium e-commerce design system for a Uruguayan fashion brand. The atmosphere is **soft, approachable, and quietly sophisticated** — never cold or clinical. The palette centers on a **deep violet brand anchor (#452453)** balanced by a creamy off-white canvas (#FFFCFF) tinted with the faintest violet whisper. Neutrals are deliberately warmed toward the brand hue, eliminating harsh grays. Gold (#D4A15A) and raspberry (#D94F78) accents provide strategic warmth and urgency without breaking the cohesive mood. Elevation uses violet-tinted shadows (never neutral gray) so every layer feels like it belongs to the same world. Motion is snappy but gentle — 140–420ms with a signature ease-out that feels responsive, not flashy. The overall density is generous: 24px base gutter, 14px card radius, 44px tap targets. It breathes.

## 2. Color Palette & Roles

### Brand Ramp (Violet — OKLCH-balanced)
| Name | Hex | Role |
|------|-----|------|
| Violet Whisper 50 | #FAF7FB | Subtlest brand tint; hover backgrounds, soft badges |
| Violet Mist 100 | #F2E6F4 | Primary surface tint; category chips, input focus rings |
| Violet Haze 200 | #E3CDE8 | Stronger tint; borders, disabled states |
| Violet Blush 300 | #CAA8D3 | Interactive borders, focus ring base |
| Violet Petal 400 | #A97CB6 | Icon accents, secondary text on dark |
| Violet Orchid 500 | #8A559A | Link hover, brand-text on light |
| Violet Plum 600 | #683A79 | Primary hover, pressed states |
| **Violet Core 700** | **#452453** | **Brand anchor — logo, primary actions, headlines** |
| Violet Midnight 800 | #351B41 | Dark mode surfaces, heavy emphasis |
| Violet Ink 900 | #241230 | Dark mode canvas, strongest text |
| Violet Abyss 950 | #150A1C | Absolute depth |

### Warm Neutrals (Violet-tinted)
| Name | Hex | Role |
|------|-----|------|
| Canvas White | #FFFCFF | **Page background — never pure white** |
| Neutral Whisper 50 | #FAF8FB | Card interiors, subtle banding |
| Neutral Mist 100 | #F4F1F6 | Muted surfaces, alternate rows |
| Neutral Haze 200 | #E8E3EC | Hairline borders, dividers |
| Neutral Blush 300 | #D3CCD8 | Default borders, input resting |
| Neutral Petal 400 | #AAA1B0 | Disabled text, placeholder icons |
| Neutral Orchid 500 | #7D7384 | Muted body text, secondary labels |
| Neutral Plum 600 | #5A5261 | — |
| Neutral Midnight 700 | #403945 | Body copy, form labels |
| Neutral Ink 900 | #1A161D | Strongest headings on light |

### Accent Ramps
| Name | Hex | Role |
|------|-----|------|
| Gold Glow 100 | #FBF1DE | Free-shipping banner, highlight soft bg |
| Gold Sand 300 | #EED6A3 | — |
| **Gold Amber 500** | **#D4A15A** | **Highlights, "6 cuotas", CTAs needing warmth** |
| Gold Bronze 700 | #96662A | Gold text on light |
| Berry Mist 100 | #FDE9EF | Sale soft backgrounds |
| Berry Blush 300 | #F6B4C8 | — |
| **Berry Pop 500** | **#D94F78** | **Sale badges, urgency, discount prices** |
| Berry Deep 700 | #9C2B4D | Sale text on light |

### Semantic Aliases (use these in components)
- **Surfaces:** `--surface-canvas` (#FFFCFF), `--surface-card` (#FFFFFF), `--surface-subtle` (violet-100), `--surface-muted` (neutral-100), `--surface-inset` (neutral-200), `--surface-inverse` (violet-700)
- **Text:** `--text-strong` (violet-900), `--text-body` (neutral-700), `--text-muted` (neutral-500), `--text-faint` (neutral-400), `--text-on-brand` (neutral-0), `--text-brand` (violet-700)
- **Borders:** `--border-hairline` (neutral-200), `--border-default` (neutral-300), `--border-strong` (violet-300), `--border-brand` (violet-700)
- **Actions:** `--action-primary` (violet-700), `--action-primary-hover` (violet-600), `--action-primary-press` (violet-800), `--action-primary-soft` (violet-100), `--action-secondary-bg` (white), `--focus-ring` (rgba(69,36,83,0.28))
- **Commerce:** `--price-current` (violet-900), `--price-was` (neutral-400), `--sale` (berry-500), `--highlight` (gold-500)

### Dark Mode (`[data-theme="brand"]`)
Canvas flips to violet-700, cards to violet-800, text to violet-200/neutral-0, borders to rgba(white, 0.16–0.28), primary actions invert to neutral-0.

## 3. Typography Rules

### Font Families
- **Display (Headlines):** **Outfit** — geometric, warm, weights 600–800. Negative tracking on hero/headings.
- **Body (UI, Copy):** **Manrope** — humanist, readable, weights 400–700. Neutral tracking.
- **Logo/Brand Moments:** **Lobster Two Bold Italic** — retro script with serifs, *only* for logo/marquee moments.
- **Mono:** **JetBrains Mono** — code, tabular numbers.

### Scale (Clamped, 1.25 ratio compressed for UI)
| Token | Size | Line Height | Weight | Tracking | Use |
|-------|------|-------------|--------|----------|-----|
| `--text-hero` | clamp(44px, 6vw, 72px) | 1.08 (tight) | 800 | -0.025em | Hero headlines |
| `--text-h1` | 36px | 1.2 (snug) | 700 | -0.012em | Page titles |
| `--text-h2` | 28px | 1.2 (snug) | 700 | -0.012em | Section headers |
| `--text-h3` | 20px | 1.2 (snug) | 600 | -0.012em | Card titles |
| `--text-h4` | 17px | 1.2 (snug) | 600 | 0 | Button lg, product names |
| `--text-lead` | 18px | 1.45 (normal) | 400 | 0 | Hero subcopy |
| `--text-body-size` | **15px** | 1.45 (normal) | 400 | 0 | **Base body copy** |
| `--text-small` | 13px | 1.45 | 400 | 0 | Secondary info, timestamps |
| `--text-caption` | 12px | 1.45 | 400 | 0 | Hints, errors, footnotes (minimum) |
| `--text-tag` | 11px | 1.0 | 800 (black) | +0.09em | **Uppercase tags, eyebrows, categories** |
| `--text-eyebrow` | 11px | 1.0 | 800 | +0.16em | Section eyebrows |

### Hierarchy Principles
- **Display family** owns all `h1–h5` — color `--text-strong`, tracking `--tracking-head`.
- **Body family** owns everything else — color `--text-body` (or muted/faint for hierarchy).
- **Never** set font-size below 12px.
- **Eyebrow/Tag** style: uppercase, black weight, wide tracking, brand violet text.

## 4. Component Stylings

### Buttons
- **Shape:** **Pill (999px radius)** — fully rounded ends, friendly and tactile.
- **Base:** Inline-flex, centered, bold Manrope, 1px transparent border, snappy transitions (200ms ease-standard).
- **Sizes:** `sm` (34px / 13px), `md` (44px / 15px), `lg` (52px / 17px).
- **Variants:**
  - **Primary:** Violet-700 bg, white text, brand shadow (`--shadow-brand`). Hover → violet-600 + elevated shadow. Press → scale 0.985.
  - **Secondary:** White bg, violet-900 text, neutral-300 border, xs shadow. Hover → muted surface + violet-300 border.
  - **Soft:** Violet-100 bg, violet-700 text. Hover → violet-200.
  - **Ghost:** Transparent, violet-700 text. Hover → violet-100 bg.
  - **Sale:** Berry-500 bg, white text, berry shadow. Hover → berry-700.
- **States:** Focus-visible = 2px solid primary + 2px offset. Disabled = neutral-200 bg, neutral-400 text, no shadow.

### Cards / Containers
- **Shape:** **Generously rounded (14px / `--radius-card`)** — softer than standard 8–12px.
- **Background:** `--surface-card` (pure white on light, violet-800 on dark).
- **Border:** 1px `--border-hairline` (neutral-200 / rgba white 0.16).
- **Shadow:** Resting `xs` (0 1px 2px rgba(violet-900, 0.06)). Hover → `lg` (0 14px 36px rgba(violet-900, 0.14)) + `translateY(-2px)` lift.
- **Padding:** Internal `--space-12` (12px), content gap `--space-12`.
- **Image/Thumb Radius:** `--radius-sm` (10px) for media inside cards; `--radius-lg` (20px) for hero/product images.

### Inputs / Forms
- **Shape:** **Pill (999px)** — matches buttons for visual harmony.
- **Height:** 44px minimum (tap target).
- **Background:** `--surface-card` (white / violet-800).
- **Border:** 1px `--border-default` (neutral-300) resting; `--border-brand` (violet-700) on focus; `--red-500` on error.
- **Focus Ring:** `--ring-focus` (3px rgba(69,36,83,0.28)).
- **Label:** Manrope semibold 13px, `--text-strong`.
- **Placeholder/Text:** Manrope 15px, `--text-strong` (input), `--text-muted` (placeholder).
- **Icon Slot:** Leading, 16×16, currentColor.
- **Hint/Error:** Caption 12px, muted or red-500.

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

### Price Display
- **Current:** Violet-900, Outfit semibold (size-dependent).
- **Was/Original:** Neutral-400, strikethrough, smaller.
- **Installments:** "6 cuotas sin recargo" in gold-500, tag style.

### Product Grid
- **Columns:** 4-col ≥1024px (gap 24px), 2-col mobile (gap 12px).
- **Card Aspect:** 3:4 (product), 1:1 (thumbnails).
- **Image Radius:** 10px (sm).

## 5. Layout Principles

### Spacing Scale (4px base, 1.10× progression)
`4 · 8 · 12 · 16 · 24 · 32 · 40 · 56 · 72 · 96`
- **Gutter/Grid Gap:** 24px (desktop), 12px (mobile).
- **Container Max:** 1280px, centered, 24px horizontal padding.
- **Section Vertical Rhythm:** 56px between major sections, 32px between sub-sections, 24px inside cards.
- **Header Height:** 72px fixed.
- **Sidebar (Filters):** 264px fixed.

### Grid & Alignment
- **12-column implied grid** via 24px gutters.
- **Product catalog:** 4-col auto-fit grid, gap 24px.
- **Feature rows:** 3-col grid, gap 16px.
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

### Motion
- **Durations:** `--dur-fast` 140ms, `--dur-base` 200ms, `--dur-slow` 320ms, `--dur-panel` 420ms.
- **Easings:** `--ease-standard` (0.22, 0.61, 0.36, 1) for most; `--ease-out` (0.16, 1, 0.3, 1) for exits; `--ease-in-out` (0.65, 0, 0.35, 1) for complex.
- **Micro-interactions:** Hover lift `translateY(-2px)`, press scale `0.985`, opacity/fade on reveal.
- **No idle animation** — motion performs, doesn't breathe.

### Accessibility
- **Focus-visible:** 2px solid primary, 2px offset, xs radius.
- **Selection:** Violet-200 bg / violet-900 text.
- **Contrast:** All text meets WCAG AA on declared surfaces.
- **Tap targets:** Minimum 44×44px.
- **Reduced motion:** Transitions respect `prefers-reduced-motion` (handled at app level).

## 6. Stitch Prompting Guidance

When prompting Stitch for new MARIFER screens, lead with:

> **"MARIFER e-commerce design system: warm violet brand (#452453) on creamy off-white canvas (#FFFCFF), violet-tinted neutrals, gold/berry accents. Generous 24px rhythm, 14px card radius, pill buttons/inputs, violet-tinted shadows. Outfit display (800/700, negative tracking) + Manrope body (15px/1.45). Snappy 200ms ease-out motion. Uruguayan fashion retail tone — approachable, premium, trustworthy."**

Then specify:
- **Screen type** (Home, PDP, Cart, Checkout, Account, etc.)
- **Key components** needed (Hero, ProductGrid, ProductCard, Price, SizePicker, etc.)
- **State variations** (empty, loading, error, sale, dark mode)
- **Responsive breakpoints** (mobile 375px, tablet 768px, desktop 1280px+)

Reference this DESIGN.md for exact tokens and component recipes.