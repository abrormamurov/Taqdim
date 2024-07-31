import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import LinkPreview from "../components/LinkPreview";
import Drawer from "../components/Drawer";

function Preview() {
  const [userData, setUserData] = useState({
    full_name: "",
    location: "",
    bio: "",
    image: null,
  });
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData")) || {
      full_name: "",
      location: "",
      bio: "",
      image: null,
    };
    setUserData(savedUserData);

    const savedLinks = JSON.parse(localStorage.getItem("links")) || [];
    setLinks(savedLinks);

    console.log("User data in Preview:", savedUserData);
  }, []);

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

      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/preview");
    } catch (error) {
      console.error(
        "Error saving profile:",
        error.response ? error.response.data : error.message
      );
      alert("There was an error saving your profile. Please try again.");
    }
  };

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

        <div className="p-10 sm:p-20  ">
          <div className="flex justify-center items-center mb-5">
            <div className="relative shadow-2xl bg-slate-100 w-32 h-32 sm:w-52 sm:h-52 flex items-center justify-center rounded-lg">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              ) : (
                <FaRegUser className="text-blue-600 w-20 h-20 sm:w-32 sm:h-32" />
              )}
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">{userData.full_name}</h1>
              <p className="text-gray-600 flex justify-center items-center gap-2">
                <IoLocationSharp />
                {userData.location}
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <div className="w-full sm:w-2/3 lg:w-1/2 text-center">
              <p className="text-gray-700">{userData.bio}</p>
            </div>
          </div>
          <LinkPreview links={links} />
        </div>
      </div>
    </div>
  );
}

export default Preview;
