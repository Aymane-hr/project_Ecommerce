import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault();

    try {
      await login(username, password); 
      navigate("/admin"); 
    } catch (error) {
      console.error("Login failed:", error); 
      // Handle login errors (e.g., display an error message)
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        {/* Left Image Column */}
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone illustration"
          />
        </MDBCol>

        {/* Right Form Column */}
        <MDBCol col="4" md="6">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4">Admin Login</h1>

            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              size="lg"
            />

            <MDBBtn type="submit" className="mb-4 w-100" size="lg">
              Sign in
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;