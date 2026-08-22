import ProductItemLoading from "../../../product-item/loading";

const ProductsLoading = () => {
  return (
    <section
      className="products-list"
      aria-busy="true"
      aria-label="Cargando productos"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductItemLoading key={index} />
      ))}
    </section>
  );
};

export default ProductsLoading;
