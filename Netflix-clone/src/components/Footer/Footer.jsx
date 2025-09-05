import React from 'react'


// Import Material UI icons

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
     
        <div className="footer-icons">
          <FacebookOutlinedIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </div>

        <div className="footer-data">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li> 
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>  
            <li>Media Center</li>
            <li>Contact Us</li>
            <li>Privacy</li>
           
            <li>Speed Test</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
