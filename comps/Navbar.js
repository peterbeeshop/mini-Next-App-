import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/car.JPG" width={100} height={150} alt="car" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/people">
        <a>People</a>
      </Link>
    </nav>
  );
};

export default Navbar;
