import { RES_IMG_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRatingString,
    sla: { slaString },
  } = resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={RES_IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4 className="py-2">{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
