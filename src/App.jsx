import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="top">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}
export default App;
