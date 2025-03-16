import { FaSearch } from "react-icons/fa";
import "./App.css";
import whiteLaptop from "./assets/white-laptop.png";

const App = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-start">
      {/* Navbar content */}
      <div className=" bg-[#070229] w-full flex items-center justify-between p-2 absolute z-[2]">
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
            <FaSearch />
          </button>
        </div>
        <div className="flex gap-10 mr-6 font-bold hover:cursor-pointer">
          <a>About</a>
          <a>Services</a>
          <a>Contact</a>
        </div>
      </div>
      <div className="block">
        {/* About Section */}
        <div className="h-screen w-screen z-[1] flex justify-center items-center pt-[5rem]">
          <div className="w-[90vw] h-[80vh] rounded-3xl flex align-center flex-col items-center">
            <h1 className="pt-20 text-7xl">Forstcode Inc.</h1>
            <h2 className="text-2xl pt-8">Cool your head while we handle it</h2>
          </div>
        </div>

        {/* Services Section*/}
        <div className="h-screen w-screen z-[1] flex justify-center items-center pt-[5rem] bg-amber-100">
          <p className="text-black">Ugly background just to check page layout</p>
        </div>
      </div>
    </div>
  );
};

export default App;
