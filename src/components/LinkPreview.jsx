import React from "react";
import {
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const linkStyles = {
  twitter: "bg-blue-500",
  telegram: "bg-blue-400",
  instagram: "bg-pink-600",
  whatsapp: "bg-green-500",
};

const LinkPreview = ({ links }) => {
  const renderIcon = (type) => {
    switch (type) {
      case "twitter":
        return <FaTwitter className="text-white text-3xl" />;
      case "telegram":
        return <FaTelegramPlane className="text-white text-3xl" />;
      case "instagram":
        return <FaInstagram className="text-white text-3xl" />;
      case "whatsapp":
        return <FaWhatsapp className="text-white text-3xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className={`flex items-center p-4 rounded-lg ${
            linkStyles[link.type]
          }`}
        >
          <div className="mr-2">{renderIcon(link.type)}</div>
          <span className="text-white text-sm sm:text-base">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default LinkPreview;
