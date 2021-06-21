import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(72),
    },
  },
  container: {
    marginTop: "2rem",
  },

  //   ICON FORM TITLE
  IconFormTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  //   LOCK ICON
  IconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "red",
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    textAlign: "center",
  },
  icon: {
    fontSize: "40px !important",
    color: "white !important",
  },

  //   FORM TITLE
  formTitle: {
    marginTop: "1rem",
    textAlign: "center",
    fontWeight: "600",
  },

  //   FORM INPUTS
  formClass: {
    "& .MuiTextField-root": {
      marginTop: "1rem",
      width: "100%",
    },
    margin: "2rem 0",
  },

  //   Button
  button: {
    marginTop: "1rem",
    width: "100%",
    padding: ".7rem 0",
  },

  //   Forgot Login
  forgotSign: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: ".3rem 1rem",
  },

  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default useStyles;
