import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const Aboutus = () => {
//   return (
//     <div className="about-wrapper">
//       <h1>About us</h1>
//       <div className="about-container">
//         <User name="Dhruv" displayed="function" />
//       </div>
//       <div className="about-container">
//         <UserClass name="Dhruv" displayed="class"/>
//       </div>
//     </div>
//   );
// };
class Aboutus extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent ctor");
  }
  componentDidMount(){
    console.log("parent mounted");
  }
  render() {
    console.log("parent rendered");
    return (
      <div className="about-wrapper">
        <h1>About us</h1>
        
        <div className="about-container">
          <UserClass name="First" displayed="class" />
        </div>
        <div className="about-container">
          <UserClass name="Second " displayed="class" />
        </div>
        <div className="about-container">
          <UserClass name="Third" displayed="class" />
        </div>
        <div className="about-container">
          <UserClass name="Fourth" displayed="class" />
        </div>
      </div>
    );
  }
}
export default Aboutus;
