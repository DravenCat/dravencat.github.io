import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Project from "./pages/project/project";
import Contact from "./pages/contact/contact";
import TechStack from "./pages/techStack/techStack";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/profile_page" element={<Home />} />
        <Route path="/profile_page/techStack" element={<TechStack />} />
        <Route path="/profile_page/project" element={<Project />} />
        <Route path="/profile_page/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
