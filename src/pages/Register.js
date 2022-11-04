import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css";
import axios from "axios";
import GoogleLogin from "../components/GoogleLogin";
import Card from "react-bootstrap/Card";
import NavRegisLogin from "../components/NavRegisLogin";

const Register = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Name is required");
      return;
    }
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (email !== "" && password !== "" && name !== "") {
      const data = {
        name,
        email,
        password,
      };
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/register`,
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
      <h2 style={{ marginTop: 15 }}>Register</h2>
      <Col className="register-form">
        {!token ? (
          <>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

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
                  disabled={!name || !email || !password}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>

              <Form.Text className="text-muted">OR</Form.Text>

              <GoogleLogin setToken={setToken} label="Register with Google" />
              <Form.Text className="text-muted">
                Sudah punya akun?
                <a href="/login">Login</a>
              </Form.Text>
            </Form>
          </>
        ) : (
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Berhasil Register</Card.Title>
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

export default Register;
