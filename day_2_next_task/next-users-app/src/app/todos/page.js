import Link from "next/link";

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) throw new Error("Failed to fetch todos");

  return res.json();
}

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todos List</h1>
      {todos.slice(0, 20).map((todo) => (
        <div key={todo.id}>
          <Link href={`/todos/${todo.id}`}>
            {todo.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
