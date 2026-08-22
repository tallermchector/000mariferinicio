import Link from "next/link";
import { useForm } from "react-hook-form";

import Layout from "../layouts/Main";
import { server } from "../utils/server";
import { postData } from "../utils/services";

type LoginMail = {
  email: string;
  password: string;
  keepSigned: boolean;
};

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm<LoginMail>();

  const onSubmit = async (data: LoginMail) => {
    await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Layout title="Iniciar sesión — MARIFER">
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <i className="icon-left" aria-hidden="true" />
              Volver a la tienda
            </Link>
          </div>

          <div className="form-block">
            <h1 className="form-block__title">Iniciá sesión</h1>
            <p className="form-block__description">
              Accedé a tus pedidos, favoritos y datos de envío guardados.
            </p>

            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form__input-row">
                <label htmlFor="login-email" className="form-label">
                  Email
                </label>
                <input
                  id="login-email"
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

              <div className="form__input-row">
                <label htmlFor="login-password" className="form-label">
                  Contraseña
                </label>
                <input
                  id="login-password"
                  className="form-input"
                  type="password"
                  placeholder="Tu contraseña"
                  name="password"
                  autoComplete="current-password"
                  aria-invalid={errors.password ? "true" : "false"}
                  ref={register("password", { required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="form-error" role="alert">
                    Ingresá tu contraseña.
                  </p>
                )}
              </div>

              <div className="form__info">
                <label
                  htmlFor="check-signed-in"
                  className="checkbox checkbox--sm"
                >
                  <input
                    type="checkbox"
                    name="keepSigned"
                    id="check-signed-in"
                    ref={register("keepSigned", { required: false })}
                  />
                  <span className="checkbox__check" />
                  <p>Mantener la sesión iniciada</p>
                </label>
                <Link
                  href="/forgot-password"
                  className="form__info__forgot-password"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--lg btn-submit"
              >
                Ingresar
              </button>

              <div className="form__divider" aria-hidden="true">
                o continuá con
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social">
                  <i className="icon-facebook" aria-hidden="true" />
                  Facebook
                </button>
                <button type="button" className="btn-social">
                  <img
                    src="/images/icons/gmail.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  Google
                </button>
              </div>

              <p className="form__signup-link">
                ¿Todavía no tenés cuenta?{" "}
                <Link href="/register">Registrate</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
