import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Project from "./pages/project/project";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
