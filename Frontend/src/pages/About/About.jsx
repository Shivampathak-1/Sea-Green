import React from "react";
import "./About.css";
import img from "../../assets/Mask_group.png";
function Home() {
  return (
    <>
      <div className="main">
        <div className="min-h-screen flex" id="home">
          <div className="w-full p-0 min-h-screen" id="home1">
            <div className="w-full p-0 min-h-screen" id="home2">
            <div className="right">
                  <img src={img} alt="" id="patch1" />
                  <div >
                  <p id="aboutus" className="text-white text-4xl md:text-8xl font-bold pt-10 md:pt-16 lg:pt-7 xl:pt-9 z-50 md:pr-0 xl:pr-9" >About Us</p>

                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
