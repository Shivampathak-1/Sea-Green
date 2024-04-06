import React from "react";
import "./Home.css";
import img from "../../assets/img1.png";
function Home() {
  return (
    <>
      <div className="min-h-screen flex" id="home">
        <div className="w-full p-0 min-h-screen" id="home1">
          <div className="w-full p-0 min-h-screen" id="home2">
            <div className="page1">
              <div className="left">
                {/* Here */}
                <img src={img} alt="patch" className="patch" />
                <span className="text1">Discovering the</span>
                <span className="text2">Depths</span>
                <span className="text3">Unveiling the Secrets of Plastic Pollution in Our Oceans</span>
                {/* <div className="button_start">
                  <button className="button center">Let's Start</button>
                </div> */}
              </div>
              <div className="right"></div>
              <div className="button_start">
                <button className="button center">Let's Start</button>
              </div>
            </div>
            <div className="page2">
            <iframe title="hackskill" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=0fb091d3-fc98-4cd5-a98c-6b9784037978&autoAuth=true&ctid=2c5bdaf4-8ff2-4bd9-bd54-7c50ab219590" frameborder="0" allowFullScreen="true"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
