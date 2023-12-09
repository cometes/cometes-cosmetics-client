import { useCallback, useRef } from "react";

export const useSlickArrow = () => {
  const sliderRef = useRef(null);

  const previous = useCallback(() => sliderRef?.current?.slickPrev(), []);
  const next = useCallback(() => sliderRef?.current?.slickNext(), []);

  return {
    sliderRef,
    previous,
    next
  };
};
