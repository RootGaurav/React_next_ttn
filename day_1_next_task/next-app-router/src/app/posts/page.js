export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h1>Posts</h1>
      {posts.slice(0, 10).map((post) => (
        <div key={post.id} style={{ border: "5px solid grey", margin: "10px", padding: "10px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
