/* eslint-disable react/prop-types */
import { useState } from "react";
import _ from "lodash";
import { CommentOutlined } from "@ant-design/icons";
import logo from "../assets/chatapp-header.png";
import {
  Link,
   useNavigate
} from "react-router-dom";

const UserLogin = () => {
  const [aUser, setAUser] = useState('');
  const navigate = useNavigate()
console.log('user:',aUser);
  const handleSetUser = () => {
   if (!aUser) return;
      localStorage.setItem("user", aUser);
      localStorage.setItem(
        "avatar",
        `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
      );
      // setUser(aUser);
       navigate('/dashboard')
 
  };
localStorage.setItem("loginUpdate", Date.now());

  return (
    <>
      <div className="text-center my-10  flex justify-start items-center">
        <CommentOutlined className="text-blue-400 mx-5 text-4xl" />
        <Link to={"/"}>
          <img src={logo} alt="header-logo" />
        </Link>
      </div>
      <div
       
        className="flex justify-center items-center space-x-4"
      >
        <input
          className=" w-1/4 h-5 rounded-lg p-4 text-lg transition duration-150 border border-gray-400 focus:outline-blue-400 focus:text-gray-600  placeholder:text-sm"
          type="text"
          placeholder="John doe"
          value={aUser}
          onChange={(event) => setAUser(event.target.value)}
        />

        <button
          onClick={handleSetUser}
          className="w-1/6 text-white text-xl h-9 font-semibold border rounded-lg bg-blue-500  hover:bg-blue-700 focus:bg-blue-900 transition duration-200 ease-in-out shadow-md hover:shadow-lg"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default UserLogin;
