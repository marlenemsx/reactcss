import React, { Component } from "react";
import { StyledSideNav } from "../styled/StyledSideNav";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <StyledSideNav />
      </div>
    );
  }
}

export default SideNav;
