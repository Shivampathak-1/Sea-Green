import React from "react";
import img from "../../assets/img1.png";
import img2 from '../../assets/img3.png';
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
            <div className="discover">
              <a href="/">Discover</a>
            </div>
            <div className="page2">
              <iframe title="hackskill" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=0fb091d3-fc98-4cd5-a98c-6b9784037978&autoAuth=true&ctid=2c5bdaf4-8ff2-4bd9-bd54-7c50ab219590" frameborder="0" allowFullScreen="true"></iframe>
            <div className="page2 mt-36">
            <img src={img2} alt="patch2" className="patch2" />
            <div className="button_start">
              <button className="button center">Let's Start</button>
            </div>
          </div>
        </div>
        <div className="page2 h-screen">
          <p>Real Time between Year vs Marine plastic pollution</p>
          <iframe
            title="hackskill"
            src="https://app.powerbi.com/view?r=eyJrIjoiYmQ0OThlNzAtNTQ5OS00MzQ2LWExY2UtOGFhZGZkNDI1YTdkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div className="page3 h-screen"></div>
        <div className="page4 h-screen"></div>
      </div>
    </>
  );
}

export default Home;
