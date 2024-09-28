import React from "react";
import { FaTachometerAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
      <h1 className="text-2xl font-bold hidden md:block">LOGO</h1>
      <ul className="text-xl mt-5">
        <li className="flex items-center py-3 px-2 gap-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaTachometerAlt />
          <span className="hidden md:inline">Dashboard</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
