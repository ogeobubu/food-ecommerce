import "./personCounter.css";
import { Remove, Add, ArrowRightAlt } from "@material-ui/icons";
import { useState } from "react";

const PersonCounter = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };

  const handleDecrease = () => {
    setCounter((prevState) => {
      return prevState - 1;
    });
  };

  if (counter < 0) {
    return setCounter(0);
  }

  return (
    <div className="personCounter">
      <div className="counterTitle">Persons</div>
      <div className="counterCheckout">
        <div className="counterContainer">
          <Remove className="removeIcon" onClick={handleDecrease} />
          <span className="counterNumber">{counter}</span>
          <Add className="addCounter" onClick={handleIncrease} />
        </div>
        <button className="checkoutButton">
          Checkout <ArrowRightAlt />
        </button>
      </div>
    </div>
  );
};

export default PersonCounter;
