import { CDN_URL } from "../utils/constants";

const RestaurentCards = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="restaurent-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h6>{cuisines.join(",")}</h6>
      <h5>{avgRating}</h5>
      <h6>{deliveryTime} mins to deliver</h6>
    </div>
  );
};

export default RestaurentCards;
