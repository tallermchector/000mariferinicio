import { useState } from "react";

import List from "./list";

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);

  return (
    <section className="products-content" aria-labelledby="catalog-heading">
      <div className="products-content__intro">
        <h2 id="catalog-heading">
          Todos los productos <span>(133)</span>
        </h2>
        <button
          type="button"
          onClick={() => setOrderProductsOpen(!orderProductsOpen)}
          className="products-filter-btn"
          aria-label={
            orderProductsOpen ? "Ocultar orden" : "Mostrar opciones de orden"
          }
          aria-expanded={orderProductsOpen}
          aria-controls="catalog-order"
        >
          <i className="icon-filters" aria-hidden="true" />
        </button>
        <form
          id="catalog-order"
          className={`products-content__filter ${orderProductsOpen ? "products-order-open" : ""}`}
        >
          <div className="products__filter__select">
            <h4>
              <label htmlFor="catalog-show">Mostrar</label>
            </h4>
            <div className="select-wrapper">
              <select id="catalog-show" name="show" defaultValue="24">
                <option value="12">12 por página</option>
                <option value="24">24 por página</option>
                <option value="48">48 por página</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>
              <label htmlFor="catalog-sort">Ordenar por</label>
            </h4>
            <div className="select-wrapper">
              <select id="catalog-sort" name="sort" defaultValue="popular">
                <option value="popular">Más populares</option>
                <option value="new">Novedades</option>
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <List />
    </section>
  );
};

export default ProductsContent;
