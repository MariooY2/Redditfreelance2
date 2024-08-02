import Image from "next/image";
function Body() {
  return (
    <div className="flex justify-center ">
      <div className="w-full h-screen flex  flex-wrap-reverse md:flex-nowrap justify-center">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full lg:h-5/6 h-[30vh] relative flex justify-center">
            <Image
              src="/pic2.png" // Path to the uploaded image
              alt="Beauty Salon"
              fill
              className="object-fill"
              quality={100}
            />
          </div>
        </div>
        <div className="carattere-regular w-full md:w-1/2 flex flex-col justify-center items-center gap-36 text-white">
          <h1 className="lg:text-6xl md:text-4xl text-3xl">
            Kuratz Beauty Salon
          </h1>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-2xl">
              Kuartz was founded in April 2023 in the picturesque location of
              Marisule, St. Lucia. Our inspiration is rooted in providing
              accessible beauty solutions to our island. As the sole proprietor,
              Kitana Belizaire is passionate about offering quality services
              that not only transform appearances but also boost self-esteem and
              confidence.
            </p>
            <button className="bg-white text-pink-600 px-6 py-3 border border-pink-600 rounded-3xl hover:bg-pink-600 hover:text-white transition duration-300">
              Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
