// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Form() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:8000/login", {
//         email,
//         password,
//       });

//       navigate("/employeemanagement")
//     } catch (err) {
//       setError("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// }

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css"; // Import the CSS file

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      navigate("/employeemanagement");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* <h1>Login</h1> */}
      <form onSubmit={handleLogin} className="login-form">
      <h1>Log In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-field"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={loading} className="login-button">
          {loading ? "Logging in..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
