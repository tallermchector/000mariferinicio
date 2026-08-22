import { useDispatch } from "react-redux";

import { removeProduct, setCount } from "@/store/reducers/cart";
import type { ProductStoreType } from "@/types";

const ShoppingCart = ({
  thumb,
  name,
  id,
  color,
  size,
  count,
  price,
}: ProductStoreType) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(
      removeProduct({
        thumb,
        name,
        id,
        color,
        size,
        count,
        price,
      }),
    );
  };

  const setProductCount = (count: number) => {
    if (count <= 0) {
      return;
    }

    const payload = {
      product: {
        thumb,
        name,
        id,
        color,
        size,
        count,
        price,
      },
      count,
    };

    dispatch(setCount(payload));
  };

  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__image">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-product__info">
            <h4>{name}</h4>
            <p className="cart-product__variant">Código {id}</p>
          </div>
        </div>
      </td>
      <td data-label="Color">{color || "—"}</td>
      <td data-label="Talle">{size || "—"}</td>
      <td data-label="Cantidad">
        <div className="quantity-button" role="group" aria-label="Cantidad">
          <button
            type="button"
            onClick={() => setProductCount(count - 1)}
            className="quantity-button__btn"
            aria-label="Quitar una unidad"
            disabled={count <= 1}
          >
            -
          </button>
          <span aria-live="polite">{count}</span>
          <button
            type="button"
            onClick={() => setProductCount(count + 1)}
            className="quantity-button__btn"
            aria-label="Agregar una unidad"
          >
            +
          </button>
        </div>
      </td>
      <td data-label="Precio" className="cart-table__price">
        ${price}
      </td>
      <td className="cart-item-cancel">
        <button
          type="button"
          onClick={() => removeFromCart()}
          aria-label={`Quitar ${name} del carrito`}
        >
          <i className="icon-cancel" aria-hidden="true" />
        </button>
      </td>
    </tr>
  );
};

export default ShoppingCart;
