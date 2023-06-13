import { MutableRefObject } from "react";

export const handleScroll = (prevScrollPosition: MutableRefObject<number>) => {
  const currentScrollPosition = window.scrollY;

  const header = document.querySelector(".Header");
  const search = document.querySelector(".Search");
  if (currentScrollPosition > prevScrollPosition.current) {
    header?.classList.add("scroll");
    search?.classList.add("scroll");
    console.log(currentScrollPosition);
  } else if (currentScrollPosition < prevScrollPosition.current) {
    header?.classList.remove("scroll");
    search?.classList.remove("scroll");
  }

  prevScrollPosition.current = currentScrollPosition;
};
