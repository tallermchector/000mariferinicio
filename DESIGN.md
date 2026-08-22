# Design System: MARIFER

> **Versión 2 — 2026-08-22.** Fuente de verdad para generar pantallas en Google Stitch y para el agente de código. Todos los valores coinciden 1:1 con `src/assets/css/partials/variables.scss`, `main.scss` y `pages.scss`. Si cambiás un token acá, cambialo también en el CSS (y viceversa).

---

## 1. Visual Theme & Atmosphere

MARIFER es una **tienda online de moda uruguaya** — prendas atemporales, materiales nobles, tradición textil local con mirada contemporánea. La interfaz debe sentirse como una **boutique bien iluminada**: cálida, cercana y silenciosamente premium. Nunca fría, nunca clínica, nunca "tech".

- **Ancla cromática:** violeta profundo (#452453) sobre un lienzo crema casi blanco (#FFFCFF) con un susurro violeta. Los neutros se entibian hacia el tono de marca — no existen grises fríos.
- **Único acento de marca:** Gold Amber (#D4A15A) — calidez, "6 cuotas sin recargo", estrellas de rating. Berry Pop (#D94F78) es **alias semántico de oferta/urgencia**, no acento de marca.
- **Profundidad:** toda sombra está teñida con violeta-900 (`rgba(36,18,48,α)`); ninguna capa parece pegada desde otro mundo.
- **Ritmo:** gutter base 24px, radio de tarjeta 14px, píldoras (999px) para botones/inputs/badges, tap targets 44px.
- **Movimiento:** ágil pero amable — 140–420ms con ease-out de firma; física spring en JS.

**Diales:** Creatividad **9** (tipografía con imágenes inline) · Variancia **8** (hero asimétrico 60/40, bento 12 columnas) · Movimiento **6** (spring + micro-loops discretos) · Densidad **5** (aire generoso; en carrito/checkout sube a 7 y los números pasan a mono).

---

## 2. Color Palette & Roles

### Rampa de marca — Violeta (OKLCH-balanceada)

| Token | Nombre | Hex | Rol |
|-------|--------|-----|-----|
| `--violet-50` | Violet Whisper | #FAF7FB | Tinte mínimo; hover de fondos |
| `--violet-100` | Violet Mist | #F2E6F4 | Superficie sutil; chips, botón soft, ícono de trust bar |
| `--violet-200` | Violet Haze | #E3CDE8 | Bordes tenues, deshabilitados; texto en dark mode |
| `--violet-300` | Violet Blush | #CAA8D3 | Bordes interactivos, base del focus ring |
| `--violet-400` | Violet Petal | #A97CB6 | Acentos de íconos |
| `--violet-500` | Violet Orchid | #8A559A | Hover de links, texto de marca sobre claro |
| `--violet-600` | Violet Plum | #683A79 | Hover de acción primaria |
| **`--violet-700`** | **Violet Core** | **#452453** | **Ancla de marca — logo, header, acciones primarias, titulares** |
| `--violet-800` | Violet Midnight | #351B41 | Pressed de primaria; superficies dark mode |
| `--violet-900` | Violet Ink | #241230 | Texto más fuerte, precio actual, canvas dark |
| `--violet-950` | Violet Abyss | #150A1C | Profundidad absoluta (reemplaza al negro puro) |

### Neutros cálidos (teñidos de violeta)

| Token | Hex | Rol |
|-------|-----|-----|
| **`--canvas`** (body) | **#FFFCFF** | **Fondo de página — nunca blanco puro** |
| `--neutral-0` | #FFFFFF | Relleno de tarjetas/inputs |
| `--neutral-50` | #FAF8FB | Interiores de tarjeta |
| `--neutral-100` | #F4F1F6 | Superficies atenuadas, filas alternas |
| `--neutral-200` | #E8E3EC | Bordes hairline, divisores, rail del slider |
| `--neutral-300` | #D3CCD8 | Borde por defecto, input en reposo, estrellas vacías |
| `--neutral-400` | #AAA1B0 | Texto deshabilitado, precio tachado |
| `--neutral-500` | #7D7384 | Texto atenuado, metadatos |
| `--neutral-600` | #5A5261 | Intermedio |
| `--neutral-700` | #403945 | Cuerpo de texto, labels de formulario |
| `--neutral-900` | #1A161D | Titulares más fuertes sobre claro |

### Acento único de marca (máx. 1 · saturación < 80%)

| Token | Hex | Rol |
|-------|-----|-----|
| `--gold-100` | #FBF1DE | Franja de envío gratis / anuncio sobre el header |
| `--gold-300` | #EED6A3 | Tinte intermedio |
| **`--gold-500`** | **#D4A15A** | **Highlights, "6 cuotas sin recargo", estrellas activas, badge gold** |
| `--gold-700` | #96662A | Texto dorado sobre claro (contraste AA) |

### Alias semánticos (comercio/estado — NO son acentos de marca)

| Token | Hex | Rol |
|-------|-----|-----|
| `--berry-100` | #FDE9EF | Fondo suave de oferta |
| `--berry-300` | #F6B4C8 | Tinte |
| `--berry-500` | #D94F78 | Badge de oferta, precio con descuento, botón sale |
| `--berry-700` | #9C2B4D | Hover de sale, texto sale sobre claro |
| `--success-500` | #10B981 | Éxito (agregado al carrito, pedido confirmado) |
| `--error-500` | #E11D48 | Error, destructivo |

### Tokens de componente (usar SIEMPRE estos, nunca la rampa cruda)

- **Superficies:** `--surface-canvas` · `--surface-card` (#FFF) · `--surface-subtle` (violet-100) · `--surface-muted` (neutral-100) · `--surface-inset` (neutral-200) · `--surface-inverse` (violet-700)
- **Texto:** `--text-strong` (violet-900) · `--text-body` (neutral-700) · `--text-muted` (neutral-500) · `--text-faint` (neutral-400) · `--text-on-brand` (#FFF) · `--text-brand` (violet-700) · `--text-sale` (berry-500) · `--text-gold` (gold-500)
- **Bordes:** `--border-hairline` (neutral-200) · `--border-default` (neutral-300) · `--border-strong` (violet-300) · `--border-brand` (violet-700)
- **Acciones:** `--action-primary` (violet-700) · `-hover` (violet-600) · `-press` (violet-800) · `-soft` (violet-100) · `--action-secondary-bg` (#FFF) · `--action-sale` (berry-500) · `--focus-ring` rgba(69,36,83,0.28)
- **Comercio:** `--price-current` (violet-900) · `--price-was` (neutral-400) · `--sale` (berry-500) · `--highlight` (gold-500)

### Dark mode — `[data-theme="brand"]`

Canvas → violet-700 · tarjetas → violet-800 · texto → violet-200 / blanco · bordes → blanco al 16–28% · acción primaria invierte a blanco con texto violet-900 · sombras → negro 20–40%.

### Colores prohibidos

- Degradados neón violeta/púrpura ("AI Purple") — el violeta MARIFER es mate y profundo, jamás brilla.
- Negro puro #000000 → usar Violet Abyss #150A1C.
- Acentos con saturación > 80%.
- Sistemas de gris cálido/frío mezclados.
- Más de UN acento de marca (solo Gold Amber).

---

## 3. Typography Rules

### Familias (Google Fonts, preconnect en `_document.tsx`)

- **Display / titulares:** **Outfit** — geométrica, cálida, pesos 600–800, tracking negativo.
- **Cuerpo / UI:** **Manrope** — humanista, legible, pesos 400–700, tracking neutro.
- **Marca / logo:** **Lobster Two** Bold Italic — solo logo del header/footer y marquesinas. Nunca en cuerpo ni titulares.
- **Mono:** **JetBrains Mono** (fallback Fira Code) — números tabulares (cantidad, totales, tooltips del slider), metadatos, códigos de pedido.

### Escala (clamp, ratio 1.25 comprimido)

| Token | Tamaño | Line-height | Peso | Tracking | Uso |
|-------|--------|-------------|------|----------|-----|
| `--text-hero` | clamp(44px, 6vw, 72px) | 1.08 | 800 | -0.025em | Titular del hero |
| `--text-h1` | 36px | 1.2 | 700 | -0.012em | Título de página |
| `--text-h2` | 28px | 1.2 | 700 | -0.012em | Secciones, empty state |
| `--text-h3` | 20px | 1.2 | 600 | -0.012em | Títulos de tarjeta, total del carrito |
| `--text-h4` | 17px | 1.2 | 600 | 0 | Nombre de producto, botón lg, trust bar |
| `--text-lead` | 18px | 1.45 | 400 | 0 | Subcopy del hero |
| **`--text-body`** | **15px** | **1.45** | **400** | **0** | **Cuerpo base** |
| `--text-small` | 13px | 1.45 | 400 | 0 | Secundario, breadcrumb, variante en carrito |
| `--text-caption` | 12px | 1.45 | 400 | 0 | Hints, errores, tooltip slider (**mínimo**) |
| `--text-tag` | 11px | 1.0 | 800 | +0.09em | Tags/badges uppercase, th de tabla |
| `--text-eyebrow` | 11px | 1.0 | 800 | +0.16em | Eyebrows de sección |

### Principios de jerarquía

- Outfit es dueña de `h1–h5`, color `--text-strong`. Manrope es dueña de todo lo demás.
- La jerarquía se construye con **peso y color**, no con tamaño gigante. El hero es el único titular "grande".
- Eyebrow/Tag: uppercase, peso 800, tracking amplio, color violet-700.
- Cuerpo: **máx. 65ch** de ancho. Nunca por debajo de 12px; en móvil el cuerpo se queda en 15px.
- **Densidad > 7 (carrito, checkout, tablas):** todos los números en JetBrains Mono con `font-variant-numeric: tabular-nums`.

### Fuentes prohibidas

- `Inter` y las genéricas de sistema como primera opción.
- Serifas genéricas (`Times New Roman`, `Georgia`, `Garamond`, `Palatino`). Si alguna vez hiciera falta una serifa editorial: solo `Fraunces` o `Instrument Serif`. Serifa **prohibida** en paneles de cuenta/admin.

---

## 4. Component Stylings

### Botones (`.btn`)

- **Forma:** píldora 999px. Inline-flex centrado, Manrope bold, borde 1px transparente, transición 200ms `--ease-standard`.
- **Tamaños:** `sm` 34px/13px · `md` 44px/15px · `lg` 52px/17px. Full-width en móvil.
- **Variantes:** `primary` violet-700 + blanco + `--shadow-brand`, hover violet-600 + sombra elevada, press `scale(0.985)` · `secondary` blanco + texto violet-900 + borde neutral-300, hover superficie muted + borde violet-300 · `soft` violet-100 + texto violet-700 · `ghost` transparente + texto violet-700, hover violet-100 · `sale` berry-500 + blanco + `--shadow-sale`, hover berry-700.
- **Estados:** focus-visible 2px sólido primaria + offset 2px · disabled neutral-200 / neutral-400.
- **Sin glow neón, sin cursores custom.** Feedback táctil al presionar.

### Tarjetas (`.card`)

- Radio 14px, fondo `--surface-card`, borde 1px hairline, sombra `xs` en reposo → `lg` + `translateY(-2px)` en hover.
- Padding interno 12px, gap de contenido 12px. Media con radio 10px (`sm`); hero/producto 20px (`lg`).
- Usar **solo** cuando la elevación comunica jerarquía. En listados densos reemplazar por `border-top` hairline o espacio negativo.

### Tarjeta de producto (`.product-item`)

- Imagen **3:4**, radio 10px, fondo muted, `object-position: top center`; hover `scale(1.03)` en 320ms `--ease-out`.
- Botón corazón (wishlist) 44×44 sobre la imagen, superficie blanca, ícono violet-700 → berry-500 activo.
- Nombre: Outfit 600 17px, `--text-strong`, 2 líneas máx. Precio actual: Outfit 600, violet-900. Precio anterior: neutral-400 tachado. "6 cuotas sin recargo": gold-500 estilo tag.
- Badge de oferta `berry` arriba a la izquierda de la imagen. Rating: estrellas gold-500 14px + "(n)" en `--text-muted`.
- **Skeleton:** imagen 3:4 + línea de título 80% + línea de precio 50%, shimmer 1.5s sobre neutral-200/100.

### Inputs / Formularios (`.form-group`, `.form-input`, `.select-wrapper`)

- Píldora 999px, alto 44px, fondo `--surface-card`, borde 1px `--border-default`; hover `--border-strong`; focus `--border-brand` + ring 3px `--focus-ring`; error `--error-500`.
- **Label arriba** (Manrope 600 13px, `--text-strong`) → input → hint/error (caption 12px). Gap 6px. **Sin floating labels.**
- Ícono leading 16×16 `currentColor`. Select con chevron del icon-font a la derecha, `appearance: none`.
- Error inline (`.error-inline`): fondo error al 10%, borde 1px error, radio 10px, texto 12px + acción de recuperación.

### Checkbox / Swatches de color

- **Checkbox:** caja 24×24, radio 6px, borde default → marcado violet-700 relleno con tilde blanco (escala 0.5→1, 140ms). Área táctil mínima 32px.
- **Swatch de color (`.checkbox-color`):** celda cuadrada, borde 1px default, radio 10px; el color vive en un inset de 6px con radio 8px. Seleccionado: borde 2px violet-700 + ring 2px `--focus-ring`. Grilla flexible de 6 por fila (8 en móvil), gap 8px.

### Stepper de cantidad (`.quantity-button`)

- Contenedor píldora con borde default; botones −/+ de 44×44, hover `--surface-subtle`, disabled 40% opacidad.
- Número central **JetBrains Mono bold 15px**, ancho mínimo 48px.

### Slider de precio (rc-slider tematizado)

- Rail 4px neutral-200 píldora · Track 4px violet-700 · Handle 20px blanco con borde 2px violet-700 + `--shadow-sm`; hover/drag borde violet-600 + ring 3px.
- Tooltip: fondo violet-900, radio 6px, texto **mono 12px** blanco, sin sombra. Formato "$U 1.850".

### Rating (react-rater)

- Estrellas 18px (14px en reviews), gap 2px. Vacía neutral-300, activa/hover **gold-500**. Nunca amarillo saturado ni emoji.

### Badges / Tags (`.badge`)

- Píldora, padding 3px×9px, Manrope 800 11px uppercase +0.09em.
- Tonos: `brand` violet-700/blanco · `sale` berry-500/blanco · `gold` gold-500/violet-900 · `neutral` inset/body · `success` success-500/blanco.

### Precio (`.price--*`)

- Actual: violet-900 Outfit 600. Tachado: neutral-400, más chico. Cuotas: gold-500 tag style. Moneda **$U** (peso uruguayo), separador de miles con punto: `$U 2.490`.

### Navegación (`.site-header`)

- Franja superior de **28px gold-100** (`::before`, hoy decorativa) sobre header sticky **72px** violet-700. Si en el futuro lleva texto: 13px violet-900, p. ej. "Envío gratis en compras desde $U [monto]" — el monto lo define el negocio, no se inventa.
- Logo Lobster Two Italic 30px blanco. Links Manrope 600 15px violet-200 → blanco activo. Buscador píldora embebido 240px. Iconos 44×44 píldora, hover violet-600.
- Desktop: horizontal, aire generoso, **sin hamburguesa**. Móvil: menú slide-in/overlay con etiqueta "Menú" — nunca hamburguesa sin texto.

### Breadcrumb

- Padding 16px vertical, borde inferior hairline, 13px `--text-muted`, separador "/" en `--text-faint`, items con min-height 24px.

### Trust bar (`.shop-data-items`)

- Grilla 2 cols móvil / 4 cols desktop. Ícono 56×56 radio 14px fondo violet-100 + ícono violet-700; hover invierte (fondo violet-700, ícono blanco, `translateY(-2px)`).
- Título Outfit 600 17px + descripción 13px muted. Contenido **real y verificable**: "Envío a todo Uruguay", "Cambios sin cargo 30 días", "6 cuotas sin recargo", "Pago seguro". **Sin métricas inventadas.**

### Destacados / Bento (`.featured`)

- Grilla de **12 columnas**, áreas `a a a a a a b b b b b b / a a a a a a c c c c c c`: una pieza grande a la izquierda (2 filas) + dos chicas apiladas a la derecha. Móvil: columna única, tiles de 320px mín.
- Tile: radio 14px, imagen de fondo cover, scrim inferior `linear-gradient(180deg, transparent 40%, rgba(36,18,48,0.6))`, título Outfit 700 blanco abajo a la izquierda, padding 32px. **Nunca 3 tiles iguales.**
- `.grid-bento` genérico: `2fr 1fr 1fr` (70/30), jamás `repeat(3, 1fr)`.

### Carrusel (Swiper)

- Flechas prev/next: 44×44 píldora, fondo blanco, ícono violet-700, sombra `sm`, hover violet-100. Sin bounce. Paginación: puntos 6px neutral-300 → violet-700 activo, sin autoplay agresivo (≥ 6s, pausa en hover/focus).

### Reviews (`.review-item`)

- Tarjeta hairline radio 14px, padding 16px, avatar 48px circular, nombre Outfit 600 15px, estrellas gold 14px, comentario 15px leading 1.6.

### Carrito (`.cart-table`, `.cart-summary`)

- Tabla: th Outfit 600 13px uppercase +0.09em muted con borde inferior hairline; td padding 16px, borde hairline, última fila sin borde. Miniatura 80px 3:4 radio 10px; nombre Outfit 600 15px; variante (talle/color) 13px muted.
- Resumen: tarjeta radio 14px padding 32px; filas `space-between` 15px; **total** en Outfit 700 20px violet-900 con borde superior hairline; botón primario full-width. Importes en **mono tabular**.

### Checkout status (`.checkout-status`)

- Pasos horizontales: círculo 36px (blanco + borde default) unido por conectores de 32×2px neutral-200. Activo: violet-700 relleno + `--shadow-brand`, texto violet-700. Hecho: violet-100 + tilde violet-700.

### Suscripción (`.subscribe`)

- Bloque radio 20px con imagen de fondo + scrim violeta; titular Outfit blanco, input píldora + botón primario en línea (apilados en móvil). Copy: "Enterate antes que nadie de las novedades".

### Footer (`.site-footer`)

- Fondo `--surface-card`, borde superior hairline, padding-top 72px. Grilla `2fr 1fr 1fr 1fr` (columna única en móvil, gap 56px). Logo + descripción de marca + redes (íconos SVG 20px). Links 15px `--text-body`, hover violet-700.

### Loaders

- **Solo shimmer esquelético** con las dimensiones y radios exactos del layout (1.5s infinito). Prohibidos: spinners circulares, puntos que rebotan, texto "Cargando…" solo.

### Empty states (`.empty-state`)

- Composición centrada, min-height 400px: ícono 120px circular violet-100 + h3 Outfit 700 28px + párrafo muted (máx. 320px) + botón primario (min-width 200px).
- Ejemplos: carrito vacío → "Tu carrito está vacío" / "Agregá tu primer producto" · sin resultados → "No encontramos nada con esos filtros" / "Probá otros términos" + "Limpiar filtros" · wishlist → "Guardá lo que te gusta".

### Error states

- Inline en el campo (ver arriba). Toast (`.error-toast`): fijo abajo a la derecha, tarjeta blanca radio 14px con borde error + sombra `lg`, entra con `translateX(100%)→0` en 300ms, se autodescarta a los 5s si no es crítico. Página de error: ilustración compuesta + explicación + acción primaria (Reintentar / Ir al inicio).

---

## 5. Hero Section (Firma)

- **Estructura asimétrica 60/40** (`3fr 2fr`): texto a la izquierda (máx. 580px), imagen contextual a la derecha con radio 20px y sombra `lg`. Altura `min-height: 70vh` (80vh en móvil con padding 96px). **Hero centrado PROHIBIDO.**
- **Inline Image Typography (firma):** fotos pequeñas entre palabras del titular, a altura de tipo (`height: 1em; width: 1.6em`), radio 8px, margen 2px, `vertical-align: bottom`. Ejemplo real: "Descubrí [foto: manos] tu estilo [foto: percha] único" · "La [foto: costura] calidad [foto: lana] que merecés". En móvil (< 768px) las imágenes pasan a bloque debajo del titular (máx. 300px).
- **Eyebrow** (11px 800 +0.16em violet-700) → titular `--text-hero` Outfit 800 → subcopy lead 18px (65ch) → **un solo CTA primario** ("Ver colección", "Explorar novedades"). Sin "Conocé más" secundario.
- **Sin superposiciones:** el texto nunca pisa la imagen; nada posicionado absoluto encima de nada.
- **Sin relleno:** nada de "Deslizá para ver más", flechas ni chevrones rebotando.

---

## 6. Layout Principles

### Escala de espaciado (base 4px)

`4 · 8 · 12 · 16 · 24 · 32 · 40 · 56 · 72 · 96` (`--space-1` … `--space-10`)

- **Gutter:** 24px desktop / 12px móvil. **Contenedor:** 1400px máx., padding lateral 16 / 24 / 48px.
- **Ritmo vertical:** 56px entre secciones mayores, 32px entre subsecciones, 24px dentro de tarjetas. Header 72px fijo. Sidebar de filtros 264px.
- **Ningún valor fuera de la escala.**

### Grillas

- **CSS Grid para toda estructura.** Flexbox solo para alineación en una dimensión. Matemática de porcentajes `calc(33% - 1rem)` **prohibida**.
- **Catálogo:** 2 cols móvil → 3 cols tablet (≥ 768px) → 4 cols desktop (≥ 1024px), gap 24/12px.
- **Destacados:** bento 12 columnas (ver §4). **Footer:** `2fr 1fr 1fr 1fr`. **PLP:** sidebar 264px + contenido `minmax(0, 1fr)`.
- **Secciones de features:** zig-zag de 2 columnas, bento o scroll horizontal. **Tres tarjetas iguales en fila: prohibido.**

### Elevación

`xs` 0 1px 2px 6% (tarjetas en reposo) · `sm` 0 2px 6px 7% · `md` 0 6px 18px 10% (dropdowns, modales) · `lg` 0 14px 36px 14% (hover, paneles) · `brand` 0 6px 18px rgba(69,36,83,0.24) (botón primario, paso activo) · `sale` rgba(217,79,120,0.24) · `inset` 0 1px 0 rgba(255,252,255,0.5). Todas teñidas de violeta-900, nunca gris neutro.

### Z-index (solo contextos de capa)

dropdown 100 · sticky 200 · header 300 · modal 400 · toast 500 · tooltip 600. Nada más usa z-index.

### Prohibido en layout

Tres tarjetas iguales · hero centrado · elementos superpuestos · `h-screen` (usar `min-h-[100dvh]`) · porcentajes en flex · scroll horizontal en móvil.

---

## 7. Responsive Rules (obligatorio)

Cada pantalla se prueba a **375, 390, 768, 1024 y 1440px**.

- **< 768px:** toda grilla multicolumna → una sola columna, `width: 100%`, padding 16px, gap 24px. Excepción única: catálogo 2 columnas y swatches de color.
- **Sin scroll horizontal** — es falla crítica.
- **Tipografía:** titulares con `clamp()`; cuerpo fijo en 15px; nunca < 14px en texto legible.
- **Táctil:** todo interactivo ≥ 44×44px; botones full-width; separación generosa entre clicables.
- **Imágenes:** proporcionales; las inline del hero bajan del titular; el visual lateral del hero se oculta en móvil.
- **Navegación:** horizontal → menú móvil limpio con etiqueta.
- **Filtros PLP:** sidebar → panel desplegable con botón "Filtros" (`.products-filter__menu-btn`).
- **Espaciado:** gaps verticales reducen con `clamp(3rem, 8vw, 6rem)`; secciones a 32px; gutter 24→12.

---

## 8. Motion & Interaction (intención para la fase de código)

> Stitch genera pantallas estáticas; esto documenta el comportamiento que implementa el agente.

- **Tokens:** `--dur-fast` 140ms · `--dur-base` 200ms · `--dur-slow` 320ms · `--dur-panel` 420ms · `--ease-standard` cubic-bezier(0.22,0.61,0.36,1) · `--ease-out` cubic-bezier(0.16,1,0.3,1) · `--ease-in-out` cubic-bezier(0.65,0,0.35,1).
- **Física:** spring exclusivamente en JS — `stiffness: 100, damping: 20`. Sin easing lineal.
- **Micro-loops perpetuos** (keyframes ya definidos): `pulse` (indicadores de stock/estado) · `float` (íconos de trust bar, −4px) · `shimmer`/`skeleton` (carga) · typewriter en placeholder del buscador.
- **Orquestación escalonada:** grillas y listas montan en cascada `animation-delay: calc(var(--index) * 100ms)`.
- **Transiciones de layout:** reordenamientos del catálogo con IDs compartidos; zoom de imagen de producto `scale(1.03)`.
- **Hardware:** solo `transform` y `opacity`. Nunca `top/left/width/height`. Grano/ruido solo en pseudo-elementos fijos `pointer-events: none`.
- **Rendimiento:** loops pesados en componentes hoja aislados (`'use client'`), 60fps mínimo.
- **`prefers-reduced-motion`:** desactivar spring y loops; transiciones instantáneas.

---

## 9. Voz, copy y datos de muestra

- **Idioma:** español rioplatense con **voseo** — "Descubrí", "Agregá", "Probá", "Enterate", "que merecés". Tuteo y "usted" prohibidos. Tono cálido, directo, sin exclamaciones en cadena.
- **Contexto real:** Uruguay — envíos a todo el país (Montevideo, Canelones, Maldonado, Salto…), moneda **$U**, "cuotas sin recargo", "retiro en tienda". Marca: **MARIFER** (siempre en mayúsculas). Departamentos: Mujer, Hombre, Niños, Varios.
- **Nombres de muestra:** personas verosímiles uruguayas (Florencia Techera, Martín Olivera, Lucía Ferreira) — nunca "John Doe"/"Jane Smith". Productos concretos: "Sweater Lana Merino Cuello Alto", "Vestido Lino Manga Larga", "Camisa Oxford Algodón".
- **Precios de muestra:** orgánicos, no redondos simbólicos: `$U 2.490`, `$U 3.780`, `$U 1.150`. Descuentos reales: "−25%".
- **Clichés prohibidos (también en español):** "Eleva tu estilo", "experiencia sin fisuras", "revolucioná", "next-gen", "desatá", "potenciá tu look".
- **Imágenes placeholder:** `https://picsum.photos/seed/marifer-{n}/600/800` (3:4 producto) · `/seed/marifer-hero-{n}/1200/900` (hero) · avatares SVG. Nunca links Unsplash.
- **Sin datos inventados:** ninguna métrica, rating agregado o contador ("+10.000 clientas", "4.9/5") que no provea el usuario. Usar `[métrica]` como placeholder explícito.

---

## 10. Anti-Patterns (prohibido — "NUNCA")

1. Emojis en UI, código o alt text.
2. `Inter`; serifas genéricas (`Times`, `Georgia`, `Garamond`, `Palatino`).
3. Negro puro #000000 → Violet Abyss #150A1C.
4. Glows neón, sombras con color saturado, "AI Purple" con degradados brillantes.
5. Acentos > 80% saturación; más de un acento de marca.
6. Texto con degradado en titulares grandes.
7. Cursores custom.
8. Elementos superpuestos; texto sobre imagen sin scrim y zona propia.
9. Tres tarjetas iguales en fila; `.grid-bento` con `repeat(3, 1fr)`.
10. Hero centrado (variancia 8).
11. Texto de relleno: "Scroll to explore", "Deslizá", flechas, chevrones rebotando.
12. Nombres genéricos ("John Doe", "Acme", "Nexus") o copy en tuteo/usted.
13. Números redondos falsos (99.99%, 50%) y métricas inventadas; secciones "KEY STATISTICS" / "BY THE NUMBERS".
14. Formato `LABEL // 2026`.
15. Clichés de copy IA en inglés o español.
16. Links Unsplash rotos.
17. Defaults crudos de `shadcn/ui` — radios, colores y sombras siempre adaptados a MARIFER.
18. `z-index` fuera de la escala (§6).
19. `h-screen` → `min-h-[100dvh]`.
20. Spinners circulares → shimmer esquelético.
21. Hamburguesa sin etiqueta; menú hamburguesa en desktop.
22. Floating labels en formularios.
23. Tokens de rampa crudos en componentes (`--violet-700` directo) cuando existe el token semántico (`--action-primary`).

---

## 11. Guía de prompting para Stitch

**Preámbulo fijo (copiar al inicio de cada prompt):**

> "MARIFER, tienda online de moda uruguaya. Violeta de marca #452453 sobre lienzo crema #FFFCFF, neutros teñidos de violeta, único acento Gold Amber #D4A15A, Berry Pop #D94F78 solo para oferta/urgencia. Ritmo 24px, tarjetas radio 14px, botones e inputs píldora, sombras teñidas de violeta. Outfit para titulares (800/700, tracking negativo) + Manrope cuerpo 15px/1.45 (65ch) + JetBrains Mono para números. Header sticky 72px violeta con franja gold-100 de envío gratis. Layouts asimétricos (hero 60/40 con fotos inline en el titular, bento 12 columnas), nunca 3 tarjetas iguales, nunca hero centrado. Copy en español rioplatense con voseo, precios en $U, sin emojis ni métricas inventadas."

**Luego especificar:**

| Pantalla | Componentes clave | Estados a pedir |
|----------|-------------------|-----------------|
| **Home** | Hero 60/40 con inline images + 1 CTA, trust bar 4 cols, bento destacados (1 grande + 2 chicas), carrusel de novedades, suscripción, footer 2fr+3×1fr | default · dark mode |
| **PLP / Categoría** | Breadcrumb, intro con contador "(24 productos)", sidebar filtros 264px (categoría, talle, swatches de color, slider de precio), grilla 4/3/2, skeletons | cargando · sin resultados · móvil con panel de filtros |
| **PDP / Producto** | Galería Swiper, nombre, precio + tachado + cuotas gold, selector de talle (píldoras), swatches, stepper de cantidad mono, CTA "Agregar al carrito", tabs descripción/reviews con estrellas gold | en oferta · sin stock · agregado (success) |
| **Carrito** | Tabla con miniatura 3:4, stepper, resumen con total Outfit 20px, CTA full-width | vacío (empty state) · con cupón |
| **Checkout** | Stepper de estado (Datos → Envío → Pago), formulario label-arriba en píldoras, resumen lateral sticky | error inline en campo · éxito |
| **Login / Registro / Recuperar** | Tarjeta centrada en columna estrecha (única excepción al centrado: es un formulario, no un hero), divisor "o", link secundario | error · cargando |
| **404** | Empty state compuesto + "Volver al inicio" | — |

**Breakpoints a pedir siempre:** 375, 768, 1280+.

Referenciá este DESIGN.md para tokens y recetas exactas; los nombres de clase citados (`.btn--primary`, `.product-item`, `.cart-summary`…) son los que existen en el código.
