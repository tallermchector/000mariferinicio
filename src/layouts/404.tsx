import Head from "next/head";
import { useRouter } from "next/router";

import Header from "@/components/header";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

const ErrorPage = ({ children, title = "MARIFER" }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>Página no encontrada &mdash; {title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <Header isErrorPage />

      <main className={pathname !== "/" ? "main-page" : ""}>{children}</main>
    </div>
  );
};

export default ErrorPage;
