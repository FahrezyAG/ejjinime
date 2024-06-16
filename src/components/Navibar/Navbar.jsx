import Link from "next/link";
import Image from "next/image";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent shadow-2xl">
      <nav className="relative px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={require("/public/logo.png")} alt="logo" height={90} width={100} />
          </Link>
          <div className="hidden sm:flex justify-between items-center">
            <InputSearch />
          </div>
        </div>
        <div className="sm:hidden flex justify-between items-center">
          <InputSearch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
