import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-pink-400 p-4 shadow-lg carattere-regular">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
          <Image src="/logo1.png" alt="Beauty Salon Logo" className="border rounded-full" width={60} height={60} />
          <span className="text-white text-2xl font-bold ml-2 hidden lg:block">KUARTZ</span>
        </div>
        <div className="space-x-4">
          <Link className="text-white hover:text-gray-200" href="/">
            Home
          </Link>
          <Link className="text-white hover:text-gray-200" href="/services">
            Services
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link className="text-white hover:text-gray-200" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
