import Navbar from "./Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Body/Home";
import About from "./Body/About";
import Review from "./Body/Review";
import "aos/dist/aos.css";

function App() {
  

  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Review />} />
      </Routes>
    </BrowserRouter>
      )
}

export default App