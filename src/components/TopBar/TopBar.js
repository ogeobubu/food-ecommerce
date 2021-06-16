import "./topbar.css";
import { Menu, Close, Search } from "@material-ui/icons";

const TopBar = ({ open, setOpen }) => {
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
          <span className="topBarUsername">Dashboard</span>
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
          ? "Good morning User. Have a lovely day ahead!"
          : hour < 18
          ? "Good Afternoon User"
          : "Good Evening Oge. It is getting late ensure you sleep early."}
      </p>
    </>
  );
};

export default TopBar;
