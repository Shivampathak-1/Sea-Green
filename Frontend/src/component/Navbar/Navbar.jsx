import React from 'react'
import './Navbar.css'
import logo from '../../assets/logoc.jpg'
import profile from '../../assets/profile.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      {/* <h1>Navbar</h1> */}
      <div className="h-14 flex justify-between items-center" id ='navbar'>
          <div className="left">
            <span className=' ml-10 ' id='logoName'>SeaGreen</span>
            {/* <img src={logo} alt="logo" className=' ml-10 h-11 w-11 rounded-2xl' /> */}
          </div>
          <div className="right flex justify-between items-center gap-16">
            <div className='menubtn'>
            <ul className='flex items-center gap-16 navull'>
              <a href="/"><li className='navlink'>Home</li></a>
              <a href="/about"><li className='navlink'>About</li></a>
              <a href="/services"><li className='navlink'>Services</li></a>
              <a href="/contact"><li className='navlink'>Contact</li></a>
            </ul>

            </div>
            <Link to='/login' className=' mr-20 rounded'>
              <img src={profile} className=' h-10 rounded-2xl' alt="Profile Image" />
            </Link>
          </div>
      </div>
    </>
  )
}

export default Navbar
