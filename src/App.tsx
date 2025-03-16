import { FaSearch } from "react-icons/fa";
import "./App.css";
import whiteLaptop from "./assets/white-laptop.png";

const App = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-start ">
      <div className="bg-[#070229] w-full flex items-center justify-between p-2">
        <div className="flex items-center">
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
            transition-colors duration-200"
          />
          <button className="px-3 py-1 hover:bg-[#273974] rounded-r-2xl">
            <FaSearch/>
          </button>
        </div>
        <div className="flex gap-10 mr-6 font-bold hover:cursor-pointer">
          <a>About</a>
          <a>Services</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default App;
