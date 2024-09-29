import React from "react";
import Card from "./Card";
import { FaBox, FaCog, FaShoppingCart, FaUser } from "react-icons/fa";
import { dataLine, dataBar } from "./CharData";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Dashbord = () => {
  return (
    <div className="grow p-8">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <Card icon={<FaShoppingCart />} title="Orders" value="140" />
        <Card icon={<FaBox />} title="Products" value="120" />
        <Card icon={<FaUser />} title="Users" value="30" />
        <Card icon={<FaCog />} title="Setting" value="11" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Sales Data</h3>
          <Line data={dataLine} />
        </div>
        <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Products Data</h3>
          <Bar data={dataBar} />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
