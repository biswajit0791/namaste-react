import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const restaurantList =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restaurantList);
    setFilteredRestaurant(restaurantList);
  };

  const updateFilterList = () => {
    const filterList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.1
    );
    setFilteredRestaurant(filterList);
  };
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.{" "}
      </h1>
    );

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}>
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 m-4 bg-blue-100 rounded-lg"
            onClick={() => updateFilterList()}>
            Top Rated Restaurant
          </button>
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurants);
              setSearchText("");
            }}>
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-wrap rounded-lg">
        {filteredRestaurants.map(({ info }) => (
          <Link key={info?.id} to={"restaurant/" + info.id}>
            {info?.veg ? (
              <RestaurantCardVeg resData={info} />
            ) : (
              <RestaurantCard resData={info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
