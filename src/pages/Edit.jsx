import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import AddLink from "./AddLink";

function Edit() {
  const [displayName, setDisplayName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null); // Rasm holati

  const fileInputRef = useRef(null); // File inputni referensiya qilish uchun
  const navigate = useNavigate(); // Redirect uchun

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Rasm ma'lumotlarini holatga saqlash
      };
      reader.readAsDataURL(file); // Faylni o'qish
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // File input elementiga bosish
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ma'lumotlarni saqlash
    const userData = { displayName, location, bio, image };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Preview sahifaga o'tish
    navigate("/preview");
  };

  return (
    <div className="p-4 sm:p-8">
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
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            ref={fileInputRef} // Referensiya qo'shish
          />
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={handleImageClick} // Click hodisasi
          >
            <MdDownloading className="w-20 h-20 sm:w-32 sm:h-32 text-gray-300" />
          </div>
        </div>
        <div className="w-full max-w-md mt-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="displayName"
                className="block text-sm font-medium text-gray-700"
              >
                Display Name
              </label>
              <input
                type="text"
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter display name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Enter bio"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
      <AddLink />
    </div>
  );
}

export default Edit;
