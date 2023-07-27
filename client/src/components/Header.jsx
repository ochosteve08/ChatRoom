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
          <h3 className="font-semibold">Product</h3>
          <h2 className="capitalize font-semibold">services</h2>

          <Link to={"/login"}>
            <button className="text-white bg-blue-400 font-bold hover:bg-blue-500 w-20 py-1  rounded-full text-center">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
