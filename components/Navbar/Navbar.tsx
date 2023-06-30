import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between py-4 px-20">
        <Link href="/">
          <div className="flex items-center gap-1">
            <Image src="/images/logo.png" alt="logo" width={42} height={42} />
            <p className="text-lg">Avo Store</p>
          </div>
        </Link>
        <Link href="/canasta">
          <div className="flex items-center gap-1">
            <Image
              src="/images/canasta.png"
              alt="logo"
              height={42}
              width={42}
            />
            <p className="text-lg">Canasta</p>
            <span>(0)</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
