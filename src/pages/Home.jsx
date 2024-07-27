import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi"; // Import a menu icon
import { SiInstagram } from "react-icons/si";
import { BiLogoTelegram } from "react-icons/bi";
import { SiWhatsapp } from "react-icons/si";
import Form from "./Form";
import IconCircle from "./IconCircle";
function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto p-4 align-element">
      <nav className="flex justify-between items-center mt-5">
        <div class="flex justify-center items-center">
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
            TAQDIM.UZ
          </h2>
        </div>

        <div className="hidden md:flex gap-5 items-center">
          <Link to="" className="hover:text-indigo-600">
            How It Works
          </Link>
          <Link to="#" className="hover:text-indigo-600">
            Features
          </Link>
          <Link to="/login">
            <button className="btn2 hover:bg-indigo-500 hover:text-white transition">
              Log In
            </button>
          </Link>
          <Link to="/singup">
            <button className="btn1  hover:text-indigo-500 transition">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <HiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </nav>
      <div
        className={`flex flex-col items-center mt-4 md:hidden transition-transform duration-300 ${
          isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex gap-4">
          {" "}
          <Link to="#" className="mb-2 hover:text-indigo-600">
            How It Works
          </Link>
          <Link to="#" className="mb-2 hover:text-indigo-600">
            Features
          </Link>
        </div>
        <Link to="/login" className="mb-2">
          <button className="btn2 hover:bg-indigo-500 transition">
            Log In
          </button>
        </Link>
        <Link to="/singup" className="mb-2">
          <button className="btn1 hover:bg-indigo-500 transition">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row mt-20 justify-between items-center text-center md:text-left mb-20">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="font-extrabold text-6xl text-neutral mb-6">
            Now, you only need one link.
          </h2>
          <h4 className="text-2xl mb-8">
            Share more with your followers in a single click. Myurls makes it
            easy to link to all of your content in one place.
          </h4>
          <Link to="#">
            <button className="btn3 hover:bg-indigo-500 hover:text-white     font-bold text-xl mb-2">
              Use Taqdim for Free
            </button>
          </Link>
          <p> people have signed up this week!</p>
        </div>
        <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-lg shadow-lg">
                <div className="avatar">
                  <div className="w-24 rounded-full mb-8">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <button className="btnti    flex items-center justify-center gap-3  font-bold text-xl mb-2">
                  <SiInstagram /> Instagram
                </button>{" "}
                <button className="btntt flex items-center justify-center gap-3    font-bold text-xl mb-2">
                  <BiLogoTelegram /> Telegram
                </button>{" "}
                <button className="btntw flex items-center justify-center gap-3    font-bold text-xl mb-2">
                  <SiWhatsapp /> Whatsapp
                </button>{" "}
                <button className="btnt    font-bold text-xl mb-2">
                  Use Taqdim for Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center flex-col mb-10 ">
        <h2 className="font-extrabold text-4xl text-neutral mb-3 ">
          Get your myurls handle
        </h2>
        <h4 className="mb-8">Enter your username below to claim your link.</h4>
        <Form />
      </div> */}
      {/* <div className="flex  items-center justify-center  lbd ">
        <div className="text-center ">
          <h2 className="font-extrabold text-4xl text-neutral mb-3">
            Use Anywhere
          </h2>
          <h4 className="mb-8">
            Share all of your content, everywhere. There is no limit to where
            your myurls link can be used.
          </h4>
        </div>
        <div className="relative flex items-center justify-center w-full h-96 bg-pattern">
          <IconCircle />
        </div>
      </div> */}
      {/* <div className="flex  items-center justify-center  lbd">
        <div className="relative flex items-center justify-center w-full  bg-pattern">
          <IconCircle />
        </div>
        <div className="text-center mb-8">
          <h2 className="font-extrabold text-4xl text-neutral mb-3">
            Personalize Your Profile
          </h2>
          <h4 className="">
            Make your profile as unique as you are. Customize colors, fonts,
            background images, and more.
          </h4>
        </div>
      </div> */}
      {/* <div className="flex  items-center justify-center  lbd ">
        <div className="text-center ">
          <h2 className="font-extrabold text-4xl text-neutral mb-3">
            Get Real-Time Analytics
          </h2>
          <h4 className="mb-8">
            Track profile views and individual link clicks to see what content
            your audience is most interested in.
          </h4>
        </div>
        <div className="relative flex items-center justify-center w-full h-96 bg-pattern">
          <IconCircle />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
