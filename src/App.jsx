import React from "react";
import Home from "./routes/Home.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Courses from "./routes/Courses";
import Immersion from "./routes/Immersion";
import Espanol from "./components/listacursos/Espanol.jsx";
import Listacursos from "./components/listacursos/Listacursos.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Courses" element={<Courses />}>
          <Route path="espanol" element={<Espanol />} />
        </Route>
        <Route path="Immersion" element={<Immersion />} />
      </Routes>
    </div>
  );
}

export default App;
