import { Product } from "../../App";
import { Container } from "../globals";
import { ProductCard } from "../molecules/ProductCard";

interface ProductListProps {
  list: Product[];
}
export function ProductList({ list }: ProductListProps) {
  return (
    <Container>
      {list.length > 0 ? (
        <ul className="Product-list">
          {list.map(({ brand, image, name, price, description }) => (
            <ProductCard
              key={name}
              brand={brand}
              image={image}
              name={name}
              description={description}
              price={price}
            />
          ))}
        </ul>
      ) : (
        <p style={{ color: "red" }}>No existen resultados para está búsqueda</p>
      )}
    </Container>
  );
}
