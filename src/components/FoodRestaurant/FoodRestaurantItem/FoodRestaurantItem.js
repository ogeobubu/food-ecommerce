import "./foodRestaurantItem.css";
import { StarBorder } from "@material-ui/icons";

const FoodRestaurantItem = ({ foodData }) => {
  return (
    <>
      {foodData.map((item) => (
        <div key={item.id} className="foodRestaurantItem">
          <div className="foodRestaurantItemImageContainer">
            <img className="foodRestaurantItemImage" src={item.image} alt="" />
            <div className="duration">{item.duration}</div>
          </div>
          <h3 className="foodRestaurantTitle">{item.name}</h3>
          <div className="foodRestaurantDetails">
            <div className="ratings">
              <StarBorder className="ratingsIcon" /> {item.rating}
            </div>
            <span className="location">{item.location}</span>
            <span className="foodRestaurantCategory">{item.category}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default FoodRestaurantItem;
