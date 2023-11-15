import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useActions, useAppSelector } from "@/store";
import { useChangeEffect } from "@/hooks";
import { checkMaxPriceCorrectValue, checkMinPriceCorrectValue } from "@/utils";
import { ProductFilterPrice } from "@/common/types";
import { Input } from "@/components/UI";
import { GlobalDelay, PRODUCT_RATING_DEFAULT, ProductPrices } from "@/common/constants";
import styles from "./PriceRange.module.scss";

type Props = {
  defaultPrice: ProductFilterPrice;
  price: ProductFilterPrice;
  setSliderValue: Dispatch<SetStateAction<ProductFilterPrice>>;
};

const DEFAULT_INPUT_PLACEHOLDER = "0.00";

const getInputValue = (value = PRODUCT_RATING_DEFAULT) => {
  return value || "";
};

const similarPriceInputProperties = {
  type: "number",
  placeholder: DEFAULT_INPUT_PLACEHOLDER,
  className: `${styles.priceRangeInput}`,
};

export const PriceRange: FC<Props> = ({ price, defaultPrice, setSliderValue }) => {
  const [debouncedPrice] = useDebounce(price, GlobalDelay.PRICE);
  const { productRatings } = useAppSelector(state => state.productsFilter);
  const { setPrice } = useActions();

  useChangeEffect(() => {
    if (!productRatings.length) {
      setPrice(debouncedPrice);
    }
  }, [debouncedPrice]);

  const [debouncedMinCorrectionValue] = useDebounce(price[ProductPrices.MIN_PRICE], GlobalDelay.PRICE);
  const [debouncedMaxCorrectionValue] = useDebounce(price[ProductPrices.MAX_PRICE], GlobalDelay.PRICE);

  useEffect(() => {
    checkMinPriceCorrectValue({ defaultPrice, price: price[ProductPrices.MIN_PRICE], setSliderValue });
  }, [debouncedMinCorrectionValue]);

  useEffect(() => {
    checkMaxPriceCorrectValue({ defaultPrice, price: price[ProductPrices.MAX_PRICE], setSliderValue });
  }, [debouncedMaxCorrectionValue]);

  const handlePriceChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = +e.target.value;

    setSliderValue(prev => {
      const newPrice = [...prev];
      newPrice[index] = inputValue;
      return newPrice as [number, number];
    });
  };

  return (
    <div className={styles.priceRangeContainer}>
      <div className={styles.priceRangeInputWrapper}>
        <label className={styles.priceRangeLabel} htmlFor="min-price">
          Min
        </label>
        <Input
          {...similarPriceInputProperties}
          onChange={handlePriceChange(ProductPrices.MIN_PRICE)}
          id="min-price"
          value={getInputValue(price[ProductPrices.MIN_PRICE])}
        />
      </div>
      <div className={styles.priceRangeDivider}></div>
      <div className={styles.priceRangeInputWrapper}>
        <label className={styles.priceRangeLabel} htmlFor="max-price">
          Max
        </label>
        <Input
          {...similarPriceInputProperties}
          onChange={handlePriceChange(ProductPrices.MAX_PRICE)}
          id="max-price"
          value={getInputValue(price[ProductPrices.MAX_PRICE])}
        />
      </div>
    </div>
  );
};
