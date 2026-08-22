import Link from "next/link";

import Layout from "../layouts/Main";

const RegisterPage = () => (
  <Layout title="Crear cuenta">
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <i className="icon-left" aria-hidden="true" />
            Volver a la tienda
          </Link>
        </div>

        <div className="form-block">
          <h1 className="form-block__title">Creá tu cuenta</h1>
          <p className="form-block__description">
            Guardá tus datos de envío, seguí tus pedidos y accedé a beneficios
            exclusivos para miembros.
          </p>

          <form className="form">
            <div className="form__input-row form__input-row--two">
              <div className="form__col">
                <label htmlFor="register-first-name" className="form-label">
                  Nombre
                </label>
                <input
                  id="register-first-name"
                  className="form-input"
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                />
              </div>
              <div className="form__col">
                <label htmlFor="register-last-name" className="form-label">
                  Apellido
                </label>
                <input
                  id="register-last-name"
                  className="form-input"
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="form__input-row">
              <label htmlFor="register-email" className="form-label">
                Email
              </label>
              <input
                id="register-email"
                className="form-input"
                placeholder="vos@ejemplo.com"
                type="email"
                name="email"
                autoComplete="email"
              />
            </div>

            <div className="form__input-row">
              <label htmlFor="register-password" className="form-label">
                Contraseña
              </label>
              <input
                id="register-password"
                className="form-input"
                type="password"
                name="password"
                autoComplete="new-password"
              />
              <p className="form-hint">Mínimo 8 caracteres.</p>
            </div>

            <div className="form__info">
              <label htmlFor="check-terms" className="checkbox checkbox--sm">
                <input name="terms" type="checkbox" id="check-terms" />
                <span className="checkbox__check" />
                <p>
                  Acepto los <Link href="/terms">términos y condiciones</Link> y
                  la <Link href="/privacy">política de privacidad</Link>
                </p>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--lg btn-submit"
            >
              Crear cuenta
            </button>

            <p className="form__signup-link">
              ¿Ya tenés cuenta? <Link href="/login">Iniciá sesión</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </Layout>
);

export default RegisterPage;
