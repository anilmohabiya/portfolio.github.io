import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  

} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/a.png" alt="" />
              </div>
              <p>
              Looking for Entry-Level Position in Software Company
               to utilize my strong technical
               expertise and academic training for betterment of my employer.
               
              </p>
              <ul className="contactCircles">
                <li>
                <a href="https://www.facebook.com/anil.mohabiya"><FaFacebookF className="contactIcon" /></a> 
                </li>
          
                <li>
                <a href="https://www.instagram.com/anil_mohabiya/"><FaInstagram className="contactIcon" /></a>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
