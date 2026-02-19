export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default function ProductPage({ product }: any) {
  return (
    <div>
      <h1>SSR Product</h1>
      <p>{product.title}</p>
      <p>₹ {product.price}</p>
    </div>
  );
}
