import { notFound } from "next/navigation";

async function getUser(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function UserDetail({ params }) {
  const { id } = await params;
  const user = await getUser(id);

  if (!user || !user.id) return notFound();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>

      <h2>Todos:</h2>
      <UserTodos userId={id} />
    </div>
  );
}
async function UserTodos({ userId }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`
  );

  const todos = await res.json();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} - {todo.completed ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  );
}
