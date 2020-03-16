import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/header";
import Employee from "./components/employeeContainer/employee.js";

function App() {
  return (
    <div className="main">
      <Header />
      <Employee />
    </div>
  );
}

export default App;
