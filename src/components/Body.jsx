import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import { SWIGGY_API, SWIGGY_API3 } from "../utils/constants";
import Shimmer from "./Shimmer";
import ResList from "../utils/mockData";
import { Link } from "react-router-dom";
let flag = false;
const Body = () => {
  const [List, setList] = useState([]);
  const [orig, setorig] = useState([]);
  const [SearchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async() => {
    // const data = await fetch(SWIGGY_API3);
    // const json = await data.json();
    // console.log(json);
      // setList(ResList);
      // setorig(ResList);
      await setTimeout(() => {
        setList(ResList);
        setorig(ResList);
      }, 500);
  };

  const handleScroll = () => {
    
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight-300
    )
      return;
    
    setList([...List,...List]);
  };
 
  useEffect(() => {   
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return orig.length === 0 ? (
    <Shimmer />
  ) : (
    
    <div className="wrap">
      <div className="form-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search for Restaurants ..."
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              
            }}
          onKeyDown={(e)=>{
            
            if(e.key=="Enter"){
              const filteredList = orig.filter((res) => {
                return (
                  res.info.name
                    .toLowerCase()
                    .includes(SearchText.toLowerCase().trim()) ||
                  res.info.cuisines
                    .join("")
                    .toLowerCase()
                    .includes(SearchText.toLowerCase().trim())
                );
              });
              setList(filteredList);
            }
          }}/>
          <button
            id="search-btn" aria-label="search"
            onClick={() => {
              const filteredList = orig.filter((res) => {
                return (
                  res.info.name
                    .toLowerCase()
                    .includes(SearchText.toLowerCase().trim()) ||
                  res.info.cuisines
                    .join("")
                    .toLowerCase()
                    .includes(SearchText.toLowerCase().trim())
                );
              });
              setList(filteredList);
            }}
          >
            <i className="ri-search-line"></i>
          </button>
        </div>
        <div className="filter">
          <button
            id="filter-btn" aria-label="filter"
            onClick={() => {
              // console.log(flag);
              const filteredList = orig.filter((res) => {
                if (!flag) {
                  return res.info.avgRating >= 4.5;
                } else {
                  return res;
                }
              });
              setList(filteredList);
              flag = !flag;
              // console.log(flag);
            }}
          >
            <i className="ri-filter-line"></i>
          </button>
        </div>
      </div>
      <div className="res-container">
        {List.map((restaurant,i) => {
          return <Link key={restaurant.info.id+i} className="menulink" to={"/restaurant/"+restaurant.info.id}  aria-label="Linking Restraunt cards"><ResCard  resData={restaurant} /></Link>;
        })}
      </div>
    </div>
  );
};
export default Body;
