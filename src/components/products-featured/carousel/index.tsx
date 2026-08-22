// import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";

import type { ProductTypeList } from "@/types";

import ProductItem from "../../product-item";
import ProductItemLoading from "../../product-item/loading";

type ProductsCarouselType = {
  products: ProductTypeList[];
};

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) {
    return (
      <div
        className="products-carousel products-carousel--loading"
        aria-busy="true"
        aria-label="Cargando productos destacados"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductItemLoading key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="products-carousel">
      <Swiper
        spaceBetween={12}
        slidesPerView={1.3}
        centeredSlides
        watchOverflow
        loop
        breakpoints={{
          768: { slidesPerView: 3, spaceBetween: 24, centeredSlides: false },
          1024: { slidesPerView: 4, spaceBetween: 24, centeredSlides: false },
        }}
        className="products-carousel__swiper"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              color={item.color}
              discount={item.discount}
              currentPrice={item.currentPrice}
              images={item.images}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
