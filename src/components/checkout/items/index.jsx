import { useSelector } from "react-redux";

const CheckoutItems = () => {
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return <p className="form-hint">No tenés productos en el carrito.</p>;
  }

  return (
    <ul className="checkout-items">
      {cartItems.map((item) => (
        <li key={item.id} className="checkout-item">
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              <img src={item.thumb} alt="" />
            </div>

            <div className="checkout-item__data">
              <h3>{item.name}</h3>
              <span>
                {item.count} × ${item.price}
              </span>
            </div>
          </div>
          <h3>${(item.price * item.count).toFixed(2)}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutItems;
