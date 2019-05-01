import React from "react";
import { NavLink, Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { navBarStyles } from "../../styles/styles"

function NavBar(props) {
  const { classes } = props;
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.typography}>
          <NavLink to="/" className={classes.link}>
            Home
          </NavLink>
          <NavLink to="/products" className={classes.link}>
            Products
          </NavLink>
          <NavLink to="/contact" className={classes.link}>
            Contact
          </NavLink>
          <NavLink to="/cart" className={classes.link}>
            Shopping Cart
          </NavLink>
        </Typography>
        <Button color="inherit">
          <Link to="/login/admin" className={classes.link}>
            Admin Login
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(navBarStyles)(NavBar);