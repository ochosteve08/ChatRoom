/* eslint-disable react/prop-types */
import { useState } from "react";
import _ from "lodash";
import { CommentOutlined } from "@ant-design/icons";
import logo from "../assets/chatapp-header.png";
import banner from "../assets/meeting.svg";
import dots from "../assets/dots.svg";

import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [aUser, setAUser] = useState("");
  const navigate = useNavigate();

  const handleSetUser = () => {
    if (!aUser) return;
    localStorage.setItem("user", aUser);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
    );
    // setUser(aUser);
    navigate("/dashboard");
  };
  localStorage.setItem("loginUpdate", Date.now());

  return (
    <section className="relative">
      <div className="text-center my-10  flex justify-start items-center">
        <CommentOutlined className="text-blue-400 mx-5 text-4xl" />
        <Link to={"/"}>
          <img src={logo} alt="header-logo" />
        </Link>
      </div>
      <div className="flex justify-center items-center space-x-4 mb-6">
        <input
          className=" sm:w-1/4 h-5 rounded-lg p-4 text-lg transition duration-150 border border-gray-400 focus:outline-blue-400 focus:text-gray-600  placeholder:text-sm"
          type="text"
          placeholder="John doe"
          value={aUser}
          onChange={(event) => setAUser(event.target.value)}
        />

        <button
          onClick={handleSetUser}
          className="w-1/4 md:w-1/6 text-white text-xl h-9 font-semibold border rounded-lg  bg-blue-500   hover:bg-blue-700 focus:bg-blue-900 transition duration-200 ease-in-out shadow-md hover:shadow-lg"
        >
          Log In
        </button>
      </div>
      <div className="max-w-3xl flex justify-center  relative mx-auto mt-28">
        <img
          className="w-24 h-24 -top-5 sm:-top-10 left-6 md:w-48 md:h-48 absolute   "
          src={dots}
          alt="dot-logo"
        />
        <img className=" z-10 w-3/4 absolute " src={banner} alt="hero-logo" />
        <img
          className="w-24 h-24  md:w-48 md:h-48 absolute -bottom-72  right-8 sm:-bottom-80  "
          src={dots}
          alt="dot-logo"
        />
      </div>
    </section>
  );
};

export default UserLogin;
