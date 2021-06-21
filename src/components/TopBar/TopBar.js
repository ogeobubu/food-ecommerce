import "./topbar.css";
import { Menu, Close, Search } from "@material-ui/icons";
import { useSelector } from "react-redux";

const TopBar = ({ open, setOpen }) => {
  const auth = useSelector((state) => state.auth);

  const { isAdmin, user } = auth;

  const handleClick = () => {
    setOpen(!open);
  };

  let today = new Date();
  let hour = today.getHours();

  return (
    <>
      <div className="topBar">
        <div onClick={handleClick} className="topBarLeft">
          {open ? <Close className="menuBar" /> : <Menu className="menuBar" />}
          <span className="topBarUsername">
            {isAdmin ? "Admin" : null} {""}
            {user.user.firstName}
          </span>
        </div>
        <div className="topBarRight">
          <div className="searchInputContainer">
            <Search className="searchIcon" />
            <input type="text" placeholder="Search" className="searchInput" />
          </div>
        </div>
      </div>
      <p className="greeting">
        {hour < 12
          ? `Good Morning ${user.user.firstName}. Have a great day ahead!`
          : hour < 18
          ? `Good Afternoon ${user.user.firstName}. I hope you are enjoying the noon.`
          : `Good Evening ${user.user.firstName}. Ensure you go to bed early today!`}
      </p>
    </>
  );
};

export default TopBar;
