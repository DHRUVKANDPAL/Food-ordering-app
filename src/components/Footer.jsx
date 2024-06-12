import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Footer = () => {
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false){
    {console.log("Rerendering")}
    return(
      <div className="Footer tw-z-50 dark:tw-bg-[#832a2afa]" style={{backgroundColor:"rgb(51, 51, 51)",color:"white"}}>
          <h4 >🔴 You are offline.  Waiting for Intenet Connection . . . </h4>
      </div>
    )
  }
  return (
    <div className="Footer tw-z-50 dark:tw-bg-[#832a2afa] dark:tw-text-zinc-100">
      <div className="copy">
        <i className="ri-copyright-line dark:tw-text-zinc-100"></i>Dhruv Kandpal | All Rights Reserved
      </div>
      <div className="icons ">
        <Link
          to="https://www.linkedin.com/in/dhruv-kandpal-1b231a249/"
          className="footer-icon-link" aria-label="Linking LinkedIn Profile"
        >
          <i className="ri-linkedin-box-fill dark:tw-text-zinc-100"></i>
        </Link>
        <Link
          className="footer-icon-link"
          to="/contact" aria-label="Linking Github"
        >
          <i className="ri-github-fill dark:tw-text-zinc-100"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
