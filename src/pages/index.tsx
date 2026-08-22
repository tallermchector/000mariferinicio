import Link from "next/link";

import PageIntro from "@/components/page-intro";
import ProductsFeatured from "@/components/products-featured";
import Subscribe from "@/components/subscribe";

import Layout from "../layouts/Main";

const featuredBlocks = [
  {
    id: "large",
    modifier: "featured-item--large",
    image: "/images/featured-1.jpg",
    eyebrow: "Nueva temporada",
    title: "Llegaron las novedades de otoño",
    cta: "Ver colección",
    href: "/products",
  },
  {
    id: "small-first",
    modifier: "featured-item--small-first",
    image: "/images/featured-2.jpg",
    eyebrow: "Básicos",
    title: "Remeras de algodón desde $1.290",
    cta: "Ver básicos",
    href: "/products?categoria=remeras",
  },
  {
    id: "small-second",
    modifier: "featured-item--small-second",
    image: "/images/featured-3.jpg",
    eyebrow: "Liquidación",
    title: "Últimas unidades de verano",
    cta: "Ver ofertas",
    href: "/products?oferta=true",
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured" aria-label="Destacados de temporada">
        <div className="container">
          {featuredBlocks.map((block) => (
            <article
              key={block.id}
              style={{ backgroundImage: `url(${block.image})` }}
              className={`featured-item ${block.modifier}`}
            >
              <div className="featured-item__content">
                <span className="eyebrow featured-item__eyebrow">
                  {block.eyebrow}
                </span>
                <h3>{block.title}</h3>
                <Link href={block.href} className="btn btn--secondary btn--md">
                  {block.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
    </Layout>
  );
};

export default IndexPage;
