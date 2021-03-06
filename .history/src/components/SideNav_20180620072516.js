import React, { Component } from "react";
import {
  StyledSideNav,
  StyledSideNavTitle,
  StyledSideNavMenu,
  StyledSideNavMenuItem,
  StyledSideNavClose
} from "../styled/StyledSideNav";
import Clear from "@material-ui/icons/Clear";
import { VelocityComponent, VelocityTransitionGroup } from "velocity-react";
import "velocity-animate";
import "velocity-animate/velocity.ui";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <StyledSideNav>
          <StyledSideNavClose>
            <Clear />
          </StyledSideNavClose>
          <StyledSideNavTitle>Mon Menu</StyledSideNavTitle>

          <StyledSideNavMenu>
            <VelocityTransitionGroup
              enter={
                {
                  animation: "transition.slideLeftIn",
                  stagger: "200",
                  duration: "200"
                } // velocity-animate
              }
              leave={{ animation: "transition.slideLeftOut", backwards: "150" }}
            >
            {[1,2,3,4,5,6].map(elt) => ()
                <StyledSideNavMenuItem>One</StyledSideNavMenuItem>
    )}
            </VelocityTransitionGroup>
          </StyledSideNavMenu>
        </StyledSideNav>
      </div>
    );
  }
}

export default SideNav;
