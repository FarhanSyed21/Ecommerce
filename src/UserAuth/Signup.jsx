import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../UserAuthContext";
import { Alert } from "react-bootstrap";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    navigate("/");
    try {
      await signUp(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="form-container">
        {error && (
          <div className="error-box">
            <Alert variant="danger">{error}</Alert>
          </div>
        )}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign up</button>
        <br />
        <br />
        Already have an account? <Link to="/">Log In</Link>
      </form>
    </div>
  );
};

export default Signup;
