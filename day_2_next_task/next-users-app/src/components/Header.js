"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const activeStyle = (path) =>
    pathname.startsWith(path) ? { fontWeight: "bold", color: "red" } : {};

  return (
    <nav>
      <Link href="/" style={activeStyle("/")}>Home</Link> |{" "}
      <Link href="/users" style={activeStyle("/users")}>Users</Link> |{" "}
      <Link href="/todos" style={activeStyle("/todos")}>Todos</Link>
      <hr />
    </nav>
  );
}
