export default async function ServerProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=5");
  const data = await res.json();

  return (
    <section className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">
        Server Products (Tailwind)
      </h1>

      <ul className="flex flex-col gap-2">
        {data.products.map((p: any) => (
          <li
            key={p.id}
            tabIndex={0}
            className="
              p-3 rounded-lg border border-gray-200 bg-white
              cursor-pointer
              transition-all duration-200
              hover:bg-blue-50 hover:scale-[1.01]
              focus:outline-none focus:ring-2 focus:ring-blue-400
            "
          >
            {p.title} – ₹{p.price}
          </li>
        ))}
      </ul>
    </section>
  );
}
