import "./dashboard.css";
import TopBar from "../../components/TopBar/TopBar";
import Promo from "../../components/Promo/Promo";
import RestaurantDelivery from "../../components/RestaurantDelivery/RestaurantDelivery";
import Category from "../../components/Category/Category";
import FoodRestaurant from "../../components/FoodRestaurant/FoodRestaurant";

const Dashboard = ({ open, setOpen }) => {
  return (
    <div className="dashboard">
      <TopBar open={open} setOpen={setOpen} />
      <Promo />
      <RestaurantDelivery />
      <Category />
      <FoodRestaurant />
    </div>
  );
};

export default Dashboard;
