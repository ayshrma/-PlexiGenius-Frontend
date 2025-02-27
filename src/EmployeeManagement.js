// import React, { useState, useEffect } from "react";

// const API_URL = "http://localhost:8000/employees"; // Backend API URL

// const EmployeeManagement = () => {
//   const [employees, setEmployees] = useState([]);
//   const [search, setSearch] = useState("");
//   const [form, setForm] = useState({ name: "", email: "", phone: "", department: "", status: "Active" });
//   const [editingId, setEditingId] = useState(null);

//   // Fetch employees from backend
//   const fetchEmployees = async () => {
//     try {
//       const response = await fetch(API_URL);
//       if (!response.ok) throw new Error("Failed to fetch employees");
//       const data = await response.json();
//       setEmployees(data);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Handle form submission (Add or Update Employee)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email) {
//       alert("Name and Email are required!");
//       return;
//     }

//     try {
//       let response;
//       if (editingId) {
//         response = await fetch(`${API_URL}/${editingId}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(form),
//         });
//       } else {
//         response = await fetch(API_URL, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(form),
//         });
//       }

//       if (!response.ok) throw new Error("Failed to save employee");

//       await fetchEmployees(); 
//       setForm({ name: "", email: "", phone: "", department: "", status: "Active" }); // Reset form
//       setEditingId(null);
//     } catch (error) {
//       console.error("Error saving employee:", error);
//     }
//   };

//   // Handle edit action
//   const handleEdit = (employee) => {
//     setForm({ ...employee });
//     setEditingId(employee._id);
//   };

//   // Handle delete action
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this employee?")) return;

//     try {
//       const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//       if (!response.ok) throw new Error("Failed to delete employee");

//       await fetchEmployees(); // Refresh employee list
//     } catch (error) {
//       console.error("Error deleting employee:", error);
//     }
//   };

//   // Filter employees based on search input
//   const filteredEmployees = employees.filter(emp =>
//     emp.name.toLowerCase().includes(search.toLowerCase()) ||
//     emp.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
//       <h2 style={{ textAlign: "center", color: "#333", marginBottom: "6px" }}>Employee Management</h2>

//       {/* Employee Form */}
//       <form onSubmit={handleSubmit} style={{
//         display: "grid", gap: "10px", maxWidth: "400px", margin: "auto",
//         background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
//       }}>
//         <input placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
//         <input placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
//         <input placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} />
//         <input placeholder="Department" name="department" value={form.department} onChange={handleChange} />
//         <select name="status" value={form.status} onChange={handleChange}>
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//         </select>
//         <button type="submit" style={{
//           background: editingId ? "#ffc107" : "#28a745",
//           color: "#fff", padding: "10px", border: "none",
//           borderRadius: "4px", cursor: "pointer"
//         }}>
//           {editingId ? "Update Employee" : "Add Employee"}
//         </button>
//       </form>

//       {/* Search Bar */}
//       <div style={{ marginTop: "20px", maxWidth: "800px", margin: "auto" }}>
//         <input
//           placeholder="Search by name or email..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {/* Employee Table */}
//       {filteredEmployees.length > 0 ? (
//         <div style={{ overflowX: "auto", marginTop: "20px", maxWidth: "800px", margin: "auto" }}>
//           <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: "8px", overflow: "hidden" }}>
//             <thead>
//               <tr style={{ background: "#007bff", color: "#fff" }}>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Department</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredEmployees.map(emp => (
//                 <tr key={emp._id}>
//                   <td>{emp.name}</td>
//                   <td>{emp.email}</td>
//                   <td>{emp.phone}</td>
//                   <td>{emp.department}</td>
//                   <td>{emp.status}</td>
//                   <td>
//                     <button
//                       onClick={() => handleEdit(emp)}
//                       style={{ background: "#ffc107", color: "#fff", padding: "5px 10px", marginRight: "5px", border: "none", borderRadius: "4px", cursor: "pointer" }}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(emp._id)}
//                       style={{ background: "#dc3545", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "4px", cursor: "pointer" }}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p style={{ textAlign: "center", marginTop: "20px", color: "#888" }}>No employees found.</p>
//       )}
//     </div>
//   );
// };

// export default EmployeeManagement;







// ------------------------------------


import { useState, useEffect } from "react";
import "./EmployeeManagement.css"; // Import external CSS

const API_URL = "http://localhost:8000/employees"; // Backend API URL

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", department: "", status: "Active" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Name and Email are required!");
      return;
    }
    try {
      let response;
      if (editingId) {
        response = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      if (!response.ok) throw new Error("Failed to save employee");
      await fetchEmployees();
      setForm({ name: "", email: "", phone: "", department: "", status: "Active" });
      setEditingId(null);
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  const handleEdit = (employee) => {
    setForm({ ...employee });
    setEditingId(employee._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete employee");
      await fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Employee Management</h2>

      <form className="employee-form" onSubmit={handleSubmit}>
        <input className="small-input" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
        <input className="small-input" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
        <input className="small-input" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} />
        <input className="small-input" placeholder="Department" name="department" value={form.department} onChange={handleChange} />
        <select className="small-input" name="status" value={form.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit" className={editingId ? "update-btn" : "add-btn"}>
          {editingId ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <input className="search-bar" placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} />

      {filteredEmployees.length > 0 ? (
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(emp => (
              <tr key={emp._id} className="task-row">
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.department}</td>
                <td>{emp.status}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(emp)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(emp._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-employees">No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeManagement;
