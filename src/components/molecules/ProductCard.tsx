interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  brand: string;
  description: string;
}

export function ProductCard({
  brand,
  image,
  name,
  price,
  description,
}: ProductCardProps) {
  return (
    <li className="Product-card">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <h3>{name}</h3>
      <p>{brand}</p>
      <p>{description}</p>
      <span>{price}</span>
    </li>
  );
}
