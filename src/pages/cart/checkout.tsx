import Link from "next/link";
import { useSelector } from "react-redux";

import CheckoutItems from "@/components/checkout/items";
import CheckoutStatus from "@/components/checkout-status";
import type { RootState } from "@/store";

import Layout from "../../layouts/Main";

const paymentMethods = [
  { id: "paypal", logo: "/images/logos/paypal.png", label: "PayPal" },
  { id: "visa", logo: "/images/logos/visa.png", label: "Visa" },
  {
    id: "mastercard",
    logo: "/images/logos/mastercard.png",
    label: "Mastercard",
  },
  { id: "maestro", logo: "/images/logos/maestro.png", label: "Maestro" },
  { id: "discover", logo: "/images/logos/discover.png", label: "Discover" },
  { id: "ideal", logo: "/images/logos/ideal-logo.svg", label: "iDEAL" },
];

const deliveryMethods = [
  {
    id: "inpost",
    logo: "/images/logos/inpost.svg",
    label: "InPost",
    price: 20,
  },
  { id: "dpd", logo: "/images/logos/dpd.svg", label: "DPD", price: 12 },
  { id: "dhl", logo: "/images/logos/dhl.svg", label: "DHL", price: 15 },
  {
    id: "retiro",
    logo: "/images/logos/maestro.png",
    label: "Retiro en tienda",
    price: 0,
  },
];

const shippingFields = [
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    id: "address",
    label: "Dirección",
    type: "text",
    autoComplete: "street-address",
  },
  {
    id: "first-name",
    label: "Nombre",
    type: "text",
    autoComplete: "given-name",
  },
  { id: "city", label: "Ciudad", type: "text", autoComplete: "address-level2" },
  {
    id: "last-name",
    label: "Apellido",
    type: "text",
    autoComplete: "family-name",
  },
  {
    id: "postal-code",
    label: "Código postal",
    type: "text",
    autoComplete: "postal-code",
  },
  { id: "phone", label: "Teléfono", type: "tel", autoComplete: "tel" },
];

const CheckoutPage = () => {
  const priceTotal = useSelector((state: RootState) => {
    const { cartItems } = state.cart;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  });

  return (
    <Layout title="Envío y pago — MARIFER">
      <section className="cart" aria-labelledby="checkout-title">
        <div className="container">
          <div className="cart__intro">
            <h1 id="checkout-title" className="cart__title">
              Envío y pago
            </h1>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <Link href="/login" className="btn btn--primary btn--md">
                  Iniciar sesión
                </Link>
                <Link href="/register" className="btn btn--secondary btn--md">
                  Crear cuenta
                </Link>
              </div>

              <div className="block">
                <h3 className="block__title">Datos de envío</h3>
                <form className="form" aria-label="Datos de envío">
                  <div className="form__input-row form__input-row--two">
                    {shippingFields.map((field) => (
                      <div className="form__col" key={field.id}>
                        <label
                          htmlFor={`shipping-${field.id}`}
                          className="form-label"
                        >
                          {field.label}
                        </label>
                        <input
                          id={`shipping-${field.id}`}
                          name={field.id}
                          className="form-input"
                          type={field.type}
                          autoComplete={field.autoComplete}
                        />
                      </div>
                    ))}

                    <div className="form__col">
                      <label htmlFor="shipping-country" className="form-label">
                        País
                      </label>
                      <div className="select-wrapper select-form">
                        <select
                          id="shipping-country"
                          name="country"
                          defaultValue="Uruguay"
                        >
                          <option value="Uruguay">Uruguay</option>
                          <option value="Argentina">Argentina</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Medio de pago</h3>
                <ul
                  className="round-options round-options--three"
                  aria-label="Medios de pago"
                >
                  {paymentMethods.map((method, index) => (
                    <li key={method.id} className="round-item">
                      <input
                        type="radio"
                        name="payment-method"
                        value={method.id}
                        aria-label={method.label}
                        defaultChecked={index === 1}
                      />
                      <img src={method.logo} alt={method.label} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="block">
                <h3 className="block__title">Forma de entrega</h3>
                <ul
                  className="round-options round-options--two"
                  aria-label="Formas de entrega"
                >
                  {deliveryMethods.map((method, index) => (
                    <li key={method.id} className="round-item round-item--bg">
                      <input
                        type="radio"
                        name="delivery-method"
                        value={method.id}
                        aria-label={`${method.label}, $${method.price}`}
                        defaultChecked={index === 0}
                      />
                      <img src={method.logo} alt={method.label} />
                      <p>
                        {method.price === 0 ? "Gratis" : `$${method.price}`}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Tu pedido</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Total</p>
                  <h3>${priceTotal.toFixed(2)}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-actions cart-actions--checkout">
            <Link href="/cart" className="cart__btn-back">
              <i className="icon-left" aria-hidden="true" /> Volver al carrito
            </Link>
            <div className="cart-actions__items-wrapper">
              <Link href="/products" className="btn btn--secondary btn--md">
                Seguir comprando
              </Link>
              <button
                type="button"
                className="btn btn--primary btn--lg btn--full-mobile"
              >
                Confirmar y pagar
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
