import { useEffect, useState } from "react";
import "./orderamount.css";

function roundToTwo(x) {
  return +(Math.round(x + "e+2") + "e-2");
}

const OrderAmount = ({ foodList }) => {
  const [totalAmount, setAmount] = useState("");

  useEffect(() => {
    const getSumInArray = foodList.map((item) => {
      return item.price;
    });

    const initialValue = 0;

    const reducer = (accumulator, item) => {
      return accumulator + item;
    };

    const total = getSumInArray.reduce(reducer, initialValue);

    setAmount(roundToTwo(total));
  }, [foodList, totalAmount]);

  return (
    <div className="orderAmount">
      <span className="total">Total:</span>
      <span className="amount">{`$${totalAmount}`}</span>
    </div>
  );
};

export default OrderAmount;
