import { MutableRefObject } from "react";

export const handleScroll = (prevScrollPosition: MutableRefObject<number>) => {
  const currentScrollPosition = window.scrollY;

  const headerWithInput = document.querySelector(".App-container");
  if (currentScrollPosition > prevScrollPosition.current) {
    headerWithInput?.classList.add("scroll");
  } else if (currentScrollPosition < prevScrollPosition.current) {
    headerWithInput?.classList.remove("scroll");
  }

  prevScrollPosition.current = currentScrollPosition;
};
