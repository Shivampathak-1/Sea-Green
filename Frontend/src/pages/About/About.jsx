import React from "react";
import "./About.css";
import img from "../../assets/Mask_group.png";
import imgNik from "../../assets/nikhilK.jpg";
import imgMan from "../../assets/my.jpg";
import imgshiv from "../../assets/shiv.jpg";
import imgchi from "../../assets/chirand.jpg";

import imgnd from "../../assets/nd.jpg";

function Home() {
  const people = [
    {
      name: "Manasvi Gaur",
      role: "Frontend Developer",
       image: imgMan,
    },
    {
      name: "Nikhil Kumar",
      role: "Backend Developer",
      image:
        imgNik,
    },
    {
      name: "Shivam Kumar",
      role: "Frontend Developer",
      image:
        imgshiv,
    },
    {
      name: "Nikhil Deshmukh",
      role: "UI/UX ",
      image:
        imgnd,
    },
    {
      name: "Chirag Verma",
      role: "Data Analyst",
      image:
        imgchi,
    },
  ];

  return (
    <>
      <div className="main">
        <div className="min-h-screen flex" id="home">
          <div className="w-full p-0 min-h-screen" id="home1">
            <div className="w-full p-0 min-h-screen" id="home2">
              <div style={{ height:"41vw"}}>
              <div className="right">
                  <img src={img} alt="" id="patch1" />
                  <div >
                    <p id="aboutus" className="text-white text-4xl md:text-8xl font-bold pt-10 md:pt-16 lg:pt-7 xl:pt-9 z-50 md:pr-0 xl:pr-9" >About Us</p>

                  </div>
                </div>
                </div>
              <div className=" py-24 sm:py-32 ">
              <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Meet our Team
                  </h2>
                </div>
                <ul
                  role="list"
                  className="  grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <div className=" pagemm flex items-center gap-x-6">
                        <img
                          className="h-16 w-16 rounded-full "
                          src={person.image}
                          alt=""
                        />
                        <div>
                          <h3 className="text-base font-bold leading-8 tracking-tight text-white">
                            {person.name}
                          </h3>
                          <p className="text-sm font-semibold leading-6 text-white">
                            {person.role}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
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
