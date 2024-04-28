import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_DETAILS_API } from "./../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_DETAILS_API + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards);
  };
  return resInfo;
};
export default useRestaurantMenu;
