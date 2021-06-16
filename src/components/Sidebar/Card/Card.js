import "./card.css";
import { Schedule } from "@material-ui/icons";

const Card = () => {
  return (
    <div className="card">
      <div className="address">
        <span className="addressName">Lagos, Lagos State, Nigeria</span>
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
