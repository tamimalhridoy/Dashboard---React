import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashbord from "./Dashbord";
import ThemeContextProvider from "./context/ThemeContextProvider";

const Home = () => {
  return (
    <ThemeContextProvider>
      <div className="flex">
        <Sidebar />
        <div
          className="grow ml-16 md:ml-64 h-full lg:h-full bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white"
        >
          <Navbar />
          <div>
            <Dashbord />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default Home;
