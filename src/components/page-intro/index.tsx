import Image from "next/image";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const PageIntro = () => {
  SwiperCore.use([EffectFade, Navigation]);

  const slides = [
    {
      headline: [
        "Descubrí ",
        {
          type: "image",
          src: "/images/products/product-2.jpg",
          alt: "Manos eligiendo tela",
        },
        " tu estilo ",
        {
          type: "image",
          src: "/images/products/product-4.jpg",
          alt: "Percha con prenda",
        },
        " único",
      ],
      subcopy:
        "Moda uruguaya con alma. Diseños que cuentan historias, confeccionados con materiales nobles y atención al detalle.",
      ctaText: "Ver colección",
      ctaHref: "/products",
      visual: {
        src: "/images/slide-1.jpg",
        alt: "Mujer luciendo vestido MARIFER en entorno natural",
      },
    },
    {
      headline: [
        "La ",
        {
          type: "image",
          src: "/images/products/product-6.jpg",
          alt: "Detalle de costura",
        },
        " calidad ",
        {
          type: "image",
          src: "/images/products/product-7.jpg",
          alt: "Textura de lana",
        },
        " que merecés",
      ],
      subcopy:
        "Prendas atemporales que trascienden temporadas. Cada pieza nace de la tradición textil uruguaya y la mirada contemporánea.",
      ctaText: "Explorar novedades",
      ctaHref: "/products?new=true",
      visual: {
        src: "/images/slide-2.jpg",
        alt: "Detalle de prenda MARIFER con texturas naturales",
      },
    },
  ];

  const renderHeadline = (
    parts: Array<string | { type: "image"; src: string; alt: string }>,
  ) => (
    <h2 className="page-intro__headline">
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={`text-${i}`}>{part}</span>
        ) : (
          <Image
            key={`img-${i}`}
            src={part.src}
            alt={part.alt}
            width={64}
            height={64}
            className="headline-inline-image"
            loading="lazy"
          />
        ),
      )}
    </h2>
  );

  return (
    <section className="page-intro" aria-labelledby="hero-headline">
      <Swiper
        navigation
        effect="fade"
        className="page-intro__swiper"
        onSlideChange={() => {}}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="page-intro__slide">
              <div className="container">
                <div className="page-intro__grid">
                  {/* Content Side — Left (60%) */}
                  <div className="page-intro__content">
                    <span className="page-intro__eyebrow eyebrow">
                      Nueva temporada
                    </span>
                    {renderHeadline(
                      slide.headline as Array<
                        string | { type: "image"; src: string; alt: string }
                      >,
                    )}
                    <p className="page-intro__subcopy lead">{slide.subcopy}</p>
                    <div className="page-intro__cta">
                      <a
                        href={slide.ctaHref}
                        className="btn btn--primary btn--lg"
                        aria-label={slide.ctaText}
                      >
                        {slide.ctaText}
                      </a>
                    </div>
                  </div>

                  {/* Visual Side — Right (40%) — Asymmetric */}
                  <div className="page-intro__visual" aria-hidden="true">
                    <Image
                      src={slide.visual.src}
                      alt={slide.visual.alt}
                      width={600}
                      height={750}
                      className="page-intro__visual-image"
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Trust Indicators — No fake metrics, no "99% satisfied" */}
      <div className="shop-data" role="list" aria-label="Servicios y garantías">
        <div className="container">
          <ul className="shop-data-items">
            <li role="listitem">
              <div className="icon-wrapper" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4l1.5-4.5a2 2 0 0 1 2-1.5h6a2 2 0 0 1 2 1.5L22 12h4a2 2 0 0 1 2 2v4z" />
                </svg>
              </div>
              <div className="data-item__content">
                <h4>Envío gratis</h4>
                <p>En compras sobre $3.500</p>
              </div>
            </li>

            <li role="listitem">
              <div className="icon-wrapper" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <div className="data-item__content">
                <h4>6 cuotas sin interés</h4>
                <p>Con tarjetas seleccionadas</p>
              </div>
            </li>

            <li role="listitem">
              <div className="icon-wrapper" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="data-item__content">
                <h4>Cambios fáciles</h4>
                <p>30 días para cambiar tu compra</p>
              </div>
            </li>

            <li role="listitem">
              <div className="icon-wrapper" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="data-item__content">
                <h4>Hecho en Uruguay</h4>
                <p>Producción local, calidad real</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
