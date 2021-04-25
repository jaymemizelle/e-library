import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./BookCard.css";
import { useLocation } from "react-router-dom";
import AlertBar from "../../components/AlertBar";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function BookCard({
  amazonUrl,
  title,
  description,
  imageUrl,
  imgTitle,
  preview,
  onClick,
  author,
}) {
  const classes = useStyles();

  const location = useLocation();

  const buyLink = `https://www.amazon.com/s?k=${title}&ref=nb_sb_noss_2`;

  return (
    <Card className={classes.root}>
     <a target="_blank" href={preview}><CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={imgTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <p>{author}</p>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea></a>
      <CardActions>
        <a rel="noopener noreferrer" target="_blank" href={buyLink}>
          <Button size="small" color="primary">
            Buy
          </Button>
        </a>
        {location.pathname === "/" ? (
          <Button onClick={onClick} size="small" color="primary">
           <AlertBar label="Save Book" popupMessage="Book Saved!"/>
          </Button>
        ) : (
          <Button onClick={onClick}>Search</Button>
        )}
      </CardActions>
    </Card>
  );
}

export default BookCard;
