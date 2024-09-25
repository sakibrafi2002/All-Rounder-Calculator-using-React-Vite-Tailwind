import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BasicCalculator = () => {
  const appendCharacter = (char) => {
    document.getElementById("result").value += char;
  };

  const clearResult = () => {
    document.getElementById("result").value = "";
  };

  const calculateResult = () => {
    try {
      const result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch {
      document.getElementById("result").value = "Error";
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/8549415/pexels-photo-8549415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-blue-900 flex justify-center items-center h-screen relative"
    >
      <div className="bg-gray-500 p-8 rounded-lg shadow-lg border-2 border-neutral-950">
        <h1 className="text-3xl font-bold text-center mb-4 animate-pulse">
          Basic Calculator
        </h1>

        {/* Display Section */}
        <input
          type="text"
          id="result"
          className="w-full bg-gray-200 text-right p-4 mb-4 border border-gray-300 rounded-md focus:outline-none"
          placeholder="0"
          readOnly
        />

        {/* Input Section */}
        <div className="grid grid-cols-4 gap-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={clearResult}
          >
            C
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("(")}
          >
            (
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter(")")}
          >
            )
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("/")}
          >
            /
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("7")}
          >
            7
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("8")}
          >
            8
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("9")}
          >
            9
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("*")}
          >
            *
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("4")}
          >
            4
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("5")}
          >
            5
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("6")}
          >
            6
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("-")}
          >
            -
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("1")}
          >
            1
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("2")}
          >
            2
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("3")}
          >
            3
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("+")}
          >
            +
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("0")}
          >
            0
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter(".")}
          >
            .
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={calculateResult}
          >
            =
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => appendCharacter("%")}
          >
            %
          </button>
        </div>
      </div>

      {/* Back Button */}
      <NavLink
        to="/"
        className="text-white bg-blue-600 hover:bg-blue-700 hover:text-antiquewhite font-bold py-2 px-4 rounded-lg shadow-md absolute top-5 left-5 transition-transform duration-300 transform hover:scale-105"
      >
        Go Back
      </NavLink>
    </div>
  );
};

export default BasicCalculator;
