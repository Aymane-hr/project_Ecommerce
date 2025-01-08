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
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      await login(username, password); 
      navigate("/admin"); 
    } catch (error) {
      console.error("Login failed:", error); 
      setError("Login failed. Please check your username and password."); // Set error message
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
            alt="Phone image"
          />
        </MDBCol>

        {/* Right Form Column */}
        <MDBCol col="4" md="6">
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="formControlLg"
              type="text"
              size="lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="error-message">{error}</div>}
            <MDBBtn className="mb-4 w-100" size="lg" type="submit">
              Sign in
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;