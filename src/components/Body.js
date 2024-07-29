import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    const searchTxt="kfc";
    return(
        <>
        <div className="search-container">
           <input 
           type="text" 
           className="search-input" 
           placeholder="Search" 
           value={searchTxt}
            />
            <button className="search-btn">Search</button>
        </div>
        <div className="restaurant-list">
            {restaurantList.map((restaurant)=>{
                return(
                    <RestaurantCard{...restaurant.data} key ={restaurant.data}/>
                );
            })}
        </div>
        </>
    );
     
};

export default Body;