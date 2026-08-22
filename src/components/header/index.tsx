import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useOnClickOutside from "use-onclickoutside";

import type { RootState } from "@/store";

import Logo from "../../assets/icons/logo";

type HeaderType = {
  isErrorPage?: boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = ["/"];

  const [onTop, setOnTop] = useState(
    !(!arrayPaths.includes(router.pathname) || isErrorPage),
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header
      className={`site-header ${!onTop ? "site-header--fixed" : ""}`}
      role="banner"
    >
      <div className="container">
        <Link href="/" className="site-logo" aria-label="MARIFER Home">
          <Logo />
          <span>MARIFER</span>
        </Link>

        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <Link href="/products">Productos</Link>
          <Link href="/inspiration">Inspiración</Link>
          <Link href="/stores">Tiendas</Link>
          <button className="site-nav__btn btn btn--ghost btn--md">
            Mi Cuenta
          </button>
        </nav>

        <div className="site-header__actions">
          <div
            ref={searchRef}
            className={`search-form-wrapper ${searchOpen ? "search-form--active" : ""}`}
          >
            <form
              className="search-form"
              role="search"
              aria-label="Buscar productos"
            >
              <button
                type="button"
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Cerrar búsqueda"
                aria-hidden="true"
              />
              <label htmlFor="header-search" className="visually-hidden">
                Buscar productos
              </label>
              <input
                id="header-search"
                type="search"
                name="search"
                placeholder="Buscar productos..."
                autoComplete="off"
              />
            </form>
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
              aria-label={searchOpen ? "Cerrar búsqueda" : "Abrir búsqueda"}
              aria-expanded={searchOpen}
            />
          </div>
          <Link href="/cart" legacyBehavior aria-label="Carrito de compras">
            <button
              className="icon-btn btn-cart"
              aria-label={`Carrito, ${cartItems.length} productos`}
            >
              <svg
                className="icon-cart"
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
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartItems.length > 0 && (
                <span
                  className="btn-cart__count"
                  aria-label={`${cartItems.length} productos en el carrito`}
                >
                  {cartItems.length}
                </span>
              )}
            </button>
          </Link>
          <Link href="/login" legacyBehavior aria-label="Iniciar sesión">
            <button
              className="icon-btn site-header__btn-avatar"
              aria-label="Cuenta de usuario"
            >
              <svg
                className="icon-avatar"
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="btn-hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <nav
        id="mobile-nav"
        className={`site-nav--mobile ${menuOpen ? "site-nav--open" : ""}`}
        role="navigation"
        aria-label="Menú principal móvil"
        aria-hidden={!menuOpen}
      >
        <Link href="/products" onClick={closeMenu}>
          Productos
        </Link>
        <Link href="/inspiration" onClick={closeMenu}>
          Inspiración
        </Link>
        <Link href="/stores" onClick={closeMenu}>
          Tiendas
        </Link>
        <button
          className="site-nav__btn btn btn--ghost btn--md btn--full-mobile"
          onClick={closeMenu}
        >
          Mi Cuenta
        </button>
      </nav>
    </header>
  );
};

export default Header;
