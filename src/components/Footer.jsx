import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Footer = () => {
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false){
    return(
      <div className="Footer" style={{backgroundColor:"rgb(51, 51, 51)",color:"white"}}>
          <h4 >🔴 You are offline.  Waiting for Intenet Connection . . . </h4>
      </div>
    )
  }
  return (
    <div className="Footer">
      <div className="copy">
        <i className="ri-copyright-line"></i>Dhruv Kandpal | All Rights Reserved
      </div>
      <div className="icons">
        <Link
          to="https://www.linkedin.com/in/dhruv-kandpal-1b231a249/"
          className="footer-icon-link" aria-label="Linking LinkedIn Profile"
        >
          <i className="ri-linkedin-box-fill"></i>
        </Link>
        <Link
          className="footer-icon-link"
          to="https://github.com/DHRUVKANDPAL/Food-ordering-app" aria-label="Linking Github"
        >
          <i className="ri-github-fill"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
