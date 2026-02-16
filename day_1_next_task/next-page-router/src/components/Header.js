import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "0.9rem", background: "#e7dada" }}>
      <h2>Gaurav App (Pages Router)</h2>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
