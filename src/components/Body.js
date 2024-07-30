import { restaurantList } from "../constants";//name import 
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, restaurants){
  const filterData = restaurants.filter((restaurant)=> 
    restaurant.data.name.include(searchInput)
);
return filterData;
}
const Body = () => {
    const searchTxt= "kfc";// local variable in js 


    const[restaurants, setRestaurants] = useState(restaurantList);

     //searchText is a local state variable in react 
    const[searchInput, setSearchInput] = useState("");
    // To create state variables ; usestate returns =[variable name, function to update the variable ](this 'kfc" here is default value )

    return(
        <>
        <div className="search-container">
           <input 
           type="text" 
           className="search-input" 
           placeholder="Search" 
           value={searchInput}
           onChange = {(e) =>{
            //e.target.value => whatever you write in input 
            setSearchInput(e.target.value);
           }}
            />
    
            <button 
            className="search-btn" 
            onClick={() => {
               //need to filter the data  & update the state - restaurants 
               const data = filterData(searchInput, restaurants);
               setRestaurants(data);
            }}
            >
                Search   
            </button>
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