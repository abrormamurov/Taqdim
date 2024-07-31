import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiUser, FiSettings, FiLogOut, FiPlus } from "react-icons/fi";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    setAccounts(savedAccounts);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleAccountClick = (username) => {
    navigate(`/preview/${username}`);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "bg-blue-500 text-white"
      : "text-slate-500";
  };

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="text-slate-500 w-7 h-7 fixed top-4 left-4 z-50 lg:hidden"
      >
        ☰
      </button>

      <div
        className={`fixed inset-0 lg:inset-auto lg:left-0 lg:top-0 lg:h-screen bg-gray-800 bg-opacity-75 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-64 lg:bg-gray-800 lg:bg-opacity-100 lg:shadow-md lg:z-40`}
      >
        <button
          onClick={toggleDrawer}
          className="p-4 text-slate-300 lg:hidden absolute top-4 right-4"
        >
          ✕
        </button>

        <div className="flex flex-col bg-slate-100 h-full">
          <nav className="flex-1">
            <div className="flex flex-col items-center mt-16 mb-16">
              <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
                TAQDIM.UZ
              </h2>
            </div>

            <ul className="space-y-2 mt-4">
              {accounts.map((account) => (
                <li key={account.username}>
                  <button
                    onClick={() => handleAccountClick(account.username)}
                    className={`flex w-full ml-3 items-center p-4 hover:bg-blue-500 ${isActive(
                      `/preview/${account.username}`
                    )}`}
                  >
                    {account.username}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/create"
                  className="flex w-full ml-3 items-center p-4 hover:bg-blue-500"
                >
                  <FiPlus className="mr-2" />
                  New Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/preview"
                  className={`flex ml-3 items-center p-4 hover:bg-blue-500 ${isActive(
                    "/preview"
                  )}`}
                >
                  <FiUser className="mr-3" /> My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/myaccount"
                  className={`flex ml-3 items-center p-4 hover:bg-blue-500 ${isActive(
                    "/myaccount"
                  )}`}
                >
                  <FiSettings className="mr-3" /> My Account
                </Link>
              </li>
              <li>
                <Link
                  to="/signout"
                  className={`flex ml-3 items-center p-4 hover:bg-blue-500 ${isActive(
                    "/signout"
                  )}`}
                >
                  <FiLogOut className="mr-3" /> Sign Out
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
