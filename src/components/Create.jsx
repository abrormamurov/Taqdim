import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNext = async () => {
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const newAccount = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        "https://vildan.pythonanywhere.com/api/v1/user/register/",
        newAccount
      );
      console.log("Account created successfully:", response.data);

      let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
      accounts.push(newAccount);
      localStorage.setItem("accounts", JSON.stringify(accounts));
      localStorage.setItem("currentAccount", JSON.stringify(newAccount));
      navigate("/preview");
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 p-4">
      <div className="flex justify-center items-center mt-12 mb-10 ">
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
          TAQDIM.UZ
        </h2>
      </div>
      <label htmlFor="username" className="text-lg font-semibold mb-2">
        Choose a unique username
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Username"
        className="w-full max-w-sm p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <label htmlFor="password" className="text-lg font-semibold mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
        className="w-full max-w-sm p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <label htmlFor="confirmPassword" className="text-lg font-semibold mb-2">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder="Confirm Password"
        className="w-full max-w-sm p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/preview")}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400"
        >
          Cancel
        </button>
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
