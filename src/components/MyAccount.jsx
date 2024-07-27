import React, { useState } from "react";
import Drawer from "./Drawer";

function MyAccount() {
  const [userDetails, setUserDetails] = useState({
    fullName: "abror",
    email: "mabrorbk@gmail.com",
    mobileNumber: "8 90 580 57 83",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUserDetailsSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for user details
    console.log("User Details submitted", userDetails);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for password change
    console.log("Password submitted", userDetails);
  };

  return (
    <div className="flex">
      <div>
        <Drawer />
      </div>
      <div className="p-4 align-element w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">My Account</h2>
        <form onSubmit={handleUserDetailsSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              User Details
            </label>
            <div className="space-y-4 bg-gray-100 p-4 rounded-md">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={userDetails.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={userDetails.mobileNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {" "}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
        <form onSubmit={handlePasswordSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Change Password
            </label>
            <div className="space-y-4 bg-gray-100 p-4 rounded-md">
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userDetails.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  value={userDetails.passwordConfirmation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {" "}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyAccount;
