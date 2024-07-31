import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import AddLink from "./AddLink";
import Drawer from "../components/Drawer";
import axios from "axios";

function Edit() {
  const [full_name, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [telephone, setTelephone] = useState("");

  const [image, setImage] = useState(null);
  const [profileCompleted, setProfileCompleted] = useState(false);

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    setFullName(userData.full_name || "");
    setLocation(userData.location || "");
    setBio(userData.bio || "");
    setBio(userData.bio || "");

    setTelephone(userData.telephone || "");

    setImage(userData.image || null);

    // Check if the profile is completed
    if (
      userData.full_name &&
      userData.location &&
      userData.bio &&
      userData.telephone
    ) {
      setProfileCompleted(true);
      navigate("/preview");
    }
  }, [navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const userData = { full_name, telephone, location, bio, image };
      console.log("Sending userData:", userData);
      const response = await axios.post(
        "https://vildan.pythonanywhere.com/api/v1/user/profile/create/",
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the token is prefixed with "Bearer "
          },
        }
      );
      console.log("Profile saved:", response.data);

      // Save user data to localStorage
      localStorage.setItem("userData", JSON.stringify(userData));

      // Retrieve and log data from localStorage
      const storedUserData = localStorage.getItem("userData");
      console.log("Stored userData:", JSON.parse(storedUserData));

      navigate("/preview");
    } catch (error) {
      console.error(
        "Error saving profile:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="flex">
      <div className="">
        <Drawer />
      </div>
      <div className="p-4 sm:p-8 w-full align-element">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <div className="relative shadow-2xl br bg-slate-100 w-32 h-32 sm:w-52 sm:h-52 flex items-center justify-center rounded-lg">
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            ) : (
              <FaRegUser className="text-blue-600 w-20 h-20 sm:w-32 sm:h-32" />
            )}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
            />
            <button
              type="button"
              onClick={handleImageClick}
              className="absolute bottom-1 right-1 bg-blue-500 text-white px-2 py-1 rounded-md text-xs"
            >
              Change
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Telephone</label>
              <input
                type="text"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2"
                placeholder="Enter your location"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2"
                placeholder="Enter your bio"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
