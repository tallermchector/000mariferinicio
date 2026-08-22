type ProductDescriptionType = {
  show: boolean;
};

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? "grid" : "none",
  };

  return (
    <section
      style={style}
      className="product-single__description"
      aria-label="Descripción del producto"
    >
      <div className="product-description-block">
        <i className="icon-materials" aria-hidden="true" />
        <h4>Materiales y confección</h4>
        <p>
          Algodón peinado de alta densidad, tejido en Uruguay. Costuras
          reforzadas y terminaciones a mano para que la prenda mantenga su forma
          lavado tras lavado.
        </p>
      </div>
      <div className="product-description-block">
        <i className="icon-delivery-fast" aria-hidden="true" />
        <h4>Envíos y cambios</h4>
        <p>
          Despachamos en 24 a 48 horas hábiles a todo el país. Tenés 30 días
          para cambiar el talle o el color sin costo en cualquiera de nuestras
          tiendas.
        </p>
      </div>
    </section>
  );
};

export default Description;
