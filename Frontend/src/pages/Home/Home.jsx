import React from "react";
import "./Home.css";
function Home() {
  return (
    <>
      {/* <h1 className=' bg-slate-500'>This is Home page</h1> */}
      <div className="container h-screen w-full" id="home"></div>
      <div className="container h-screen w-full" id="home1"></div>
      <div className="container h-screen w-full text-white" id="home2">
        This is Home page
      </div>
    </>
  );
}

export default Home;
