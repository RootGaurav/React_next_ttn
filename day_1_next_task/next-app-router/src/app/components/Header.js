import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "0.9rem", background: "#f3e9e9" }}>
      <h2>My App (App Router)</h2>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
