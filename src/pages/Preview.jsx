import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import UsernameInput from "../components/UsernameInput";
import LinkPreview from "../components/LinkPreview";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
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
    <div className="p-4">
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
      <div className="flex flex-col items-center">
        <UsernameInput />
      </div>
      <div className="flex flex-col items-center mt-20">
        <div className="bg-slate-100 p-10 br drop-shadow-xl rounded-lg flex items-center justify-center">
          {userData.image ? (
            <img
              src={userData.image}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full shadow-md"
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
      <div className="align-element flex justify-center mt-10 mb-10">
        <Link to="/preview">
          {" "}
          <img src="/public/Group.svg" alt="" width={180} height={80} />
        </Link>
      </div>
    </div>
  );
}

export default Preview;
