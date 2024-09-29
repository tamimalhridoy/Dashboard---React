import React from "react";
import { FaTachometerAlt, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaBox } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold text-center mt-4 italic hidden md:block">LOGO</h1>
      <ul className="text-xl mt-5">
        <li className="flex items-center py-3 px-2 gap-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaTachometerAlt />
          <span className="hidden md:inline">Dashboard</span>
        </li>
        <li className="flex items-center py-3 px-2 gap-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaShoppingCart />
          <span className="hidden md:inline">Orders</span>
        </li>
        <li className="flex items-center py-3 px-2 gap-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaUser />
          <span className="hidden md:inline">User</span>
        </li>
        <li className="flex items-center py-3 px-2 gap-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaBox />
          <span className="hidden md:inline">Product</span>
        </li>
        <li className="flex items-center py-3 px-2 gap-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <IoMdSettings  />
          <span className="hidden md:inline">Settings </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
