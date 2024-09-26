import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    let h = parseFloat(height);
    let w = parseFloat(weight);

    if (!isNaN(h) && !isNaN(w) && h > 0 && w > 0) {
      if (heightUnit === "ft") {
        h *= 30.48;
      }
      if (weightUnit === "lb") {
        w *= 0.453592;
      }

      const bmi = calculateBMI(h, w);
      const category = getBMICategory(bmi);

      setResult(`Your BMI is ${bmi.toFixed(2)}. You are ${category}.`);
    } else {
      setResult("Please enter valid height and weight.");
    }
  };

  const calculateBMI = (h, w) => {
    return w / Math.pow(h / 100, 2);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 24.9 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center background-image bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-green-500">
        <div className="bg-blue-200 rounded-full p-4 mb-4">
          <h1 className="text-4xl font-bold mb-0 text-center text-blue-600 uppercase tracking-wide animate-pulse">
            BMI Calculator
          </h1>
        </div>

        {/* Height Input */}
        <div className="mb-4">
          <label htmlFor="height" className="block mb-2">
            Height:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="height"
              className="form-input flex-1 mr-2"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <select
              id="heightUnit"
              className="form-select w-24"
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
            >
              <option value="cm">cm</option>
              <option value="ft">ft</option>
            </select>
          </div>
        </div>

        {/* Weight Input */}
        <div className="mb-4">
          <label htmlFor="weight" className="block mb-2">
            Weight:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="weight"
              className="form-input flex-1 mr-2"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <select
              id="weightUnit"
              className="form-select w-24"
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
            >
              <option value="kg">kg</option>
              <option value="lb">lb</option>
            </select>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full mb-4 hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Calculate BMI
        </button>

        {/* Result */}
        <div id="result" className="text-center">
          {result && <p>{result}</p>}
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

export default BMICalculator;
