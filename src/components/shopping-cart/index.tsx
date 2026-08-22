import Link from "next/link";
import { useSelector } from "react-redux";

import type { RootState } from "@/store";

import CheckoutStatus from "../checkout-status";
import Item from "./item";

const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const priceTotal = () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  };

  const isEmpty = cartItems.length === 0;

  return (
    <section className="cart" aria-labelledby="cart-title">
      <div className="container">
        <div className="cart__intro">
          <h1 id="cart-title" className="cart__title">
            Tu carrito
          </h1>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {!isEmpty && (
            <table className="cart-table">
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Color</th>
                  <th scope="col">Talle</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">
                    <span className="visually-hidden">Quitar</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                    size={item.size}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table>
          )}

          {isEmpty && (
            <div className="empty-state">
              <div className="empty-state__icon" aria-hidden="true">
                <i className="icon-cart" />
              </div>
              <h3>Tu carrito está vacío</h3>
              <p>
                Agregá tu primer producto y lo vas a ver acá, listo para
                comprar.
              </p>
              <Link href="/products" className="btn btn--primary btn--md">
                Ver productos
              </Link>
            </div>
          )}
        </div>

        {!isEmpty && (
          <div className="cart-actions">
            <Link href="/products" className="cart__btn-back">
              <i className="icon-left" aria-hidden="true" /> Seguir comprando
            </Link>
            <div>
              <label htmlFor="promo-code" className="visually-hidden">
                Código promocional
              </label>
              <input
                id="promo-code"
                type="text"
                placeholder="Código promocional"
                className="form-input cart__promo-code"
                autoComplete="off"
              />
            </div>

            <div className="cart-actions__items-wrapper">
              <p className="cart-actions__total">
                Total <strong>${priceTotal().toFixed(2)}</strong>
              </p>
              <Link
                href="/cart/checkout"
                className="btn btn--primary btn--lg btn--full-mobile"
              >
                Ir a pagar
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;
