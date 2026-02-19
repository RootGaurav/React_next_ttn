export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();

  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: { post },
    revalidate: 5, // ISR: Regenerate after 10 seconds
  };
}

export default function PostPage({ post }: any) {
  return (
    <div>
      <h1>SSG + ISR Post</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
