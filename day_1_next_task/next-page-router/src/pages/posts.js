export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts: posts.slice(0, 10),
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div>
      <h1 style={{margin:"10px"
      }}>Posts</h1>
           {posts.map((post) => (
           <div key={post.id} style={{ border:"5px solid grey",margin: "10px", padding: "10px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
