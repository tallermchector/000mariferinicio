import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "@/components/footer";
import Header from "@/components/header";

const SITE_NAME = "MARIFER";
const DEFAULT_TITLE = "MARIFER — Moda uruguaya con alma";
const DEFAULT_DESCRIPTION =
  "Moda uruguaya con alma. Diseñamos y confeccionamos prendas atemporales con materiales nobles, honrando la tradición textil local.";
// Violet Core — ancla de marca (DESIGN.md §2). Pinta la barra del navegador en móvil.
const THEME_COLOR = "#452453";

type LayoutType = {
  /** Título de la página, sin sufijo: el layout agrega " — MARIFER". */
  title?: string;
  /** Descripción para buscadores y previews. Usa la de marca si no se pasa. */
  description?: string;
  children?: React.ReactNode;
};

const MainLayout = ({
  children,
  title,
  description = DEFAULT_DESCRIPTION,
}: LayoutType) => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  const pageTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE;

  return (
    <div className="app-main">
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="description" content={description} />
        <meta name="theme-color" content={THEME_COLOR} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_UY" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
      </Head>

      {/* Primer elemento enfocable: salta header y nav con teclado/lector */}
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <Header />

      {/* key={pathname}: re-monta en cada ruta para disparar la entrada (§8) */}
      <main
        id="contenido"
        tabIndex={-1}
        key={pathname}
        className={`page-enter${isHome ? "" : " main-page"}`}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
