//Importing Components
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/reset.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/Portfolio"
            element={
              <>
                <Navbar />
                <Portfolio />
                <Footer />
              </>
            }
          />
          <Route
            path="/Contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
