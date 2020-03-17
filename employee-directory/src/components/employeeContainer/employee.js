// import api from "../../utils/api";
import React, { Component } from "react";
import Header from "../header/header";
import { getEmployees } from "../../employeeData";
import "./employee.css";
import "bootstrap/dist/css/bootstrap.css";

class Employee extends Component {
  state = {
    employees: getEmployees()
    // results: []
  };

  // componentDidMount() {
  //   this.searchEmployee();
  // }

  // searchEmployee = query => {
  //   api
  //     .search(query)
  //     .then(res => this.setState({ results: res.data.results }))
  //     .catch(err => console.log(err));
  // };
  render() {
    const { length: count } = this.state.employees;
    return (
      <React.Fragment>
        <Header />
        <p className="employeeCount">Showing {count} Employees in the DB</p>
        <table className="table table-dark ">
          <thead className="head">
            <tr className="trow">
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => (
              <tr key={employee._id}>
                <td>
                  <img className="avatar" src={employee.picture} alt="avatar" />
                </td>
                <td>
                  {employee.title}
                  {employee.name.first}
                  {employee.name.last}
                </td>
                <td>{employee.email}</td>
                <td>{employee.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Employee;
