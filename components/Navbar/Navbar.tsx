import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </menu>
    </nav>
  );
};
