import restaurantList from "../utils/restaurantAPI";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(restaurantList);
  const updateFilterList = () => {
    const filterList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.1
    );
    setListOfRestaurant(filterList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => updateFilterList()}>
          Top Rated Restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => setListOfRestaurant(restaurantList)}>
          Reset
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map(({ info }) => (
          <RestaurantCard key={info?.id} resData={info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
