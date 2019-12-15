import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {userLogin} from "../../services/authService"

function Login() {
  // const [isLogin, setisLogin] = useState(false);
  const[newUser, setNewUser] = useState(false);
  const [loginBy, setLoginBy] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  // useEffect(() => {

  // });
  const handleLogin = event => {
    event.preventDefault();
    
  };
  const handleSignup = event => {
    event.preventDefault();
    const loginData = {};
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
   
  };

  return (
    <Container className="mt-3 pb-5" fluid>
      <Form>
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

        <Button onSubmit={handleSignup} variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
