import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BasicCalculator from "./pages/BasicCalculator";
import BMICalculator from "./pages/BMICalculator";
import AgeCalculator from "./pages/AgeCalculator";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BasicCalculator" element={<BasicCalculator />} />
          <Route path="/BMICalculator" element={<BMICalculator/>} />
          <Route path="/AgeCalculator" element={<AgeCalculator/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
