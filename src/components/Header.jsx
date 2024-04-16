const Header = () => {
   return (
     <div className="header-container">
       <div className="logo">
         <img src="./yummy-high-resolution-logo-transparent.png" alt="logo" />
       </div>
       <div>
         <ul className="nav-items">
           <li>HOME</li>
           <li>ABOUT</li>
           <li>CONTACT </li>
           <li>
             <i class="ri-shopping-cart-fill"></i>
           </li>
         </ul>
       </div>
     </div>
   );
 };
 export default Header;