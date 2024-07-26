import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import LinkPreview from "../components/LinkPreview";

const AddLink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [displayName, setDisplayName] = useState(""); // New state for display name
  const [urlType, setUrlType] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Load links from local storage when the component mounts
    const savedLinks = JSON.parse(localStorage.getItem("links")) || [];
    setLinks(savedLinks);
  }, []);

  useEffect(() => {
    // Save links to local storage whenever they change
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleUrlChange = (e) => {
    const value = e.target.value;
    setUrl(value);

    // Determine URL type based on the URL
    if (value.includes("twitter.com")) {
      setUrlType("twitter");
    } else if (value.includes("t.me") || value.includes("telegram.me")) {
      setUrlType("telegram");
    } else if (value.includes("instagram.com")) {
      setUrlType("instagram");
    } else if (value.includes("whatsapp.com")) {
      setUrlType("whatsapp");
    } else {
      setUrlType("");
    }
  };

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

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

  const getBgColor = (type) => {
    switch (type) {
      case "twitter":
        return "bg-blue-500";
      case "telegram":
        return "bg-blue-500";
      case "instagram":
        return "bg-pink-600";
      case "whatsapp":
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url && urlType && displayName) {
      setLinks([...links, { url, type: urlType, name: displayName }]); // Include displayName in link
      setUrl("");
      setDisplayName(""); // Reset displayName
      setUrlType("");
      setIsOpen(false);
    }
  };

  return (
    <div className="container mx-auto p-4 align-element">
      <div
        className={`flex items-center p-4 border-4 border-dotted rounded-lg cursor-pointer ${
          isOpen ? "bg-gray-100" : "bg-white"
        }`}
        onClick={toggleForm}
      >
        <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
          <span className="text-5xl mb-3">+</span>
        </div>
        <span className="ml-4 text-lg">Add New Link</span>
      </div>
      {isOpen && (
        <div className="mt-4 border p-4 rounded-lg bg-white shadow-lg">
          <ul className="flex mb-4 border-b">
            <li className="mr-2">
              <button className="text-blue-500 border-b-2 border-blue-500">
                General
              </button>
            </li>
            {/* Add other buttons as needed */}
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Link Name"
                value={displayName} // Bind displayName value
                onChange={handleDisplayNameChange} // Handle displayName change
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">URL</label>
              <input
                type="url"
                className="w-full p-2 border rounded-lg"
                placeholder="https://twitter.com/elonmusk"
                value={url}
                onChange={handleUrlChange}
              />
            </div>
            {urlType && (
              <div className="mb-4 flex items-center">
                <div className={`mr-2 p-2 ${getBgColor(urlType)} rounded-full`}>
                  {renderIcon(urlType)}
                </div>
                <span className="text-lg">
                  {urlType.charAt(0).toUpperCase() + urlType.slice(1)}
                </span>
              </div>
            )}
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
                onClick={toggleForm}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Create
              </button>
            </div>
          </form>
          <div className="mt-4">
            {links.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Saved Links</h3>
                <ul>
                  {links.map((link, index) => (
                    <li key={index} className="mb-2 flex items-center">
                      <div
                        className={`mr-2 p-2 ${getBgColor(
                          link.type
                        )} rounded-full`}
                      >
                        {renderIcon(link.type)}
                      </div>
                      {/* <span className="text-lg mr-2">{link.name}</span> */}
                      <a href={link.url} className="text-blue-500">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddLink;
