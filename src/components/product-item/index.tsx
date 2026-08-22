import { some } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/store";
import { toggleFavProduct } from "@/store/reducers/user";
import type { ProductTypeList } from "@/types";

const ProductItem = ({
  discount,
  images,
  id,
  name,
  price,
  currentPrice,
}: ProductTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, (productId) => productId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      }),
    );
  };

  const hasDiscount = discount && Number(discount) > 0;
  const salePrice = hasDiscount ? currentPrice : price;
  const originalPrice = hasDiscount ? price : null;

  return (
    <article
      className="card product-item"
      aria-labelledby={`product-${id}-name`}
    >
      <div className="card__media product__image">
        <button
          type="button"
          onClick={toggleFav}
          className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
          aria-label={
            isFavourite ? "Quitar de favoritos" : "Agregar a favoritos"
          }
          aria-pressed={isFavourite}
        >
          <svg
            className="icon-heart"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <Link href={`/product/${id}`} aria-label={`Ver ${name}`}>
          {images?.[0] && (
            <Image
              src={images[0]}
              alt={name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="product__image-img"
              style={{ objectFit: "cover", objectPosition: "top center" }}
              loading="lazy"
            />
          )}
          {hasDiscount && (
            <span className="badge badge--sale product__discount">
              -{discount}%
            </span>
          )}
        </Link>
      </div>

      <div className="card__content product__description">
        <h3 id={`product-${id}-name`} className="card__title">
          <Link
            href={`/product/${id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {name}
          </Link>
        </h3>

        <div
          className={`card__price product__price ${hasDiscount ? "product__price--discount" : ""}`}
        >
          <span className="price--current">${salePrice}</span>
          {originalPrice && (
            <span className="price--was">${originalPrice}</span>
          )}
        </div>

        <span className="price--installments">6 cuotas sin interés</span>
      </div>
    </article>
  );
};

export default ProductItem;
