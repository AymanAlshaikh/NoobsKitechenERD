import { useSelector } from "react-redux";
import ChefItem from "./ChefItem";

import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import { useStyles } from "./Styles";
import Search from "../Search";
import { CircularProgress, Icon } from "@material-ui/core";

const ChefList = () => {
  const classes = useStyles();
  const chefs = useSelector((state) => state.chefReducer.chef);
  const loading = useSelector((state) => state.chefReducer.loading);
  const chefList = chefs.map((chef) => <ChefItem key={chef.id} chef={chef} />);

  if (loading) return <CircularProgress />;
  return (
    <div>
      <Search />
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Chefs</ListSubheader>
          </GridListTile>
          {chefList}
        </GridList>
      </div>
    </div>
  );
};
export default ChefList;
