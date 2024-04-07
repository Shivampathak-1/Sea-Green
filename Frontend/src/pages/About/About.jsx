import React from "react";
import "./About.css";
import img from "../../assets/Mask_group.png";
function Home() {
  const people = [
    {
      name: 'xyz',
      role: '',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]

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
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Meet our Team
                  </h2>
                </div>
                <ul
                  role="list"
                  className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <div className="flex items-center gap-x-6">
                        <img
                          className="h-16 w-16 rounded-full"
                          src={person.imageUrl}
                          alt=""
                        />
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                            {person.name}
                          </h3>
                          <p className="text-sm font-semibold leading-6 text-indigo-600">
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
