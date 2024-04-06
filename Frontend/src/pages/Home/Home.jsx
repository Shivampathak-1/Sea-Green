import React from "react";
import "./Home.css";
import img from "../../assets/img1.png";
function Home() {
  return (
    <>
      {/* <h1 className=' bg-slate-500'>This is Home page</h1> */}
      <div className="main">
        <div className="min-h-screen flex" id="home">
          <div className="w-full p-0 min-h-screen" id="home1">
            <div className="w-full p-0 min-h-screen" id="home2">
              <div className="page1">
                <div className="left h-96">
                    <h1>Welcome to our website!</h1>
                </div>
                <div className="right"></div>
                <div className="button_start">
                  <button className="button center">Let's Start</button>
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
