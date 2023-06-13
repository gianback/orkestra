import { useEffect, useRef } from "react";
import { Search } from "./components/molecules";
import { Header } from "./components/ui";
import { getProducts } from "./services/getProducts";
import { handleScroll } from "./utils/scroll";

export function App() {
  const prevScrollPosition = useRef(0);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(prevScrollPosition));
    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll(prevScrollPosition)
      );
    };
  }, []);

  return (
    <main className="App">
      <div className="App-container">
        <Header />
        <Search />
      </div>
    </main>
  );
}
