import ResCard from "./ResCard";
import ResList from "../utils/mockData";
const Body = () => {
   return (
     <div className="wrap">
       <div className="form-container">
         <form className="search">
           <input type="text" placeholder="Search for Restaurants ..." />
           <button>
             <i class="ri-search-line"></i>
           </button>
         </form>
       </div>
       <div className="res-container">
         {ResList.map((restaurant) => {
           return <ResCard key={restaurant.info.id} resData={restaurant} />;
         })}
       </div>
     </div>
   );
 };
 export default Body;