import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";
export default function LoginForm() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:8000/auth/login", data);
      localStorage.setItem("token", response.data.token); // Save token in localStorage
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Admin Login</h1>
      <form onSubmit={handleSubmit} className="form-box">
        <input
          type="email"
          name="email"
          className="form-input large-input"
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <input
          type="password"
          name="password"
          className="form-input large-input"
          onChange={handleChange}
          placeholder="Password"
          required
        />

        {error && <p className="error-text">{error}</p>}

        <button className="form-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
