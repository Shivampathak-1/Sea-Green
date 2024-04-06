import React from "react";
import img from "../../assets/img1.png";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="main">
        <div className="page1 h-screen">
          <div className="left">
            <img src={img} alt="logo" className="patch" />
            <span className="text1">Discovering the</span>
            <span className="text2">Depths</span>
            <span className="text3">
              Unveiling the Secrets of Plastic Pollution in Our Oceans
            </span>
          </div>
        </div>
        <div className="page2 h-screen"></div>
      </div>
    </>
  );
}

export default Home;
