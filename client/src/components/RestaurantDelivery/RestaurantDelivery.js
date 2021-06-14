import "./restaurantDelivery.css";
import { Schedule } from "@material-ui/icons";
import { TextField, MenuItem } from "@material-ui/core";
import { useState } from "react";

const currencies = [
  {
    value: "Delivery: Now",
    label: "Delivery: Now",
  },
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const RestaurantDelivery = () => {
  const [currency, setCurrency] = useState("Delivery: Now");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="restaurantDelivery">
      <h2 className="restaurantDeliveryTitle">Restaurant 🍔</h2>
      <div className="deliverySelect">
        <Schedule className="scheduleIcon" />

        <form className="form" noValidate autoComplete="off">
          <div>
            <TextField
              className="restaurantForm"
              id="standard-select-currency"
              select
              value={currency}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantDelivery;
