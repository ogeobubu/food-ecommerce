import "./card.css";
import { Schedule } from "@material-ui/icons";
import { useSelector } from "react-redux";

const Card = () => {
  const auth = useSelector((state) => state.auth);
  const { isAdmin, user } = auth;

  return (
    <div className="card">
      <div className="address">
        <span className="addressName">{user.user.address}</span>
        <span className="editAddress">Edit</span>
      </div>
      <div className="time">
        <div className="timing">
          <span className="schedule">
            <Schedule className="scheduleIcon" />
          </span>
          <span className="momentTime">35 mins</span>
        </div>
        <span className="chooseTime">Choose Time</span>
      </div>
    </div>
  );
};

export default Card;
