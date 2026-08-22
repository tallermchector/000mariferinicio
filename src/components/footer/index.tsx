import Logo from "../../assets/icons/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo />
              <span>MARIFER</span>
            </h6>
            <p>
              Moda uruguaya con alma. Diseñamos y confeccionamos prendas
              atemporales con materiales nobles, honrando la tradición textil
              local.
            </p>
            <ul
              className="site-footer__social-networks"
              role="list"
              aria-label="Redes sociales"
            >
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Comprar online</li>
              <li>
                <Link href="/order-status">Estado de pedido</Link>
              </li>
              <li>
                <Link href="/shipping">Envíos y entregas</Link>
              </li>
              <li>
                <Link href="/returns">Cambios y devoluciones</Link>
              </li>
              <li>
                <Link href="/payment">Medios de pago</Link>
              </li>
              <li>
                <Link href="/contact">Contacto</Link>
              </li>
            </ul>
            <ul>
              <li>Información</li>
              <li>
                <Link href="/gift-cards">Gift Cards</Link>
              </li>
              <li>
                <Link href="/stores">Encontrar tienda</Link>
              </li>
              <li>
                <Link href="/newsletter">Newsletter</Link>
              </li>
              <li>
                <Link href="/membership">Ser miembro</Link>
              </li>
              <li>
                <Link href="/feedback">Opinión del sitio</Link>
              </li>
            </ul>
            <ul>
              <li>Contacto</li>
              <li>
                <a href="mailto:hola@marifer.com.uy">hola@marifer.com.uy</a>
              </li>
              <li>
                <a href="tel:+59820000000">+598 2000 0000</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>
            DISEÑO Y DESARROLLO MARIFER — © {new Date().getFullYear()}. TODOS
            LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
