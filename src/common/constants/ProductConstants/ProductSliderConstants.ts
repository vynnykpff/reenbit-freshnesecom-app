import { SliderBreakpoint } from "@/common/types";
import { MediaSliderQueries } from "../MediaQueries.ts";

export const enum ProductSliderAmountSlides {
  DESKTOP = 5,
  LAPTOP = 4,
  TABLET = 3,
  LARGE_MOBILE = 2,
  MOBILE = 1,
}

export const productSliderBreakpoints: SliderBreakpoint[] = [
  { query: `(min-width: ${MediaSliderQueries.EXTRA_LARGE}px)`, slides: ProductSliderAmountSlides.DESKTOP },
  { query: `(max-width: ${MediaSliderQueries.EXTRA_LARGE}px)`, slides: ProductSliderAmountSlides.LAPTOP },
  { query: `(max-width: ${MediaSliderQueries.LARGE}px)`, slides: ProductSliderAmountSlides.TABLET },
  { query: `(max-width: ${MediaSliderQueries.MEDIUM}px)`, slides: ProductSliderAmountSlides.LARGE_MOBILE },
  { query: `(max-width: ${MediaSliderQueries.SMALL}px)`, slides: ProductSliderAmountSlides.MOBILE },
];
