import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    if (!dob || !currentDate) {
      alert("Please fill in both Date of Birth and Current Date.");
      return;
    }

    const dobDate = new Date(dob);
    const now = new Date(currentDate);

    let yearDiff = now.getFullYear() - dobDate.getFullYear();
    let monthDiff = now.getMonth() - dobDate.getMonth();
    let dateDiff = now.getDate() - dobDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
      yearDiff--;
      monthDiff += 12;
    }

    if (dateDiff < 0) {
      dateDiff += 30;
      monthDiff--;
    }

    if (yearDiff < 0) {
      setAge("Invalid Date");
    } else {
      setAge(
        `Your current age is ${yearDiff} years, ${monthDiff} months, and ${dateDiff} days.`
      );
    }
  };

  const clearDates = () => {
    setDob("");
    setCurrentDate("");
    setAge("");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1000589/pexels-photo-1000589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="border border-green-500 p-8 rounded-lg shadow-md bg-white">
        <h1 className="text-3xl font-semibold text-center mb-8 text-green-700">
          Age Calculator
        </h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="inputDob" className="text-gray-700">
            Enter your Date of Birth
          </label>
          <input
            id="inputDob"
            type="date"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="cdate" className="text-gray-700">
            Current Date
          </label>
          <input
            id="cdate"
            type="date"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={calculateAge}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"
          >
            Calculate
          </button>
          <button
            type="button"
            onClick={clearDates}
            className="bg-gray-500 text-white font-semibold px-4 py-2 rounded"
          >
            Clear
          </button>
        </div>
        <div id="currentAge" className="text-center mt-4 text-xl">
          {age}
        </div>
      </div>

      {/* Back Button */}
      <NavLink
        to="#"
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 back-button bg-blue-500 text-white p-2 rounded-lg"
      >
        Go Back
      </NavLink>
    </div>
  );
}

export default AgeCalculator;
