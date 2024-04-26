import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";
const Header = () => {
   const[btn_name,setbtn_name]=useState("Login");
  return (
    <div className="header-container">
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div>
        <ul className="nav-items">
          <li><Link to="/" className="nav-link" aria-label="nav-link">HOME</Link></li>
          <li><Link to="/about" className="nav-link" aria-label="nav-link">ABOUT</Link></li>
          <li><Link to="/contact" className="nav-link" aria-label="nav-link">CONTACT</Link> </li>
          <li>
          <Link to="/cart" className="nav-link" aria-label="nav-link"><i className="ri-shopping-cart-fill"></i></Link>
          </li>
          <li>
            <button id="login-btn" aria-label="nav-login-logout-button" onClick={()=>{
               btn_name==="Login"?setbtn_name("Logout"):setbtn_name("Login");
            }}>
              {btn_name}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

