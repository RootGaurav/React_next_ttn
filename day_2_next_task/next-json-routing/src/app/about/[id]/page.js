import employees from "../../../data/employees.json";

export default async function Employee({ params }) {
  const { id } = await params;   

  const emp = employees.find((e) => e.id === id);

  if (!emp) {
    return <h1>Employee not found</h1>;
  }

  return (
    <div>
      <h1>Employee Info</h1>
      <p>ID: {emp.id}</p>
      <p>Name: {emp.name}</p>
      <p>Role: {emp.role}</p>
    </div>
  );
}
