import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(0);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } = resInfo?.[2]?.card?.card?.info;
  const itemCategories =
    resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) =>
      item?.card?.card?.["@type"]?.includes("ItemCategory")
    );
  const itemCards =
    resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card
      ?.itemCards ||
    resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card
      ?.itemCards;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {itemCategories.map((category, index) => (
        <RestaurantCategory
          catData={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showItems}
          setShowItems={() => {
            setShowItems(index === showItems ? null : index);
          }}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
