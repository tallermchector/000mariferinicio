import { some } from "lodash";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/store";
import { addProduct } from "@/store/reducers/cart";
import { toggleFavProduct } from "@/store/reducers/user";
import type { ProductStoreType, ProductType } from "@/types";

import productsColors from "../../../utils/data/products-colors";
import productsSizes from "../../../utils/data/products-sizes";
import CheckboxColor from "../../products-filter/form-builder/checkbox-color";

type ProductContent = {
  product: ProductType;
};

const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>("");
  const [itemSize, setItemSize] = useState<string>("");

  const onColorSet = (e: string) => setColor(e);
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemSize(e.target.value);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(
    favProducts,
    (productId) => productId === product.id,
  );

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id: product.id,
      }),
    );
  };

  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: product.id,
      name: product.name,
      thumb: product.images ? product.images[0] : "",
      price: product.currentPrice,
      count,
      color,
      size: itemSize,
    };

    const productStore = {
      count,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
  };

  const hasDiscount = Boolean(product.discount) && Number(product.discount) > 0;

  return (
    <section className="product-content" aria-labelledby="product-name">
      <div className="product-content__intro">
        {hasDiscount && (
          <span className="product-on-sale">-{product.discount}% Oferta</span>
        )}
        <h1 id="product-name" className="product__name">
          {product.name}
        </h1>

        <div className="product__prices">
          <h4>${product.currentPrice}</h4>
          {hasDiscount && <span>${product.price}</span>}
        </div>
        <p className="product__installments">6 cuotas sin interés</p>
        <p className="product__id">Código: {product.id}</p>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Color</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map((type) => (
              <CheckboxColor
                key={type.id}
                type="radio"
                name="product-color"
                color={type.color}
                valueName={type.label}
                onChange={onColorSet}
              />
            ))}
          </div>
        </div>
        <div className="product-filter-item">
          <h5>
            <label htmlFor="product-size">Talle</label>
          </h5>
          <div className="select-wrapper">
            <select id="product-size" onChange={onSelectChange} defaultValue="">
              <option value="" disabled>
                Elegí tu talle
              </option>
              {productsSizes.map((type) => (
                <option key={type.id} value={type.label}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Cantidad</h5>
          <div className="quantity-buttons">
            <div className="quantity-button" role="group" aria-label="Cantidad">
              <button
                type="button"
                onClick={() => setCount(Math.max(1, count - 1))}
                className="quantity-button__btn"
                aria-label="Quitar una unidad"
                disabled={count <= 1}
              >
                -
              </button>
              <span aria-live="polite">{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="quantity-button__btn"
                aria-label="Agregar una unidad"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={() => addToCart()}
              className="btn btn--primary btn--lg"
            >
              Agregar al carrito
            </button>
            <button
              type="button"
              onClick={toggleFav}
              className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
              aria-label={
                isFavourite ? "Quitar de favoritos" : "Agregar a favoritos"
              }
              aria-pressed={isFavourite}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isFavourite ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
