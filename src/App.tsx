import React from 'react';
import './App.css';
import Navbar from './Navbar';
import EPL from "./pages/EPL"
import NBA from "./pages/NBA"
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
          <Route path="/nba" element={<NBA />} />
          <Route path="/epl" element={<EPL />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
