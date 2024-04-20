import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { ten, eleven, twelve } from "../utils/api/a";
import { first, second, third } from "../utils/api/d";
import { five, four, six } from "../utils/api/b";
import { nine, seven, eight } from "../utils/api/c";
const Resmenu = () => {
  const [ResInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    console.log("ldskfjskf");
    fetchmenudata();
  }, []);

  const fetchmenudata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.795688&lng=82.194431&restaurantId=" +
        resId
    );
    if (resId === "866351") {
      console.log(first)
      setResInfo(first);
    }
    else if (resId == "553611") setResInfo(second);
    else if (resId == "702996") setResInfo(third);
    else if (resId == "177301") setResInfo(four);
    else if (resId == "742193") setResInfo(six);
    else if (resId == "177284") setResInfo(five);
    else if (resId == "177308") setResInfo(seven);
    else if (resId == "177302") setResInfo(eight);
    else if (resId == "126282") setResInfo(nine);
    else if (resId == "127181") setResInfo(ten);
    else if (resId == "291882") setResInfo(eleven);
    else if (resId == "555827") setResInfo(twelve);
    else {
      setResInfo(null);
    }
  };
  if (ResInfo === null || ResInfo?.data?.cards[1]?.card?.card===undefined) return <h1>Shimmer</h1>;
  const {itemCards}=ResInfo?.data?.cards[1]?.card?.card;
  const {
    name: Resname,
    avgRating: ResavgRating,
    totalRatingsString: RestotalRatingsString,
    costForTwoMessage: RescostForTwoMessage,
    cuisines: Rescuisines,
    cloudinaryImageId,
  } = ResInfo?.data?.cards[0]?.card?.card?.info;
  return (
    <div className="total-res-area">
      <div className="menu-wrapper">
      <div className="res-info">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" +
            cloudinaryImageId
          }
          alt=""
        />
        <div className="content-res-resmenu">
          <h1>{Resname.toUpperCase()}</h1>
          <h2>{ResavgRating}</h2>
          <h2>{RestotalRatingsString}</h2>
          <h2>{RescostForTwoMessage}</h2>
          <h2>{Rescuisines.join(",")}</h2>
        </div>
      </div>
      <button id="pure-veg">Pure Veg</button>
      <div className="menu-res">
        {
          itemCards.map((items)=>{
           return (
            <div key={Resname+items?.card?.info?.description+ResavgRating} className="cover">
            <hr />
            <div className="res-menu-item-card">
              
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                items?.card?.info?.imageId
              }
              alt=""
            />
            <div className="res-menu-item-desc">
              <h1 >{items?.card?.info?.name}</h1>
              <h2 id="hcat">{items?.card?.info?.category}</h2>
              <h2 id="hdesc">{items?.card?.info?.description}</h2>
            </div>
            <div className="res-menu-item-price">
              <h2>&#8377;{items?.card?.info?.price}</h2>
              <h2>{items?.card?.info?.ratings?.aggregatedRating?.rating}<i className="ri-star-s-fill"></i></h2>
              {items?.card?.info?.isVeg==true?<h2>Pure Veg 🫑🍅</h2>:""}
            </div>
          </div>
          </div>
           )
          })
        }
      </div>
    </div>
    </div>
  );
};
export default Resmenu;
