import products from "../../data/products.json";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <h3>{p.title}</h3>
          <p>${p.price}</p>
          <Link href={`/products/${p.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
