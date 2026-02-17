import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/products">Products List</Link> |{" "}
      <Link href="/contact">Contact Us </Link>
      <hr />
    </nav>
  );
}
