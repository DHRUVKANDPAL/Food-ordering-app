import "./App.css";
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
const ResCard = () => {
  return (
  <div className="res-card">
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb1gfdoch9mdpasxkc4v" alt="food"></img>
    <h3>Pizza Point</h3>
    <h4>Cheese Pizza, Peppy Paneer, Tandoori Pizza</h4>
    <h4 id="star">4.3 <i class="ri-star-fill"></i></h4>
    <h4>38 min</h4>
    <h4><i class="ri-money-rupee-circle-line"></i>500 for two</h4>
  </div>
  );
};
function App() {
  return (
    <>
      <Header />
      <div className="wrap">
      <div className="res-container">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
      </div>
    </>
  );
}

export default App;
