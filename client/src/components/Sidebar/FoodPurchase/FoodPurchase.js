import "./foodpurchase.css";
import food1 from "../../../assets/images/bowl1.jpg";
import food2 from "../../../assets/images/bowl2.jpg";
import FoodPurchaseItem from "./FoodPurchaseItem/FoodPurchaseItem";
import { AirportShuttle } from "@material-ui/icons";
import OrderAmount from "../OrderAmount/OrderAmount";

const foodList = [
  {
    id: 1,
    image: food1,
    title: "Beach BBQBurger",
    price: 140.99,
  },
  {
    id: 2,
    image: food2,
    title: "Beach BBQBurger",
    price: 14.99,
  },
  {
    id: 3,
    image: food1,
    title: "Beach BBQBurger",
    price: 14.99,
  },
  {
    id: 4,
    image: food1,
    title: "Beach BBQBurger",
    price: 14.29,
  },
];

const FoodPurchase = () => {
  return (
    <div className="food-purchase">
      <FoodPurchaseItem foodList={foodList} />
      <div className="delivery">
        <div className="deliveryTitleImage">
          <div className="deliveryImageContainer">
            <AirportShuttle className="deliveryIcon" />
          </div>
          <span className="deliveryTitle">Delivery</span>
        </div>
        <div className="deliveryPrice">$0.00</div>
      </div>

      <OrderAmount foodList={foodList} />
    </div>
  );
};

export default FoodPurchase;
