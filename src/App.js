import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import TimeTable from "./TimeTable";
import Notice from "./Notice";
import TimeChart from "./TimeChart";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#2e1534",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: "10vh",
  },
  bottomDiv: {
    backgroundColor: "white",
    width: "90%",
    display: "table",
    marginLeft: "5%",
    marginTop:'25vh'
  },
  paper: {
    height: 240,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.demo2}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="시간표" />
            <StyledTab label="공지" />
            <StyledTab label="시정표" />
          </StyledTabs>
          <Typography className={classes.padding} />
        </div>
      <div className={classes.bottomDiv}>
          {value === 0 ? TimeTable() : value === 1 ? Notice() : value === 2 ? TimeChart() : <h1>404 error</h1>}
      </div>
      </div>
    </>
  );
}
