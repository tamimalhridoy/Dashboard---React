import React, { useContext } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeCotext } from "./context/ThemeContextProvider";

const Navbar = ({toggleTheme}) => {
  const { theme, toggleTheme } = useContext(ThemeCotext);

  return (
    <div className="bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <h1>Dashboard</h1>
      {/* <button onClick={toggleTheme} className="text-2xl text-dark">
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button> */}
      <div>
        {theme === "light" ? (
          <button
            onClick={toggleTheme}
            className="text-2xl bg-slate-200 w-8 h-8 flex justify-center items-center rounded-full"
          >
            <MdDarkMode />
          </button>
        ) : (
          <button
            onClick={toggleTheme}
            className="text-2xl bg-slate-700 text-white w-8 h-8 flex justify-center items-center rounded-full"
          >
            <MdLightMode />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
