import Head from "next/head";

import Footer from "@/components/footer";
import Header from "@/components/header";

const SITE_NAME = "MARIFER";
const THEME_COLOR = "#452453";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

const ErrorPage = ({
  children,
  title = "Página no encontrada",
}: LayoutType) => {
  const pageTitle = `${title} — ${SITE_NAME}`;

  return (
    <div className="app-main">
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="robots" content="noindex" />
        <meta name="theme-color" content={THEME_COLOR} />
      </Head>

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <Header isErrorPage />

      <main id="contenido" tabIndex={-1} className="page-enter main-page">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default ErrorPage;
