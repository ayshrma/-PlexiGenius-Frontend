
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Dashboard from "./Dashboard"; 
import EmployeeManagement from "./EmployeeManagement";
import CreateTaskForm from "./CreateTaskForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employeemanagement" element={<EmployeeManagement />} />
        <Route path="/createtaskform" element={<CreateTaskForm />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
