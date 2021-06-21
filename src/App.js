import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Auth from "./pages/Auth/Auth";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchGetUser } from "./redux/actions/authAction";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("firstLogin");

    if (token) {
      const getUser = async () => {
        const response = await axios.get("/api/users", {
          headers: {
            Authorization: token,
          },
        });
        dispatch(dispatchGetUser(response.data));
      };
      getUser();
    } else {
      localStorage.removeItem("firstLogin");
      window.location("/");
    }
  }, [auth.isLogged, dispatch, history]);

  const [open, setOpen] = useState(true);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
        <div className="main-container">
          <Route path="/dashboard">
            <Dashboard open={open} setOpen={setOpen} />
            <Sidebar open={open} />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
