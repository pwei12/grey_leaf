import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { userLogin } from "../../services/authService";

function Login() {
  // const [isLogin, setisLogin] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [loginBy, setLoginBy] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  // useEffect(() => {

  // });
  const handleOptionChange = event => {
    event.preventDefault();
    console.log(event.target.value);
    if (event.target.value === "newUser") {
      console.log("INSIDE NEWUSER");
      setNewUser(true);
    console.log("VALUE OF NEWUSER AFTER SETSTATE", newUser);
  } else {
      console.log("SHOULD BE FOR EXISTING USER");
      setNewUser(false);
    }
    console.log("VALUE OF NEWUSER STATE", newUser);
  };

  const handleLogin = event => {
    event.preventDefault();
    // const data = {
    //     login:
    // };
    console.log("EAHAHAHHAH");
    //     userLogin(data)
    //     .then(res => {
    // console.log(res)
    //     })
  };
  const handleSignup = event => {
    event.preventDefault();
    const loginData = {};
    console.log("EAHAHAHHAH");
  };

  const handleChange = event => {
    const value = event.target.value;
    switch (event.target.name) {
      case "loginBy":
        setLoginBy(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmedPassword":
        setConfirmedPassword(value);
        break;
      default:
        break;
    }
    //   setPassword(event.target.value)
    console.log(
      "currentTarget input changing",
      event.currentTarget.value,
      "target input changing",
      event.target.value,
      "event",
      event,
      "field name",
      event.target.name
    );
  };

  return (
    <Container className="mt-3 pb-5" fluid>
      <Form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="newUser"
              checked={newUser}
              onChange={handleOptionChange}
            />
            New User
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="existingUser"
              checked={!newUser}
              onChange={handleOptionChange}
            />
            Existing User
          </label>
        </div>
        {{newUser}?
        <div>
          <Form.Group controlId="formBasicLoginBy">
            <Form.Label>Username or Email</Form.Label>
            <Form.Control
              name="loginBy"
              value={loginBy}
              onChange={handleChange}
              type="text"
              placeholder="Enter Username"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </div>
        :
        <div>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={username}
              onChange={handleChange}
              type="text"
              placeholder="Enter Username"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={handleChange}
              type="text"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </div>}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmedPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Button onSubmit={handleLogin} variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="mt-3 mb-3">
          Sign up if you are don't have an account yet.
        </Form.Text>
        <Button onSubmit={handleSignup} variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
