import { FaWhatsapp } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { TbBrandGmail } from "react-icons/tb";
function Footer() {
  return (
    <div className="flex justify-around mb-4 mt-10">
      <a href="mailto:kuartz777@gmail.com">
        <TbBrandGmail size={50} />
      </a>
      <a
        href="https://www.instagram.com/kuartz777"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LuInstagram size={50} />
      </a>
      <a
        href="https://wa.me/17587128081"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={50} />
      </a>
    </div>
  );
}

export default Footer;
