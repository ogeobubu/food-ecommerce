import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reductions";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
