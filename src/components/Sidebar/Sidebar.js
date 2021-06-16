import "./sidebar.css";
import { PermIdentity } from "@material-ui/icons";
import Card from "./Card/Card";
import FoodPurchase from "./FoodPurchase/FoodPurchase";
import PersonCounter from "./PersonCounter/PersonCounter";

const Sidebar = ({ open }) => {
  return (
    <div className={open ? "sidebar" : "close"}>
      <div className="topSideBar">
        <PermIdentity className="sidebarIcon" />
        <span className="rating">3</span>
      </div>
      <h1 className="sideBarTitle">
        My 😎 <br /> Order
      </h1>
      <Card />
      <FoodPurchase />
      <PersonCounter />
    </div>
  );
};

export default Sidebar;
