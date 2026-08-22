const ProductItemLoading = () => (
  <article
    className="card card--skeleton product-item product-item--loading"
    aria-hidden="true"
  >
    <div className="card__media product__image" />

    <div className="card__content product__description">
      <h3 className="card__title" />
      <div className="product__price">
        <h4 />
      </div>
    </div>
  </article>
);

export default ProductItemLoading;
