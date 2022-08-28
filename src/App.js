import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
import Pricing from "./Components/Pricing";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
