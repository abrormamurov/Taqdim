import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import LinkPreview from "../components/LinkPreview";
import Drawer from "../components/Drawer";

function Preview() {
  const [userData, setUserData] = useState({
    displayName: "",
    location: "",
    bio: "",
    image: null,
  });
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Load user data and links from local storage when the component mounts
    const savedUserData = JSON.parse(localStorage.getItem("userData")) || {
      displayName: "",
      location: "",
      bio: "",
      image: null,
    };
    setUserData(savedUserData);

    const savedLinks = JSON.parse(localStorage.getItem("links")) || [];
    setLinks(savedLinks);
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4">
        <Drawer />
      </div>
      <div className="p-4 md:ml-96 flex-1">
        <nav className="flex flex-wrap gap-5 mt-5 mb-10 items-center  font-bold text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
            to="/preview"
          >
            Preview
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
            to="/edit"
          >
            Edit
          </NavLink>
        </nav>

        <div className="flex flex-col md:flex-row items-center mt-10 md:mt-36 gap-8">
          <div className="profile-pic-container bg-slate-100 p-10 rounded-lg flex items-center justify-center">
            {userData.image ? (
              <img
                src={userData.image}
                alt="Profile"
                className="w-32 h-32 md:w-32 md:h-32 object-cover rounded-full"
              />
            ) : (
              <FaRegUser className="text-blue-600 w-32 h-32 md:w-32 md:h-32" />
            )}
          </div>
          <div className="mt-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl mb-2 font-bold">
              {userData.displayName || "Name"}
            </h2>
            <p className="flex items-center justify-center md:justify-start border-2 border-solid border-blue-600 p-2 rounded-3xl gap-1 text-blue-600">
              <IoLocationSharp />
              {userData.location || "Location"}
            </p>
            <p className="text-violet-400 mt-2">{userData.bio || "Bio"}</p>
          </div>
        </div>
        <div className="mt-10">
          <LinkPreview links={links} />
        </div>
        <div className="flex  items-center mt-20 md:mt-52 mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
            TAQDIM.UZ
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Preview;
