import React, { useState } from "react";
import { Link } from "react-router-dom";
const Create = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCancel = () => {
    // Add cancel functionality here
    console.log("Cancel clicked");
  };

  const handleNext = () => {
    // Add next step functionality here
    console.log("Next clicked");
  };

  return (
    <div className="flex flex-col items-center mt-8 p-4">
      <div class="flex justify-center items-center mt-12 mb-10 ">
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
          TAQDIM.UZ
        </h2>
      </div>
      <label htmlFor="username" className="text-lg font-semibold mb-20">
        Choose a unique username
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleChange}
        placeholder=" Username"
        className="w-full max-w-sm p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <div className="flex space-x-60">
        <Link to="/preview">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300   text-gray-700 rounded-md shadow-sm hover:bg-gray-400"
          >
            Cancel
          </button>
        </Link>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Create;
