import React, { useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import logo from '../../assets/distance-learning.png'

function Login() {
  // State variables to manage input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("http://127.0.0.1:8000/api/login/", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })

    const resJson = await res.json()
    if(resJson.status=="ok"){
      alert("LoggedIn successfully")
      window.localStorage.setItem("user_id",resJson.user_id)
      window.localStorage.setItem("isLogged",true)
      navigate("/let-start")
    }else{
      alert(resJson.error)
    }

  }


  return (
    <>
      <div className="containerr h-screen">
        <h1 id='heading'>Login Here</h1>
        <div className="box">
            <div className="icon">
                <img id='iconl' src={logo} alt="logo" />
            </div>
            <div className="userna align">
                <label htmlFor="username">Email</label>
                <input 
                  type="email" 
                  id='username' 
                  placeholder='UserName'
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="passwor align">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id='password' 
                  placeholder='Password'
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="remember">
                <div className="remMe">
                    <input type="checkbox" name="check" id="checked"/>
                    <label className='fontsz' htmlFor="checked">Remember Me</label>
                </div>
                <div className="forgot">
                    <a href="/forgotpassword"><span>Forgot Password?</span></a>
                </div>
            </div>
            <div className="logBut">
                <button type='submit' id='button' onClick={handleSubmit}>Login</button>
            </div>
            <div className="reg">
                <span className='fontsz'>Don't you have an account?<a href="/signup" className='regis'>Register Now!</a></span>
            </div>
            <div className="otherReG">
                <h2>_________ or _________</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
