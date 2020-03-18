// import api from "../../utils/api";
import React, { Component } from "react";
import Header from "../header/header";
import { getEmployees } from "../../utils/employeeData";
import { getGenders } from "../../utils/genders";
import "./employee.css";
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "../../utils/listGroup";
class Employee extends Component {
  state = {
    employees: [],
    gender: []
  };

  componentDidMount() {
    this.setState({ employees: getEmployees(), gender: getGenders() });
  }

  handleGenderSelect = gender => {
    console.log(gender);
    this.setState({ selectedGender: gender });
  };

  render() {
    const { length: count } = this.state.employees;
    const { selectedGender } = this.state;

    const filtered = selectedGender
      ? this.state.employees.filter(e => e.gender._id === selectedGender._id)
      : this.state.employees;

    return (
      <div className="row">
        <Header />
        <div className="col">
          <ListGroup
            items={this.state.gender}
            selectedItem={this.state.selectedGender}
            onItemSelect={this.handleGenderSelect}
          />

          <p className="employeeCount">
            Showing {filtered.length} Employees in the DB
          </p>
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
                    <img
                      className="avatar"
                      src={employee.picture}
                      alt="avatar"
                    />
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
        </div>
      </div>
    );
  }
}

export default Employee;
