import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
   const { resData } = props;
   const {
     cloudinaryImageId,
     name,
     cuisines,
     costForTwo,
     avgRating,
     deliveryTime,
     veg,
   } = resData?.info;
   return (
     <div className="res-card">
       <img
         src={CDN_URL
            +
           cloudinaryImageId
         }
         alt="food"
       ></img>
 
       <h3>{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
       <h4 id="star">
         {avgRating} <i class="ri-star-fill"></i>
       </h4>
       <h4>{costForTwo}</h4>
       {veg === true ? <h4 id="veg"> Veg</h4> : ""}
     </div>
   );
 };
 export default ResCard;