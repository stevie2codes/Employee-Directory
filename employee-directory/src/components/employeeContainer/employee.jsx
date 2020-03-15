import api from "../../utils/api";
import React, { Component } from "react";

class Employee extends Component {
  state = {
    result: {}
  };

  componentDidMount() {
    this.searchEmployee();
  }
  searchEmployee = query => {
    api
      .search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return <h1>employee</h1>;
  }
}

export default Employee;
