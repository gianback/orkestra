import { useEffect, useRef, useState } from "react";

import { useSearch } from "./hooks/useSearch";

import { IconClose, IconScan, IconSearch } from "./components/atoms";
import { Header } from "./components/ui";
import { ProductList } from "./components/organisms";
import { Container } from "./components/globals";
import { handleScroll } from "./utils/scroll";
import productList from "../data.json";

export interface Product {
  name: string;
  price: number;
  brand: string;
  image: string;
  description: string;
}

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const prevScrollPosition = useRef(0);
  const { search, setSearch, searchProduct, handleChange } = useSearch();

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(prevScrollPosition));
    setProducts(productList);
    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll(prevScrollPosition)
      );
    };
  }, []);

  const productsFiltered = searchProduct(products);
  return (
    <main className="App">
      <div className="App-container">
        <Header />
        {/* Search */}
        <div className="Search">
          <Container>
            <div className="Search-container">
              <div>
                <IconSearch />
                <input
                  type="text"
                  value={search}
                  onChange={handleChange}
                  placeholder="Buscar producto"
                />
              </div>
              {search.length > 0 ? (
                <button onClick={() => setSearch("")}>
                  <IconClose />
                </button>
              ) : (
                <IconScan />
              )}
            </div>
            <span className="Search-filter">filtros</span>
          </Container>
        </div>
      </div>
      <ProductList list={productsFiltered} />
    </main>
  );
}
