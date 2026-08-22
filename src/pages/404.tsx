import Link from "next/link";

import LayoutError from "../layouts/404";

const ErrorPage = () => (
  <LayoutError>
    <section className="error-page">
      <div className="container">
        <span className="eyebrow">Error 404</span>
        <h1>Esta página se nos perdió entre las perchas</h1>
        <p>
          El enlace puede estar roto o la página ya no existe. Volvé al inicio o
          seguí mirando la colección.
        </p>
        <Link href="/" className="btn btn--primary btn--lg">
          Ir al inicio
        </Link>
      </div>
    </section>
  </LayoutError>
);

export default ErrorPage;
