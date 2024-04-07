import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from './pages/Home/Home'
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// import Services from "./pages/Services/Services";
import Footer from "./component/Footer/Footer";
import InsertionPage from "./pages/Insertion/InsertionPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path="/services" element={<Services />}></Route> */}
          <Route path="/let-start" element={<InsertionPage />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
          <Route path="/let-start" element={<InsertionPage/>}></Route>

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
