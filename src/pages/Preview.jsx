import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import UsernameInput from "../components/UsernameInput";
import LinkPreview from "../components/LinkPreview";
import {
  FaUser,
  FaChartLine,
  FaUserFriends,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
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
    <div className="flex">
      <div className="">
        <Drawer />
      </div>
      <div className="p-4 ml-96">
        <nav className="flex gap-5 mt-5 mb-10 items-center justify-center font-bold text-xl">
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

        <div className="flex-1 flex gap-8 items-center mt-36">
          <div className="profile-pic-container br bg-slate-100 p-10 rounded-lg flex items-center justify-center">
            {userData.image ? (
              <img
                src={userData.image}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full"
              />
            ) : (
              <FaRegUser className="text-blue-600 w-32 h-32" />
            )}
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl mb-2 font-bold">
              {userData.displayName || "Name"}
            </h2>
            <p className="flex items-center border-2 border-solid border-blue-600 p-2 rounded-3xl gap-1 text-blue-600">
              <IoLocationSharp />
              {userData.location || "Location"}
            </p>
            <p className="text-violet-400 mt-2">{userData.bio || "Bio"}</p>
          </div>
        </div>
        <div className="mt-10">
          <LinkPreview links={links} />
        </div>
        <div class="flex justify-center items-center mt-52 mb-10 ">
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
            TAQDIM.UZ
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Preview;
