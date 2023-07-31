import React, { useEffect, useState } from "react";
import "./Login.css";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../UserAuthContext";
import { Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logOut, logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);

  const checkForInactivity = () => {
    const expireTime = localStorage.getItem("expireTime");
    if (expireTime && expireTime < Date.now()) {
      logOut();
      navigate("/");
      console.log("Log Out");
      setLoggedIn(false);
    }
  };

  const updateExpireTime = () => {
    const expireTime = Date.now() + 60000; // 60000 milliseconds = 1 minute
    localStorage.setItem("expireTime", expireTime);
  };

  useEffect(() => {
    updateExpireTime();
    const interval = setInterval(() => {
      checkForInactivity();
    }, 5000); // Check for inactivity every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener("click", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    window.addEventListener("mousemove", updateExpireTime);

    return () => {
      window.removeEventListener("click", updateExpireTime);
      window.removeEventListener("keypress", updateExpireTime);
      window.removeEventListener("scroll", updateExpireTime);
      window.removeEventListener("mousemove", updateExpireTime);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="form-container">
        {error && (
          <div className="error-box">
            <Alert variant="danger">{error}</Alert>
          </div>
        )}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttons-container">
          <button type="submit">Log In</button>
          <hr />
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
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
