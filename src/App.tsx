import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Viz from "./pages/Viz"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viz" element={<Viz />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
