import type { CSSProperties } from "react";
import useSwr from "swr";

import type { ProductTypeList } from "@/types";

import ProductItem from "../../product-item";
import ProductsLoading from "./loading";

const ProductsContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr("/api/products", fetcher);

  if (error) {
    return (
      <div className="empty-state" role="alert">
        <div className="empty-state__icon" aria-hidden="true">
          <i className="icon-search" />
        </div>
        <h3>No pudimos cargar los productos</h3>
        <p>Revisá tu conexión e intentá de nuevo en unos segundos.</p>
        <button
          type="button"
          className="btn btn--primary btn--md"
          onClick={() => window.location.reload()}
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (!data) return <ProductsLoading />;

  if (data.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state__icon" aria-hidden="true">
          <i className="icon-search" />
        </div>
        <h3>No encontramos resultados</h3>
        <p>Probá con otros términos o quitá algunos filtros.</p>
      </div>
    );
  }

  return (
    <section className="products-list" aria-label="Listado de productos">
      {data.map((item: ProductTypeList, index: number) => (
        <div
          key={item.id}
          style={{ "--i": index } as CSSProperties}
          className="products-list__item"
        >
          <ProductItem
            id={item.id}
            name={item.name}
            price={item.price}
            color={item.color}
            discount={item.discount}
            currentPrice={item.currentPrice}
            images={item.images}
          />
        </div>
      ))}
    </section>
  );
};

export default ProductsContent;
