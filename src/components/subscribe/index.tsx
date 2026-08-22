import Image from "next/image";

const Subscribe = () => {
  return (
    <section className="subscribe" aria-labelledby="subscribe-heading">
      <div className="container">
        <div className="subscribe__content">
          <Image
            src="/images/subscribe.jpg"
            alt=""
            fill
            priority
            className="subscribe__bg"
            aria-hidden="true"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <h4 id="subscribe-heading">
            Suscribite y recibí novedades, lanzamientos y beneficios exclusivos
          </h4>
          <form
            className="subscribe__form"
            action="/api/newsletter"
            method="POST"
          >
            <label htmlFor="newsletter-email" className="visually-hidden">
              Tu email
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Tu email"
              required
              autoComplete="email"
            />
            <button type="submit" className="btn btn--primary btn--md">
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
