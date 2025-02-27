// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./CreateTaskForm";
// const API_URL = "http://localhost:8000/tasks"; // Backend URL

// const CreateTaskForm = () => {
//   const [taskData, setTaskData] = useState({
//     title: '',
//     description: '',
//     deadline: '',
//     priority: 'Medium',
//     status: 'Pending',
//     assignedEmployee: ''
//   });

//   const [tasks, setTasks] = useState([]); // Store tasks
//   const [editingTaskId, setEditingTaskId] = useState(null); // Track the task being edited

//   // Fetch tasks when component loads
//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setTasks(response.data);
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setTaskData({ ...taskData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingTaskId) {
//         const response = await axios.put(`${API_URL}/${editingTaskId}`, taskData);
//         setTasks(tasks.map(task => (task._id === editingTaskId ? response.data : task)));
//         setEditingTaskId(null);
//       } else {
//         const response = await axios.post(API_URL, taskData);
//         setTasks([...tasks, response.data]);
//       }
//       setTaskData({ title: '', description: '', deadline: '', priority: 'Medium', status: 'Pending', assignedEmployee: '' });
//     } catch (error) {
//       console.error("Error saving task:", error);
//     }
//   };

//   const handleEdit = (task) => {
//     setTaskData(task);
//     setEditingTaskId(task._id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       setTasks(tasks.filter(task => task._id !== id));
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>{editingTaskId ? "Edit Task" : "Create a Task"}</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="title" placeholder="Title" value={taskData.title} onChange={handleChange} required />
//         <textarea name="description" placeholder="Description" value={taskData.description} onChange={handleChange}></textarea>
//         <input type="date" name="deadline" value={taskData.deadline} onChange={handleChange} required />
//         <select name="priority" value={taskData.priority} onChange={handleChange}>
//           <option value="Low">Low</option>
//           <option value="Medium">Medium</option>
//           <option value="High">High</option>
//         </select>
//         <select name="status" value={taskData.status} onChange={handleChange}>
//           <option value="Pending">Pending</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Completed">Completed</option>
//         </select>
//         <input type="text" name="assignedEmployee" placeholder="Assigned Employee" value={taskData.assignedEmployee} onChange={handleChange} required />
//         <button type="submit">{editingTaskId ? "Update Task" : "Add Task"}</button>
//       </form>

    
//       {tasks.length > 0 && (
//         <div>
//           <h2>Task List</h2>
//           <table border="1">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Deadline</th>
//                 <th>Priority</th>
//                 <th>Status</th>
//                 <th>Assigned Employee</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasks.map(task => (
//                 <tr key={task._id}>
//                   <td>{task.title}</td>
//                   <td>{task.description}</td>
//                   <td>{task.deadline}</td>
//                   <td>{task.priority}</td>
//                   <td>{task.status}</td>
//                   <td>{task.assignedEmployee}</td>
//                   <td>
//                     <button onClick={() => handleEdit(task)}>Edit</button>
//                     <button onClick={() => handleDelete(task._id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateTaskForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateTaskForm.css"; 

const API_URL = "http://localhost:8000/tasks"; 

const CreateTaskForm = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Medium",
    status: "Pending",
    assignedEmployee: "",
  });

  const [tasks, setTasks] = useState([]); 
  const [editingTaskId, setEditingTaskId] = useState(null); 

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTaskId) {
        const response = await axios.put(`${API_URL}/${editingTaskId}`, taskData);
        setTasks(tasks.map((task) => (task._id === editingTaskId ? response.data : task)));
        setEditingTaskId(null);
      } else {
        const response = await axios.post(API_URL, taskData);
        setTasks([...tasks, response.data]);
      }
      setTaskData({
        title: "",
        description: "",
        deadline: "",
        priority: "Medium",
        status: "Pending",
        assignedEmployee: "",
      });
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleEdit = (task) => {
    setTaskData(task);
    setEditingTaskId(task._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="task-container">
      <h2 className="task-heading">{editingTaskId ? "Edit Task" : "Create a New Task"}</h2>
      
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={taskData.title} onChange={handleChange} required className="task-input small-input" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={taskData.description} onChange={handleChange} className="task-input small-input"></textarea>
        </div>

        <div className="form-group">
          <label>Deadline</label>
          <input type="date" name="deadline" value={taskData.deadline} onChange={handleChange} required className="task-input small-input" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Priority</label>
            <select name="priority" value={taskData.priority} onChange={handleChange} className="task-input small-input">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select name="status" value={taskData.status} onChange={handleChange} className="task-input small-input">
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Assigned Employee</label>
          <input type="text" name="assignedEmployee" value={taskData.assignedEmployee} onChange={handleChange} required className="task-input small-input" />
        </div>

        <button type="submit" className="task-button">{editingTaskId ? "Update Task" : "Add Task"}</button>
      </form>

      {tasks.length > 0 && (
        <div className="task-list">
          <h2 className="task-heading">Task List</h2>
          <table className="task-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assigned Employee</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id} className="task-row">
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.deadline}</td>
                  <td>{task.priority}</td>
                  <td>{task.status}</td>
                  <td>{task.assignedEmployee}</td>
                  <td>
                    <button onClick={() => handleEdit(task)} className="edit-button">Edit</button>
                    <button onClick={() => handleDelete(task._id)} className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CreateTaskForm;

