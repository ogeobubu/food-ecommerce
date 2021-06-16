import "./foodRestaurant.css";
import FoodRestaurantItem from "./FoodRestaurantItem/FoodRestaurantItem";
import bowl1 from "../../assets/images/bowl1.jpg";
import bowl2 from "../../assets/images/bowl2.jpg";

const foodData = [
  {
    id: 1,
    image: bowl1,
    duration: "25-30 min",
    name: "Bagel Story",
    rating: 4.7,
    location: "Deli",
    category: "Bagels",
  },
  {
    id: 2,
    image: bowl2,
    duration: "30-35 min",
    name: "The Estaminet",
    rating: 4.5,
    location: "Cafes",
    category: "Creperies",
  },
  {
    id: 3,
    image: bowl1,
    duration: "40-60 min",
    name: "La Paris Dakar",
    rating: 4.6,
    location: "Creperies",
    category: "Sandwich",
  },
];

const FoodRestaurant = () => {
  return (
    <div className="foodRestaurant">
      <FoodRestaurantItem foodData={foodData} />
    </div>
  );
};

export default FoodRestaurant;
