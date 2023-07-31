import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form className="form-container">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <div className="buttons-container">
          <button type="submit">Log In</button>
          <hr />
          <GoogleButton className="g-btn" type="dark" />
        </div>
        <br />
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
