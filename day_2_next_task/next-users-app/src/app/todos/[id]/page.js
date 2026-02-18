import { notFound } from "next/navigation";

async function getTodo(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function TodoDetail({ params }) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo || !todo.id) return notFound();

  return (
    <div>
      <h1>Todo Detail</h1>
      <p>Title: {todo.title}</p>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}
