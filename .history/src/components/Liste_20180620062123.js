import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
});

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return <div className={classes.root} />;
  }
}

export default withStyles(styles)(Liste);
