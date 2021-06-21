import axios from "axios";

export const dispatchLogin = () => {
  return {
    type: "LOGIN",
  };
};

export const dispatchGetUser = (response) => {
  return {
    type: "GET_USER",
    payload: {
      user: response,
      isAdmin: response.subscriber === "admin" ? true : false,
    },
  };
};
