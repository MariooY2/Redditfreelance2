import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-pink-400 p-4 shadow-lg fixed top-0 left-0 w-full z-50 bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo1.png"
            alt="Beauty Salon Logo"
            className="border rounded-full"
            width={50}
            height={50}
          />
          <span className="text-white text-2xl font-bold ml-2 hidden lg:block">
            KUARTZ
          </span>
        </div>
        <div className="lg:space-x-5 space-x-3 sm:text-xl text-sm">
          <Link className="text-white hover:text-gray-200" href="/">
            Home
          </Link>
          <Link className="text-white hover:text-gray-200" href="/Services">
            Services
          </Link>
          <Link className="text-white hover:text-gray-200" href="/Contact">
            Contact
          </Link>
          <a
            href="https://kuartz777.setmore.com/beta"
            className="text-white hover:text-gray-200"
          >
            Book
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
