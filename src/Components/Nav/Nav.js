import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login.js";
import Logout from "./Logout.js";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";
import Home from "../Home/Home.js";
import Dashboard from "../Dashboard/Dashboard.js";
import Exercises from "../Exercises/Exercises.js";
import RepCounter from "../RepCounter/RepCounter.js";
import MyFavourites from "../MyFavourites/MyFavourites.js";
import { LoginContext } from '../Context/LoginState';

const useStyles = makeStyles((theme) => ({
  appBar: {},
  tabs: {
    "& button:focus": {
      outline: "none",
    },
    // MuiTabTextColorSecondaryMuiSelected: "black"
  },
}));

function Nav(props) {
  const { isLoggedIn, setLogin } = useContext(LoginContext);
  const { match } = props;
  const { params } = match;
  const { page } = params;
  const indexToTabName = {
    0: "",
    1: "Exercises",
    2: "RepCounter",
    3: "Dashboard",
    4: "MyFavourites",
  };
  const tabNameToIndex = {
    null: 0,
    Exercises: 1,
    RepCounter: 2,
    Dashboard: 3,
    MyFavourites: 4,
  };
  const [selectedTab, setSelectedTab] = React.useState(tabNameToIndex[page] === undefined ? 0 : tabNameToIndex[page]);

  const handleChange = (event, newValue) => {
    history.push(indexToTabName[newValue]);
    setSelectedTab(newValue);
  };

  const classes = useStyles();
  let history = useHistory();

  const callDashboard = () => {
    if (isLoggedIn) {
      history.push("/Dashboard");
      setSelectedTab(3);
    } 
  }

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/Dashboard");
      setSelectedTab(3);
    } 
  }, [isLoggedIn]);

  return (
    <>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar color="inherit">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs sm md>
              <Typography type="title" align="left" variant="h4" fontWeightBold>
                Home Fitness
              </Typography>
            </Grid>
            <Grid item xs sm md>
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                centered
                className={classes.tabs}
              >
                <Tab label="Home" />
                <Tab label="Exercises" />
                <Tab label="Rep Counter" />
                <Tab label="Dashboard" />
                <Tab label="My Favourites" />
                <Tab
                  icon={
                    isLoggedIn ? (
                      <Logout />
                    ) : (
                      <Login />
                    )
                  }
                />
              </Tabs>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className="Container">
        {selectedTab === 0 && <Home callDashboard={callDashboard}/>}
        {selectedTab === 1 && <Exercises />}
        {selectedTab === 2 && <RepCounter />}
        {selectedTab === 3 && <Dashboard />}
        {selectedTab === 4 && <MyFavourites />}
      </div>
      
    </>
  );
}

export default Nav;
