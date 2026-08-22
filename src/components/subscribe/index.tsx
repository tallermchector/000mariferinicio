import Image from "next/image";
import { type FormEvent, useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Por favor ingresá un correo electrónico válido.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "¡Gracias por suscribirte a MARIFER!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Ocurrió un error al registrar tu suscripción.");
      }
    } catch {
      setStatus("error");
      setMessage("Hubo un problema de conexión. Por favor intentá nuevamente.");
    }
  };

  return (
    <section className="subscribe" aria-labelledby="subscribe-heading">
      <div className="container">
        <div className="subscribe__content">
          <Image
            src="/images/subscribe.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="subscribe__bg"
            aria-hidden="true"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <h4 id="subscribe-heading">
            Suscribite y recibí novedades, lanzamientos y beneficios exclusivos
          </h4>
          <form
            className="subscribe__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <label htmlFor="newsletter-email" className="visually-hidden">
              Tu email
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              required
              autoComplete="email"
              disabled={status === "loading" || status === "success"}
              aria-describedby={message ? "newsletter-status-msg" : undefined}
              aria-invalid={status === "error"}
            />
            <button
              type="submit"
              className="btn btn--primary btn--md"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading"
                ? "Enviando..."
                : status === "success"
                  ? "¡Suscrito!"
                  : "Suscribirme"}
            </button>
          </form>

          {message && (
            <div
              id="newsletter-status-msg"
              role="status"
              aria-live="polite"
              style={{
                marginTop: "12px",
                fontSize: "14px",
                fontWeight: 500,
                color: status === "error" ? "var(--berry-300, #F6B4C8)" : "var(--gold-300, #EED6A3)",
                textAlign: "center",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

