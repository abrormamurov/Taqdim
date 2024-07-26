import React from "react";
import { FiCopy } from "react-icons/fi";

const UsernameInput = ({ username }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(username);
    alert("Username copied to clipboard!");
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={username}
        readOnly
        className="px-4 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-indigo-600 text-white rounded-r-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <FiCopy />
      </button>
    </div>
  );
};

export default UsernameInput;
