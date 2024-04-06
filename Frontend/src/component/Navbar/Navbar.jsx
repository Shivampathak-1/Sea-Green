import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
      {/* <h1>Navbar</h1> */}
      <div className="container h-14 flex justify-between items-center" id ='navbar'>
          <div className="left">
            <span className=' ml-10 ' id='logoName'>SeaGreen</span>
          </div>
          <div className="right flex justify-between items-center gap-4">
            <div>
            <ul className='flex items-center gap-4'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>

            </div>
            <div className=' mr-10 rounded'>
              <img src="https://toppng.com/uploads/preview/file-svg-profile-icon-vector-11562942678pprjdh47a8.png" className=' h-10 rounded-2xl' alt="Profile Image" />
            </div>
          </div>
      </div>
    </>
  )
}

export default Navbar
