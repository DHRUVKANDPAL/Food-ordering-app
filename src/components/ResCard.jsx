import { CDN_URL ,VEG_SYMBOL} from "../utils/constants";

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
         {avgRating} <i className="ri-star-fill"></i>
       </h4>
       <h4>{costForTwo}</h4>
       
       {veg === true ? <img id="vegi"src={VEG_SYMBOL} alt="vegetarian-food-symbol"/> : ""}
     </div>
   );
 };
 export default ResCard;