import { CommentOutlined } from "@ant-design/icons";
import logo from "../assets/chatapp.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-500 shadow-lg border-b sticky top-0 z-100 bg-opacity-100">
      <div className="flex justify-between px-3 md:px-10 text-white  items-center  ">
        <div className="text-center my-10 flex  items-center ">
          <CommentOutlined className=" mx-5 text-4xl md:text-6xl" />
          <Link to={"/"}>
            <img className="w-48" src={logo} alt="header-logo" />
          </Link>
        </div>
        <div className="hidden md:flex justify-around items-center text-lg space-x-12">
          <h3 className="font-semibold  rounded-full cursor-pointer hover:bg-blue-400 hover:py-2 px-4 hover:px-4 transition duration-200 ease-in-out">
            Product
          </h3>
          <h2 className="capitalize  rounded-full font-semibold cursor-pointer hover:bg-blue-400 hover:py-2  px-4 hover:px-4 hover:w-full transition duration-200 ease-in">
            services
          </h2>

          <Link to={"/login"}>
            <button className="text-white bg-blue-400 font-bold   py-2  rounded-full text-center transition duration-200 ease-in shadow-md hover:shadow-lg    border border-white hover:bg-blue-600 w-36 px-4 ">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
