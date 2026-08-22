import Breadcrumb from "@/components/breadcrumb";
import ProductsContent from "@/components/products-content";
import ProductsFilter from "@/components/products-filter";

import Layout from "../layouts/Main";

const Products = () => (
  <Layout title="Productos">
    <Breadcrumb items={[{ label: "Productos" }]} />
    <section className="products-page">
      <div className="container">
        <ProductsFilter />
        <ProductsContent />
      </div>
    </section>
  </Layout>
);

export default Products;
