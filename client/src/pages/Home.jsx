import Header from "../components/Header";
import { Link } from "react-router-dom";
import hero1 from "../assets/cta.svg";
import hero2 from "../assets/cta2.svg";
import dots from "../assets/dots.svg";
import landing from "../assets/landing-chat.png";

const Home = () => {
  return (
    <section>
      <div className=" h-screen  mx-auto text-white  bg-gradient-to-r from-blue-500 to-blue-600">
        <Header />

        <div className="flex  max-w-8xl flex-col md:flex-row mt-6 justify around items-start space-y-12 md:space-y-0 px-3 md:px-10   mx-auto">
          <div className="w-full md:w-1/2 flex flex-col ">
            <h1 className="font-semibold text-3xl text-center lg:text-left  md:text-5xl lg:text-8xl leading-normal mb-10 ">
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
          <div className="w-full md:w-1/2 sm:ml-24 md:ml-0 flex md:space-x-48  lg:space-x-72">
            <div className=" ">
              <img
                className="w-16 sm:w-24 h-24 z-2 absolute  "
                src={dots}
                alt="dot-logo"
              />
              <img
                className="w-32 sm:w-40 md:w-32  lg:w-48 lg:h-60 absolute z-12 mt-6 ml-8"
                src={hero1}
                alt="hero-logo"
              />
            </div>
            <div className="ml-44 md:mt-28">
              <img
                className="w-32 sm:w-40 md:w-32 lg:w-48 lg:h-60 absolute z-10  mt-6"
                src={hero2}
                alt="hero-logo"
              />
              <img
                className="w-16 sm:w-24 h-24 absolute z-2 lg:ml-32  ml-24 sm:ml-16  "
                src={dots}
                alt="dot-logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-3xl max-auto text-center mt-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Instant Group Chats</h2>
        <p className="text-2xl text-gray-700">
          Hey there, this app has been designed to give you the best
          <br />
          of anything you need,ensuring an easy way to connect
          <br /> with all the groups in your life, big and small.
        </p>
      </div>
      <div className="max-w-4xl relative mx-auto mt-12">
        <img
          className="w-24 h-24 -top-3 md:w-48 md:h-48 absolute   "
          src={dots}
          alt="dot-logo"
        />{" "}
        <img className=" z-10 absolute " src={landing} alt="hero-logo" />
      </div>
    </section>
  );
};

export default Home;
