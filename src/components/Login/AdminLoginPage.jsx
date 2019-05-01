import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { adminLoginStyles } from "../../styles/styles";
import { adminLogin } from "../../services/authService";

function AdminLoginPage({ classes, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = event => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };
  const handleSubmit = async event => {
    try {
      const res = await adminLogin({ email, password });
      if (res.status === 200) {
        history.replace("/admin/products/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Email Address</InputLabel>
              <Input
                id="email"
                value={email}
                autoComplete="email"
                autoFocus
                onChange={handleEmailInput}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Password</InputLabel>
              <Input
                value={password}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordInput}
              />
            </FormControl>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log in
            </Button>
          </form>
        </Paper>
      </main>
    </Fragment>
  );
}
AdminLoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(adminLoginStyles)(AdminLoginPage);
