import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from '../Components/Context/LoginState';
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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

  
  const CustomCard = ({ exercise }) => {
    const classes = useStyles();
    const { saveExercise } = useContext(LoginContext);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

  const PopUp = (props) => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="excercise-dialog-title"
          aria-describedby="excercise-dialog-description"
        >
          <DialogTitle id="excercise-dialog-title">{"Details"}</DialogTitle>
          <DialogContent>
          <DialogContentText id="excercise-dialog-description">
              <text style={{fontWeight:"bold"}}>Type of exercise:</text> {props.name}
            </DialogContentText>
            <DialogContentText id="excercise-dialog-description">
              <text style={{fontWeight:"bold"}}>Instructions:</text> {props.instructions}
            </DialogContentText>
            <DialogContentText id="excercise-dialog-description">
            <text style={{fontWeight:"bold"}}>Sets:</text> {props.sets}
            </DialogContentText>
            <DialogContentText id="excercise-dialog-description">
            <text style={{fontWeight:"bold"}}>Repititions:</text> {props.repititions}
            </DialogContentText>
            <DialogContentText id="excercise-dialog-description">
            <text style={{fontWeight:"bold"}}>Rest between sets(seconds):</text> {props.restbetween}s
            </DialogContentText>
            <DialogContentText id="excercise-dialog-description">
            <text style={{fontWeight:"bold"}}>Rest after sets (seconds):</text> {props.restbetween}s
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Understood
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
    
    return (

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={exercise.imgSrc}
                // title={exercise.imgTitle}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {exercise.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {exercise.additionalInfo}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Button size="small" color="primary" onClick={() => handleClickOpen()}>
                  Details
                </Button>
              </Box>
              <Box>
                <Button onClick={() => saveExercise(exercise.exerciseId)}>
                  <BookmarkBorderIcon className={classes.button}/>
                </Button>
              </Box>
            </CardActions>
          </Card>
          {open ? <PopUp 
          instructions={exercise.exerciseInstruction} 
          repititions={exercise.repititions}
          sets={exercise.sets}
          restbetween={exercise.restTimeBetween}
          name={exercise.name}
          timeAfter={exercise.restTimeAfter}
          /> : null}
        </Grid>
      )
  }
  
  export default CustomCard
  