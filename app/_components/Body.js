import Image from "next/image";
import Link from "next/link";
function Body() {
  return (
      <div className="mt-20  w-full h-screen flex  flex-wrap-reverse md:flex-nowrap justify-center">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full lg:h-5/6 md:h-[70vh] h-[30vh] relative flex justify-center sm:mt-0 mt-10 ">
            <Image
              src="/pic2.png" // Path to the uploaded image
              alt="Beauty Salon"
              fill
              className="md:object-contain object-fill"
              quality={100}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center lg:gap-36 gap-10 text-white">
        
          <h1 className=" font-bold lg:text-7xl sm:text-4xl text-xl">
            Kuartz Beauty Salon
          </h1>
          <div className="flex flex-col justify-center items-center gap-3 lg:w-full w-3/4">
            <p className="lg:text-2xl sm:text-lg text-sm mb-4">
              Kuartz was founded in April 2023 in the picturesque location of
              Marisule, St. Lucia. Our inspiration is rooted in providing
              accessible beauty solutions to our island. As the sole proprietor,
              Kitana Belizaire is passionate about offering quality services
              that not only transform appearances but also boost self-esteem and
              confidence.
            </p>
            <Link href="/Services">
            <button className="mb-[-10px] bg-white text-pink-600 px-6 py-3 border border-pink-600 rounded-3xl hover:bg-pink-600 hover:text-white transition duration-300">
              Services
            </button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Body;
