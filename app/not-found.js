import Link from "next/link";

export default function CustomError() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-300">
      <h1 className="text-4xl font-bold text-pink-600">Oops! Page not found.</h1>
      <p className="mt-4 text-lg mb-4 ">
        We can't find the page you're looking for.
      </p>
      <Link
        className="lg:text-2xl text-xl bg-white text-pink-600 lg:px-6 px-4 lg:py-3 py-2 border border-pink-600 rounded-3xl hover:bg-pink-600 hover:text-white transition duration-300"
        href="/"
      >
        Go Back Home
      </Link>
    </div>
  );
}
