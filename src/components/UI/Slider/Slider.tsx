import { Children, FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useMatchMedia } from "@/hooks";
import { ProductSliderAmountSlides, productSliderBreakpoints } from "@/common/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";

type SliderProps = {
  children: ReactNode;
};

export const Slider: FC<SliderProps> = ({ children }) => {
  const matches: Record<string, boolean> = productSliderBreakpoints.reduce(
    (acc, { query }) => ({ ...acc, [query]: useMatchMedia(query) }),
    {},
  );

  const slidesPerView = productSliderBreakpoints.reduce(
    (result, { query, slides }) => (matches[query] ? slides : result),
    ProductSliderAmountSlides.MOBILE,
  );

  return (
    <Swiper slidesPerView={slidesPerView} loop={true} navigation={true} modules={[Navigation, Pagination]}>
      {Children.map(children, (child, index) => (
        <SwiperSlide key={index} className={"productSliderWrapper"}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
