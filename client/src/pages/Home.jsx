import Header from "../components/Header";
import { Link } from "react-router-dom";
import hero1 from "../assets/cta.svg";
import hero2 from "../assets/cta2.svg";
import dots from "../assets/dots.svg"


const Home = () => {
  return (
    <>
      <div className=" min-h-screen pb-48 h-auto mx-auto text-white  bg-gradient-to-r from-blue-500 to-blue-600">
        <Header />

        <div className="flex  max-w-6xl flex-col md:flex-row mt-6 md:12 space-y-12 px-3 md:px-10   mx-auto">
          <div className="w-full md:w-1/2 flex flex-col ">
            <h1 className="font-semibold text-3xl text-center md:text-left md:text-8xl leading-normal mb-10 ">
              Have your best chat.
            </h1>
            <p className="text-center md:text-left italic text-xl mb-10">
              Fast, easy & unlimited group chat services.
            </p>
            <div className=" flex flex-row items-center justify-center md:justify-start space-x-3  md:space-y-0 md:space-x-10">
              <Link to={"/login"}>
                <button className="text-white bg-green-400 font-bold px-4 hover:bg-green-600 w-36 py-2  rounded-full text-center transition duration-200 ease-in-out shadow-md hover:shadow-lg">
                  Try it for free
                </button>
              </Link>
              <Link to={"/login"}>
                <button className="text-white font-bold border border-white hover:bg-blue-600 w-36 py-2 px-4 rounded-full text-center transition duration-200 ease-in-out shadow-md hover:shadow-lg">
                  Get a Demo
                </button>
              </Link>
            </div>
          </div>
          <div className="1/2 flex justify-between space-x-64 lg:space-x-80">
            <div className=" h-auto ">
              <img
                className="w-24 h-24 z-3 absolute  "
                src={dots}
                alt="dot-logo"
              />
              <img
                className="w-48 absolute z-10 mt-6 ml-8"
                src={hero1}
                alt="hero-logo"
              />
            </div>
            <div className="  mt-60 -h-auto">
              <img
                className="w-48 absolute z-10  mt-6"
                src={hero2}
                alt="hero-logo"
              />
              <img
                className="w-24 h-24 absolute z-2 ml-32  "
                src={dots}
                alt="dot-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home