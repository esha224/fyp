import React from "react";
import { Link } from "react-router-dom";
import suzukiImg from "../assets/suzuki.jpg";
import "./LoginForm.css";
function LoginForm() {
  return (
    <div className="login-form-container">
      <div className="login-form-box">
        <div className="login-form-left">
          <img className="steering-wheel-img" src={suzukiImg} alt="Suzuki" />
        </div>
        <div className="login-form-right">
          <h2>Login Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>

            <button type="submit">Login</button>
          </form>

          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
