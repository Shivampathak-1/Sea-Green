import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
function Navbar() {
  return (
    <>
      {/* <h1>Navbar</h1> */}
      <div className="h-14 flex justify-between items-center" id ='navbar'>
          <div className="left">
            {/* <span className=' ml-10 ' id='logoName'>Sea_Green</span> */}
            <img src={logo} alt="logo" className=' ml-10' />
          </div>
          <div className="right flex justify-between items-center gap-4">
            <div className='menubtn'>
            <ul className='flex items-center gap-4'>
              <a href="/"><li>Home</li></a>
              <a href="/about"><li>About</li></a>
              <a href="/services"><li>Services</li></a>
              <a href="/contact"><li>Contact</li></a>
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
