const initialState = {
  isLogged: false,
  isAdmin: false,
  user: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogged: true,
      };
    case "GET_USER":
      return {
        ...state,
        isAdmin: action.payload.isAdmin,
        user: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default authReducer;
