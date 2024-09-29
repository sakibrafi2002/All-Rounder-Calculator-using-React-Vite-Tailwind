import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="bg-gray-200 flex justify-center items-center h-screen background-image"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1600909/pexels-photo-1600909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-300 max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-700 animate-pulse">
            <u className="inline-block animation fadeInOut">
              All-Rounder Calculator
            </u>
          </h1>
          <div className="text-center space-y-4">
            <NavLink
              to="/BasicCalculator"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out" 
            >
              <h2 className="text-xl font-bold">1. Basic Calculator</h2>
            </NavLink>
            <NavLink
              to="/BMICalculator"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              <h2 className="text-xl font-bold">2. BMI Calculator</h2>
            </NavLink>
            <NavLink
              to="/AgeCalculator"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              <h2 className="text-xl font-bold">3. Age Calculator</h2>
            </NavLink>
          </div>
          {/* Footer Section */}
          <footer className="mt-8 text-center text-gray-600">
            <p>&copy; 2024 All-Rounder Calculator. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
