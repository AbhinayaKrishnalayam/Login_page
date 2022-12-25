import React from "react";
import TaskManager from "./Components/TaskManager";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/task" element={<TaskManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
