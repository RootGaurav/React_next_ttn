export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();

  return posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}

export const revalidate = 10; // ISR

export default async function PostPage({ params }: any) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return (
    <div>
      <h1>App Router ISR Post</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
