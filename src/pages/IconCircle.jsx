import {
  FaBeer,
  FaCoffee,
  FaApple,
  FaAndroid,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { BiLogoTelegram } from "react-icons/bi";
import { SiInstagram } from "react-icons/si";

function IconCircle() {
  const icons = [
    <BiLogoTelegram key="beer" className="text-3xl text-blue-600" />,
    <SiWhatsapp key="github" className="text-3xl text-green-500" />,

    <FaCoffee key="coffee" className="text-3xl text-gray-600" />,
    <SiInstagram key="apple" className="text-3xl text-pink-600" />,
    <FaTwitter key="twitter" className="text-3xl text-blue-800" />,

    <FaAndroid key="android" className="text-3xl text-green-500" />,
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="relative flex items-center justify-center animate-spin-slow w-full h-full">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              transform: `rotate(${index * 60}deg) translateX(150px) rotate(-${
                index * 60
              }deg)`,
            }}
          >
            {icon}
          </div>
        ))}
        {/* Rotating container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin-slow w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default IconCircle;
