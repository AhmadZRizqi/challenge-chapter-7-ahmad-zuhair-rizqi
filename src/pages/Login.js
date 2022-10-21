import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Register.css";
import axios from "axios";
import GoogleLogin from "../components/GoogleLogin";
import Home from "./Home";
import Card from "react-bootstrap/Card";
import NavRegisLogin from "../components/NavRegisLogin";

const Login = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/login`,
          data
        );
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <>
      <NavRegisLogin />
      <h2 style={{ marginTop: 15 }}>Login</h2>
      <Col className="register-form">
        {!token ? (
          <>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  disabled={!email || !password}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>

              <Form.Text className="text-muted">OR</Form.Text>

              <GoogleLogin setToken={setToken} label="Login with Google" />
              <Form.Text className="text-muted">
                Belum punya akun?
                <a href="/register">Register</a>
              </Form.Text>
            </Form>
          </>
        ) : (
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Berhasil Login</Card.Title>
              <Button variant="primary" onClick={() => navigate(`/`)}>
                Go Home
              </Button>
            </Card.Body>
          </Card>
        )}
      </Col>
    </>
  );
};

export default Login;
