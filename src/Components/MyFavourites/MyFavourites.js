import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from '../Context/LoginState';
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";
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

function MyFavourites() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { deleteExercise, email, isLoggedIn } = useContext(LoginContext);
  const getFavourites = async () => {
    try {
      const res = await axios.post("/api/getUserFavourites", {userEmail: email});
      const userExercises = res.data;
      const res2 = await axios.get("/api/getAllExercises");
      const totalExercises = res2.data;
    //   let j = 0;
    //   for (let i = 1; i < userExercises.length; i++) {
    //     let info = totalExercises[j]
    //     j++
    //     userExercises[i] = info
    //   }
      const data = userExercises.map((exerciseId) => totalExercises[exerciseId - 1])
        console.log('data: ' + data)
      setFavourites(data)
      setLoading(true);
    } catch (err) {
      setLoading(true);
      return;
    }
  };

  const [favourites, setFavourites] = useState(() => getFavourites());
  
  const deleteButtonClicked = (exerciseId) => {
      console.log('exerciseId in myfav file: ' + exerciseId)
    deleteExercise(exerciseId).then(() => 
        getFavourites()
    )
    console.log('after deleteExercise call in myfav file')
    
  }
  

  const CustomCard = () => {
    return favourites.map((exercise) => {
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
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Box>
              <Box>
                <Button onClick={() => deleteButtonClicked(exercise.exerciseId)}>
                  <BookmarkBorderIcon className={classes.button}/>
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" align="left" className={classes.blogTitle}>
          My Favourites
        </Typography>
        <Grid container spacing={3}>
        {loading === true ? favourites.length !== undefined && isLoggedIn ? <CustomCard /> : <div>Login and save some exercises to see them here!</div> : null}        
      </Grid>
      </Container>

    </>
  );
}

export default MyFavourites;
