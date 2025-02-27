// import React, { useState } from "react";
// import axios from "axios";

// export default function LoginForm() {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:8000/auth/login", data);
//       alert("Login Successful!");
//     } catch (err) {
//       setError("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit} className="login-form">
//         <label>Email:</label>
//         <input type="email" name="email" value={data.email} onChange={handleChange} required />
        
//         <label>Password:</label>
//         <input type="password" name="password" value={data.password} onChange={handleChange} required />
        
//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

export default function LoginForm() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/auth/login", data);
      alert("Login Successful!");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Admin Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input 
            type="email" 
            name="email" 
            value={data.email} 
            onChange={handleChange} 
            placeholder="Email"
            required 
            className="form-input"
          />
          
          <input 
            type="password" 
            name="password" 
            value={data.password} 
            onChange={handleChange} 
            placeholder="Password"
            required 
            className="form-input"
          />
          
          {error && <p className="error-text">{error}</p>}
          
          <button type="submit" disabled={loading} className="form-button">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
