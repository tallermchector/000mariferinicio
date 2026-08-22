import Slider from "rc-slider";
import { useState } from "react";

import productsColors from "../../utils/data/products-colors";
import productsSizes from "../../utils/data/products-sizes";
// data
import productsTypes from "../../utils/data/products-types";
import Checkbox from "./form-builder/checkbox";
import CheckboxColor from "./form-builder/checkbox-color";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const addQueryParams = () => {
    // query params changes
  };

  return (
    <form
      className="products-filter"
      onChange={addQueryParams}
      aria-label="Filtros de productos"
    >
      <button
        type="button"
        onClick={() => setFiltersOpen(!filtersOpen)}
        className={`products-filter__menu-btn ${filtersOpen ? "products-filter__menu-btn--active" : ""}`}
        aria-expanded={filtersOpen}
        aria-controls="products-filters"
      >
        Filtrar productos <i className="icon-down-open" aria-hidden="true" />
      </button>

      <div
        id="products-filters"
        className={`products-filter__wrapper ${filtersOpen ? "products-filter__wrapper--open" : ""}`}
      >
        <fieldset className="products-filter__block">
          <button type="button" tabIndex={-1}>
            Tipo de prenda
          </button>
          <div className="products-filter__block__content">
            {productsTypes.map((type) => (
              <Checkbox key={type.id} name="product-type" label={type.name} />
            ))}
          </div>
        </fieldset>

        <fieldset className="products-filter__block">
          <button type="button" tabIndex={-1}>
            Precio
          </button>
          <div className="products-filter__block__content">
            <Range
              min={0}
              max={20000}
              step={500}
              defaultValue={[3000, 12000]}
              tipFormatter={(value) => `$${value.toLocaleString("es-UY")}`}
              ariaLabelGroupForHandles={["Precio mínimo", "Precio máximo"]}
            />
          </div>
        </fieldset>

        <fieldset className="products-filter__block">
          <button type="button" tabIndex={-1}>
            Talle
          </button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsSizes.map((type) => (
              <Checkbox
                type="square"
                key={type.id}
                name="product-size"
                label={type.label}
              />
            ))}
          </div>
        </fieldset>

        <fieldset className="products-filter__block">
          <button type="button" tabIndex={-1}>
            Color
          </button>
          <div className="products-filter__block__content">
            <div className="checkbox-color-wrapper">
              {productsColors.map((type) => (
                <CheckboxColor
                  key={type.id}
                  valueName={type.color}
                  name="product-color"
                  color={type.color}
                />
              ))}
            </div>
          </div>
        </fieldset>

        <button type="submit" className="btn btn-submit btn--primary btn--md">
          Aplicar filtros
        </button>
      </div>
    </form>
  );
};

export default ProductsFilter;
