import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const restaurantList = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(restaurantList);
    setFilteredRestaurant(restaurantList);
  };

  const updateFilterList = () => {
    const filterList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.1
    );
    setFilteredRestaurant(filterList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button onClick={() => {
            const filteredList = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredList);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => updateFilterList()}>
          Top Rated Restaurant
        </button>
        <button className="filter-btn" onClick={() => {
            setFilteredRestaurant(listOfRestaurants);
            setSearchText('');
        }}>
          Reset
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map(({ info }) => (
          <RestaurantCard key={info?.id} resData={info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
