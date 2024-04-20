import ShimmerCard from "./Shimmer-card";
const Shimmer = () => {
  return(
   <div className="wrap">
    <div className="form-container">
      <div className="search">
        <input type="text" placeholder="Search for Restaurants ..." />
        <button id="search-btn">
          <i className="ri-search-line"></i>
        </button>
      </div>
      <div className="filter">
        <button id="filter-btn">
          <i className="ri-filter-line"></i>
        </button>
      </div>
    </div>
    <div className="res-container">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  </div>
  )
};
export default Shimmer;
