import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 800,
    height: 650,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
});

const tileData = [
  {
    img:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss",
    title: "Image One",
    author: "Julien Boyer",
    featured: true
  },

  {
    img:
      "http://homecookingadventure.com/images/recipes/caramel_mirror_cake_main.jpg",
    title: "Image Two",
    author: "Julien Boyer",
    featured: true
  },

  {
    img:
      "http://homecookingadventure.com/images/recipes/caramel_mirror_cake_main.jpg",
    title: "Image Two",
    author: "Julien Boyer",
    featured: true
  },

  {
    img:
      "http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg",
    title: "Image Three",
    author: "Julien Boyer",
    featured: true
  },

  {
    img:
      "data:image/jpeg;base64,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g",
    title: "Image Four",
    author: "Julien Boyer",
    featured: true
  }
];

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Liste);
