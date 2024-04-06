import React from 'react';
import './Footer.css'; // Import CSS file for styling
import img from "../Images/HackSyncHacksync logo.png"
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <img src={img} alt="Company Logo" style={{"width":"70%" ,"marginTop": "20px"}}/>
          </div>
          <div className="footer-right">
            <div>
              <h3>Quick Links</h3>
              <ul className="footer-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-left">
            <div>
              <h3>More Links</h3>
              <ul className="footer-menu">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 sea_free.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
