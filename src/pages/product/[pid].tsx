import type { GetServerSideProps } from "next";
import { useState } from "react";

import Breadcrumb from "@/components/breadcrumb";
import Content from "@/components/product-single/content";
import Description from "@/components/product-single/description";
import Gallery from "@/components/product-single/gallery";
import Reviews from "@/components/product-single/reviews";
import ProductsFeatured from "@/components/products-featured";
// types
import type { ProductType } from "@/types";

import Layout from "../../layouts/Main";
import { server } from "../../utils/server";

type ProductPageType = {
  product: ProductType;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { pid } = query;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }: ProductPageType) => {
  const [showBlock, setShowBlock] = useState("description");
  const reviewsCount = product.reviews?.length ?? 0;

  return (
    <Layout title={product.name}>
      <Breadcrumb
        items={[
          { label: "Productos", href: "/products" },
          { label: product.name },
        ]}
      />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.images} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div
              className="product-single__info-btns"
              role="tablist"
              aria-label="Información del producto"
            >
              <button
                type="button"
                role="tab"
                aria-selected={showBlock === "description"}
                onClick={() => setShowBlock("description")}
                className={`btn btn--secondary btn--md ${showBlock === "description" ? "btn--active" : ""}`}
              >
                Descripción
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={showBlock === "reviews"}
                onClick={() => setShowBlock("reviews")}
                className={`btn btn--secondary btn--md ${showBlock === "reviews" ? "btn--active" : ""}`}
              >
                Opiniones ({reviewsCount})
              </button>
            </div>

            <Description show={showBlock === "description"} />
            <Reviews product={product} show={showBlock === "reviews"} />
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
    </Layout>
  );
};

export default Product;
