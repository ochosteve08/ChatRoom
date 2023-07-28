import { CommentOutlined } from "@ant-design/icons";
import logo from "../assets/chatapp.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="flex justify-between px-10 text-white  items-center">
        <div className="text-center my-10 flex  items-center ">
          <CommentOutlined className=" mx-5 text-6xl" />
          <Link to={"/"}>
            <img className="w-48" src={logo} alt="header-logo" />
          </Link>
        </div>
        <div className="flex justify-around items-center text-lg space-x-12">
          <h3 className="font-semibold cursor-pointer">Product</h3>
          <h2 className="capitalize font-semibold cursor-pointer">services</h2>

          <Link to={"/login"}>
            <button className="text-white bg-blue-500 font-bold   py-2  rounded-full text-center transition duration-200 ease-in-out shadow-md hover:shadow-lg    border border-white hover:bg-blue-600 w-36 px-4 ">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
