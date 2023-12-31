// import { CommentOutlined } from "@ant-design/icons";
// import logo from "../assets/chatapp.svg";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <nav className="bg-blue-500 shadow-lg border-b fixed w-full top-0 z-50 bg-opacity-100">
//       <div className="flex justify-between px-3 md:px-10 text-white  items-center  ">
//         <div className="text-center py-10 flex  items-center ">
//           <CommentOutlined className=" mx-5 text-4xl md:text-6xl" />
//           <Link to={"/"}>
//             <img className="w-48" src={logo} alt="header-logo" />
//           </Link>
//         </div>
//         <div className="hidden md:flex justify-around items-center text-lg space-x-12">
//           <h3 className="font-semibold  rounded-full cursor-pointer hover:bg-blue-400 hover:py-2 px-4 hover:px-4 transition duration-200 ease-in-out">
//             Product
//           </h3>
//           <h2 className="capitalize  rounded-full font-semibold cursor-pointer hover:bg-blue-400 hover:py-2  px-4 hover:px-4 hover:w-full transition duration-200 ease-in">
//             services
//           </h2>

//           <Link to={"/login"}>
//             <button className="text-white bg-blue-400 font-bold   py-2  rounded-full text-center transition duration-200 ease-in shadow-md hover:shadow-lg    border border-white hover:bg-blue-600 w-36 px-4 ">
//               Log In
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;


import { useState } from "react";
import { CommentOutlined } from "@ant-design/icons";
import logo from "../assets/chatapp.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 shadow-lg border-b fixed w-full top-0 z-50 bg-opacity-100">
      <div className="flex justify-between px-3 md:px-10 text-white  items-center">
        <div className="text-center py-6 flex items-center">
          <CommentOutlined className=" mx-5 text-4xl md:text-6xl" />
          <Link to={"/"}>
            <img className="w-48" src={logo} alt="header-logo" />
          </Link>
        </div>

        <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // This is a "X" icon
              <path
                fillRule="evenodd"
                d="M18.278 19.071a1 1 0 01-1.414 0L12 13.414l-4.864 5.657a1 1 0 11-1.414-1.414L10.586 12 5.722 7.343a1 1 0 011.414-1.414L12 10.586l4.864-4.657a1 1 0 011.414 1.414L13.414 12l4.864 4.657a1 1 0 010 1.414z"
              />
            ) : (
              // This is a "hamburger" icon
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex justify-around items-center text-lg space-x-12`}
        >
          <h3 className="font-semibold  rounded-full cursor-pointer hover:bg-blue-400 hover:py-2 px-4 hover:px-4 transition duration-200 ease-in-out">
            Product
          </h3>
          <h2 className="capitalize  rounded-full font-semibold cursor-pointer hover:bg-blue-400 hover:py-2  px-4 hover:px-4 hover:w-full transition duration-200 ease-in">
            services
          </h2>

          <Link to={"/login"}>
            <button className="text-white bg-blue-400 font-bold py-2 rounded-full text-center transition duration-200 ease-in shadow-md hover:shadow-lg border border-white hover:bg-blue-600 w-36 px-4">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
