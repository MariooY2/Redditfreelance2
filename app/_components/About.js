import Image from "next/image";

function About() {
  return (
    <div className="flex items-center justify-center lg:flex-nowrap flex-wrap mb-12 p-6 lg:p-12">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
        <div className="w-3/4 lg:w-2/3 ">
        
          <h2 className="lg:text-7xl text-4xl font-bold mb-4 text-center">About Kuartz</h2>
          <p className=" lg:text-2xl text-lg mb-4 lg:text-start text-center">
            At Kuartz, we offer a wide range of beauty treatments including teeth
            whitening, body sculpting, lash extensions, and teeth jewelry. Our
            commitment to excellence and customer satisfaction makes us the top
            choice for beauty services in St. Lucia.
          </p>
          <p className="lg:text-2xl text-lg lg:text-start text-center mb-4">
            Join us at Kuartz Beauty Salon and experience the best in beauty
            services. We look forward to helping you shine with confidence and
            beauty.
          </p>
         
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <div className="w-full h-60 lg:h-96 relative">
          <Image
            src="/logotest.png" // Replace with the actual path to your image
            alt="Kuartz Beauty Salon"
            fill
            className="object-fill rounded-e-full rounded-t-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
