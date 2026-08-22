// global styles
import "../assets/css/styles.scss";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "swiper/swiper.scss";

// types
import type { AppProps } from "next/app";
import { JetBrains_Mono, Lobster_Two, Manrope, Outfit } from "next/font/google";
import Router from "next/router";
import React, { Fragment } from "react";

import { wrapper } from "../store";
import * as gtag from "../utils/gtag";

const isProduction = process.env.NODE_ENV === "production";

// only events on production
if (isProduction) {
  // Notice how we track pageview when route is changed
  Router.events.on("routeChangeComplete", (url: string) => gtag.pageview(url));
}

// Fonts - MARIFER Design System
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-brand",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <style jsx global>{`
      :root {
        --font-display: ${outfit.style.fontFamily};
        --font-body: ${manrope.style.fontFamily};
        --font-brand: ${lobsterTwo.style.fontFamily};
        --font-mono: ${jetbrainsMono.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);
