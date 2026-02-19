import { useEffect, useState } from "react";

export default function ClientProducts() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1>Client Side Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
