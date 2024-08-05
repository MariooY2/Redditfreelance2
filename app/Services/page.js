import Image from "next/image";
import Footer from "../_components/Footer";
import Prices2 from "../_components/Prices2";
const services = [
  {
    title: "Teeth Whitening",
    description:
      "We offer professional teeth whitening services to brighten and rejuvenate your smile. Our skilled technicians use state-of-the-art equipment to provide safe and effective teeth whitening, ensuring that your smile leaves a lasting impression.",
    image: "/teeth.jpg", // Replace with actual image path
  },
  {
    title: "Teeth Jewels",
    description:
      "At Kuartz, we don't just offer teeth whitening; we also provide a unique and trendy service - teeth jewels. Adorn your smile with sparkling gems for that touch of individuality and dazzle.",
    image: "/jewels.jpg", // Replace with actual image path
  },
  {
    title: "Body Sculpting",
    description:
      "We are proud to introduce the latest in body sculpting with our cavitation machine. Experience non-invasive fat reduction and cellulite smoothing to achieve the body shape you desire.",
    image: "/bodysculpting.jpg", // Replace with actual image path
  },
  {
    title: "Eyelash Extensions",
    description:
      "Elevate your look with our expertly applied eyelash extensions. From natural to dramatic styles, our lash treatments enhance your eyes' beauty and add depth to your overall appearance.",
    image: "/eyelashes.jpg", // Replace with actual image path
  },
];

const Services = () => {
  return (
    <div className="container mx-auto py-10 sm:px-12 px-2 mt-16 lg:mt-20">
      <h1 className="lg:text-7xl sm:text-4xl text-2xl font-bold text-center mb-14">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row  rounded-lg overflow-hidden gap-11"
          >
            <div className="lg:w-1/2 w-full relative h-72 lg:h-auto ">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white  lg:w-1/2 w-full p-6 flex flex-col justify-center shadow-lg rounded-3xl overflow-hidden">
              <h2 className="text-2xl font-bold mb-4 text-pink-600">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Prices2 />
      <div className="flex justify-center items-center mb-14">
        <a href="https://kuartz777.setmore.com/beta">
          <button className="lg:text-2xl text-xl bg-white text-pink-600 lg:px-6 px-4 lg:py-3 py-2 border border-pink-600 rounded-3xl hover:bg-pink-600 hover:text-white transition duration-300">
            {" "}
            Book Now
          </button>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
