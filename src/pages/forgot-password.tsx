import Link from "next/link";
import { useForm } from "react-hook-form";

import Layout from "../layouts/Main";
import { server } from "../utils/server";
import { postData } from "../utils/services";

type ForgotMail = {
  email: string;
};

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm<ForgotMail>();

  const onSubmit = async (data: ForgotMail) => {
    await postData(`${server}/api/login`, {
      email: data.email,
    });
  };

  return (
    <Layout title="Recuperar contraseña — MARIFER">
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/login">
              <i className="icon-left" aria-hidden="true" />
              Volver a iniciar sesión
            </Link>
          </div>

          <div className="form-block">
            <h1 className="form-block__title">¿Olvidaste tu contraseña?</h1>
            <p className="form-block__description">
              Ingresá el email de tu cuenta y te enviamos un enlace para crear
              una contraseña nueva.
            </p>

            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form__input-row">
                <label htmlFor="forgot-email" className="form-label">
                  Email
                </label>
                <input
                  id="forgot-email"
                  className="form-input"
                  placeholder="vos@ejemplo.com"
                  type="email"
                  name="email"
                  autoComplete="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  ref={register("email", {
                    required: true,
                    pattern: EMAIL_PATTERN,
                  })}
                />

                {errors.email && errors.email.type === "required" && (
                  <p className="form-error" role="alert">
                    Ingresá tu email para continuar.
                  </p>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <p className="form-error" role="alert">
                    Ese email no parece válido. Revisalo e intentá de nuevo.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--lg btn-submit"
              >
                Enviar enlace
              </button>

              <p className="form__signup-link">
                ¿Te acordaste? <Link href="/login">Iniciá sesión</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
