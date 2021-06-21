import useStyles from "./authStyles.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Paper,
  Typography,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { LockOpen } from "@material-ui/icons";
import { Error } from "../../utils/Validation.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { dispatchLogin } from "../../redux/actions/authAction.js";

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({});
  const [signup, setSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signup) {
      if (password !== confirmPassword) {
        return setError("Passwords do not match!");
      }

      const user = {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
      };

      try {
        setLoading(true);
        const response = await axios.post("/api/users/create", user);
        console.log(response.data);
        setLoading(false);
        setSignup(false);
      } catch (error) {
        setLoading(true);
        setError(error.response.data.message);
        setLoading(false);
      }
    } else {
      const user = {
        email,
        password,
      };

      try {
        setLoading(true);
        const response = await axios.post("/api/users/login", user);
        setUser(response.data);
        localStorage.setItem("firstLogin", response.data.accessToken);

        dispatch(dispatchLogin());

        history.push("/dashboard");
        setLoading(false);
      } catch (error) {
        setLoading(true);
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Container maxWidth>
          <div className={classes.container}>
            {/* IconFormTitle */}

            <div className={classes.IconFormTitle}>
              {/* Lock Icon */}
              <div className={classes.IconContainer}>
                <LockOpen className={classes.icon} />
              </div>

              {/* Form Title */}

              {signup ? (
                <Typography className={classes.formTitle} variant="h5">
                  Hey! Create an account with us today!
                </Typography>
              ) : (
                <Typography className={classes.formTitle} variant="h5">
                  Hey there! Welcome back.
                </Typography>
              )}
            </div>

            {/* Error or Success Handling */}
            {error ? Error(error) : null}

            {/* Form Inputs */}

            <form
              onSubmit={handleSubmit}
              className={classes.formClass}
              noValidate
              autoComplete="off"
            >
              {signup ? (
                <>
                  <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    variant="outlined"
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    variant="outlined"
                    onChange={(e) => setLastName(e.target.value)}
                  />

                  <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <TextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <TextField
                    label="Mobile Number"
                    variant="outlined"
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <TextField
                    label="Address"
                    variant="outlined"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* Password */}
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              )}

              {/* Button */}
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="secondary"
                disabled={loading ? true : false}
              >
                {loading ? (
                  <CircularProgress color="secondary" />
                ) : signup ? (
                  "Submit"
                ) : (
                  "Log In"
                )}
              </Button>
            </form>
          </div>
        </Container>
        {signup ? null : (
          <div className={classes.forgotSign}>
            <Link className={classes.link} to="/">
              Forgot Password?
            </Link>
            <Typography variant="p">
              Don't have an account?{" "}
              <span className={classes.link} onClick={() => setSignup(true)}>
                Sign Up
              </span>
            </Typography>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Auth;
