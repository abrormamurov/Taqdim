import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutYou = () => {
  const [full_name, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [errors, setErrors] = useState({}); // Define state for errors
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!full_name || !telephone) {
      setErrors({
        full_name: !full_name ? "Full Name is required" : "",
        telephone: !telephone ? "Phone Number is required" : "",
      });
      return;
    }

    try {
      console.log("Full Name:", full_name);
      console.log("Telephone:", telephone);

      const token = localStorage.getItem("authToken"); // Adjust token retrieval based on your setup

      const response = await fetch(
        "https://vildan.pythonanywhere.com/api/v1/user/profile/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add token to Authorization header
          },
          body: JSON.stringify({ full_name, telephone }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("About you successful:", data);
        const userId = data.id;
        localStorage.setItem("userId", userId);
        navigate("/preview");
      } else {
        const errorData = await response.json();
        console.error("Profile creation error:", errorData);
        setErrors({
          general: "Profile creation failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Profile creation request error:", error);
      setErrors({ general: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">About You</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {errors.full_name && (
              <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Enter your phone number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {errors.telephone && (
              <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>
            )}
          </div>
          {errors.general && (
            <p className="text-red-500 text-xs mb-4">{errors.general}</p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutYou;
