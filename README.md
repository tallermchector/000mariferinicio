# Next.js Ecommerce

A modern, full-stack ecommerce platform built with **Next.js 15**, **React 18**, **TypeScript**, **Prisma ORM**, **PostgreSQL**, and **Redux Toolkit**.

## Tech Stack

- **Framework**: Next.js 15 (App Router compatible, currently using Pages Router)
- **Language**: TypeScript 5.9
- **Database**: PostgreSQL with Prisma ORM 7.9
- **State Management**: Redux Toolkit + Redux Persist + Redux Thunk
- **Styling**: SCSS with BEM methodology
- **Forms**: React Hook Form
- **Data Fetching**: SWR + Next.js API Routes
- **UI Components**: Swiper (carousel), rc-slider (price range), react-rater (ratings)
- **Icons**: Custom icon font
- **Code Quality**: ESLint 9 + Prettier + TypeScript ESLint

## Project Structure

```
src/
├── assets/
│   ├── css/           # SCSS styles (variables, partials, main)
│   └── icons/         # Custom icon font
├── components/
│   ├── breadcrumb/
│   ├── checkout/
│   ├── checkout-status/
│   ├── footer/
│   ├── header/
│   ├── page-intro/
│   ├── products-content/
│   ├── products-featured/
│   ├── products-filter/
│   ├── shopping-cart/
│   └── subscribe/
├── layouts/
│   ├── Main.tsx       # Main layout wrapper
│   └── 404.tsx
├── pages/
│   ├── api/           # API routes (products, login, etc.)
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx      # Home page
│   ├── products.tsx   # Products listing
│   ├── product/[pid].tsx  # Product detail
│   ├── cart.tsx       # Shopping cart
│   ├── cart/checkout.tsx  # Checkout flow
│   ├── login.tsx
│   ├── register.tsx
│   └── forgot-password.tsx
├── prisma/
│   ├── db.ts          # Prisma client singleton
│   └── contract.prisma
├── store/
│   ├── index.ts       # Store configuration
│   └── reducers/
│       ├── cart.ts    # Cart slice
│       └── user.ts    # User slice
├── types/
│   └── index.ts       # TypeScript definitions
└── utils/
    ├── data/          # Mock data & types (products, colors, sizes)
    ├── gtag.ts        # Google Analytics
    ├── localstorage.ts
    ├── markup.ts
    ├── server.ts
    └── services.ts
```

## Database Schema (Prisma)

The project uses a hierarchical catalog structure:

- **Departamento** (Department): HOMBRE, MUJER, NINO, VARIOS
- **Categoria** (Category): Main categories within departments
- **Subcategoria** (Subcategory): Sub-categories within categories
- **Producto** (Product): Full product catalog with pricing, images, and relations

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env  # Configure DATABASE_URL

# Run database migrations
npx prisma migrate dev

# Start development server
pnpm dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm format` | Run ESLint --fix + Prettier |
| `pnpm export` | Static export build |
| `pnpm contract:emit` | Emit Prisma contract |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with featured products |
| `/products` | Product listing with filters |
| `/product/[id]` | Product detail page |
| `/cart` | Shopping cart |
| `/cart/checkout` | Checkout flow |
| `/login` | User login |
| `/register` | User registration |
| `/forgot-password` | Password recovery |
| `/404` | Not found page |

## Features

- **Responsive design** with mobile-first SCSS/BEM
- **Product filtering** by category, subcategory, color, size, price range
- **Shopping cart** with Redux Persist (survives page refresh)
- **User authentication** flow (login, register, forgot password)
- **Checkout process** with order summary
- **Image carousel** for product galleries
- **Product ratings** and reviews UI
- **Newsletter subscription** component
- **SEO-ready** with Next.js Head management
- **Google Analytics** integration via gtag

## Design Reference

UI inspired by [XD Guru's Free Ecommerce UI Kit by Iceo](https://www.xdguru.com/free-xd-ecommerce-ui-kit-by-iceo/).

## Recent Updates (2025)

- Upgraded to **Next.js 15.5** and **React 18.3**
- Migrated to **Prisma ORM 7.9** with PostgreSQL
- Updated **TypeScript 5.9** with strict config
- Modernized **ESLint 9** flat config + Prettier
- Added **Prisma Contract** for type-safe database operations

## License

Private project — not licensed for public distribution.