import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from './pages/Home/Home'
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./component/Footer/Footer";
import InsertionPage from "./pages/Insertion/InsertionPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/let-start" element={<InsertionPage />} />
          <Route path="/services" element={<InsertionPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
