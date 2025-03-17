import { FaSearch } from "react-icons/fa";
import "./App.css";
import whiteLaptop from "./assets/white-laptop.png";
import snowflakeIcon from "./assets/bluesnowflake.png";
import { StyledButton } from "./components/StyledButton";

const App = () => {
  return (
      <div className="min-h-screen w-full">
        {/* Navbar content */}
        <div className=" bg-[#070229] w-full flex items-center justify-between p-2 fixed z-[2]">
          <div
            className="flex items-center  hover:cursor-pointer"
            onClick={
              /* router to home */
              () => console.log("logo was clicked")
            }
          >
            <img
              src={whiteLaptop}
              alt="Computer Image"
              className="w-15 h-15 ml-4"
            />
            <h1 className="text-white ml-0 font-extrabold font-sans text-2xl">
              Frostcode inc.
            </h1>
          </div>
          <div className="ml-[45rem] mr-0 flex bg-[#14214d] text-white rounded-2xl">
            <input
              placeholder="Search"
              className="w-[15rem] py-1 text-left pl-[5px] bg-[#14214d] 
            focus:outline-none focus:bg-[#273974] rounded-l-2xl
            transition-colors duration-200 italic focus:not-italic"
            />
            <button className="px-3 py-1 hover:bg-[#273974] rounded-r-2xl">
              <FaSearch className="hover:cursor-pointer" />
            </button>
          </div>
          <div className="flex gap-10 mr-6 font-bold hover:cursor-pointer">
            <a>About</a>
            <a>Services</a>
            <a>Contact</a>
          </div>
        </div>
        <div className="block pt-[4rem]">
          {/* Home Section */}
          <div
            id="home"
            className="h-screen w-screen z-[1] flex justify-center items-center"
          >
            <div className="font-inter w-[90vw] h-[80vh] rounded-3xl flex align-center flex-col items-center">
              <h1 className="pt-20 text-7xl ">Frostcode Inc.</h1>
              <h2 className="text-2xl pt-4">
                Cool your head while we handle it
              </h2>
              <img
                src={snowflakeIcon}
                alt="Snowflake Icon"
                className="w-30 h-15 mt-8"
              />
              <div className="flex justify-center items-center gap-10 mt-8">
                <StyledButton text="About Us" route="about" />
                <StyledButton text="Our Services" route="services" />
              </div>
            </div>
          </div>

          {/* About Section*/}
          <div
            id="about"
            className="h-screen w-screen flex justify-center items-center z-[1] bg-[#273974]"
          >
            <p className="text-white">
              about stuff bla bla bla
            </p>
          </div>
          {/* Services Section*/}
          <div
            id="services"
            className="h-screen w-screen flex justify-center items-center z-[1]"
          >
            <p className="text-white">
              services stuff bla bla bla
            </p>
          </div>
        </div>
      </div>
  );
};

export default App;
