import React, { useState } from "react";
import logo from '../../assets/distance-learning.png'
import "./SignUp.css";

function SignUp() {
  // State variables to manage input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("http://127.0.0.1:8000/api/register/", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name:name,
        email:email,
        contact_number:contact,
        username:username,
        password:password
      })
    })

    const resJson = await res.json()
    if(resJson.status=="ok"){
      alert("SignedUp successfully")
    }else{
      alert(resJson.error)
    }

  }

  return (
    <>
      <div className="cont h-screen">
        <h1 className="heading">Create an account</h1>
        <div className="regbox">
          <div className="icon">
            <img id="iconr" src={logo} alt="logo" />
          </div>
          <div className="name regalign">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email regalign">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contact regalign">
            <label htmlFor="contact">Phone No.</label>
            <input
              type="text"
              id="contact"
              placeholder="Enter your phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="confpass regalign">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="passw regalign">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="regpassword"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="subm">
            <button type="submit" id="regBtn" onClick={handleSubmit}>Register</button>
          </div>
          <div className="already">
            Already have an account?<a href="/login"> Login here</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
