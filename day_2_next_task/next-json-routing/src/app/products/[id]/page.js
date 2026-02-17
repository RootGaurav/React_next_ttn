import products from "../../../data/products.json";

export default async function ProductDetail({ params }) {
  const { id } = await params;   

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>ID: {product.id}</p>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
