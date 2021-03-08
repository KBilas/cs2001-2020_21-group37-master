import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoginContext } from '../Context/LoginState';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography, Paper } from "@material-ui/core";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import heroImage from "./heroBackground.jpg";
import CustomCard from '../CustomCard';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `url(${heroImage})`,
    height: "500px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    backgroundPosition: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      // Changes height of hero for smaller devices
      height: 300,
      fontSize: "3em",
    },
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  heroContent: {
    backgroundColor: "#222",
    color: "#fff",
    marginLeft: theme.spacing(3),
    padding: theme.spacing(3),
    width: "25%",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    color: "primary",
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
}));

function Home({ setSelectedTab, callDashboard }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { saveExercise } = useContext(LoginContext);

  const getExercises = async () => {
    try {
      const res = await axios.get("/api/getAllExercises");
      const data = res.data;
      
      setExercises(data);
      setLoading(true);
    } catch (err) {
      setLoading(true);
      return;
    }
  };

  const [exercises, setExercises] = useState(() => getExercises());
  const CustomCardCaller = () => {
    var newEx = []
    var count = 0
    while (count < 3){
      const i = Math.floor(Math.random() * (exercises.length-0) + 0)
      console.log('random: ' + 1)
      newEx[count] = exercises[i]
      count++
    }
    console.log("newEx:" + newEx)
    return newEx.map((exercise) => {
      return(
      <CustomCard exercise={exercise} />
      )
    });
  };



  return (
    <>
      <Box className={classes.hero}>
        <Paper className={classes.heroContent} elevation={3} width="25%">
          <Typography variant="h4">Welcome</Typography>
          <Typography variant="body1">
          We believe fitness should be accessible to everyone, everywhere
          regardless of income or access to a gym. On this website, you'll find 
          routines, rep counter and a dashboard to track your progress. Everything
          you need to reach your fitness goals. However, if you're returning find the
          shortcut to your dashboard below!
          </Typography>
          <Button variant="outlined" color="secondary" onClick={() => callDashboard()}>My Dashboard</Button>
        </Paper>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" align="left" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {loading === true ? exercises.length !== undefined ? <CustomCardCaller /> : <div>nothing</div> : null}        

        </Grid>
      </Container>
    </>
  );
}

export default Home;
