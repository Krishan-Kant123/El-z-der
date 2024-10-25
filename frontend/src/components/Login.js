import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import axios from "axios";

function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    role: ""
  });
  const [message, setMessage] = useState("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignup ? "http://localhost:4444/api/user/signup" : "http://localhost:4444/api/user/login";
      const data = isSignup
        ? formData
        : { username: formData.username, password: formData.password };

      const response = await axios.post(url, data);
      setMessage({ type: "success", text: `${isSignup ? "Signup" : "Login"} successful!` });
      if (isSignup) {
        setFormData({ username: "", password: "", email: "", name: "", role: "" });
      }
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : "An unexpected error occurred";
      setMessage({ type: "danger", text: errorMessage });
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>{isSignup ? "Signup" : "Login"}</h2>
          <ToggleButtonGroup type="radio" name="authType" defaultValue={1} className="mb-3">
            <ToggleButton
              id="login"
              type="radio"
              variant="outline-primary"
              checked={!isSignup}
              onClick={() => setIsSignup(false)}
            >
              Login
            </ToggleButton>
            <ToggleButton
              id="signup"
              type="radio"
              variant="outline-primary"
              checked={isSignup}
              onClick={() => setIsSignup(true)}
            >
              Signup
            </ToggleButton>
          </ToggleButtonGroup>

          {message && <Alert variant={message.type}>{message.text}</Alert>}
          <Form onSubmit={handleSubmit}>
            {isSignup && (
              <>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="role">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </>
            )}
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {isSignup ? "Sign Up" : "Log In"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthPage;
