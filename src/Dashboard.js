import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Unauthorized. Please login.");
      return;
    }

    const config = { headers: { Authorization: `Bearer ${token}` } };

    axios.get("http://localhost:8000/admin/dashboard", config)
      .then(response => setData(response.data))
      .catch(error => setError(error.response?.data?.message || "Access Denied"));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{data?.message}</p>}
    </div>
  );
}
