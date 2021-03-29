import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { useStyles } from "./Styles";
import { Redirect, useParams } from "react-router";

export default function SessionDetail() {
  const classes = useStyles();
  const { sessionId } = useParams();

  const allSessions = useSelector((state) => state.sessionReducer.session);

  const foundSession = allSessions.find((session) => session.id === +sessionId);

  const allRecipes = useSelector((state) => state.recipeReducer.recipe);

  const foundRecipe = allRecipes.find(
    (recipe) => recipe.id === foundSession.recipeId
  );

  const allChefs = useSelector((state) => state.chefReducer.chef);

  const foundChef = allChefs.find((chef) => chef.id === foundRecipe.chefId);

  if (!foundSession) return <Redirect to="/sessions" />;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={foundRecipe.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${foundRecipe.name} by ${foundChef.name}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {foundSession.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {foundSession.time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
