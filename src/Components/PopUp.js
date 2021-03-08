import React, { useState, useEffect, useContext } from "react";
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

const PopUp = (props) => {
    const [open, setOpen] = useState();
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
export default PopUp