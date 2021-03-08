import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from '../Context/LoginState';
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PopUp from '../PopUp';
import CustomCard from '../CustomCard';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
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
    "& button:focus": {
      outline: "none",
    },
  },
  author: {
    display: "flex",
  },
}));

function Exercises() {
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

  
  const PopUp = (props) => {

    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="excercise-dialog-title"
          aria-describedby="excercise-dialog-description"
        >
          <DialogTitle id="excercise-dialog-title">{"Instructions"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="excercise-dialog-description">
              {props.instructions}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
  const CustomCardCaller = () => {
    return exercises.map((exercise) => {
      return (
          <CustomCard exercise={exercise} />
      );
    });
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" align="left" className={classes.blogTitle}>
          Day 1
        </Typography>
        <Grid container spacing={3}>
        {loading === true ? exercises.length !== undefined ? <CustomCardCaller /> : <div>nothing</div> : null}        
      </Grid>
      </Container>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" align="left" className={classes.blogTitle}>
          Day 2
        </Typography>
        <Grid container spacing={3}>
          {/* {exercises !== undefined && <CustomCard />} */}
        </Grid>
      </Container>
    </>
  );
}

export default Exercises;

  // const list = [
  //   {
  //     name: "Sit Ups",
  //     imgSrc:
  //       "https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?cs=srgb&dl=pexels-jonathan-borba-3076516.jpg&fm=jpg",
  //     imgTitle: "Sit Ups",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Veritatis alias culpa voluptas hic temporibus inventore maxime illum fuga quos beatae. Consequatur iste porro sequi, similique quaerat numquam nesciunt deserunt neque.",
  //   },
  //   {
  //     name: "Lifting",
  //     imgSrc:
  //       "https://images.pexels.com/photos/841135/pexels-photo-841135.jpeg?cs=srgb&dl=pexels-victor-freitas-841135.jpg&fm=jpg",
  //     imgTitle: "Lifting",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Veritatis alias culpa voluptas hic temporibus inventore maxime illum fuga quos beatae. Consequatur iste porro sequi, similique quaerat numquam nesciunt deserunt neque.",
  //   },
  // ];