import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";
const axios = require('axios');

export default function Signup() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");

  function validateForm() {
    return Email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const registered = {
    FirstName:FirstName,
    LastName:LastName,
    Email:Email,
    password:password
  }
  axios.post('http://localhost:5000/app/Signup', registered)
  .then(Response => console.log(Response.data))
  window.location = '/Events'
  }

  return (
    <div className="Signup">

<Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="email">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        
      
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign up
        </Button>
      </Form>
    </div>
  );
}