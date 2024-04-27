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
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          RES_IMG_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;
