type CheckoutStatusProps = {
  step: string;
};

const steps = [
  { id: "cart", label: "Carrito", icon: "icon-cart" },
  { id: "checkout", label: "Envío y pago", icon: "icon-delivery" },
];

const CheckoutStatus = ({ step }: CheckoutStatusProps) => {
  const currentIndex = steps.findIndex((s) => s.id === step);

  return (
    <nav className="checkout-status" aria-label="Progreso de compra">
      <ol className="checkout-steps">
        {steps.map((s, index) => {
          const state =
            index === currentIndex
              ? "active"
              : index < currentIndex
                ? "done"
                : "";
          return (
            <li
              key={s.id}
              className={state}
              aria-current={index === currentIndex ? "step" : undefined}
            >
              <span className="checkout-steps__icon" aria-hidden="true">
                <i className={s.icon} />
              </span>
              <span>{s.label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default CheckoutStatus;
